# Control Freak Protocol (Public Release)
The public release of the Control Freak Protocol Buffer definition and compiled libraries

Protocol Buffers make it easy to have a common protocol implementation that can be compiled automatically for different languages. 

Google Protocol Buffers are explained in detail here:
https://developers.google.com/protocol-buffers/

To use the protocol files, you need to compile the .proto and .options files using protoc.exe.
We recommend you use the protoc.exe included with NanoPB, as that is what we use in-house and it is therefore known to be working.
Available here: (Please use Version 0.3.9.5, as Version 0.4~ onwards will NOT work with our eDIDIO Firmware)
https://jpa.kapsi.fi/nanopb/download/

# To compile for your language

Example usage (when run from within this repo with nanopb as a sibling directory):

    ../nanopb/generator-bin/protoc.exe --nanopb_out=. eDS10_ProtocolBuffer.proto
    ../nanopb/generator-bin/protoc.exe --csharp_out=. eDS10_ProtocolBuffer.proto
    ../nanopb/generator-bin/protoc.exe --java_out=. eDS10_ProtocolBuffer.proto

# eDIDIO Series 10 TCP Frame Format
Once the Protocol Buffer message has been serialised it must be sent in the following format by prepending the eDIDIO Series 10 specific "wrapper".
`[Start Byte, Length MSB, Length LSB, ...PB message bytes...]`

* The Startbyte is 0xCD. 
* Length is the total length of the protocol buffer message.