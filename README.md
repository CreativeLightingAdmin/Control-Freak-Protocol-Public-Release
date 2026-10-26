# Control Freak Protocol (Public Release)

The public release of the Control Freak Protocol Buffer definition and compiled libraries for the **eDIDIO Series 10** lighting controllers (and the ADDICT V3 handheld, which speaks a subset of it).

**API reference: https://creativelightingadmin.github.io/Control-Freak-Protocol-Public-Release/**. Every message, what the device replies, the login role it needs, worked examples and the full field reference. It is also in this repo as `eDIDIOS10_API.html`.

Current protocol version: **1.3.2**. See [CHANGELOG.md](CHANGELOG.md) for what each version added.

Protocol Buffers make it easy to share a single protocol definition and compile it automatically for many languages. If you're new to them, Google's overview is here:
https://protobuf.dev/

## What's in this repo

| File | Description |
|------|-------------|
| `eDS10_ProtocolBuffer.proto` | The protocol definition (source of truth) |
| `eDS10_ProtocolBuffer.options` | nanopb options (array sizes, int sizes) for the C build |
| `EDS10ProtocolBuffer.cs` | Pre-compiled C# library |
| `EDS10ProtocolBuffer.java` | Pre-compiled Java library |
| `eDS10_ProtocolBuffer.pb.c` / `.pb.h` | Pre-compiled C library (nanopb) |
| `eDS10_ProtocolBuffer_pb.js` | Pre-compiled JavaScript library |
| `eDS10_ProtocolBuffer_pb2.py` | Pre-compiled Python library |
| `eDIDIOS10_API.html` | Full API reference: open it in a browser, or use the [online copy](https://creativelightingadmin.github.io/Control-Freak-Protocol-Public-Release/) |
| `CHANGELOG.md` | What each protocol version added |

The compiled libraries are included, so for most languages you can use them directly without running the compiler yourself.

## Connecting to a controller

- **Discovery:** UDP broadcast on port `30303` (the device replies with a JSON blob containing its MAC, IP and firmware version).
- **Control:** TCP on port `23`, or TLS on port `443`.
- **Heartbeat:** send an `AytMessage` ("Are You There", bytes `0xFF 0xF6`) within 20 seconds to keep the connection alive. Any received message also resets the timer.

## TCP frame format

Every message is a single `EdidioMessage` populated with exactly one payload field. Once serialised, prepend the eDIDIO Series 10 wrapper:

```
[ Start Byte (0xCD) | Length MSB | Length LSB | ...protobuf bytes... ]
```

- **Start byte** is always `0xCD`.
- **Length** is the 16-bit big-endian byte count of the serialised protobuf payload (not including the 3 wrapper bytes).

## Examples

The frames below are the exact bytes to send over the socket, wrapper included.

You can also generate them yourself. **SpektraPlus → Device Tools → Message Generator** builds DALI, DMX and external-trigger messages and gives the framed bytes in decimal or hex, ready to paste into another system.

### DALI — set address 5 (line 1) to arc level 200

```
EdidioMessage {
  message_id: 1
  dali_message: DALIMessage {
    line_mask:      0b0001          // line 1
    address:        5               // DALI short address
    custom_command: DALI_ARC_LEVEL
    arg:            200             // arc level (0-254)
  }
}
```

Serialised frame:

```
cd 00 0e 08 01 92 01 09 08 01 10 05 30 00 48 c8 01
│  └─┬─┘ └───────────── protobuf payload (0x0e = 14 bytes) ─────────────┘
│    └ length (big-endian)
└ start byte
```

### DMX — universe 1, channels 1-3 = RGB red, 250 ms fade

```
EdidioMessage {
  message_id: 2
  dmx_message: DMXMessage {
    universe_mask:    0b0001        // universe 1
    channel:          1             // first channel (1-based)
    repeat:           1             // one fixture
    level:            [255, 0, 0]   // R, G, B
    fade_time_by_10ms: 25           // 250 ms (25 x 10 ms)
  }
}
```

Serialised frame:

```
cd 00 13 08 02 a2 01 0e 10 01 18 01 20 01 2a 04 ff 01 00 00 30 19
```

### Python

```python
import eDS10_ProtocolBuffer_pb2 as pb

em = pb.EdidioMessage()
em.message_id = 1
em.dali_message.line_mask = 0b0001
em.dali_message.address = 5
em.dali_message.custom_command = pb.DALI_ARC_LEVEL
em.dali_message.arg = 200

msg = em.SerializeToString()
frame = bytes([0xCD]) + len(msg).to_bytes(2, "big") + msg
print(frame.hex(" "))   # cd 00 0e 08 01 92 01 09 08 01 10 05 30 00 48 c8 01
```

See the [API reference](https://creativelightingadmin.github.io/Control-Freak-Protocol-Public-Release/) for every message, enum and field, and its "Requests and replies" section for what each request returns.

## Compiling the protocol files yourself

You only need this if you want to regenerate the libraries or target a language not included above.

The `.proto` and `.options` files are compiled with [nanopb](https://github.com/nanopb/nanopb) for the C target. **Use nanopb 0.4.9.1 or newer** — the `.options` file relies on `proto3_singular_msgs`, which requires nanopb ≥ 0.4.0. Older 0.3.x releases will **not** work.

Install nanopb and generate the C library:

```bash
pip install nanopb grpcio-tools
python -m nanopb.generator.nanopb_generator eDS10_ProtocolBuffer.proto
```

For the other languages, use a standard `protoc` (v3.21+ recommended):

```bash
protoc --python_out=. --pyi_out=. eDS10_ProtocolBuffer.proto   # Python
protoc --csharp_out=. eDS10_ProtocolBuffer.proto               # C#
protoc --java_out=.   eDS10_ProtocolBuffer.proto               # Java
```

- nanopb download page: https://jpa.kapsi.fi/nanopb/download/
- nanopb releases: https://github.com/nanopb/nanopb/releases
- protoc releases: https://github.com/protocolbuffers/protobuf/releases

## Protocol version

The protocol version is exposed as a compile-time constant in every generated language (e.g. C: `ProtocolVersion_PROTOCOL_VERSION_CURRENT`). It is byte-packed as `0x00_MM_mm_PP`, so this release, 1.3.2, is `0x010302`.

- **Reading a device's version:** a device reports the version it was built against in `DiagnosticSystemInfoResponse.proto_version`. Ask with a `diag_message` of type `DIAGNOSTIC_SYSTEM_INFO`.
- **Gating a feature:** check `proto_version >= 0x010302`, using the version [CHANGELOG.md](CHANGELOG.md) says added the feature. A device that reports 0 predates the field.
- **Compatibility:** fields are only ever added, never renumbered or removed. Older devices ignore fields they don't know.
