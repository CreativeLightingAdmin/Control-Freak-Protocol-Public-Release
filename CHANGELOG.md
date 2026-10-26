# Changelog

What each protocol version added. Devices report the version they were built against in
`DiagnosticSystemInfoResponse.proto_version` (`0x00_MM_mm_PP`, e.g. 1.3.2 = `0x010302`), so a
client can gate a feature with `proto_version >= <the version below that added it>`.

Newest first.

## 1.3.2 - 2026-10-26

- **Admin `STORAGE_DIAGNOSTICS` (50)**, GET: SPI bus stall/reset counters, NOR flash fault and presence state, SD card mount/probe/deadline-abort counters and CID identity (`AdminStorageDiagnosticsMessage`, `AdminMessage` oneof arm 20; enum `Spi2StallType`). New `SD_CAPACITY_UNKNOWN` (10) and `SD_DEADLINE_ABORT` (11) SD results.
- **Spektra slot-table manifest**: `SpektraReadMessage.manifest` (3) asks for a `SpektraManifestMessage` (`EdidioMessage` field 78) - which slots hold data plus a CRC per slot - instead of one slot. Older firmware ignores the flag and replies with slot `index`.
- **Line diagnostics**: `DALI_ECHO_SKIPPED` (3) in `DaliEchoResult`; `DMX_LISTEN_DMX_VALID` (4) in `DmxListenResult` (a coherent DMX512 stream validated). SKIPPED / ACTIVE meanings documented.
- **Wi-Fi (ADDICT V3)**: Admin `WIFI_SETTINGS` (51, GET/SET), `WIFI_STATUS` (52, GET), `WIFI_DIAGNOSTICS` (53, GET); `AdminWifiSettingsMessage` / `AdminWifiStatusMessage` / `AdminWifiDiagnosticsMessage` (oneof arms 21-23), enums `WifiMode`, `WifiStationState`.
- **DALI bus power per line**: enum `DaliBusPower`; `DaliLineStatus.bus_power` (8), `short_count` (9), `dual_supply_count` (10) - live even when `polling_active` is false. Older firmware leaves them `UNKNOWN` / 0.
- Version bookkeeping: the header, the enum, `package.json` and the README agree again (the header had said 1.3.3, never released).
- Documentation, no wire change:
  - Every type, field and value has a description.
  - Each `EdidioMessage` payload states its reply, login role and devices; each admin property its commands, payload field and role.
  - The API reference (`eDIDIOS10_API.html`, now one file name for every release) is grouped by section, opens with "Requests and replies", and has working type links.

## 1.3.1 - 2026-08-14 (public release)

- `ProtocolVersion` enum (`PROTOCOL_VERSION_CURRENT`); `proto_version` documented.
- Admin `USER_ACCOUNT` (49): provision a role's login secret; `FORBIDDEN` ack.
- `SensorsQuery` paginated (up to 20 per request, `total_count`).
- Firmware update: V3 confidentiality envelope fields in `FirmwareMetaMessage` (14-18), `has_confidentiality_key` in the system info, and apply reject reasons (unsigned, signature invalid, no confidentiality key, decrypt failed, bootloader incompatible).
- Comments scrubbed of internal references for the public release.

## 1.3.0 - 2026-07-01

- Event Stream v2: `EventStreamMessage` (`EdidioMessage` field 77) with `CommandEvent` (arm 21) for standalone triggers; `SdLogStreamMessage` (69) deprecated.

## 1.2.3 - 2026-06-30

- `SensorQuery`: setpoint and group mean lux; sensor-validation reject reason.
- `FirmwareMetaMessage.signature` (13): RSA-PSS signature of the firmware image.
- Device provisioning messages (`EdidioMessage` fields 73-76, chunked InstallIdentity).

## 1.2.2 - 2026-06-12

- Sensor cooperative-group roles renamed Active/Passive -> Leader/Follower.

## 1.2.1 - 2026-06-12

- `RejectReason` enum, giving meaning to `AckMessage.detail` on a rejection (e.g. `INVALID_PARAMS`).

## 1.2.0 - 2026-06-12

- Sensor cooperative grouping fields.

## 1.1.23 - 2026-06-11

- `lux_seeded` sensor property (false-positive harvesting data).

## 1.1.22 - 2026-06-05

- Admin diagnostics: Ethernet (PHY / MAC counters, link events), connection info, line diagnostics (overhauled), time (NTP, RTC calibration, DST), DALI Status Monitor (`DALI_STATUS`).
- SD log rotation; more sensor state information.

## 1.1.20 - 2026-05-13

- SD card support and rotation policy; memory diagnostics (task stacks, TLS pool, system stack).
- Version numbering fixed for doc generation (`// Version X.Y.Z`).

## 1.1.19 - 2026-01-28

- Bootloader version reported as a string.

## 1.1.18 - 2025-09-19

- Admin DALI RX tolerance and TX half-bit time; DALI sensor types renamed (no vendor name); `DMX_TRANSLATIONS` read type; DMX properties and `SensorQuery`; data aliases; nanopb 0.4.9 options.

## 1.1.17 and earlier

See the git history (`git log -- eDS10_ProtocolBuffer.proto`).
