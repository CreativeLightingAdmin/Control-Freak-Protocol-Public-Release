/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.AckMessage', null, global);
goog.exportSymbol('proto.AckMessageType', null, global);
goog.exportSymbol('proto.AdminCommandType', null, global);
goog.exportSymbol('proto.AdminConfigStatusMessage', null, global);
goog.exportSymbol('proto.AdminControllerLinesMessage', null, global);
goog.exportSymbol('proto.AdminDeviceStatusMessage', null, global);
goog.exportSymbol('proto.AdminMessage', null, global);
goog.exportSymbol('proto.AdminNetworkPropertiesMessage', null, global);
goog.exportSymbol('proto.AdminProjectPropertiesMessage', null, global);
goog.exportSymbol('proto.AdminPropertyType', null, global);
goog.exportSymbol('proto.AdminSecureLoginMessage', null, global);
goog.exportSymbol('proto.AlarmAstroType', null, global);
goog.exportSymbol('proto.AlarmMessage', null, global);
goog.exportSymbol('proto.AlarmMultiMessage', null, global);
goog.exportSymbol('proto.AlarmRepeatType', null, global);
goog.exportSymbol('proto.AytMessage', null, global);
goog.exportSymbol('proto.BurnInBitsMessage', null, global);
goog.exportSymbol('proto.BurnInMessage', null, global);
goog.exportSymbol('proto.BurnInMultiMessage', null, global);
goog.exportSymbol('proto.ChangeProfileMessage', null, global);
goog.exportSymbol('proto.CustomDALICommandType', null, global);
goog.exportSymbol('proto.DALICommandType', null, global);
goog.exportSymbol('proto.DALIMessage', null, global);
goog.exportSymbol('proto.DALIQueryResponse', null, global);
goog.exportSymbol('proto.DALIQueryType', null, global);
goog.exportSymbol('proto.DALIStatusFlagMessage', null, global);
goog.exportSymbol('proto.DALIStatusType', null, global);
goog.exportSymbol('proto.DMXMessage', null, global);
goog.exportSymbol('proto.DMXProtocolTranslation', null, global);
goog.exportSymbol('proto.DMXTranslationObject', null, global);
goog.exportSymbol('proto.DTRPayloadMessage', null, global);
goog.exportSymbol('proto.DataMessage', null, global);
goog.exportSymbol('proto.DeviceStateMessage', null, global);
goog.exportSymbol('proto.DiagnosticMessage', null, global);
goog.exportSymbol('proto.DiagnosticMessageType', null, global);
goog.exportSymbol('proto.DiagnosticSystemInfoResponse', null, global);
goog.exportSymbol('proto.EdidioMessage', null, global);
goog.exportSymbol('proto.EventMessage', null, global);
goog.exportSymbol('proto.EventType', null, global);
goog.exportSymbol('proto.ExtendedListMessage', null, global);
goog.exportSymbol('proto.ExternalTriggerMessage', null, global);
goog.exportSymbol('proto.FirmwareChunkMessage', null, global);
goog.exportSymbol('proto.FirmwareCommandType', null, global);
goog.exportSymbol('proto.FirmwareControlMessage', null, global);
goog.exportSymbol('proto.FirmwareMetaMessage', null, global);
goog.exportSymbol('proto.IOIRMessage', null, global);
goog.exportSymbol('proto.IOInputMessage', null, global);
goog.exportSymbol('proto.IOOutputMessage', null, global);
goog.exportSymbol('proto.IRMultiMessage', null, global);
goog.exportSymbol('proto.IdentifyMessage', null, global);
goog.exportSymbol('proto.InputMultiMessage', null, global);
goog.exportSymbol('proto.InputStateMessage', null, global);
goog.exportSymbol('proto.InputStateResponse', null, global);
goog.exportSymbol('proto.JoinedRoomsMessage', null, global);
goog.exportSymbol('proto.LevelCacheResponse', null, global);
goog.exportSymbol('proto.LineType', null, global);
goog.exportSymbol('proto.ListMessage', null, global);
goog.exportSymbol('proto.ListStepMessage', null, global);
goog.exportSymbol('proto.LogicComparisonType', null, global);
goog.exportSymbol('proto.LogicMessage', null, global);
goog.exportSymbol('proto.LogicMultiMessage', null, global);
goog.exportSymbol('proto.LogicType', null, global);
goog.exportSymbol('proto.OutputMultiMessage', null, global);
goog.exportSymbol('proto.PayloadMessage', null, global);
goog.exportSymbol('proto.RDMMessage', null, global);
goog.exportSymbol('proto.RDMResponseMessage', null, global);
goog.exportSymbol('proto.ReadDeviceMessage', null, global);
goog.exportSymbol('proto.ReadType', null, global);
goog.exportSymbol('proto.SecureDeviceSettingsMessage', null, global);
goog.exportSymbol('proto.SensorCommandMessage', null, global);
goog.exportSymbol('proto.SensorMessage', null, global);
goog.exportSymbol('proto.SpektraActionType', null, global);
goog.exportSymbol('proto.SpektraCalendarMessage', null, global);
goog.exportSymbol('proto.SpektraColourConfigMessage', null, global);
goog.exportSymbol('proto.SpektraControlMessage', null, global);
goog.exportSymbol('proto.SpektraReadMessage', null, global);
goog.exportSymbol('proto.SpektraSequenceConfigMessage', null, global);
goog.exportSymbol('proto.SpektraSettingMessage', null, global);
goog.exportSymbol('proto.SpektraTargetType', null, global);
goog.exportSymbol('proto.SpektraThemeConfigMessage', null, global);
goog.exportSymbol('proto.SpektraTransitionType', null, global);
goog.exportSymbol('proto.SpektraUnscheduledBehaviourType', null, global);
goog.exportSymbol('proto.TimeClockMessage', null, global);
goog.exportSymbol('proto.TriggerEvent', null, global);
goog.exportSymbol('proto.TriggerMessage', null, global);
goog.exportSymbol('proto.TriggerOperationType', null, global);
goog.exportSymbol('proto.TriggerType', null, global);
goog.exportSymbol('proto.Type8CommandType', null, global);
goog.exportSymbol('proto.Type8QueryType', null, global);
goog.exportSymbol('proto.UpdateTimeMessage', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.AckMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.AckMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.AckMessage.displayName = 'proto.AckMessage';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.AckMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.AckMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.AckMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AckMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    payload: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.AckMessage}
 */
proto.AckMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.AckMessage;
  return proto.AckMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.AckMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.AckMessage}
 */
proto.AckMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.AckMessageType} */ (reader.readEnum());
      msg.setPayload(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.AckMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.AckMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.AckMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AckMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPayload();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional AckMessageType payload = 1;
 * @return {!proto.AckMessageType}
 */
proto.AckMessage.prototype.getPayload = function() {
  return /** @type {!proto.AckMessageType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.AckMessageType} value */
proto.AckMessage.prototype.setPayload = function(value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.PayloadMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.PayloadMessage.oneofGroups_);
};
goog.inherits(proto.PayloadMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.PayloadMessage.displayName = 'proto.PayloadMessage';
}
/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.PayloadMessage.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.PayloadMessage.DataCase = {
  DATA_NOT_SET: 0,
  UINT_DATA: 1,
  FLOAT_DATA: 2
};

/**
 * @return {proto.PayloadMessage.DataCase}
 */
proto.PayloadMessage.prototype.getDataCase = function() {
  return /** @type {proto.PayloadMessage.DataCase} */(jspb.Message.computeOneofCase(this, proto.PayloadMessage.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.PayloadMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.PayloadMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PayloadMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PayloadMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    uintData: jspb.Message.getFieldWithDefault(msg, 1, 0),
    floatData: +jspb.Message.getFieldWithDefault(msg, 2, 0.0),
    stringData: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.PayloadMessage}
 */
proto.PayloadMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PayloadMessage;
  return proto.PayloadMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PayloadMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PayloadMessage}
 */
proto.PayloadMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setUintData(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setFloatData(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setStringData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.PayloadMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PayloadMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PayloadMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PayloadMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = message.getStringData();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional uint32 uint_data = 1;
 * @return {number}
 */
proto.PayloadMessage.prototype.getUintData = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.PayloadMessage.prototype.setUintData = function(value) {
  jspb.Message.setOneofField(this, 1, proto.PayloadMessage.oneofGroups_[0], value);
};


proto.PayloadMessage.prototype.clearUintData = function() {
  jspb.Message.setOneofField(this, 1, proto.PayloadMessage.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.PayloadMessage.prototype.hasUintData = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional float float_data = 2;
 * @return {number}
 */
proto.PayloadMessage.prototype.getFloatData = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 2, 0.0));
};


/** @param {number} value */
proto.PayloadMessage.prototype.setFloatData = function(value) {
  jspb.Message.setOneofField(this, 2, proto.PayloadMessage.oneofGroups_[0], value);
};


proto.PayloadMessage.prototype.clearFloatData = function() {
  jspb.Message.setOneofField(this, 2, proto.PayloadMessage.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.PayloadMessage.prototype.hasFloatData = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string string_data = 3;
 * @return {string}
 */
proto.PayloadMessage.prototype.getStringData = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.PayloadMessage.prototype.setStringData = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.AytMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.AytMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.AytMessage.displayName = 'proto.AytMessage';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.AytMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.AytMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.AytMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AytMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    timesinceboot: jspb.Message.getFieldWithDefault(msg, 1, 0),
    temperature: +jspb.Message.getFieldWithDefault(msg, 2, 0.0),
    time: (f = msg.getTime()) && proto.TimeClockMessage.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.AytMessage}
 */
proto.AytMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.AytMessage;
  return proto.AytMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.AytMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.AytMessage}
 */
proto.AytMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTimesinceboot(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setTemperature(value);
      break;
    case 3:
      var value = new proto.TimeClockMessage;
      reader.readMessage(value,proto.TimeClockMessage.deserializeBinaryFromReader);
      msg.setTime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.AytMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.AytMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.AytMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AytMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimesinceboot();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getTemperature();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = message.getTime();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.TimeClockMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 timesinceboot = 1;
 * @return {number}
 */
proto.AytMessage.prototype.getTimesinceboot = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.AytMessage.prototype.setTimesinceboot = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional float temperature = 2;
 * @return {number}
 */
proto.AytMessage.prototype.getTemperature = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 2, 0.0));
};


/** @param {number} value */
proto.AytMessage.prototype.setTemperature = function(value) {
  jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional TimeClockMessage time = 3;
 * @return {?proto.TimeClockMessage}
 */
proto.AytMessage.prototype.getTime = function() {
  return /** @type{?proto.TimeClockMessage} */ (
    jspb.Message.getWrapperField(this, proto.TimeClockMessage, 3));
};


/** @param {?proto.TimeClockMessage|undefined} value */
proto.AytMessage.prototype.setTime = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.AytMessage.prototype.clearTime = function() {
  this.setTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.AytMessage.prototype.hasTime = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.DeviceStateMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.DeviceStateMessage.repeatedFields_, null);
};
goog.inherits(proto.DeviceStateMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DeviceStateMessage.displayName = 'proto.DeviceStateMessage';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.DeviceStateMessage.repeatedFields_ = [8,9,10,11,12,13];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.DeviceStateMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.DeviceStateMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DeviceStateMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DeviceStateMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    uptime: jspb.Message.getFieldWithDefault(msg, 1, 0),
    temp: +jspb.Message.getFieldWithDefault(msg, 2, 0.0),
    vbat: +jspb.Message.getFieldWithDefault(msg, 3, 0.0),
    clock: (f = msg.getClock()) && proto.TimeClockMessage.toObject(includeInstance, f),
    nextAlarm: jspb.Message.getFieldWithDefault(msg, 5, 0),
    nextAlarmTime: (f = msg.getNextAlarmTime()) && proto.TimeClockMessage.toObject(includeInstance, f),
    inputState: jspb.Message.getFieldWithDefault(msg, 7, 0),
    listStatesList: jspb.Message.getRepeatedField(msg, 8),
    burnInStatesList: jspb.Message.getRepeatedField(msg, 9),
    sensorStatesList: jspb.Message.getRepeatedField(msg, 10),
    zoneStatesList: jspb.Message.getRepeatedField(msg, 11),
    zoneSleepStatesList: jspb.Message.getRepeatedField(msg, 12),
    zoneIndexesList: jspb.Message.getRepeatedField(msg, 13)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.DeviceStateMessage}
 */
proto.DeviceStateMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DeviceStateMessage;
  return proto.DeviceStateMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DeviceStateMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DeviceStateMessage}
 */
proto.DeviceStateMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setUptime(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setTemp(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setVbat(value);
      break;
    case 4:
      var value = new proto.TimeClockMessage;
      reader.readMessage(value,proto.TimeClockMessage.deserializeBinaryFromReader);
      msg.setClock(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNextAlarm(value);
      break;
    case 6:
      var value = new proto.TimeClockMessage;
      reader.readMessage(value,proto.TimeClockMessage.deserializeBinaryFromReader);
      msg.setNextAlarmTime(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setInputState(value);
      break;
    case 8:
      var value = /** @type {!Array<number>} */ (reader.readPackedUint32());
      msg.setListStatesList(value);
      break;
    case 9:
      var value = /** @type {!Array<number>} */ (reader.readPackedUint32());
      msg.setBurnInStatesList(value);
      break;
    case 10:
      var value = /** @type {!Array<number>} */ (reader.readPackedUint32());
      msg.setSensorStatesList(value);
      break;
    case 11:
      var value = /** @type {!Array<number>} */ (reader.readPackedUint32());
      msg.setZoneStatesList(value);
      break;
    case 12:
      var value = /** @type {!Array<number>} */ (reader.readPackedUint32());
      msg.setZoneSleepStatesList(value);
      break;
    case 13:
      var value = /** @type {!Array<number>} */ (reader.readPackedUint32());
      msg.setZoneIndexesList(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.DeviceStateMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DeviceStateMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DeviceStateMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DeviceStateMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUptime();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getTemp();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = message.getVbat();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
  f = message.getClock();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.TimeClockMessage.serializeBinaryToWriter
    );
  }
  f = message.getNextAlarm();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = message.getNextAlarmTime();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.TimeClockMessage.serializeBinaryToWriter
    );
  }
  f = message.getInputState();
  if (f !== 0) {
    writer.writeUint32(
      7,
      f
    );
  }
  f = message.getListStatesList();
  if (f.length > 0) {
    writer.writePackedUint32(
      8,
      f
    );
  }
  f = message.getBurnInStatesList();
  if (f.length > 0) {
    writer.writePackedUint32(
      9,
      f
    );
  }
  f = message.getSensorStatesList();
  if (f.length > 0) {
    writer.writePackedUint32(
      10,
      f
    );
  }
  f = message.getZoneStatesList();
  if (f.length > 0) {
    writer.writePackedUint32(
      11,
      f
    );
  }
  f = message.getZoneSleepStatesList();
  if (f.length > 0) {
    writer.writePackedUint32(
      12,
      f
    );
  }
  f = message.getZoneIndexesList();
  if (f.length > 0) {
    writer.writePackedUint32(
      13,
      f
    );
  }
};


/**
 * optional uint32 uptime = 1;
 * @return {number}
 */
proto.DeviceStateMessage.prototype.getUptime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.DeviceStateMessage.prototype.setUptime = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional float temp = 2;
 * @return {number}
 */
proto.DeviceStateMessage.prototype.getTemp = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 2, 0.0));
};


/** @param {number} value */
proto.DeviceStateMessage.prototype.setTemp = function(value) {
  jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional float vbat = 3;
 * @return {number}
 */
proto.DeviceStateMessage.prototype.getVbat = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 3, 0.0));
};


/** @param {number} value */
proto.DeviceStateMessage.prototype.setVbat = function(value) {
  jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional TimeClockMessage clock = 4;
 * @return {?proto.TimeClockMessage}
 */
proto.DeviceStateMessage.prototype.getClock = function() {
  return /** @type{?proto.TimeClockMessage} */ (
    jspb.Message.getWrapperField(this, proto.TimeClockMessage, 4));
};


/** @param {?proto.TimeClockMessage|undefined} value */
proto.DeviceStateMessage.prototype.setClock = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.DeviceStateMessage.prototype.clearClock = function() {
  this.setClock(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DeviceStateMessage.prototype.hasClock = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional uint32 next_alarm = 5;
 * @return {number}
 */
proto.DeviceStateMessage.prototype.getNextAlarm = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.DeviceStateMessage.prototype.setNextAlarm = function(value) {
  jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional TimeClockMessage next_alarm_time = 6;
 * @return {?proto.TimeClockMessage}
 */
proto.DeviceStateMessage.prototype.getNextAlarmTime = function() {
  return /** @type{?proto.TimeClockMessage} */ (
    jspb.Message.getWrapperField(this, proto.TimeClockMessage, 6));
};


/** @param {?proto.TimeClockMessage|undefined} value */
proto.DeviceStateMessage.prototype.setNextAlarmTime = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


proto.DeviceStateMessage.prototype.clearNextAlarmTime = function() {
  this.setNextAlarmTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DeviceStateMessage.prototype.hasNextAlarmTime = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional uint32 input_state = 7;
 * @return {number}
 */
proto.DeviceStateMessage.prototype.getInputState = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {number} value */
proto.DeviceStateMessage.prototype.setInputState = function(value) {
  jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * repeated uint32 list_states = 8;
 * @return {!Array<number>}
 */
proto.DeviceStateMessage.prototype.getListStatesList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 8));
};


/** @param {!Array<number>} value */
proto.DeviceStateMessage.prototype.setListStatesList = function(value) {
  jspb.Message.setField(this, 8, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
proto.DeviceStateMessage.prototype.addListStates = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 8, value, opt_index);
};


proto.DeviceStateMessage.prototype.clearListStatesList = function() {
  this.setListStatesList([]);
};


/**
 * repeated uint32 burn_in_states = 9;
 * @return {!Array<number>}
 */
proto.DeviceStateMessage.prototype.getBurnInStatesList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 9));
};


/** @param {!Array<number>} value */
proto.DeviceStateMessage.prototype.setBurnInStatesList = function(value) {
  jspb.Message.setField(this, 9, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
proto.DeviceStateMessage.prototype.addBurnInStates = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 9, value, opt_index);
};


proto.DeviceStateMessage.prototype.clearBurnInStatesList = function() {
  this.setBurnInStatesList([]);
};


/**
 * repeated uint32 sensor_states = 10;
 * @return {!Array<number>}
 */
proto.DeviceStateMessage.prototype.getSensorStatesList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 10));
};


/** @param {!Array<number>} value */
proto.DeviceStateMessage.prototype.setSensorStatesList = function(value) {
  jspb.Message.setField(this, 10, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
proto.DeviceStateMessage.prototype.addSensorStates = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 10, value, opt_index);
};


proto.DeviceStateMessage.prototype.clearSensorStatesList = function() {
  this.setSensorStatesList([]);
};


/**
 * repeated uint32 zone_states = 11;
 * @return {!Array<number>}
 */
proto.DeviceStateMessage.prototype.getZoneStatesList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 11));
};


/** @param {!Array<number>} value */
proto.DeviceStateMessage.prototype.setZoneStatesList = function(value) {
  jspb.Message.setField(this, 11, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
proto.DeviceStateMessage.prototype.addZoneStates = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 11, value, opt_index);
};


proto.DeviceStateMessage.prototype.clearZoneStatesList = function() {
  this.setZoneStatesList([]);
};


/**
 * repeated uint32 zone_sleep_states = 12;
 * @return {!Array<number>}
 */
proto.DeviceStateMessage.prototype.getZoneSleepStatesList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 12));
};


/** @param {!Array<number>} value */
proto.DeviceStateMessage.prototype.setZoneSleepStatesList = function(value) {
  jspb.Message.setField(this, 12, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
proto.DeviceStateMessage.prototype.addZoneSleepStates = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 12, value, opt_index);
};


proto.DeviceStateMessage.prototype.clearZoneSleepStatesList = function() {
  this.setZoneSleepStatesList([]);
};


/**
 * repeated uint32 zone_indexes = 13;
 * @return {!Array<number>}
 */
proto.DeviceStateMessage.prototype.getZoneIndexesList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 13));
};


/** @param {!Array<number>} value */
proto.DeviceStateMessage.prototype.setZoneIndexesList = function(value) {
  jspb.Message.setField(this, 13, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
proto.DeviceStateMessage.prototype.addZoneIndexes = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 13, value, opt_index);
};


proto.DeviceStateMessage.prototype.clearZoneIndexesList = function() {
  this.setZoneIndexesList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.TriggerMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.TriggerMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.TriggerMessage.displayName = 'proto.TriggerMessage';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.TriggerMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.TriggerMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.TriggerMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.TriggerMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    zone: jspb.Message.getFieldWithDefault(msg, 2, 0),
    lineMask: jspb.Message.getFieldWithDefault(msg, 3, 0),
    targetIndex: jspb.Message.getFieldWithDefault(msg, 4, 0),
    value: jspb.Message.getFieldWithDefault(msg, 5, 0),
    queryIndex: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.TriggerMessage}
 */
proto.TriggerMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.TriggerMessage;
  return proto.TriggerMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.TriggerMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.TriggerMessage}
 */
proto.TriggerMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.TriggerType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setZone(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLineMask(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTargetIndex(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setValue(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setQueryIndex(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.TriggerMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.TriggerMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.TriggerMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.TriggerMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getZone();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getLineMask();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getTargetIndex();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getValue();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = message.getQueryIndex();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
};


/**
 * optional TriggerType type = 1;
 * @return {!proto.TriggerType}
 */
proto.TriggerMessage.prototype.getType = function() {
  return /** @type {!proto.TriggerType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.TriggerType} value */
proto.TriggerMessage.prototype.setType = function(value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional uint32 zone = 2;
 * @return {number}
 */
proto.TriggerMessage.prototype.getZone = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.TriggerMessage.prototype.setZone = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 line_mask = 3;
 * @return {number}
 */
proto.TriggerMessage.prototype.getLineMask = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.TriggerMessage.prototype.setLineMask = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 target_index = 4;
 * @return {number}
 */
proto.TriggerMessage.prototype.getTargetIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.TriggerMessage.prototype.setTargetIndex = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint32 value = 5;
 * @return {number}
 */
proto.TriggerMessage.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.TriggerMessage.prototype.setValue = function(value) {
  jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional uint32 query_index = 6;
 * @return {number}
 */
proto.TriggerMessage.prototype.getQueryIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.TriggerMessage.prototype.setQueryIndex = function(value) {
  jspb.Message.setProto3IntField(this, 6, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.TimeClockMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.TimeClockMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.TimeClockMessage.displayName = 'proto.TimeClockMessage';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.TimeClockMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.TimeClockMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.TimeClockMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.TimeClockMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    date: jspb.Message.getFieldWithDefault(msg, 1, 0),
    time: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.TimeClockMessage}
 */
proto.TimeClockMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.TimeClockMessage;
  return proto.TimeClockMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.TimeClockMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.TimeClockMessage}
 */
proto.TimeClockMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setDate(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.TimeClockMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.TimeClockMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.TimeClockMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.TimeClockMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDate();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getTime();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional uint32 date = 1;
 * @return {number}
 */
proto.TimeClockMessage.prototype.getDate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.TimeClockMessage.prototype.setDate = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 time = 2;
 * @return {number}
 */
proto.TimeClockMessage.prototype.getTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.TimeClockMessage.prototype.setTime = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.BurnInBitsMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.BurnInBitsMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.BurnInBitsMessage.displayName = 'proto.BurnInBitsMessage';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.BurnInBitsMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.BurnInBitsMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.BurnInBitsMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.BurnInBitsMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    lightState: jspb.Message.getFieldWithDefault(msg, 1, 0),
    runningFlag: jspb.Message.getFieldWithDefault(msg, 2, 0),
    enableFlag: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.BurnInBitsMessage}
 */
proto.BurnInBitsMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.BurnInBitsMessage;
  return proto.BurnInBitsMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.BurnInBitsMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.BurnInBitsMessage}
 */
proto.BurnInBitsMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLightState(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setRunningFlag(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setEnableFlag(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.BurnInBitsMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.BurnInBitsMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.BurnInBitsMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.BurnInBitsMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLightState();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getRunningFlag();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getEnableFlag();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
};


/**
 * optional uint32 light_state = 1;
 * @return {number}
 */
proto.BurnInBitsMessage.prototype.getLightState = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.BurnInBitsMessage.prototype.setLightState = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 running_flag = 2;
 * @return {number}
 */
proto.BurnInBitsMessage.prototype.getRunningFlag = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.BurnInBitsMessage.prototype.setRunningFlag = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 enable_flag = 3;
 * @return {number}
 */
proto.BurnInBitsMessage.prototype.getEnableFlag = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.BurnInBitsMessage.prototype.setEnableFlag = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.IOInputMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.IOInputMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.IOInputMessage.displayName = 'proto.IOInputMessage';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.IOInputMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.IOInputMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.IOInputMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.IOInputMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    index: jspb.Message.getFieldWithDefault(msg, 1, 0),
    buttonState: jspb.Message.getFieldWithDefault(msg, 2, 0),
    shortPress: (f = msg.getShortPress()) && proto.TriggerMessage.toObject(includeInstance, f),
    longPress: (f = msg.getLongPress()) && proto.TriggerMessage.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.IOInputMessage}
 */
proto.IOInputMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.IOInputMessage;
  return proto.IOInputMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.IOInputMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.IOInputMessage}
 */
proto.IOInputMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIndex(value);
      break;
    case 2:
      var value = /** @type {!proto.TriggerOperationType} */ (reader.readEnum());
      msg.setButtonState(value);
      break;
    case 3:
      var value = new proto.TriggerMessage;
      reader.readMessage(value,proto.TriggerMessage.deserializeBinaryFromReader);
      msg.setShortPress(value);
      break;
    case 4:
      var value = new proto.TriggerMessage;
      reader.readMessage(value,proto.TriggerMessage.deserializeBinaryFromReader);
      msg.setLongPress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.IOInputMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.IOInputMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.IOInputMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.IOInputMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIndex();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getButtonState();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getShortPress();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.TriggerMessage.serializeBinaryToWriter
    );
  }
  f = message.getLongPress();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.TriggerMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 index = 1;
 * @return {number}
 */
proto.IOInputMessage.prototype.getIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.IOInputMessage.prototype.setIndex = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional TriggerOperationType button_state = 2;
 * @return {!proto.TriggerOperationType}
 */
proto.IOInputMessage.prototype.getButtonState = function() {
  return /** @type {!proto.TriggerOperationType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {!proto.TriggerOperationType} value */
proto.IOInputMessage.prototype.setButtonState = function(value) {
  jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional TriggerMessage short_press = 3;
 * @return {?proto.TriggerMessage}
 */
proto.IOInputMessage.prototype.getShortPress = function() {
  return /** @type{?proto.TriggerMessage} */ (
    jspb.Message.getWrapperField(this, proto.TriggerMessage, 3));
};


/** @param {?proto.TriggerMessage|undefined} value */
proto.IOInputMessage.prototype.setShortPress = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.IOInputMessage.prototype.clearShortPress = function() {
  this.setShortPress(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.IOInputMessage.prototype.hasShortPress = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional TriggerMessage long_press = 4;
 * @return {?proto.TriggerMessage}
 */
proto.IOInputMessage.prototype.getLongPress = function() {
  return /** @type{?proto.TriggerMessage} */ (
    jspb.Message.getWrapperField(this, proto.TriggerMessage, 4));
};


/** @param {?proto.TriggerMessage|undefined} value */
proto.IOInputMessage.prototype.setLongPress = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.IOInputMessage.prototype.clearLongPress = function() {
  this.setLongPress(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.IOInputMessage.prototype.hasLongPress = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.IOOutputMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.IOOutputMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.IOOutputMessage.displayName = 'proto.IOOutputMessage';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.IOOutputMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.IOOutputMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.IOOutputMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.IOOutputMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    index: jspb.Message.getFieldWithDefault(msg, 1, 0),
    initialLevel: jspb.Message.getFieldWithDefault(msg, 2, 0),
    timeTriggerIsActive: jspb.Message.getFieldWithDefault(msg, 3, 0),
    type: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.IOOutputMessage}
 */
proto.IOOutputMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.IOOutputMessage;
  return proto.IOOutputMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.IOOutputMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.IOOutputMessage}
 */
proto.IOOutputMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIndex(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setInitialLevel(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTimeTriggerIsActive(value);
      break;
    case 4:
      var value = /** @type {!proto.TriggerOperationType} */ (reader.readEnum());
      msg.setType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.IOOutputMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.IOOutputMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.IOOutputMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.IOOutputMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIndex();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getInitialLevel();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getTimeTriggerIsActive();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
};


/**
 * optional uint32 index = 1;
 * @return {number}
 */
proto.IOOutputMessage.prototype.getIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.IOOutputMessage.prototype.setIndex = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 initial_level = 2;
 * @return {number}
 */
proto.IOOutputMessage.prototype.getInitialLevel = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.IOOutputMessage.prototype.setInitialLevel = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 time_trigger_is_active = 3;
 * @return {number}
 */
proto.IOOutputMessage.prototype.getTimeTriggerIsActive = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.IOOutputMessage.prototype.setTimeTriggerIsActive = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional TriggerOperationType type = 4;
 * @return {!proto.TriggerOperationType}
 */
proto.IOOutputMessage.prototype.getType = function() {
  return /** @type {!proto.TriggerOperationType} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {!proto.TriggerOperationType} value */
proto.IOOutputMessage.prototype.setType = function(value) {
  jspb.Message.setProto3EnumField(this, 4, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.IOIRMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.IOIRMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.IOIRMessage.displayName = 'proto.IOIRMessage';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.IOIRMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.IOIRMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.IOIRMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.IOIRMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    index: jspb.Message.getFieldWithDefault(msg, 1, 0),
    action: (f = msg.getAction()) && proto.TriggerMessage.toObject(includeInstance, f),
    codes: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.IOIRMessage}
 */
proto.IOIRMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.IOIRMessage;
  return proto.IOIRMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.IOIRMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.IOIRMessage}
 */
proto.IOIRMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIndex(value);
      break;
    case 2:
      var value = new proto.TriggerMessage;
      reader.readMessage(value,proto.TriggerMessage.deserializeBinaryFromReader);
      msg.setAction(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCodes(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.IOIRMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.IOIRMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.IOIRMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.IOIRMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIndex();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getAction();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.TriggerMessage.serializeBinaryToWriter
    );
  }
  f = message.getCodes();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
};


/**
 * optional uint32 index = 1;
 * @return {number}
 */
proto.IOIRMessage.prototype.getIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.IOIRMessage.prototype.setIndex = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional TriggerMessage action = 2;
 * @return {?proto.TriggerMessage}
 */
proto.IOIRMessage.prototype.getAction = function() {
  return /** @type{?proto.TriggerMessage} */ (
    jspb.Message.getWrapperField(this, proto.TriggerMessage, 2));
};


/** @param {?proto.TriggerMessage|undefined} value */
proto.IOIRMessage.prototype.setAction = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.IOIRMessage.prototype.clearAction = function() {
  this.setAction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.IOIRMessage.prototype.hasAction = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint32 codes = 3;
 * @return {number}
 */
proto.IOIRMessage.prototype.getCodes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.IOIRMessage.prototype.setCodes = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SensorMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SensorMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.SensorMessage.displayName = 'proto.SensorMessage';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SensorMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.SensorMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SensorMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SensorMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    profile: jspb.Message.getFieldWithDefault(msg, 1, 0),
    index: jspb.Message.getFieldWithDefault(msg, 2, 0),
    sensorAddress: jspb.Message.getFieldWithDefault(msg, 3, 0),
    sensorDaliLine: jspb.Message.getFieldWithDefault(msg, 4, 0),
    addressQuery: jspb.Message.getFieldWithDefault(msg, 5, 0),
    controlDaliLine: jspb.Message.getFieldWithDefault(msg, 6, 0),
    controlGroup: jspb.Message.getFieldWithDefault(msg, 7, 0),
    lightSetpoint: jspb.Message.getFieldWithDefault(msg, 8, 0),
    warningSetpoint: jspb.Message.getFieldWithDefault(msg, 9, 0),
    motionOnly: jspb.Message.getFieldWithDefault(msg, 10, 0),
    timeoutValues: jspb.Message.getFieldWithDefault(msg, 11, 0),
    warningValues: jspb.Message.getFieldWithDefault(msg, 12, 0),
    disableValues: jspb.Message.getFieldWithDefault(msg, 13, 0),
    input1Pm: jspb.Message.getFieldWithDefault(msg, 14, 0),
    input2Pm: jspb.Message.getFieldWithDefault(msg, 15, 0),
    sensorStates: jspb.Message.getFieldWithDefault(msg, 16, 0),
    motionSensors: jspb.Message.getFieldWithDefault(msg, 17, 0),
    luxSensors: jspb.Message.getFieldWithDefault(msg, 18, 0),
    offFlag: jspb.Message.getFieldWithDefault(msg, 19, 0),
    isProgrammed: jspb.Message.getFieldWithDefault(msg, 20, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SensorMessage}
 */
proto.SensorMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SensorMessage;
  return proto.SensorMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SensorMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SensorMessage}
 */
proto.SensorMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setProfile(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIndex(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSensorAddress(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSensorDaliLine(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAddressQuery(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setControlDaliLine(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setControlGroup(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLightSetpoint(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setWarningSetpoint(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMotionOnly(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTimeoutValues(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setWarningValues(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setDisableValues(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setInput1Pm(value);
      break;
    case 15:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setInput2Pm(value);
      break;
    case 16:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSensorStates(value);
      break;
    case 17:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMotionSensors(value);
      break;
    case 18:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLuxSensors(value);
      break;
    case 19:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setOffFlag(value);
      break;
    case 20:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsProgrammed(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SensorMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SensorMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SensorMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SensorMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProfile();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getIndex();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getSensorAddress();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getSensorDaliLine();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getAddressQuery();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = message.getControlDaliLine();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
  f = message.getControlGroup();
  if (f !== 0) {
    writer.writeUint32(
      7,
      f
    );
  }
  f = message.getLightSetpoint();
  if (f !== 0) {
    writer.writeUint32(
      8,
      f
    );
  }
  f = message.getWarningSetpoint();
  if (f !== 0) {
    writer.writeUint32(
      9,
      f
    );
  }
  f = message.getMotionOnly();
  if (f !== 0) {
    writer.writeUint32(
      10,
      f
    );
  }
  f = message.getTimeoutValues();
  if (f !== 0) {
    writer.writeUint32(
      11,
      f
    );
  }
  f = message.getWarningValues();
  if (f !== 0) {
    writer.writeUint32(
      12,
      f
    );
  }
  f = message.getDisableValues();
  if (f !== 0) {
    writer.writeUint32(
      13,
      f
    );
  }
  f = message.getInput1Pm();
  if (f !== 0) {
    writer.writeUint32(
      14,
      f
    );
  }
  f = message.getInput2Pm();
  if (f !== 0) {
    writer.writeUint32(
      15,
      f
    );
  }
  f = message.getSensorStates();
  if (f !== 0) {
    writer.writeUint32(
      16,
      f
    );
  }
  f = message.getMotionSensors();
  if (f !== 0) {
    writer.writeUint32(
      17,
      f
    );
  }
  f = message.getLuxSensors();
  if (f !== 0) {
    writer.writeUint32(
      18,
      f
    );
  }
  f = message.getOffFlag();
  if (f !== 0) {
    writer.writeUint32(
      19,
      f
    );
  }
  f = message.getIsProgrammed();
  if (f) {
    writer.writeBool(
      20,
      f
    );
  }
};


/**
 * optional uint32 profile = 1;
 * @return {number}
 */
proto.SensorMessage.prototype.getProfile = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.SensorMessage.prototype.setProfile = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 index = 2;
 * @return {number}
 */
proto.SensorMessage.prototype.getIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.SensorMessage.prototype.setIndex = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 sensor_address = 3;
 * @return {number}
 */
proto.SensorMessage.prototype.getSensorAddress = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.SensorMessage.prototype.setSensorAddress = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 sensor_dali_line = 4;
 * @return {number}
 */
proto.SensorMessage.prototype.getSensorDaliLine = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.SensorMessage.prototype.setSensorDaliLine = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint32 address_query = 5;
 * @return {number}
 */
proto.SensorMessage.prototype.getAddressQuery = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.SensorMessage.prototype.setAddressQuery = function(value) {
  jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional uint32 control_dali_line = 6;
 * @return {number}
 */
proto.SensorMessage.prototype.getControlDaliLine = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.SensorMessage.prototype.setControlDaliLine = function(value) {
  jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional uint32 control_group = 7;
 * @return {number}
 */
proto.SensorMessage.prototype.getControlGroup = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {number} value */
proto.SensorMessage.prototype.setControlGroup = function(value) {
  jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional uint32 light_setpoint = 8;
 * @return {number}
 */
proto.SensorMessage.prototype.getLightSetpoint = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/** @param {number} value */
proto.SensorMessage.prototype.setLightSetpoint = function(value) {
  jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional uint32 warning_setpoint = 9;
 * @return {number}
 */
proto.SensorMessage.prototype.getWarningSetpoint = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/** @param {number} value */
proto.SensorMessage.prototype.setWarningSetpoint = function(value) {
  jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional uint32 motion_only = 10;
 * @return {number}
 */
proto.SensorMessage.prototype.getMotionOnly = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/** @param {number} value */
proto.SensorMessage.prototype.setMotionOnly = function(value) {
  jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional uint32 timeout_values = 11;
 * @return {number}
 */
proto.SensorMessage.prototype.getTimeoutValues = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/** @param {number} value */
proto.SensorMessage.prototype.setTimeoutValues = function(value) {
  jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional uint32 warning_values = 12;
 * @return {number}
 */
proto.SensorMessage.prototype.getWarningValues = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/** @param {number} value */
proto.SensorMessage.prototype.setWarningValues = function(value) {
  jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional uint32 disable_values = 13;
 * @return {number}
 */
proto.SensorMessage.prototype.getDisableValues = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/** @param {number} value */
proto.SensorMessage.prototype.setDisableValues = function(value) {
  jspb.Message.setProto3IntField(this, 13, value);
};


/**
 * optional uint32 input_1_pm = 14;
 * @return {number}
 */
proto.SensorMessage.prototype.getInput1Pm = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/** @param {number} value */
proto.SensorMessage.prototype.setInput1Pm = function(value) {
  jspb.Message.setProto3IntField(this, 14, value);
};


/**
 * optional uint32 input_2_pm = 15;
 * @return {number}
 */
proto.SensorMessage.prototype.getInput2Pm = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};


/** @param {number} value */
proto.SensorMessage.prototype.setInput2Pm = function(value) {
  jspb.Message.setProto3IntField(this, 15, value);
};


/**
 * optional uint32 sensor_states = 16;
 * @return {number}
 */
proto.SensorMessage.prototype.getSensorStates = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 16, 0));
};


/** @param {number} value */
proto.SensorMessage.prototype.setSensorStates = function(value) {
  jspb.Message.setProto3IntField(this, 16, value);
};


/**
 * optional uint32 motion_sensors = 17;
 * @return {number}
 */
proto.SensorMessage.prototype.getMotionSensors = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 17, 0));
};


/** @param {number} value */
proto.SensorMessage.prototype.setMotionSensors = function(value) {
  jspb.Message.setProto3IntField(this, 17, value);
};


/**
 * optional uint32 lux_sensors = 18;
 * @return {number}
 */
proto.SensorMessage.prototype.getLuxSensors = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 18, 0));
};


/** @param {number} value */
proto.SensorMessage.prototype.setLuxSensors = function(value) {
  jspb.Message.setProto3IntField(this, 18, value);
};


/**
 * optional uint32 off_flag = 19;
 * @return {number}
 */
proto.SensorMessage.prototype.getOffFlag = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 19, 0));
};


/** @param {number} value */
proto.SensorMessage.prototype.setOffFlag = function(value) {
  jspb.Message.setProto3IntField(this, 19, value);
};


/**
 * optional bool is_programmed = 20;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.SensorMessage.prototype.getIsProgrammed = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 20, false));
};


/** @param {boolean} value */
proto.SensorMessage.prototype.setIsProgrammed = function(value) {
  jspb.Message.setProto3BooleanField(this, 20, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ListStepMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ListStepMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ListStepMessage.displayName = 'proto.ListStepMessage';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ListStepMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.ListStepMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ListStepMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ListStepMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    stepIndex: jspb.Message.getFieldWithDefault(msg, 1, 0),
    action: (f = msg.getAction()) && proto.TriggerMessage.toObject(includeInstance, f),
    timeSeconds: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ListStepMessage}
 */
proto.ListStepMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ListStepMessage;
  return proto.ListStepMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ListStepMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ListStepMessage}
 */
proto.ListStepMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setStepIndex(value);
      break;
    case 2:
      var value = new proto.TriggerMessage;
      reader.readMessage(value,proto.TriggerMessage.deserializeBinaryFromReader);
      msg.setAction(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTimeSeconds(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ListStepMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ListStepMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ListStepMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ListStepMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStepIndex();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getAction();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.TriggerMessage.serializeBinaryToWriter
    );
  }
  f = message.getTimeSeconds();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
};


/**
 * optional uint32 step_index = 1;
 * @return {number}
 */
proto.ListStepMessage.prototype.getStepIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.ListStepMessage.prototype.setStepIndex = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional TriggerMessage action = 2;
 * @return {?proto.TriggerMessage}
 */
proto.ListStepMessage.prototype.getAction = function() {
  return /** @type{?proto.TriggerMessage} */ (
    jspb.Message.getWrapperField(this, proto.TriggerMessage, 2));
};


/** @param {?proto.TriggerMessage|undefined} value */
proto.ListStepMessage.prototype.setAction = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.ListStepMessage.prototype.clearAction = function() {
  this.setAction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.ListStepMessage.prototype.hasAction = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint32 time_seconds = 3;
 * @return {number}
 */
proto.ListStepMessage.prototype.getTimeSeconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.ListStepMessage.prototype.setTimeSeconds = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.AlarmMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.AlarmMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.AlarmMessage.displayName = 'proto.AlarmMessage';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.AlarmMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.AlarmMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.AlarmMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AlarmMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    index: jspb.Message.getFieldWithDefault(msg, 1, 0),
    enabled: jspb.Message.getFieldWithDefault(msg, 2, false),
    startTime: (f = msg.getStartTime()) && proto.TimeClockMessage.toObject(includeInstance, f),
    endTime: (f = msg.getEndTime()) && proto.TimeClockMessage.toObject(includeInstance, f),
    startTrigger: (f = msg.getStartTrigger()) && proto.TriggerMessage.toObject(includeInstance, f),
    endTrigger: (f = msg.getEndTrigger()) && proto.TriggerMessage.toObject(includeInstance, f),
    astroStart: jspb.Message.getFieldWithDefault(msg, 7, 0),
    astroEnd: jspb.Message.getFieldWithDefault(msg, 8, 0),
    repeat: jspb.Message.getFieldWithDefault(msg, 9, 0),
    repeatDayBitmask: jspb.Message.getFieldWithDefault(msg, 10, 0),
    repeatMonthBitmask: jspb.Message.getFieldWithDefault(msg, 11, 0),
    yearly: jspb.Message.getFieldWithDefault(msg, 12, false),
    startOffsetIsBefore: jspb.Message.getFieldWithDefault(msg, 13, false),
    endOffsetIsBefore: jspb.Message.getFieldWithDefault(msg, 14, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.AlarmMessage}
 */
proto.AlarmMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.AlarmMessage;
  return proto.AlarmMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.AlarmMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.AlarmMessage}
 */
proto.AlarmMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIndex(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnabled(value);
      break;
    case 3:
      var value = new proto.TimeClockMessage;
      reader.readMessage(value,proto.TimeClockMessage.deserializeBinaryFromReader);
      msg.setStartTime(value);
      break;
    case 4:
      var value = new proto.TimeClockMessage;
      reader.readMessage(value,proto.TimeClockMessage.deserializeBinaryFromReader);
      msg.setEndTime(value);
      break;
    case 5:
      var value = new proto.TriggerMessage;
      reader.readMessage(value,proto.TriggerMessage.deserializeBinaryFromReader);
      msg.setStartTrigger(value);
      break;
    case 6:
      var value = new proto.TriggerMessage;
      reader.readMessage(value,proto.TriggerMessage.deserializeBinaryFromReader);
      msg.setEndTrigger(value);
      break;
    case 7:
      var value = /** @type {!proto.AlarmAstroType} */ (reader.readEnum());
      msg.setAstroStart(value);
      break;
    case 8:
      var value = /** @type {!proto.AlarmAstroType} */ (reader.readEnum());
      msg.setAstroEnd(value);
      break;
    case 9:
      var value = /** @type {!proto.AlarmRepeatType} */ (reader.readEnum());
      msg.setRepeat(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setRepeatDayBitmask(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setRepeatMonthBitmask(value);
      break;
    case 12:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setYearly(value);
      break;
    case 13:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setStartOffsetIsBefore(value);
      break;
    case 14:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEndOffsetIsBefore(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.AlarmMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.AlarmMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.AlarmMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AlarmMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIndex();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getEnabled();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getStartTime();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.TimeClockMessage.serializeBinaryToWriter
    );
  }
  f = message.getEndTime();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.TimeClockMessage.serializeBinaryToWriter
    );
  }
  f = message.getStartTrigger();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.TriggerMessage.serializeBinaryToWriter
    );
  }
  f = message.getEndTrigger();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.TriggerMessage.serializeBinaryToWriter
    );
  }
  f = message.getAstroStart();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = message.getAstroEnd();
  if (f !== 0.0) {
    writer.writeEnum(
      8,
      f
    );
  }
  f = message.getRepeat();
  if (f !== 0.0) {
    writer.writeEnum(
      9,
      f
    );
  }
  f = message.getRepeatDayBitmask();
  if (f !== 0) {
    writer.writeUint32(
      10,
      f
    );
  }
  f = message.getRepeatMonthBitmask();
  if (f !== 0) {
    writer.writeUint32(
      11,
      f
    );
  }
  f = message.getYearly();
  if (f) {
    writer.writeBool(
      12,
      f
    );
  }
  f = message.getStartOffsetIsBefore();
  if (f) {
    writer.writeBool(
      13,
      f
    );
  }
  f = message.getEndOffsetIsBefore();
  if (f) {
    writer.writeBool(
      14,
      f
    );
  }
};


/**
 * optional uint32 index = 1;
 * @return {number}
 */
proto.AlarmMessage.prototype.getIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.AlarmMessage.prototype.setIndex = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bool enabled = 2;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.AlarmMessage.prototype.getEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 2, false));
};


/** @param {boolean} value */
proto.AlarmMessage.prototype.setEnabled = function(value) {
  jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional TimeClockMessage start_time = 3;
 * @return {?proto.TimeClockMessage}
 */
proto.AlarmMessage.prototype.getStartTime = function() {
  return /** @type{?proto.TimeClockMessage} */ (
    jspb.Message.getWrapperField(this, proto.TimeClockMessage, 3));
};


/** @param {?proto.TimeClockMessage|undefined} value */
proto.AlarmMessage.prototype.setStartTime = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.AlarmMessage.prototype.clearStartTime = function() {
  this.setStartTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.AlarmMessage.prototype.hasStartTime = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional TimeClockMessage end_time = 4;
 * @return {?proto.TimeClockMessage}
 */
proto.AlarmMessage.prototype.getEndTime = function() {
  return /** @type{?proto.TimeClockMessage} */ (
    jspb.Message.getWrapperField(this, proto.TimeClockMessage, 4));
};


/** @param {?proto.TimeClockMessage|undefined} value */
proto.AlarmMessage.prototype.setEndTime = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.AlarmMessage.prototype.clearEndTime = function() {
  this.setEndTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.AlarmMessage.prototype.hasEndTime = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional TriggerMessage start_trigger = 5;
 * @return {?proto.TriggerMessage}
 */
proto.AlarmMessage.prototype.getStartTrigger = function() {
  return /** @type{?proto.TriggerMessage} */ (
    jspb.Message.getWrapperField(this, proto.TriggerMessage, 5));
};


/** @param {?proto.TriggerMessage|undefined} value */
proto.AlarmMessage.prototype.setStartTrigger = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.AlarmMessage.prototype.clearStartTrigger = function() {
  this.setStartTrigger(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.AlarmMessage.prototype.hasStartTrigger = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional TriggerMessage end_trigger = 6;
 * @return {?proto.TriggerMessage}
 */
proto.AlarmMessage.prototype.getEndTrigger = function() {
  return /** @type{?proto.TriggerMessage} */ (
    jspb.Message.getWrapperField(this, proto.TriggerMessage, 6));
};


/** @param {?proto.TriggerMessage|undefined} value */
proto.AlarmMessage.prototype.setEndTrigger = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


proto.AlarmMessage.prototype.clearEndTrigger = function() {
  this.setEndTrigger(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.AlarmMessage.prototype.hasEndTrigger = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional AlarmAstroType astro_start = 7;
 * @return {!proto.AlarmAstroType}
 */
proto.AlarmMessage.prototype.getAstroStart = function() {
  return /** @type {!proto.AlarmAstroType} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {!proto.AlarmAstroType} value */
proto.AlarmMessage.prototype.setAstroStart = function(value) {
  jspb.Message.setProto3EnumField(this, 7, value);
};


/**
 * optional AlarmAstroType astro_end = 8;
 * @return {!proto.AlarmAstroType}
 */
proto.AlarmMessage.prototype.getAstroEnd = function() {
  return /** @type {!proto.AlarmAstroType} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/** @param {!proto.AlarmAstroType} value */
proto.AlarmMessage.prototype.setAstroEnd = function(value) {
  jspb.Message.setProto3EnumField(this, 8, value);
};


/**
 * optional AlarmRepeatType repeat = 9;
 * @return {!proto.AlarmRepeatType}
 */
proto.AlarmMessage.prototype.getRepeat = function() {
  return /** @type {!proto.AlarmRepeatType} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/** @param {!proto.AlarmRepeatType} value */
proto.AlarmMessage.prototype.setRepeat = function(value) {
  jspb.Message.setProto3EnumField(this, 9, value);
};


/**
 * optional uint32 repeat_day_bitmask = 10;
 * @return {number}
 */
proto.AlarmMessage.prototype.getRepeatDayBitmask = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/** @param {number} value */
proto.AlarmMessage.prototype.setRepeatDayBitmask = function(value) {
  jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional uint32 repeat_month_bitmask = 11;
 * @return {number}
 */
proto.AlarmMessage.prototype.getRepeatMonthBitmask = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/** @param {number} value */
proto.AlarmMessage.prototype.setRepeatMonthBitmask = function(value) {
  jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional bool yearly = 12;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.AlarmMessage.prototype.getYearly = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 12, false));
};


/** @param {boolean} value */
proto.AlarmMessage.prototype.setYearly = function(value) {
  jspb.Message.setProto3BooleanField(this, 12, value);
};


/**
 * optional bool start_offset_is_before = 13;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.AlarmMessage.prototype.getStartOffsetIsBefore = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 13, false));
};


/** @param {boolean} value */
proto.AlarmMessage.prototype.setStartOffsetIsBefore = function(value) {
  jspb.Message.setProto3BooleanField(this, 13, value);
};


/**
 * optional bool end_offset_is_before = 14;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.AlarmMessage.prototype.getEndOffsetIsBefore = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 14, false));
};


/** @param {boolean} value */
proto.AlarmMessage.prototype.setEndOffsetIsBefore = function(value) {
  jspb.Message.setProto3BooleanField(this, 14, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.BurnInMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.BurnInMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.BurnInMessage.displayName = 'proto.BurnInMessage';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.BurnInMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.BurnInMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.BurnInMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.BurnInMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    index: jspb.Message.getFieldWithDefault(msg, 1, 0),
    line: jspb.Message.getFieldWithDefault(msg, 2, 0),
    address: jspb.Message.getFieldWithDefault(msg, 3, 0),
    queryAddress: jspb.Message.getFieldWithDefault(msg, 4, 0),
    time: jspb.Message.getFieldWithDefault(msg, 5, 0),
    remaining: jspb.Message.getFieldWithDefault(msg, 6, 0),
    states: (f = msg.getStates()) && proto.BurnInBitsMessage.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.BurnInMessage}
 */
proto.BurnInMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.BurnInMessage;
  return proto.BurnInMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.BurnInMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.BurnInMessage}
 */
proto.BurnInMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIndex(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLine(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAddress(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setQueryAddress(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTime(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setRemaining(value);
      break;
    case 7:
      var value = new proto.BurnInBitsMessage;
      reader.readMessage(value,proto.BurnInBitsMessage.deserializeBinaryFromReader);
      msg.setStates(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.BurnInMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.BurnInMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.BurnInMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.BurnInMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIndex();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getLine();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getAddress();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getQueryAddress();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getTime();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = message.getRemaining();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
  f = message.getStates();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.BurnInBitsMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 index = 1;
 * @return {number}
 */
proto.BurnInMessage.prototype.getIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.BurnInMessage.prototype.setIndex = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 line = 2;
 * @return {number}
 */
proto.BurnInMessage.prototype.getLine = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.BurnInMessage.prototype.setLine = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 address = 3;
 * @return {number}
 */
proto.BurnInMessage.prototype.getAddress = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.BurnInMessage.prototype.setAddress = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 query_address = 4;
 * @return {number}
 */
proto.BurnInMessage.prototype.getQueryAddress = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.BurnInMessage.prototype.setQueryAddress = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint32 time = 5;
 * @return {number}
 */
proto.BurnInMessage.prototype.getTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.BurnInMessage.prototype.setTime = function(value) {
  jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional uint32 remaining = 6;
 * @return {number}
 */
proto.BurnInMessage.prototype.getRemaining = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.BurnInMessage.prototype.setRemaining = function(value) {
  jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional BurnInBitsMessage states = 7;
 * @return {?proto.BurnInBitsMessage}
 */
proto.BurnInMessage.prototype.getStates = function() {
  return /** @type{?proto.BurnInBitsMessage} */ (
    jspb.Message.getWrapperField(this, proto.BurnInBitsMessage, 7));
};


/** @param {?proto.BurnInBitsMessage|undefined} value */
proto.BurnInMessage.prototype.setStates = function(value) {
  jspb.Message.setWrapperField(this, 7, value);
};


proto.BurnInMessage.prototype.clearStates = function() {
  this.setStates(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.BurnInMessage.prototype.hasStates = function() {
  return jspb.Message.getField(this, 7) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ExternalTriggerMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ExternalTriggerMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ExternalTriggerMessage.displayName = 'proto.ExternalTriggerMessage';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ExternalTriggerMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.ExternalTriggerMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ExternalTriggerMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ExternalTriggerMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    trigger: (f = msg.getTrigger()) && proto.TriggerMessage.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ExternalTriggerMessage}
 */
proto.ExternalTriggerMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ExternalTriggerMessage;
  return proto.ExternalTriggerMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ExternalTriggerMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ExternalTriggerMessage}
 */
proto.ExternalTriggerMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.TriggerMessage;
      reader.readMessage(value,proto.TriggerMessage.deserializeBinaryFromReader);
      msg.setTrigger(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ExternalTriggerMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ExternalTriggerMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ExternalTriggerMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ExternalTriggerMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTrigger();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.TriggerMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional TriggerMessage trigger = 1;
 * @return {?proto.TriggerMessage}
 */
proto.ExternalTriggerMessage.prototype.getTrigger = function() {
  return /** @type{?proto.TriggerMessage} */ (
    jspb.Message.getWrapperField(this, proto.TriggerMessage, 1));
};


/** @param {?proto.TriggerMessage|undefined} value */
proto.ExternalTriggerMessage.prototype.setTrigger = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.ExternalTriggerMessage.prototype.clearTrigger = function() {
  this.setTrigger(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.ExternalTriggerMessage.prototype.hasTrigger = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.InputMultiMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.InputMultiMessage.repeatedFields_, null);
};
goog.inherits(proto.InputMultiMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.InputMultiMessage.displayName = 'proto.InputMultiMessage';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.InputMultiMessage.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.InputMultiMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.InputMultiMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.InputMultiMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.InputMultiMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    profile: jspb.Message.getFieldWithDefault(msg, 1, 0),
    inputsList: jspb.Message.toObjectList(msg.getInputsList(),
    proto.IOInputMessage.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.InputMultiMessage}
 */
proto.InputMultiMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.InputMultiMessage;
  return proto.InputMultiMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.InputMultiMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.InputMultiMessage}
 */
proto.InputMultiMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setProfile(value);
      break;
    case 2:
      var value = new proto.IOInputMessage;
      reader.readMessage(value,proto.IOInputMessage.deserializeBinaryFromReader);
      msg.addInputs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.InputMultiMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.InputMultiMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.InputMultiMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.InputMultiMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProfile();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getInputsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.IOInputMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 profile = 1;
 * @return {number}
 */
proto.InputMultiMessage.prototype.getProfile = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.InputMultiMessage.prototype.setProfile = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated IOInputMessage inputs = 2;
 * @return {!Array<!proto.IOInputMessage>}
 */
proto.InputMultiMessage.prototype.getInputsList = function() {
  return /** @type{!Array<!proto.IOInputMessage>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.IOInputMessage, 2));
};


/** @param {!Array<!proto.IOInputMessage>} value */
proto.InputMultiMessage.prototype.setInputsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.IOInputMessage=} opt_value
 * @param {number=} opt_index
 * @return {!proto.IOInputMessage}
 */
proto.InputMultiMessage.prototype.addInputs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.IOInputMessage, opt_index);
};


proto.InputMultiMessage.prototype.clearInputsList = function() {
  this.setInputsList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.OutputMultiMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.OutputMultiMessage.repeatedFields_, null);
};
goog.inherits(proto.OutputMultiMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.OutputMultiMessage.displayName = 'proto.OutputMultiMessage';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.OutputMultiMessage.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.OutputMultiMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.OutputMultiMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.OutputMultiMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.OutputMultiMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    profile: jspb.Message.getFieldWithDefault(msg, 1, 0),
    outputsList: jspb.Message.toObjectList(msg.getOutputsList(),
    proto.IOOutputMessage.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.OutputMultiMessage}
 */
proto.OutputMultiMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.OutputMultiMessage;
  return proto.OutputMultiMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.OutputMultiMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.OutputMultiMessage}
 */
proto.OutputMultiMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setProfile(value);
      break;
    case 2:
      var value = new proto.IOOutputMessage;
      reader.readMessage(value,proto.IOOutputMessage.deserializeBinaryFromReader);
      msg.addOutputs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.OutputMultiMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.OutputMultiMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.OutputMultiMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.OutputMultiMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProfile();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getOutputsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.IOOutputMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 profile = 1;
 * @return {number}
 */
proto.OutputMultiMessage.prototype.getProfile = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.OutputMultiMessage.prototype.setProfile = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated IOOutputMessage outputs = 2;
 * @return {!Array<!proto.IOOutputMessage>}
 */
proto.OutputMultiMessage.prototype.getOutputsList = function() {
  return /** @type{!Array<!proto.IOOutputMessage>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.IOOutputMessage, 2));
};


/** @param {!Array<!proto.IOOutputMessage>} value */
proto.OutputMultiMessage.prototype.setOutputsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.IOOutputMessage=} opt_value
 * @param {number=} opt_index
 * @return {!proto.IOOutputMessage}
 */
proto.OutputMultiMessage.prototype.addOutputs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.IOOutputMessage, opt_index);
};


proto.OutputMultiMessage.prototype.clearOutputsList = function() {
  this.setOutputsList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.IRMultiMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.IRMultiMessage.repeatedFields_, null);
};
goog.inherits(proto.IRMultiMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.IRMultiMessage.displayName = 'proto.IRMultiMessage';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.IRMultiMessage.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.IRMultiMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.IRMultiMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.IRMultiMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.IRMultiMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    profile: jspb.Message.getFieldWithDefault(msg, 1, 0),
    irsList: jspb.Message.toObjectList(msg.getIrsList(),
    proto.IOIRMessage.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.IRMultiMessage}
 */
proto.IRMultiMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.IRMultiMessage;
  return proto.IRMultiMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.IRMultiMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.IRMultiMessage}
 */
proto.IRMultiMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setProfile(value);
      break;
    case 2:
      var value = new proto.IOIRMessage;
      reader.readMessage(value,proto.IOIRMessage.deserializeBinaryFromReader);
      msg.addIrs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.IRMultiMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.IRMultiMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.IRMultiMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.IRMultiMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProfile();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getIrsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.IOIRMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 profile = 1;
 * @return {number}
 */
proto.IRMultiMessage.prototype.getProfile = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.IRMultiMessage.prototype.setProfile = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated IOIRMessage irs = 2;
 * @return {!Array<!proto.IOIRMessage>}
 */
proto.IRMultiMessage.prototype.getIrsList = function() {
  return /** @type{!Array<!proto.IOIRMessage>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.IOIRMessage, 2));
};


/** @param {!Array<!proto.IOIRMessage>} value */
proto.IRMultiMessage.prototype.setIrsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.IOIRMessage=} opt_value
 * @param {number=} opt_index
 * @return {!proto.IOIRMessage}
 */
proto.IRMultiMessage.prototype.addIrs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.IOIRMessage, opt_index);
};


proto.IRMultiMessage.prototype.clearIrsList = function() {
  this.setIrsList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ListMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ListMessage.repeatedFields_, null);
};
goog.inherits(proto.ListMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ListMessage.displayName = 'proto.ListMessage';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ListMessage.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ListMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.ListMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ListMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ListMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    listIndex: jspb.Message.getFieldWithDefault(msg, 1, 0),
    stepList: jspb.Message.toObjectList(msg.getStepList(),
    proto.ListStepMessage.toObject, includeInstance),
    listState: jspb.Message.getFieldWithDefault(msg, 3, 0),
    totalStepCount: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ListMessage}
 */
proto.ListMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ListMessage;
  return proto.ListMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ListMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ListMessage}
 */
proto.ListMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setListIndex(value);
      break;
    case 2:
      var value = new proto.ListStepMessage;
      reader.readMessage(value,proto.ListStepMessage.deserializeBinaryFromReader);
      msg.addStep(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setListState(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTotalStepCount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ListMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ListMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ListMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ListMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getListIndex();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getStepList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.ListStepMessage.serializeBinaryToWriter
    );
  }
  f = message.getListState();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getTotalStepCount();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
};


/**
 * optional uint32 list_index = 1;
 * @return {number}
 */
proto.ListMessage.prototype.getListIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.ListMessage.prototype.setListIndex = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated ListStepMessage step = 2;
 * @return {!Array<!proto.ListStepMessage>}
 */
proto.ListMessage.prototype.getStepList = function() {
  return /** @type{!Array<!proto.ListStepMessage>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ListStepMessage, 2));
};


/** @param {!Array<!proto.ListStepMessage>} value */
proto.ListMessage.prototype.setStepList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.ListStepMessage=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ListStepMessage}
 */
proto.ListMessage.prototype.addStep = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.ListStepMessage, opt_index);
};


proto.ListMessage.prototype.clearStepList = function() {
  this.setStepList([]);
};


/**
 * optional uint32 list_state = 3;
 * @return {number}
 */
proto.ListMessage.prototype.getListState = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.ListMessage.prototype.setListState = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 total_step_count = 4;
 * @return {number}
 */
proto.ListMessage.prototype.getTotalStepCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.ListMessage.prototype.setTotalStepCount = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ExtendedListMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ExtendedListMessage.repeatedFields_, null);
};
goog.inherits(proto.ExtendedListMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ExtendedListMessage.displayName = 'proto.ExtendedListMessage';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ExtendedListMessage.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ExtendedListMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.ExtendedListMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ExtendedListMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ExtendedListMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    listIndex: jspb.Message.getFieldWithDefault(msg, 1, 0),
    stepIndexOffset: jspb.Message.getFieldWithDefault(msg, 2, 0),
    stepList: jspb.Message.toObjectList(msg.getStepList(),
    proto.ListStepMessage.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ExtendedListMessage}
 */
proto.ExtendedListMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ExtendedListMessage;
  return proto.ExtendedListMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ExtendedListMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ExtendedListMessage}
 */
proto.ExtendedListMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setListIndex(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setStepIndexOffset(value);
      break;
    case 3:
      var value = new proto.ListStepMessage;
      reader.readMessage(value,proto.ListStepMessage.deserializeBinaryFromReader);
      msg.addStep(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ExtendedListMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ExtendedListMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ExtendedListMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ExtendedListMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getListIndex();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getStepIndexOffset();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getStepList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.ListStepMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 list_index = 1;
 * @return {number}
 */
proto.ExtendedListMessage.prototype.getListIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.ExtendedListMessage.prototype.setListIndex = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 step_index_offset = 2;
 * @return {number}
 */
proto.ExtendedListMessage.prototype.getStepIndexOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.ExtendedListMessage.prototype.setStepIndexOffset = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * repeated ListStepMessage step = 3;
 * @return {!Array<!proto.ListStepMessage>}
 */
proto.ExtendedListMessage.prototype.getStepList = function() {
  return /** @type{!Array<!proto.ListStepMessage>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ListStepMessage, 3));
};


/** @param {!Array<!proto.ListStepMessage>} value */
proto.ExtendedListMessage.prototype.setStepList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.ListStepMessage=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ListStepMessage}
 */
proto.ExtendedListMessage.prototype.addStep = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.ListStepMessage, opt_index);
};


proto.ExtendedListMessage.prototype.clearStepList = function() {
  this.setStepList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.AlarmMultiMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.AlarmMultiMessage.repeatedFields_, null);
};
goog.inherits(proto.AlarmMultiMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.AlarmMultiMessage.displayName = 'proto.AlarmMultiMessage';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.AlarmMultiMessage.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.AlarmMultiMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.AlarmMultiMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.AlarmMultiMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AlarmMultiMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    alarmList: jspb.Message.toObjectList(msg.getAlarmList(),
    proto.AlarmMessage.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.AlarmMultiMessage}
 */
proto.AlarmMultiMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.AlarmMultiMessage;
  return proto.AlarmMultiMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.AlarmMultiMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.AlarmMultiMessage}
 */
proto.AlarmMultiMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.AlarmMessage;
      reader.readMessage(value,proto.AlarmMessage.deserializeBinaryFromReader);
      msg.addAlarm(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.AlarmMultiMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.AlarmMultiMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.AlarmMultiMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AlarmMultiMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAlarmList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.AlarmMessage.serializeBinaryToWriter
    );
  }
};


/**
 * repeated AlarmMessage alarm = 1;
 * @return {!Array<!proto.AlarmMessage>}
 */
proto.AlarmMultiMessage.prototype.getAlarmList = function() {
  return /** @type{!Array<!proto.AlarmMessage>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.AlarmMessage, 1));
};


/** @param {!Array<!proto.AlarmMessage>} value */
proto.AlarmMultiMessage.prototype.setAlarmList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.AlarmMessage=} opt_value
 * @param {number=} opt_index
 * @return {!proto.AlarmMessage}
 */
proto.AlarmMultiMessage.prototype.addAlarm = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.AlarmMessage, opt_index);
};


proto.AlarmMultiMessage.prototype.clearAlarmList = function() {
  this.setAlarmList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.BurnInMultiMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.BurnInMultiMessage.repeatedFields_, null);
};
goog.inherits(proto.BurnInMultiMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.BurnInMultiMessage.displayName = 'proto.BurnInMultiMessage';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.BurnInMultiMessage.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.BurnInMultiMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.BurnInMultiMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.BurnInMultiMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.BurnInMultiMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    burninList: jspb.Message.toObjectList(msg.getBurninList(),
    proto.BurnInMessage.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.BurnInMultiMessage}
 */
proto.BurnInMultiMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.BurnInMultiMessage;
  return proto.BurnInMultiMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.BurnInMultiMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.BurnInMultiMessage}
 */
proto.BurnInMultiMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.BurnInMessage;
      reader.readMessage(value,proto.BurnInMessage.deserializeBinaryFromReader);
      msg.addBurnin(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.BurnInMultiMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.BurnInMultiMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.BurnInMultiMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.BurnInMultiMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBurninList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.BurnInMessage.serializeBinaryToWriter
    );
  }
};


/**
 * repeated BurnInMessage burnin = 1;
 * @return {!Array<!proto.BurnInMessage>}
 */
proto.BurnInMultiMessage.prototype.getBurninList = function() {
  return /** @type{!Array<!proto.BurnInMessage>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.BurnInMessage, 1));
};


/** @param {!Array<!proto.BurnInMessage>} value */
proto.BurnInMultiMessage.prototype.setBurninList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.BurnInMessage=} opt_value
 * @param {number=} opt_index
 * @return {!proto.BurnInMessage}
 */
proto.BurnInMultiMessage.prototype.addBurnin = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.BurnInMessage, opt_index);
};


proto.BurnInMultiMessage.prototype.clearBurninList = function() {
  this.setBurninList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.LogicMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.LogicMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.LogicMessage.displayName = 'proto.LogicMessage';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.LogicMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.LogicMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.LogicMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.LogicMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    index: jspb.Message.getFieldWithDefault(msg, 1, 0),
    enabled: jspb.Message.getFieldWithDefault(msg, 2, false),
    comparisonObject: (f = msg.getComparisonObject()) && proto.TriggerMessage.toObject(includeInstance, f),
    comparisonValue: jspb.Message.getFieldWithDefault(msg, 4, 0),
    comparisonType: jspb.Message.getFieldWithDefault(msg, 5, 0),
    actiona: (f = msg.getActiona()) && proto.TriggerMessage.toObject(includeInstance, f),
    actionb: (f = msg.getActionb()) && proto.TriggerMessage.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.LogicMessage}
 */
proto.LogicMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.LogicMessage;
  return proto.LogicMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.LogicMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.LogicMessage}
 */
proto.LogicMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIndex(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnabled(value);
      break;
    case 3:
      var value = new proto.TriggerMessage;
      reader.readMessage(value,proto.TriggerMessage.deserializeBinaryFromReader);
      msg.setComparisonObject(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setComparisonValue(value);
      break;
    case 5:
      var value = /** @type {!proto.LogicComparisonType} */ (reader.readEnum());
      msg.setComparisonType(value);
      break;
    case 6:
      var value = new proto.TriggerMessage;
      reader.readMessage(value,proto.TriggerMessage.deserializeBinaryFromReader);
      msg.setActiona(value);
      break;
    case 7:
      var value = new proto.TriggerMessage;
      reader.readMessage(value,proto.TriggerMessage.deserializeBinaryFromReader);
      msg.setActionb(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.LogicMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.LogicMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.LogicMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.LogicMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIndex();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getEnabled();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getComparisonObject();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.TriggerMessage.serializeBinaryToWriter
    );
  }
  f = message.getComparisonValue();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getComparisonType();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getActiona();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.TriggerMessage.serializeBinaryToWriter
    );
  }
  f = message.getActionb();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.TriggerMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 index = 1;
 * @return {number}
 */
proto.LogicMessage.prototype.getIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.LogicMessage.prototype.setIndex = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bool enabled = 2;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.LogicMessage.prototype.getEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 2, false));
};


/** @param {boolean} value */
proto.LogicMessage.prototype.setEnabled = function(value) {
  jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional TriggerMessage comparison_object = 3;
 * @return {?proto.TriggerMessage}
 */
proto.LogicMessage.prototype.getComparisonObject = function() {
  return /** @type{?proto.TriggerMessage} */ (
    jspb.Message.getWrapperField(this, proto.TriggerMessage, 3));
};


/** @param {?proto.TriggerMessage|undefined} value */
proto.LogicMessage.prototype.setComparisonObject = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.LogicMessage.prototype.clearComparisonObject = function() {
  this.setComparisonObject(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.LogicMessage.prototype.hasComparisonObject = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional uint32 comparison_value = 4;
 * @return {number}
 */
proto.LogicMessage.prototype.getComparisonValue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.LogicMessage.prototype.setComparisonValue = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional LogicComparisonType comparison_type = 5;
 * @return {!proto.LogicComparisonType}
 */
proto.LogicMessage.prototype.getComparisonType = function() {
  return /** @type {!proto.LogicComparisonType} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {!proto.LogicComparisonType} value */
proto.LogicMessage.prototype.setComparisonType = function(value) {
  jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional TriggerMessage actionA = 6;
 * @return {?proto.TriggerMessage}
 */
proto.LogicMessage.prototype.getActiona = function() {
  return /** @type{?proto.TriggerMessage} */ (
    jspb.Message.getWrapperField(this, proto.TriggerMessage, 6));
};


/** @param {?proto.TriggerMessage|undefined} value */
proto.LogicMessage.prototype.setActiona = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


proto.LogicMessage.prototype.clearActiona = function() {
  this.setActiona(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.LogicMessage.prototype.hasActiona = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional TriggerMessage actionB = 7;
 * @return {?proto.TriggerMessage}
 */
proto.LogicMessage.prototype.getActionb = function() {
  return /** @type{?proto.TriggerMessage} */ (
    jspb.Message.getWrapperField(this, proto.TriggerMessage, 7));
};


/** @param {?proto.TriggerMessage|undefined} value */
proto.LogicMessage.prototype.setActionb = function(value) {
  jspb.Message.setWrapperField(this, 7, value);
};


proto.LogicMessage.prototype.clearActionb = function() {
  this.setActionb(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.LogicMessage.prototype.hasActionb = function() {
  return jspb.Message.getField(this, 7) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.LogicMultiMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.LogicMultiMessage.repeatedFields_, null);
};
goog.inherits(proto.LogicMultiMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.LogicMultiMessage.displayName = 'proto.LogicMultiMessage';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.LogicMultiMessage.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.LogicMultiMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.LogicMultiMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.LogicMultiMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.LogicMultiMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    logicList: jspb.Message.toObjectList(msg.getLogicList(),
    proto.LogicMessage.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.LogicMultiMessage}
 */
proto.LogicMultiMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.LogicMultiMessage;
  return proto.LogicMultiMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.LogicMultiMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.LogicMultiMessage}
 */
proto.LogicMultiMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.LogicMessage;
      reader.readMessage(value,proto.LogicMessage.deserializeBinaryFromReader);
      msg.addLogic(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.LogicMultiMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.LogicMultiMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.LogicMultiMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.LogicMultiMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLogicList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.LogicMessage.serializeBinaryToWriter
    );
  }
};


/**
 * repeated LogicMessage logic = 1;
 * @return {!Array<!proto.LogicMessage>}
 */
proto.LogicMultiMessage.prototype.getLogicList = function() {
  return /** @type{!Array<!proto.LogicMessage>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.LogicMessage, 1));
};


/** @param {!Array<!proto.LogicMessage>} value */
proto.LogicMultiMessage.prototype.setLogicList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.LogicMessage=} opt_value
 * @param {number=} opt_index
 * @return {!proto.LogicMessage}
 */
proto.LogicMultiMessage.prototype.addLogic = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.LogicMessage, opt_index);
};


proto.LogicMultiMessage.prototype.clearLogicList = function() {
  this.setLogicList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SensorCommandMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SensorCommandMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.SensorCommandMessage.displayName = 'proto.SensorCommandMessage';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SensorCommandMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.SensorCommandMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SensorCommandMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SensorCommandMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    command: jspb.Message.getFieldWithDefault(msg, 1, 0),
    index: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SensorCommandMessage}
 */
proto.SensorCommandMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SensorCommandMessage;
  return proto.SensorCommandMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SensorCommandMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SensorCommandMessage}
 */
proto.SensorCommandMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCommand(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIndex(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SensorCommandMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SensorCommandMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SensorCommandMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SensorCommandMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommand();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getIndex();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional uint32 command = 1;
 * @return {number}
 */
proto.SensorCommandMessage.prototype.getCommand = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.SensorCommandMessage.prototype.setCommand = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 index = 2;
 * @return {number}
 */
proto.SensorCommandMessage.prototype.getIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.SensorCommandMessage.prototype.setIndex = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ChangeProfileMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ChangeProfileMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ChangeProfileMessage.displayName = 'proto.ChangeProfileMessage';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ChangeProfileMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.ChangeProfileMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ChangeProfileMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ChangeProfileMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    profile: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ChangeProfileMessage}
 */
proto.ChangeProfileMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ChangeProfileMessage;
  return proto.ChangeProfileMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ChangeProfileMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ChangeProfileMessage}
 */
proto.ChangeProfileMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setProfile(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ChangeProfileMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ChangeProfileMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ChangeProfileMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ChangeProfileMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProfile();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * optional uint32 profile = 1;
 * @return {number}
 */
proto.ChangeProfileMessage.prototype.getProfile = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.ChangeProfileMessage.prototype.setProfile = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.IdentifyMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.IdentifyMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.IdentifyMessage.displayName = 'proto.IdentifyMessage';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.IdentifyMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.IdentifyMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.IdentifyMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.IdentifyMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    mac: jspb.Message.getFieldWithDefault(msg, 1, 0),
    ip: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.IdentifyMessage}
 */
proto.IdentifyMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.IdentifyMessage;
  return proto.IdentifyMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.IdentifyMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.IdentifyMessage}
 */
proto.IdentifyMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMac(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setIp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.IdentifyMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.IdentifyMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.IdentifyMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.IdentifyMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMac();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getIp();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
};


/**
 * optional uint64 MAC = 1;
 * @return {number}
 */
proto.IdentifyMessage.prototype.getMac = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.IdentifyMessage.prototype.setMac = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 IP = 2;
 * @return {number}
 */
proto.IdentifyMessage.prototype.getIp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.IdentifyMessage.prototype.setIp = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.UpdateTimeMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.UpdateTimeMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.UpdateTimeMessage.displayName = 'proto.UpdateTimeMessage';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.UpdateTimeMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.UpdateTimeMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.UpdateTimeMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.UpdateTimeMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    time: (f = msg.getTime()) && proto.TimeClockMessage.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.UpdateTimeMessage}
 */
proto.UpdateTimeMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.UpdateTimeMessage;
  return proto.UpdateTimeMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.UpdateTimeMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.UpdateTimeMessage}
 */
proto.UpdateTimeMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.TimeClockMessage;
      reader.readMessage(value,proto.TimeClockMessage.deserializeBinaryFromReader);
      msg.setTime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.UpdateTimeMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.UpdateTimeMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.UpdateTimeMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.UpdateTimeMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTime();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.TimeClockMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional TimeClockMessage time = 1;
 * @return {?proto.TimeClockMessage}
 */
proto.UpdateTimeMessage.prototype.getTime = function() {
  return /** @type{?proto.TimeClockMessage} */ (
    jspb.Message.getWrapperField(this, proto.TimeClockMessage, 1));
};


/** @param {?proto.TimeClockMessage|undefined} value */
proto.UpdateTimeMessage.prototype.setTime = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.UpdateTimeMessage.prototype.clearTime = function() {
  this.setTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.UpdateTimeMessage.prototype.hasTime = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ReadDeviceMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ReadDeviceMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ReadDeviceMessage.displayName = 'proto.ReadDeviceMessage';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ReadDeviceMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.ReadDeviceMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ReadDeviceMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ReadDeviceMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    profile: jspb.Message.getFieldWithDefault(msg, 1, 0),
    type: jspb.Message.getFieldWithDefault(msg, 2, 0),
    index: jspb.Message.getFieldWithDefault(msg, 3, 0),
    secondaryIndex: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ReadDeviceMessage}
 */
proto.ReadDeviceMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ReadDeviceMessage;
  return proto.ReadDeviceMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ReadDeviceMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ReadDeviceMessage}
 */
proto.ReadDeviceMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setProfile(value);
      break;
    case 2:
      var value = /** @type {!proto.ReadType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIndex(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSecondaryIndex(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ReadDeviceMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ReadDeviceMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ReadDeviceMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ReadDeviceMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProfile();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getIndex();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getSecondaryIndex();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
};


/**
 * optional uint32 profile = 1;
 * @return {number}
 */
proto.ReadDeviceMessage.prototype.getProfile = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.ReadDeviceMessage.prototype.setProfile = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional ReadType type = 2;
 * @return {!proto.ReadType}
 */
proto.ReadDeviceMessage.prototype.getType = function() {
  return /** @type {!proto.ReadType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {!proto.ReadType} value */
proto.ReadDeviceMessage.prototype.setType = function(value) {
  jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional uint32 index = 3;
 * @return {number}
 */
proto.ReadDeviceMessage.prototype.getIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.ReadDeviceMessage.prototype.setIndex = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 secondary_index = 4;
 * @return {number}
 */
proto.ReadDeviceMessage.prototype.getSecondaryIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.ReadDeviceMessage.prototype.setSecondaryIndex = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SecureDeviceSettingsMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SecureDeviceSettingsMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.SecureDeviceSettingsMessage.displayName = 'proto.SecureDeviceSettingsMessage';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SecureDeviceSettingsMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.SecureDeviceSettingsMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SecureDeviceSettingsMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SecureDeviceSettingsMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    payload: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SecureDeviceSettingsMessage}
 */
proto.SecureDeviceSettingsMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SecureDeviceSettingsMessage;
  return proto.SecureDeviceSettingsMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SecureDeviceSettingsMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SecureDeviceSettingsMessage}
 */
proto.SecureDeviceSettingsMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPayload(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SecureDeviceSettingsMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SecureDeviceSettingsMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SecureDeviceSettingsMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SecureDeviceSettingsMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPayload();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string payload = 1;
 * @return {string}
 */
proto.SecureDeviceSettingsMessage.prototype.getPayload = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.SecureDeviceSettingsMessage.prototype.setPayload = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.DTRPayloadMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.DTRPayloadMessage.repeatedFields_, null);
};
goog.inherits(proto.DTRPayloadMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DTRPayloadMessage.displayName = 'proto.DTRPayloadMessage';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.DTRPayloadMessage.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.DTRPayloadMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.DTRPayloadMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DTRPayloadMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTRPayloadMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    dtrList: jspb.Message.getRepeatedField(msg, 1)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.DTRPayloadMessage}
 */
proto.DTRPayloadMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DTRPayloadMessage;
  return proto.DTRPayloadMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DTRPayloadMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DTRPayloadMessage}
 */
proto.DTRPayloadMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Array<number>} */ (reader.readPackedUint32());
      msg.setDtrList(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.DTRPayloadMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DTRPayloadMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DTRPayloadMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DTRPayloadMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDtrList();
  if (f.length > 0) {
    writer.writePackedUint32(
      1,
      f
    );
  }
};


/**
 * repeated uint32 dtr = 1;
 * @return {!Array<number>}
 */
proto.DTRPayloadMessage.prototype.getDtrList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 1));
};


/** @param {!Array<number>} value */
proto.DTRPayloadMessage.prototype.setDtrList = function(value) {
  jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
proto.DTRPayloadMessage.prototype.addDtr = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


proto.DTRPayloadMessage.prototype.clearDtrList = function() {
  this.setDtrList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.DALIMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.DALIMessage.oneofGroups_);
};
goog.inherits(proto.DALIMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DALIMessage.displayName = 'proto.DALIMessage';
}
/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.DALIMessage.oneofGroups_ = [[3,4,5,6,7,8],[9,10]];

/**
 * @enum {number}
 */
proto.DALIMessage.ActionCase = {
  ACTION_NOT_SET: 0,
  EDALI_COMMAND: 3,
  EDALI_COMMAND_REPLY: 4,
  COMMAND: 5,
  CUSTOM_COMMAND: 6,
  QUERY: 7,
  TYPE8: 8
};

/**
 * @return {proto.DALIMessage.ActionCase}
 */
proto.DALIMessage.prototype.getActionCase = function() {
  return /** @type {proto.DALIMessage.ActionCase} */(jspb.Message.computeOneofCase(this, proto.DALIMessage.oneofGroups_[0]));
};

/**
 * @enum {number}
 */
proto.DALIMessage.ParamsCase = {
  PARAMS_NOT_SET: 0,
  ARG: 9,
  DTR: 10
};

/**
 * @return {proto.DALIMessage.ParamsCase}
 */
proto.DALIMessage.prototype.getParamsCase = function() {
  return /** @type {proto.DALIMessage.ParamsCase} */(jspb.Message.computeOneofCase(this, proto.DALIMessage.oneofGroups_[1]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.DALIMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.DALIMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DALIMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DALIMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    lineMask: jspb.Message.getFieldWithDefault(msg, 1, 0),
    address: jspb.Message.getFieldWithDefault(msg, 2, 0),
    edaliCommand: jspb.Message.getFieldWithDefault(msg, 3, 0),
    edaliCommandReply: jspb.Message.getFieldWithDefault(msg, 4, 0),
    command: jspb.Message.getFieldWithDefault(msg, 5, 0),
    customCommand: jspb.Message.getFieldWithDefault(msg, 6, 0),
    query: jspb.Message.getFieldWithDefault(msg, 7, 0),
    type8: jspb.Message.getFieldWithDefault(msg, 8, 0),
    arg: jspb.Message.getFieldWithDefault(msg, 9, 0),
    dtr: (f = msg.getDtr()) && proto.DTRPayloadMessage.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.DALIMessage}
 */
proto.DALIMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DALIMessage;
  return proto.DALIMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DALIMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DALIMessage}
 */
proto.DALIMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLineMask(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAddress(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setEdaliCommand(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setEdaliCommandReply(value);
      break;
    case 5:
      var value = /** @type {!proto.DALICommandType} */ (reader.readEnum());
      msg.setCommand(value);
      break;
    case 6:
      var value = /** @type {!proto.CustomDALICommandType} */ (reader.readEnum());
      msg.setCustomCommand(value);
      break;
    case 7:
      var value = /** @type {!proto.DALIQueryType} */ (reader.readEnum());
      msg.setQuery(value);
      break;
    case 8:
      var value = /** @type {!proto.Type8CommandType} */ (reader.readEnum());
      msg.setType8(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setArg(value);
      break;
    case 10:
      var value = new proto.DTRPayloadMessage;
      reader.readMessage(value,proto.DTRPayloadMessage.deserializeBinaryFromReader);
      msg.setDtr(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.DALIMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DALIMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DALIMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DALIMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLineMask();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getAddress();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = /** @type {!proto.DALICommandType} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = /** @type {!proto.CustomDALICommandType} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = /** @type {!proto.DALIQueryType} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = /** @type {!proto.Type8CommandType} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeEnum(
      8,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeUint32(
      9,
      f
    );
  }
  f = message.getDtr();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.DTRPayloadMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 line_mask = 1;
 * @return {number}
 */
proto.DALIMessage.prototype.getLineMask = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.DALIMessage.prototype.setLineMask = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 address = 2;
 * @return {number}
 */
proto.DALIMessage.prototype.getAddress = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.DALIMessage.prototype.setAddress = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 edali_command = 3;
 * @return {number}
 */
proto.DALIMessage.prototype.getEdaliCommand = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.DALIMessage.prototype.setEdaliCommand = function(value) {
  jspb.Message.setOneofField(this, 3, proto.DALIMessage.oneofGroups_[0], value);
};


proto.DALIMessage.prototype.clearEdaliCommand = function() {
  jspb.Message.setOneofField(this, 3, proto.DALIMessage.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DALIMessage.prototype.hasEdaliCommand = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional uint32 edali_command_reply = 4;
 * @return {number}
 */
proto.DALIMessage.prototype.getEdaliCommandReply = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.DALIMessage.prototype.setEdaliCommandReply = function(value) {
  jspb.Message.setOneofField(this, 4, proto.DALIMessage.oneofGroups_[0], value);
};


proto.DALIMessage.prototype.clearEdaliCommandReply = function() {
  jspb.Message.setOneofField(this, 4, proto.DALIMessage.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DALIMessage.prototype.hasEdaliCommandReply = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional DALICommandType command = 5;
 * @return {!proto.DALICommandType}
 */
proto.DALIMessage.prototype.getCommand = function() {
  return /** @type {!proto.DALICommandType} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {!proto.DALICommandType} value */
proto.DALIMessage.prototype.setCommand = function(value) {
  jspb.Message.setOneofField(this, 5, proto.DALIMessage.oneofGroups_[0], value);
};


proto.DALIMessage.prototype.clearCommand = function() {
  jspb.Message.setOneofField(this, 5, proto.DALIMessage.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DALIMessage.prototype.hasCommand = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional CustomDALICommandType custom_command = 6;
 * @return {!proto.CustomDALICommandType}
 */
proto.DALIMessage.prototype.getCustomCommand = function() {
  return /** @type {!proto.CustomDALICommandType} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {!proto.CustomDALICommandType} value */
proto.DALIMessage.prototype.setCustomCommand = function(value) {
  jspb.Message.setOneofField(this, 6, proto.DALIMessage.oneofGroups_[0], value);
};


proto.DALIMessage.prototype.clearCustomCommand = function() {
  jspb.Message.setOneofField(this, 6, proto.DALIMessage.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DALIMessage.prototype.hasCustomCommand = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional DALIQueryType query = 7;
 * @return {!proto.DALIQueryType}
 */
proto.DALIMessage.prototype.getQuery = function() {
  return /** @type {!proto.DALIQueryType} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {!proto.DALIQueryType} value */
proto.DALIMessage.prototype.setQuery = function(value) {
  jspb.Message.setOneofField(this, 7, proto.DALIMessage.oneofGroups_[0], value);
};


proto.DALIMessage.prototype.clearQuery = function() {
  jspb.Message.setOneofField(this, 7, proto.DALIMessage.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DALIMessage.prototype.hasQuery = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional Type8CommandType type8 = 8;
 * @return {!proto.Type8CommandType}
 */
proto.DALIMessage.prototype.getType8 = function() {
  return /** @type {!proto.Type8CommandType} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/** @param {!proto.Type8CommandType} value */
proto.DALIMessage.prototype.setType8 = function(value) {
  jspb.Message.setOneofField(this, 8, proto.DALIMessage.oneofGroups_[0], value);
};


proto.DALIMessage.prototype.clearType8 = function() {
  jspb.Message.setOneofField(this, 8, proto.DALIMessage.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DALIMessage.prototype.hasType8 = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional uint32 arg = 9;
 * @return {number}
 */
proto.DALIMessage.prototype.getArg = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/** @param {number} value */
proto.DALIMessage.prototype.setArg = function(value) {
  jspb.Message.setOneofField(this, 9, proto.DALIMessage.oneofGroups_[1], value);
};


proto.DALIMessage.prototype.clearArg = function() {
  jspb.Message.setOneofField(this, 9, proto.DALIMessage.oneofGroups_[1], undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DALIMessage.prototype.hasArg = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional DTRPayloadMessage dtr = 10;
 * @return {?proto.DTRPayloadMessage}
 */
proto.DALIMessage.prototype.getDtr = function() {
  return /** @type{?proto.DTRPayloadMessage} */ (
    jspb.Message.getWrapperField(this, proto.DTRPayloadMessage, 10));
};


/** @param {?proto.DTRPayloadMessage|undefined} value */
proto.DALIMessage.prototype.setDtr = function(value) {
  jspb.Message.setOneofWrapperField(this, 10, proto.DALIMessage.oneofGroups_[1], value);
};


proto.DALIMessage.prototype.clearDtr = function() {
  this.setDtr(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DALIMessage.prototype.hasDtr = function() {
  return jspb.Message.getField(this, 10) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.DALIStatusFlagMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.DALIStatusFlagMessage.repeatedFields_, null);
};
goog.inherits(proto.DALIStatusFlagMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DALIStatusFlagMessage.displayName = 'proto.DALIStatusFlagMessage';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.DALIStatusFlagMessage.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.DALIStatusFlagMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.DALIStatusFlagMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DALIStatusFlagMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DALIStatusFlagMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    flagsList: jspb.Message.getRepeatedField(msg, 1)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.DALIStatusFlagMessage}
 */
proto.DALIStatusFlagMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DALIStatusFlagMessage;
  return proto.DALIStatusFlagMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DALIStatusFlagMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DALIStatusFlagMessage}
 */
proto.DALIStatusFlagMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Array<!proto.DALIStatusType>} */ (reader.readPackedEnum());
      msg.setFlagsList(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.DALIStatusFlagMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DALIStatusFlagMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DALIStatusFlagMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DALIStatusFlagMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFlagsList();
  if (f.length > 0) {
    writer.writePackedEnum(
      1,
      f
    );
  }
};


/**
 * repeated DALIStatusType flags = 1;
 * @return {!Array<!proto.DALIStatusType>}
 */
proto.DALIStatusFlagMessage.prototype.getFlagsList = function() {
  return /** @type {!Array<!proto.DALIStatusType>} */ (jspb.Message.getRepeatedField(this, 1));
};


/** @param {!Array<!proto.DALIStatusType>} value */
proto.DALIStatusFlagMessage.prototype.setFlagsList = function(value) {
  jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!proto.DALIStatusType} value
 * @param {number=} opt_index
 */
proto.DALIStatusFlagMessage.prototype.addFlags = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


proto.DALIStatusFlagMessage.prototype.clearFlagsList = function() {
  this.setFlagsList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.DALIQueryResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.DALIQueryResponse.oneofGroups_);
};
goog.inherits(proto.DALIQueryResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DALIQueryResponse.displayName = 'proto.DALIQueryResponse';
}
/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.DALIQueryResponse.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.DALIQueryResponse.PayloadCase = {
  PAYLOAD_NOT_SET: 0,
  STATUS_FLAGS: 1,
  DATA: 2
};

/**
 * @return {proto.DALIQueryResponse.PayloadCase}
 */
proto.DALIQueryResponse.prototype.getPayloadCase = function() {
  return /** @type {proto.DALIQueryResponse.PayloadCase} */(jspb.Message.computeOneofCase(this, proto.DALIQueryResponse.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.DALIQueryResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.DALIQueryResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DALIQueryResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DALIQueryResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    statusFlags: (f = msg.getStatusFlags()) && proto.DALIStatusFlagMessage.toObject(includeInstance, f),
    data: (f = msg.getData()) && proto.PayloadMessage.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.DALIQueryResponse}
 */
proto.DALIQueryResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DALIQueryResponse;
  return proto.DALIQueryResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DALIQueryResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DALIQueryResponse}
 */
proto.DALIQueryResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.DALIStatusFlagMessage;
      reader.readMessage(value,proto.DALIStatusFlagMessage.deserializeBinaryFromReader);
      msg.setStatusFlags(value);
      break;
    case 2:
      var value = new proto.PayloadMessage;
      reader.readMessage(value,proto.PayloadMessage.deserializeBinaryFromReader);
      msg.setData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.DALIQueryResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DALIQueryResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DALIQueryResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DALIQueryResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatusFlags();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.DALIStatusFlagMessage.serializeBinaryToWriter
    );
  }
  f = message.getData();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.PayloadMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional DALIStatusFlagMessage status_flags = 1;
 * @return {?proto.DALIStatusFlagMessage}
 */
proto.DALIQueryResponse.prototype.getStatusFlags = function() {
  return /** @type{?proto.DALIStatusFlagMessage} */ (
    jspb.Message.getWrapperField(this, proto.DALIStatusFlagMessage, 1));
};


/** @param {?proto.DALIStatusFlagMessage|undefined} value */
proto.DALIQueryResponse.prototype.setStatusFlags = function(value) {
  jspb.Message.setOneofWrapperField(this, 1, proto.DALIQueryResponse.oneofGroups_[0], value);
};


proto.DALIQueryResponse.prototype.clearStatusFlags = function() {
  this.setStatusFlags(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DALIQueryResponse.prototype.hasStatusFlags = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional PayloadMessage data = 2;
 * @return {?proto.PayloadMessage}
 */
proto.DALIQueryResponse.prototype.getData = function() {
  return /** @type{?proto.PayloadMessage} */ (
    jspb.Message.getWrapperField(this, proto.PayloadMessage, 2));
};


/** @param {?proto.PayloadMessage|undefined} value */
proto.DALIQueryResponse.prototype.setData = function(value) {
  jspb.Message.setOneofWrapperField(this, 2, proto.DALIQueryResponse.oneofGroups_[0], value);
};


proto.DALIQueryResponse.prototype.clearData = function() {
  this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.DALIQueryResponse.prototype.hasData = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.DMXMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.DMXMessage.repeatedFields_, null);
};
goog.inherits(proto.DMXMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DMXMessage.displayName = 'proto.DMXMessage';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.DMXMessage.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.DMXMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.DMXMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DMXMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DMXMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    zone: jspb.Message.getFieldWithDefault(msg, 1, 0),
    universeMask: jspb.Message.getFieldWithDefault(msg, 2, 0),
    channel: jspb.Message.getFieldWithDefault(msg, 3, 0),
    repeat: jspb.Message.getFieldWithDefault(msg, 4, 0),
    levelList: jspb.Message.getRepeatedField(msg, 5),
    fadeTimeBy10ms: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.DMXMessage}
 */
proto.DMXMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DMXMessage;
  return proto.DMXMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DMXMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DMXMessage}
 */
proto.DMXMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setZone(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setUniverseMask(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setChannel(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setRepeat(value);
      break;
    case 5:
      var value = /** @type {!Array<number>} */ (reader.readPackedUint32());
      msg.setLevelList(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setFadeTimeBy10ms(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.DMXMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DMXMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DMXMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DMXMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getZone();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getUniverseMask();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getChannel();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getRepeat();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getLevelList();
  if (f.length > 0) {
    writer.writePackedUint32(
      5,
      f
    );
  }
  f = message.getFadeTimeBy10ms();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
};


/**
 * optional uint32 zone = 1;
 * @return {number}
 */
proto.DMXMessage.prototype.getZone = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.DMXMessage.prototype.setZone = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 universe_mask = 2;
 * @return {number}
 */
proto.DMXMessage.prototype.getUniverseMask = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.DMXMessage.prototype.setUniverseMask = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 channel = 3;
 * @return {number}
 */
proto.DMXMessage.prototype.getChannel = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.DMXMessage.prototype.setChannel = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 repeat = 4;
 * @return {number}
 */
proto.DMXMessage.prototype.getRepeat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.DMXMessage.prototype.setRepeat = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * repeated uint32 level = 5;
 * @return {!Array<number>}
 */
proto.DMXMessage.prototype.getLevelList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 5));
};


/** @param {!Array<number>} value */
proto.DMXMessage.prototype.setLevelList = function(value) {
  jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
proto.DMXMessage.prototype.addLevel = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


proto.DMXMessage.prototype.clearLevelList = function() {
  this.setLevelList([]);
};


/**
 * optional uint32 fade_time_by_10ms = 6;
 * @return {number}
 */
proto.DMXMessage.prototype.getFadeTimeBy10ms = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.DMXMessage.prototype.setFadeTimeBy10ms = function(value) {
  jspb.Message.setProto3IntField(this, 6, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.RDMMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.RDMMessage.repeatedFields_, null);
};
goog.inherits(proto.RDMMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.RDMMessage.displayName = 'proto.RDMMessage';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.RDMMessage.repeatedFields_ = [6];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.RDMMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.RDMMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.RDMMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RDMMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    universeMask: jspb.Message.getFieldWithDefault(msg, 1, 0),
    uid: jspb.Message.getFieldWithDefault(msg, 2, 0),
    pid: jspb.Message.getFieldWithDefault(msg, 3, 0),
    getset: jspb.Message.getFieldWithDefault(msg, 4, 0),
    datalength: jspb.Message.getFieldWithDefault(msg, 5, 0),
    dataList: jspb.Message.getRepeatedField(msg, 6)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.RDMMessage}
 */
proto.RDMMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.RDMMessage;
  return proto.RDMMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.RDMMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.RDMMessage}
 */
proto.RDMMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setUniverseMask(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setUid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPid(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setGetset(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setDatalength(value);
      break;
    case 6:
      var value = /** @type {!Array<number>} */ (reader.readPackedUint32());
      msg.setDataList(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.RDMMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.RDMMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.RDMMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RDMMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUniverseMask();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getUid();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getPid();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getGetset();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getDatalength();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = message.getDataList();
  if (f.length > 0) {
    writer.writePackedUint32(
      6,
      f
    );
  }
};


/**
 * optional uint32 universe_mask = 1;
 * @return {number}
 */
proto.RDMMessage.prototype.getUniverseMask = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.RDMMessage.prototype.setUniverseMask = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 uid = 2;
 * @return {number}
 */
proto.RDMMessage.prototype.getUid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.RDMMessage.prototype.setUid = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 pid = 3;
 * @return {number}
 */
proto.RDMMessage.prototype.getPid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.RDMMessage.prototype.setPid = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 getset = 4;
 * @return {number}
 */
proto.RDMMessage.prototype.getGetset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.RDMMessage.prototype.setGetset = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint32 datalength = 5;
 * @return {number}
 */
proto.RDMMessage.prototype.getDatalength = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.RDMMessage.prototype.setDatalength = function(value) {
  jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * repeated uint32 data = 6;
 * @return {!Array<number>}
 */
proto.RDMMessage.prototype.getDataList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 6));
};


/** @param {!Array<number>} value */
proto.RDMMessage.prototype.setDataList = function(value) {
  jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
proto.RDMMessage.prototype.addData = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


proto.RDMMessage.prototype.clearDataList = function() {
  this.setDataList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.RDMResponseMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.RDMResponseMessage.repeatedFields_, null);
};
goog.inherits(proto.RDMResponseMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.RDMResponseMessage.displayName = 'proto.RDMResponseMessage';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.RDMResponseMessage.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.RDMResponseMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.RDMResponseMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.RDMResponseMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RDMResponseMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    uid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    pid: jspb.Message.getFieldWithDefault(msg, 2, 0),
    datalength: jspb.Message.getFieldWithDefault(msg, 3, 0),
    dataList: jspb.Message.getRepeatedField(msg, 4)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.RDMResponseMessage}
 */
proto.RDMResponseMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.RDMResponseMessage;
  return proto.RDMResponseMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.RDMResponseMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.RDMResponseMessage}
 */
proto.RDMResponseMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setUid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setDatalength(value);
      break;
    case 4:
      var value = /** @type {!Array<number>} */ (reader.readPackedUint32());
      msg.setDataList(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.RDMResponseMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.RDMResponseMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.RDMResponseMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RDMResponseMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUid();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getPid();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getDatalength();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getDataList();
  if (f.length > 0) {
    writer.writePackedUint32(
      4,
      f
    );
  }
};


/**
 * optional uint64 uid = 1;
 * @return {number}
 */
proto.RDMResponseMessage.prototype.getUid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.RDMResponseMessage.prototype.setUid = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 pid = 2;
 * @return {number}
 */
proto.RDMResponseMessage.prototype.getPid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.RDMResponseMessage.prototype.setPid = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 datalength = 3;
 * @return {number}
 */
proto.RDMResponseMessage.prototype.getDatalength = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.RDMResponseMessage.prototype.setDatalength = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * repeated uint32 data = 4;
 * @return {!Array<number>}
 */
proto.RDMResponseMessage.prototype.getDataList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 4));
};


/** @param {!Array<number>} value */
proto.RDMResponseMessage.prototype.setDataList = function(value) {
  jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
proto.RDMResponseMessage.prototype.addData = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


proto.RDMResponseMessage.prototype.clearDataList = function() {
  this.setDataList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SpektraSettingMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.SpektraSettingMessage.repeatedFields_, null);
};
goog.inherits(proto.SpektraSettingMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.SpektraSettingMessage.displayName = 'proto.SpektraSettingMessage';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.SpektraSettingMessage.repeatedFields_ = [7,9];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SpektraSettingMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.SpektraSettingMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SpektraSettingMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SpektraSettingMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    zone: jspb.Message.getFieldWithDefault(msg, 1, 0),
    startAddress: jspb.Message.getFieldWithDefault(msg, 2, 0),
    lineOrUniverseMask: jspb.Message.getFieldWithDefault(msg, 3, 0),
    protocol: jspb.Message.getFieldWithDefault(msg, 4, 0),
    numberOfLights: jspb.Message.getFieldWithDefault(msg, 5, 0),
    channelsPerLight: jspb.Message.getFieldWithDefault(msg, 6, 0),
    channelColoursList: jspb.Message.getRepeatedField(msg, 7),
    unscheduledBehaviour: jspb.Message.getFieldWithDefault(msg, 8, 0),
    channelMappingList: jspb.Message.getRepeatedField(msg, 9)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SpektraSettingMessage}
 */
proto.SpektraSettingMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SpektraSettingMessage;
  return proto.SpektraSettingMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SpektraSettingMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SpektraSettingMessage}
 */
proto.SpektraSettingMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setZone(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setStartAddress(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLineOrUniverseMask(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setProtocol(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNumberOfLights(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setChannelsPerLight(value);
      break;
    case 7:
      var value = /** @type {!Array<number>} */ (reader.readPackedUint32());
      msg.setChannelColoursList(value);
      break;
    case 8:
      var value = /** @type {!proto.SpektraUnscheduledBehaviourType} */ (reader.readEnum());
      msg.setUnscheduledBehaviour(value);
      break;
    case 9:
      var value = /** @type {!Array<number>} */ (reader.readPackedUint32());
      msg.setChannelMappingList(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SpektraSettingMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SpektraSettingMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SpektraSettingMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SpektraSettingMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getZone();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getStartAddress();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getLineOrUniverseMask();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getProtocol();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getNumberOfLights();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = message.getChannelsPerLight();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
  f = message.getChannelColoursList();
  if (f.length > 0) {
    writer.writePackedUint32(
      7,
      f
    );
  }
  f = message.getUnscheduledBehaviour();
  if (f !== 0.0) {
    writer.writeEnum(
      8,
      f
    );
  }
  f = message.getChannelMappingList();
  if (f.length > 0) {
    writer.writePackedUint32(
      9,
      f
    );
  }
};


/**
 * optional uint32 zone = 1;
 * @return {number}
 */
proto.SpektraSettingMessage.prototype.getZone = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.SpektraSettingMessage.prototype.setZone = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 start_address = 2;
 * @return {number}
 */
proto.SpektraSettingMessage.prototype.getStartAddress = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.SpektraSettingMessage.prototype.setStartAddress = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 line_or_universe_mask = 3;
 * @return {number}
 */
proto.SpektraSettingMessage.prototype.getLineOrUniverseMask = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.SpektraSettingMessage.prototype.setLineOrUniverseMask = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 protocol = 4;
 * @return {number}
 */
proto.SpektraSettingMessage.prototype.getProtocol = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.SpektraSettingMessage.prototype.setProtocol = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint32 number_of_lights = 5;
 * @return {number}
 */
proto.SpektraSettingMessage.prototype.getNumberOfLights = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.SpektraSettingMessage.prototype.setNumberOfLights = function(value) {
  jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional uint32 channels_per_light = 6;
 * @return {number}
 */
proto.SpektraSettingMessage.prototype.getChannelsPerLight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.SpektraSettingMessage.prototype.setChannelsPerLight = function(value) {
  jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * repeated uint32 channel_colours = 7;
 * @return {!Array<number>}
 */
proto.SpektraSettingMessage.prototype.getChannelColoursList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 7));
};


/** @param {!Array<number>} value */
proto.SpektraSettingMessage.prototype.setChannelColoursList = function(value) {
  jspb.Message.setField(this, 7, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
proto.SpektraSettingMessage.prototype.addChannelColours = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 7, value, opt_index);
};


proto.SpektraSettingMessage.prototype.clearChannelColoursList = function() {
  this.setChannelColoursList([]);
};


/**
 * optional SpektraUnscheduledBehaviourType unscheduled_behaviour = 8;
 * @return {!proto.SpektraUnscheduledBehaviourType}
 */
proto.SpektraSettingMessage.prototype.getUnscheduledBehaviour = function() {
  return /** @type {!proto.SpektraUnscheduledBehaviourType} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/** @param {!proto.SpektraUnscheduledBehaviourType} value */
proto.SpektraSettingMessage.prototype.setUnscheduledBehaviour = function(value) {
  jspb.Message.setProto3EnumField(this, 8, value);
};


/**
 * repeated uint32 channel_mapping = 9;
 * @return {!Array<number>}
 */
proto.SpektraSettingMessage.prototype.getChannelMappingList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 9));
};


/** @param {!Array<number>} value */
proto.SpektraSettingMessage.prototype.setChannelMappingList = function(value) {
  jspb.Message.setField(this, 9, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
proto.SpektraSettingMessage.prototype.addChannelMapping = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 9, value, opt_index);
};


proto.SpektraSettingMessage.prototype.clearChannelMappingList = function() {
  this.setChannelMappingList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SpektraColourConfigMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.SpektraColourConfigMessage.repeatedFields_, null);
};
goog.inherits(proto.SpektraColourConfigMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.SpektraColourConfigMessage.displayName = 'proto.SpektraColourConfigMessage';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.SpektraColourConfigMessage.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SpektraColourConfigMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.SpektraColourConfigMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SpektraColourConfigMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SpektraColourConfigMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    channelValueList: jspb.Message.getRepeatedField(msg, 1)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SpektraColourConfigMessage}
 */
proto.SpektraColourConfigMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SpektraColourConfigMessage;
  return proto.SpektraColourConfigMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SpektraColourConfigMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SpektraColourConfigMessage}
 */
proto.SpektraColourConfigMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Array<number>} */ (reader.readPackedUint32());
      msg.setChannelValueList(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SpektraColourConfigMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SpektraColourConfigMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SpektraColourConfigMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SpektraColourConfigMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChannelValueList();
  if (f.length > 0) {
    writer.writePackedUint32(
      1,
      f
    );
  }
};


/**
 * repeated uint32 channel_value = 1;
 * @return {!Array<number>}
 */
proto.SpektraColourConfigMessage.prototype.getChannelValueList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 1));
};


/** @param {!Array<number>} value */
proto.SpektraColourConfigMessage.prototype.setChannelValueList = function(value) {
  jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
proto.SpektraColourConfigMessage.prototype.addChannelValue = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


proto.SpektraColourConfigMessage.prototype.clearChannelValueList = function() {
  this.setChannelValueList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SpektraSequenceConfigMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.SpektraSequenceConfigMessage.repeatedFields_, null);
};
goog.inherits(proto.SpektraSequenceConfigMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.SpektraSequenceConfigMessage.displayName = 'proto.SpektraSequenceConfigMessage';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.SpektraSequenceConfigMessage.repeatedFields_ = [10,17];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SpektraSequenceConfigMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.SpektraSequenceConfigMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SpektraSequenceConfigMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SpektraSequenceConfigMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    index: jspb.Message.getFieldWithDefault(msg, 1, 0),
    type: jspb.Message.getFieldWithDefault(msg, 2, 0),
    transition: jspb.Message.getFieldWithDefault(msg, 3, 0),
    fadeTimeBy10ms: jspb.Message.getFieldWithDefault(msg, 4, 0),
    timePerColour: jspb.Message.getFieldWithDefault(msg, 5, 0),
    timePerColourUnit: jspb.Message.getFieldWithDefault(msg, 6, 0),
    timePerStep: jspb.Message.getFieldWithDefault(msg, 7, 0),
    timePerStepUnit: jspb.Message.getFieldWithDefault(msg, 8, 0),
    range: jspb.Message.getFieldWithDefault(msg, 9, 0),
    colourList: jspb.Message.getRepeatedField(msg, 10),
    isRandomisedType: jspb.Message.getFieldWithDefault(msg, 11, 0),
    randomTypesMask: jspb.Message.getFieldWithDefault(msg, 12, 0),
    isReverseDirection: jspb.Message.getFieldWithDefault(msg, 13, 0),
    isCycleDirection: jspb.Message.getFieldWithDefault(msg, 14, 0),
    title: jspb.Message.getFieldWithDefault(msg, 15, ""),
    hasRandomColourOrder: jspb.Message.getFieldWithDefault(msg, 16, false),
    coloursList: jspb.Message.toObjectList(msg.getColoursList(),
    proto.SpektraColourConfigMessage.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SpektraSequenceConfigMessage}
 */
proto.SpektraSequenceConfigMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SpektraSequenceConfigMessage;
  return proto.SpektraSequenceConfigMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SpektraSequenceConfigMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SpektraSequenceConfigMessage}
 */
proto.SpektraSequenceConfigMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIndex(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setType(value);
      break;
    case 3:
      var value = /** @type {!proto.SpektraTransitionType} */ (reader.readEnum());
      msg.setTransition(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setFadeTimeBy10ms(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTimePerColour(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTimePerColourUnit(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTimePerStep(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTimePerStepUnit(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setRange(value);
      break;
    case 10:
      var value = /** @type {!Array<number>} */ (reader.readPackedUint64());
      msg.setColourList(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIsRandomisedType(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setRandomTypesMask(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIsReverseDirection(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIsCycleDirection(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 16:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHasRandomColourOrder(value);
      break;
    case 17:
      var value = new proto.SpektraColourConfigMessage;
      reader.readMessage(value,proto.SpektraColourConfigMessage.deserializeBinaryFromReader);
      msg.addColours(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SpektraSequenceConfigMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SpektraSequenceConfigMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SpektraSequenceConfigMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SpektraSequenceConfigMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIndex();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getType();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getTransition();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getFadeTimeBy10ms();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getTimePerColour();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = message.getTimePerColourUnit();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
  f = message.getTimePerStep();
  if (f !== 0) {
    writer.writeUint32(
      7,
      f
    );
  }
  f = message.getTimePerStepUnit();
  if (f !== 0) {
    writer.writeUint32(
      8,
      f
    );
  }
  f = message.getRange();
  if (f !== 0) {
    writer.writeUint32(
      9,
      f
    );
  }
  f = message.getColourList();
  if (f.length > 0) {
    writer.writePackedUint64(
      10,
      f
    );
  }
  f = message.getIsRandomisedType();
  if (f !== 0) {
    writer.writeUint32(
      11,
      f
    );
  }
  f = message.getRandomTypesMask();
  if (f !== 0) {
    writer.writeUint32(
      12,
      f
    );
  }
  f = message.getIsReverseDirection();
  if (f !== 0) {
    writer.writeUint32(
      13,
      f
    );
  }
  f = message.getIsCycleDirection();
  if (f !== 0) {
    writer.writeUint32(
      14,
      f
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      15,
      f
    );
  }
  f = message.getHasRandomColourOrder();
  if (f) {
    writer.writeBool(
      16,
      f
    );
  }
  f = message.getColoursList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      17,
      f,
      proto.SpektraColourConfigMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 index = 1;
 * @return {number}
 */
proto.SpektraSequenceConfigMessage.prototype.getIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.SpektraSequenceConfigMessage.prototype.setIndex = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 type = 2;
 * @return {number}
 */
proto.SpektraSequenceConfigMessage.prototype.getType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.SpektraSequenceConfigMessage.prototype.setType = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional SpektraTransitionType transition = 3;
 * @return {!proto.SpektraTransitionType}
 */
proto.SpektraSequenceConfigMessage.prototype.getTransition = function() {
  return /** @type {!proto.SpektraTransitionType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {!proto.SpektraTransitionType} value */
proto.SpektraSequenceConfigMessage.prototype.setTransition = function(value) {
  jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional uint32 fade_time_by_10ms = 4;
 * @return {number}
 */
proto.SpektraSequenceConfigMessage.prototype.getFadeTimeBy10ms = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.SpektraSequenceConfigMessage.prototype.setFadeTimeBy10ms = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint32 time_per_colour = 5;
 * @return {number}
 */
proto.SpektraSequenceConfigMessage.prototype.getTimePerColour = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.SpektraSequenceConfigMessage.prototype.setTimePerColour = function(value) {
  jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional uint32 time_per_colour_unit = 6;
 * @return {number}
 */
proto.SpektraSequenceConfigMessage.prototype.getTimePerColourUnit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.SpektraSequenceConfigMessage.prototype.setTimePerColourUnit = function(value) {
  jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional uint32 time_per_step = 7;
 * @return {number}
 */
proto.SpektraSequenceConfigMessage.prototype.getTimePerStep = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {number} value */
proto.SpektraSequenceConfigMessage.prototype.setTimePerStep = function(value) {
  jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional uint32 time_per_step_unit = 8;
 * @return {number}
 */
proto.SpektraSequenceConfigMessage.prototype.getTimePerStepUnit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/** @param {number} value */
proto.SpektraSequenceConfigMessage.prototype.setTimePerStepUnit = function(value) {
  jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional uint32 range = 9;
 * @return {number}
 */
proto.SpektraSequenceConfigMessage.prototype.getRange = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/** @param {number} value */
proto.SpektraSequenceConfigMessage.prototype.setRange = function(value) {
  jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * repeated uint64 colour = 10;
 * @return {!Array<number>}
 */
proto.SpektraSequenceConfigMessage.prototype.getColourList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 10));
};


/** @param {!Array<number>} value */
proto.SpektraSequenceConfigMessage.prototype.setColourList = function(value) {
  jspb.Message.setField(this, 10, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
proto.SpektraSequenceConfigMessage.prototype.addColour = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 10, value, opt_index);
};


proto.SpektraSequenceConfigMessage.prototype.clearColourList = function() {
  this.setColourList([]);
};


/**
 * optional uint32 is_randomised_type = 11;
 * @return {number}
 */
proto.SpektraSequenceConfigMessage.prototype.getIsRandomisedType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/** @param {number} value */
proto.SpektraSequenceConfigMessage.prototype.setIsRandomisedType = function(value) {
  jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional uint32 random_types_mask = 12;
 * @return {number}
 */
proto.SpektraSequenceConfigMessage.prototype.getRandomTypesMask = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/** @param {number} value */
proto.SpektraSequenceConfigMessage.prototype.setRandomTypesMask = function(value) {
  jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional uint32 is_reverse_direction = 13;
 * @return {number}
 */
proto.SpektraSequenceConfigMessage.prototype.getIsReverseDirection = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/** @param {number} value */
proto.SpektraSequenceConfigMessage.prototype.setIsReverseDirection = function(value) {
  jspb.Message.setProto3IntField(this, 13, value);
};


/**
 * optional uint32 is_cycle_direction = 14;
 * @return {number}
 */
proto.SpektraSequenceConfigMessage.prototype.getIsCycleDirection = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/** @param {number} value */
proto.SpektraSequenceConfigMessage.prototype.setIsCycleDirection = function(value) {
  jspb.Message.setProto3IntField(this, 14, value);
};


/**
 * optional string title = 15;
 * @return {string}
 */
proto.SpektraSequenceConfigMessage.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/** @param {string} value */
proto.SpektraSequenceConfigMessage.prototype.setTitle = function(value) {
  jspb.Message.setProto3StringField(this, 15, value);
};


/**
 * optional bool has_random_colour_order = 16;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.SpektraSequenceConfigMessage.prototype.getHasRandomColourOrder = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 16, false));
};


/** @param {boolean} value */
proto.SpektraSequenceConfigMessage.prototype.setHasRandomColourOrder = function(value) {
  jspb.Message.setProto3BooleanField(this, 16, value);
};


/**
 * repeated SpektraColourConfigMessage colours = 17;
 * @return {!Array<!proto.SpektraColourConfigMessage>}
 */
proto.SpektraSequenceConfigMessage.prototype.getColoursList = function() {
  return /** @type{!Array<!proto.SpektraColourConfigMessage>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.SpektraColourConfigMessage, 17));
};


/** @param {!Array<!proto.SpektraColourConfigMessage>} value */
proto.SpektraSequenceConfigMessage.prototype.setColoursList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 17, value);
};


/**
 * @param {!proto.SpektraColourConfigMessage=} opt_value
 * @param {number=} opt_index
 * @return {!proto.SpektraColourConfigMessage}
 */
proto.SpektraSequenceConfigMessage.prototype.addColours = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 17, opt_value, proto.SpektraColourConfigMessage, opt_index);
};


proto.SpektraSequenceConfigMessage.prototype.clearColoursList = function() {
  this.setColoursList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SpektraCalendarMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.SpektraCalendarMessage.repeatedFields_, null);
};
goog.inherits(proto.SpektraCalendarMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.SpektraCalendarMessage.displayName = 'proto.SpektraCalendarMessage';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.SpektraCalendarMessage.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SpektraCalendarMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.SpektraCalendarMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SpektraCalendarMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SpektraCalendarMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    index: jspb.Message.getFieldWithDefault(msg, 2, 0),
    daysList: jspb.Message.getRepeatedField(msg, 3)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SpektraCalendarMessage}
 */
proto.SpektraCalendarMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SpektraCalendarMessage;
  return proto.SpektraCalendarMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SpektraCalendarMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SpektraCalendarMessage}
 */
proto.SpektraCalendarMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.SpektraTargetType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIndex(value);
      break;
    case 3:
      var value = /** @type {!Array<boolean>} */ (reader.readPackedBool());
      msg.setDaysList(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SpektraCalendarMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SpektraCalendarMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SpektraCalendarMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SpektraCalendarMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getIndex();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getDaysList();
  if (f.length > 0) {
    writer.writePackedBool(
      3,
      f
    );
  }
};


/**
 * optional SpektraTargetType type = 1;
 * @return {!proto.SpektraTargetType}
 */
proto.SpektraCalendarMessage.prototype.getType = function() {
  return /** @type {!proto.SpektraTargetType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.SpektraTargetType} value */
proto.SpektraCalendarMessage.prototype.setType = function(value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional uint32 index = 2;
 * @return {number}
 */
proto.SpektraCalendarMessage.prototype.getIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.SpektraCalendarMessage.prototype.setIndex = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * repeated bool days = 3;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {!Array<boolean>}
 */
proto.SpektraCalendarMessage.prototype.getDaysList = function() {
  return /** @type {!Array<boolean>} */ (jspb.Message.getRepeatedField(this, 3));
};


/** @param {!Array<boolean>} value */
proto.SpektraCalendarMessage.prototype.setDaysList = function(value) {
  jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {!boolean} value
 * @param {number=} opt_index
 */
proto.SpektraCalendarMessage.prototype.addDays = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


proto.SpektraCalendarMessage.prototype.clearDaysList = function() {
  this.setDaysList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SpektraThemeConfigMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.SpektraThemeConfigMessage.repeatedFields_, null);
};
goog.inherits(proto.SpektraThemeConfigMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.SpektraThemeConfigMessage.displayName = 'proto.SpektraThemeConfigMessage';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.SpektraThemeConfigMessage.repeatedFields_ = [2,4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SpektraThemeConfigMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.SpektraThemeConfigMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SpektraThemeConfigMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SpektraThemeConfigMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    index: jspb.Message.getFieldWithDefault(msg, 1, 0),
    colourList: jspb.Message.getRepeatedField(msg, 2),
    title: jspb.Message.getFieldWithDefault(msg, 3, ""),
    coloursList: jspb.Message.toObjectList(msg.getColoursList(),
    proto.SpektraColourConfigMessage.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SpektraThemeConfigMessage}
 */
proto.SpektraThemeConfigMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SpektraThemeConfigMessage;
  return proto.SpektraThemeConfigMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SpektraThemeConfigMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SpektraThemeConfigMessage}
 */
proto.SpektraThemeConfigMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIndex(value);
      break;
    case 2:
      var value = /** @type {!Array<number>} */ (reader.readPackedUint64());
      msg.setColourList(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 4:
      var value = new proto.SpektraColourConfigMessage;
      reader.readMessage(value,proto.SpektraColourConfigMessage.deserializeBinaryFromReader);
      msg.addColours(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SpektraThemeConfigMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SpektraThemeConfigMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SpektraThemeConfigMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SpektraThemeConfigMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIndex();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getColourList();
  if (f.length > 0) {
    writer.writePackedUint64(
      2,
      f
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getColoursList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.SpektraColourConfigMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 index = 1;
 * @return {number}
 */
proto.SpektraThemeConfigMessage.prototype.getIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.SpektraThemeConfigMessage.prototype.setIndex = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated uint64 colour = 2;
 * @return {!Array<number>}
 */
proto.SpektraThemeConfigMessage.prototype.getColourList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 2));
};


/** @param {!Array<number>} value */
proto.SpektraThemeConfigMessage.prototype.setColourList = function(value) {
  jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
proto.SpektraThemeConfigMessage.prototype.addColour = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


proto.SpektraThemeConfigMessage.prototype.clearColourList = function() {
  this.setColourList([]);
};


/**
 * optional string title = 3;
 * @return {string}
 */
proto.SpektraThemeConfigMessage.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.SpektraThemeConfigMessage.prototype.setTitle = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated SpektraColourConfigMessage colours = 4;
 * @return {!Array<!proto.SpektraColourConfigMessage>}
 */
proto.SpektraThemeConfigMessage.prototype.getColoursList = function() {
  return /** @type{!Array<!proto.SpektraColourConfigMessage>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.SpektraColourConfigMessage, 4));
};


/** @param {!Array<!proto.SpektraColourConfigMessage>} value */
proto.SpektraThemeConfigMessage.prototype.setColoursList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.SpektraColourConfigMessage=} opt_value
 * @param {number=} opt_index
 * @return {!proto.SpektraColourConfigMessage}
 */
proto.SpektraThemeConfigMessage.prototype.addColours = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.SpektraColourConfigMessage, opt_index);
};


proto.SpektraThemeConfigMessage.prototype.clearColoursList = function() {
  this.setColoursList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SpektraReadMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SpektraReadMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.SpektraReadMessage.displayName = 'proto.SpektraReadMessage';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SpektraReadMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.SpektraReadMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SpektraReadMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SpektraReadMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    index: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SpektraReadMessage}
 */
proto.SpektraReadMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SpektraReadMessage;
  return proto.SpektraReadMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SpektraReadMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SpektraReadMessage}
 */
proto.SpektraReadMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.SpektraTargetType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIndex(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SpektraReadMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SpektraReadMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SpektraReadMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SpektraReadMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getIndex();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional SpektraTargetType type = 1;
 * @return {!proto.SpektraTargetType}
 */
proto.SpektraReadMessage.prototype.getType = function() {
  return /** @type {!proto.SpektraTargetType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.SpektraTargetType} value */
proto.SpektraReadMessage.prototype.setType = function(value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional uint32 index = 2;
 * @return {number}
 */
proto.SpektraReadMessage.prototype.getIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.SpektraReadMessage.prototype.setIndex = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SpektraControlMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SpektraControlMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.SpektraControlMessage.displayName = 'proto.SpektraControlMessage';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SpektraControlMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.SpektraControlMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SpektraControlMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SpektraControlMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    zone: jspb.Message.getFieldWithDefault(msg, 2, 0),
    index: jspb.Message.getFieldWithDefault(msg, 3, 0),
    action: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SpektraControlMessage}
 */
proto.SpektraControlMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SpektraControlMessage;
  return proto.SpektraControlMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SpektraControlMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SpektraControlMessage}
 */
proto.SpektraControlMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.SpektraTargetType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setZone(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIndex(value);
      break;
    case 4:
      var value = /** @type {!proto.SpektraActionType} */ (reader.readEnum());
      msg.setAction(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SpektraControlMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SpektraControlMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SpektraControlMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SpektraControlMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getZone();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getIndex();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getAction();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
};


/**
 * optional SpektraTargetType type = 1;
 * @return {!proto.SpektraTargetType}
 */
proto.SpektraControlMessage.prototype.getType = function() {
  return /** @type {!proto.SpektraTargetType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.SpektraTargetType} value */
proto.SpektraControlMessage.prototype.setType = function(value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional uint32 zone = 2;
 * @return {number}
 */
proto.SpektraControlMessage.prototype.getZone = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.SpektraControlMessage.prototype.setZone = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 index = 3;
 * @return {number}
 */
proto.SpektraControlMessage.prototype.getIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.SpektraControlMessage.prototype.setIndex = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional SpektraActionType action = 4;
 * @return {!proto.SpektraActionType}
 */
proto.SpektraControlMessage.prototype.getAction = function() {
  return /** @type {!proto.SpektraActionType} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {!proto.SpektraActionType} value */
proto.SpektraControlMessage.prototype.setAction = function(value) {
  jspb.Message.setProto3EnumField(this, 4, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.DMXTranslationObject = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.DMXTranslationObject.repeatedFields_, null);
};
goog.inherits(proto.DMXTranslationObject, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DMXTranslationObject.displayName = 'proto.DMXTranslationObject';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.DMXTranslationObject.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.DMXTranslationObject.prototype.toObject = function(opt_includeInstance) {
  return proto.DMXTranslationObject.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DMXTranslationObject} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DMXTranslationObject.toObject = function(includeInstance, msg) {
  var f, obj = {
    lineIn: jspb.Message.getFieldWithDefault(msg, 1, 0),
    lineOut: jspb.Message.getFieldWithDefault(msg, 2, 0),
    dmxStartAddress: jspb.Message.getFieldWithDefault(msg, 3, 0),
    channelCount: jspb.Message.getFieldWithDefault(msg, 4, 0),
    daliArrayList: jspb.Message.getRepeatedField(msg, 5),
    affectedInput: jspb.Message.getFieldWithDefault(msg, 7, 0),
    blocking: jspb.Message.getFieldWithDefault(msg, 8, false),
    enabled: jspb.Message.getFieldWithDefault(msg, 9, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.DMXTranslationObject}
 */
proto.DMXTranslationObject.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DMXTranslationObject;
  return proto.DMXTranslationObject.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DMXTranslationObject} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DMXTranslationObject}
 */
proto.DMXTranslationObject.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLineIn(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLineOut(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setDmxStartAddress(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setChannelCount(value);
      break;
    case 5:
      var value = /** @type {!Array<number>} */ (reader.readPackedUint32());
      msg.setDaliArrayList(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAffectedInput(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBlocking(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnabled(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.DMXTranslationObject.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DMXTranslationObject.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DMXTranslationObject} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DMXTranslationObject.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLineIn();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getLineOut();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getDmxStartAddress();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getChannelCount();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getDaliArrayList();
  if (f.length > 0) {
    writer.writePackedUint32(
      5,
      f
    );
  }
  f = message.getAffectedInput();
  if (f !== 0) {
    writer.writeUint32(
      7,
      f
    );
  }
  f = message.getBlocking();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
  f = message.getEnabled();
  if (f) {
    writer.writeBool(
      9,
      f
    );
  }
};


/**
 * optional uint32 line_in = 1;
 * @return {number}
 */
proto.DMXTranslationObject.prototype.getLineIn = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.DMXTranslationObject.prototype.setLineIn = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 line_out = 2;
 * @return {number}
 */
proto.DMXTranslationObject.prototype.getLineOut = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.DMXTranslationObject.prototype.setLineOut = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 dmx_start_address = 3;
 * @return {number}
 */
proto.DMXTranslationObject.prototype.getDmxStartAddress = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.DMXTranslationObject.prototype.setDmxStartAddress = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 channel_count = 4;
 * @return {number}
 */
proto.DMXTranslationObject.prototype.getChannelCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.DMXTranslationObject.prototype.setChannelCount = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * repeated uint32 dali_array = 5;
 * @return {!Array<number>}
 */
proto.DMXTranslationObject.prototype.getDaliArrayList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 5));
};


/** @param {!Array<number>} value */
proto.DMXTranslationObject.prototype.setDaliArrayList = function(value) {
  jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
proto.DMXTranslationObject.prototype.addDaliArray = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


proto.DMXTranslationObject.prototype.clearDaliArrayList = function() {
  this.setDaliArrayList([]);
};


/**
 * optional uint32 affected_input = 7;
 * @return {number}
 */
proto.DMXTranslationObject.prototype.getAffectedInput = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {number} value */
proto.DMXTranslationObject.prototype.setAffectedInput = function(value) {
  jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional bool blocking = 8;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.DMXTranslationObject.prototype.getBlocking = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 8, false));
};


/** @param {boolean} value */
proto.DMXTranslationObject.prototype.setBlocking = function(value) {
  jspb.Message.setProto3BooleanField(this, 8, value);
};


/**
 * optional bool enabled = 9;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.DMXTranslationObject.prototype.getEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 9, false));
};


/** @param {boolean} value */
proto.DMXTranslationObject.prototype.setEnabled = function(value) {
  jspb.Message.setProto3BooleanField(this, 9, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.DMXProtocolTranslation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.DMXProtocolTranslation.repeatedFields_, null);
};
goog.inherits(proto.DMXProtocolTranslation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DMXProtocolTranslation.displayName = 'proto.DMXProtocolTranslation';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.DMXProtocolTranslation.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.DMXProtocolTranslation.prototype.toObject = function(opt_includeInstance) {
  return proto.DMXProtocolTranslation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DMXProtocolTranslation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DMXProtocolTranslation.toObject = function(includeInstance, msg) {
  var f, obj = {
    objectList: jspb.Message.toObjectList(msg.getObjectList(),
    proto.DMXTranslationObject.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.DMXProtocolTranslation}
 */
proto.DMXProtocolTranslation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DMXProtocolTranslation;
  return proto.DMXProtocolTranslation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DMXProtocolTranslation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DMXProtocolTranslation}
 */
proto.DMXProtocolTranslation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.DMXTranslationObject;
      reader.readMessage(value,proto.DMXTranslationObject.deserializeBinaryFromReader);
      msg.addObject(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.DMXProtocolTranslation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DMXProtocolTranslation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DMXProtocolTranslation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DMXProtocolTranslation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getObjectList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.DMXTranslationObject.serializeBinaryToWriter
    );
  }
};


/**
 * repeated DMXTranslationObject object = 1;
 * @return {!Array<!proto.DMXTranslationObject>}
 */
proto.DMXProtocolTranslation.prototype.getObjectList = function() {
  return /** @type{!Array<!proto.DMXTranslationObject>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.DMXTranslationObject, 1));
};


/** @param {!Array<!proto.DMXTranslationObject>} value */
proto.DMXProtocolTranslation.prototype.setObjectList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.DMXTranslationObject=} opt_value
 * @param {number=} opt_index
 * @return {!proto.DMXTranslationObject}
 */
proto.DMXProtocolTranslation.prototype.addObject = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.DMXTranslationObject, opt_index);
};


proto.DMXProtocolTranslation.prototype.clearObjectList = function() {
  this.setObjectList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.InputStateMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.InputStateMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.InputStateMessage.displayName = 'proto.InputStateMessage';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.InputStateMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.InputStateMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.InputStateMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.InputStateMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    useMask: jspb.Message.getFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.InputStateMessage}
 */
proto.InputStateMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.InputStateMessage;
  return proto.InputStateMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.InputStateMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.InputStateMessage}
 */
proto.InputStateMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUseMask(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.InputStateMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.InputStateMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.InputStateMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.InputStateMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUseMask();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool use_mask = 1;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.InputStateMessage.prototype.getUseMask = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1, false));
};


/** @param {boolean} value */
proto.InputStateMessage.prototype.setUseMask = function(value) {
  jspb.Message.setProto3BooleanField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.InputStateResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.InputStateResponse.repeatedFields_, null);
};
goog.inherits(proto.InputStateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.InputStateResponse.displayName = 'proto.InputStateResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.InputStateResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.InputStateResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.InputStateResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.InputStateResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.InputStateResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    inputsList: jspb.Message.getRepeatedField(msg, 1),
    inputMask: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.InputStateResponse}
 */
proto.InputStateResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.InputStateResponse;
  return proto.InputStateResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.InputStateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.InputStateResponse}
 */
proto.InputStateResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Array<number>} */ (reader.readPackedUint32());
      msg.setInputsList(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setInputMask(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.InputStateResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.InputStateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.InputStateResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.InputStateResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInputsList();
  if (f.length > 0) {
    writer.writePackedUint32(
      1,
      f
    );
  }
  f = message.getInputMask();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * repeated uint32 inputs = 1;
 * @return {!Array<number>}
 */
proto.InputStateResponse.prototype.getInputsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 1));
};


/** @param {!Array<number>} value */
proto.InputStateResponse.prototype.setInputsList = function(value) {
  jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
proto.InputStateResponse.prototype.addInputs = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


proto.InputStateResponse.prototype.clearInputsList = function() {
  this.setInputsList([]);
};


/**
 * optional uint32 input_mask = 2;
 * @return {number}
 */
proto.InputStateResponse.prototype.getInputMask = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.InputStateResponse.prototype.setInputMask = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.LevelCacheResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.LevelCacheResponse.repeatedFields_, null);
};
goog.inherits(proto.LevelCacheResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.LevelCacheResponse.displayName = 'proto.LevelCacheResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.LevelCacheResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.LevelCacheResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.LevelCacheResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.LevelCacheResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.LevelCacheResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    levelsList: jspb.Message.getRepeatedField(msg, 1),
    line: jspb.Message.getFieldWithDefault(msg, 2, 0),
    page: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.LevelCacheResponse}
 */
proto.LevelCacheResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.LevelCacheResponse;
  return proto.LevelCacheResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.LevelCacheResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.LevelCacheResponse}
 */
proto.LevelCacheResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Array<number>} */ (reader.readPackedUint32());
      msg.setLevelsList(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLine(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.LevelCacheResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.LevelCacheResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.LevelCacheResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.LevelCacheResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLevelsList();
  if (f.length > 0) {
    writer.writePackedUint32(
      1,
      f
    );
  }
  f = message.getLine();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getPage();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
};


/**
 * repeated uint32 levels = 1;
 * @return {!Array<number>}
 */
proto.LevelCacheResponse.prototype.getLevelsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 1));
};


/** @param {!Array<number>} value */
proto.LevelCacheResponse.prototype.setLevelsList = function(value) {
  jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
proto.LevelCacheResponse.prototype.addLevels = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


proto.LevelCacheResponse.prototype.clearLevelsList = function() {
  this.setLevelsList([]);
};


/**
 * optional uint32 line = 2;
 * @return {number}
 */
proto.LevelCacheResponse.prototype.getLine = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.LevelCacheResponse.prototype.setLine = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 page = 3;
 * @return {number}
 */
proto.LevelCacheResponse.prototype.getPage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.LevelCacheResponse.prototype.setPage = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.JoinedRoomsMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.JoinedRoomsMessage.repeatedFields_, null);
};
goog.inherits(proto.JoinedRoomsMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.JoinedRoomsMessage.displayName = 'proto.JoinedRoomsMessage';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.JoinedRoomsMessage.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.JoinedRoomsMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.JoinedRoomsMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.JoinedRoomsMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoinedRoomsMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    pairsList: jspb.Message.getRepeatedField(msg, 1),
    joined: jspb.Message.getFieldWithDefault(msg, 2, false),
    clearJoins: jspb.Message.getFieldWithDefault(msg, 3, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.JoinedRoomsMessage}
 */
proto.JoinedRoomsMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.JoinedRoomsMessage;
  return proto.JoinedRoomsMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.JoinedRoomsMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.JoinedRoomsMessage}
 */
proto.JoinedRoomsMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Array<number>} */ (reader.readPackedUint32());
      msg.setPairsList(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setJoined(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setClearJoins(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.JoinedRoomsMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.JoinedRoomsMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.JoinedRoomsMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoinedRoomsMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPairsList();
  if (f.length > 0) {
    writer.writePackedUint32(
      1,
      f
    );
  }
  f = message.getJoined();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getClearJoins();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * repeated uint32 pairs = 1;
 * @return {!Array<number>}
 */
proto.JoinedRoomsMessage.prototype.getPairsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 1));
};


/** @param {!Array<number>} value */
proto.JoinedRoomsMessage.prototype.setPairsList = function(value) {
  jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
proto.JoinedRoomsMessage.prototype.addPairs = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


proto.JoinedRoomsMessage.prototype.clearPairsList = function() {
  this.setPairsList([]);
};


/**
 * optional bool joined = 2;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.JoinedRoomsMessage.prototype.getJoined = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 2, false));
};


/** @param {boolean} value */
proto.JoinedRoomsMessage.prototype.setJoined = function(value) {
  jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional bool clear_joins = 3;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.JoinedRoomsMessage.prototype.getClearJoins = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 3, false));
};


/** @param {boolean} value */
proto.JoinedRoomsMessage.prototype.setClearJoins = function(value) {
  jspb.Message.setProto3BooleanField(this, 3, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.DiagnosticSystemInfoResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.DiagnosticSystemInfoResponse.repeatedFields_, null);
};
goog.inherits(proto.DiagnosticSystemInfoResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DiagnosticSystemInfoResponse.displayName = 'proto.DiagnosticSystemInfoResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.DiagnosticSystemInfoResponse.repeatedFields_ = [17];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.DiagnosticSystemInfoResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.DiagnosticSystemInfoResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DiagnosticSystemInfoResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DiagnosticSystemInfoResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    firmware: jspb.Message.getFieldWithDefault(msg, 1, ""),
    hardware: jspb.Message.getFieldWithDefault(msg, 2, ""),
    error: jspb.Message.getFieldWithDefault(msg, 3, ""),
    inputCount: jspb.Message.getFieldWithDefault(msg, 4, 0),
    outputCount: jspb.Message.getFieldWithDefault(msg, 5, 0),
    irCount: jspb.Message.getFieldWithDefault(msg, 6, 0),
    listStepCount: jspb.Message.getFieldWithDefault(msg, 7, 0),
    listCount: jspb.Message.getFieldWithDefault(msg, 8, 0),
    alarmCount: jspb.Message.getFieldWithDefault(msg, 9, 0),
    burninCount: jspb.Message.getFieldWithDefault(msg, 10, 0),
    spektraSeqCount: jspb.Message.getFieldWithDefault(msg, 11, 0),
    spektraSeqStepCount: jspb.Message.getFieldWithDefault(msg, 12, 0),
    spektraThemeCount: jspb.Message.getFieldWithDefault(msg, 13, 0),
    spektraStaticCount: jspb.Message.getFieldWithDefault(msg, 14, 0),
    protoVersion: jspb.Message.getFieldWithDefault(msg, 15, 0),
    lineCount: jspb.Message.getFieldWithDefault(msg, 16, 0),
    linesList: jspb.Message.getRepeatedField(msg, 17),
    profileCount: jspb.Message.getFieldWithDefault(msg, 18, 0),
    presetCodeCount: jspb.Message.getFieldWithDefault(msg, 19, 0),
    userLevelCount: jspb.Message.getFieldWithDefault(msg, 20, 0),
    dmxToDaliCount: jspb.Message.getFieldWithDefault(msg, 21, 0),
    spektraZoneCount: jspb.Message.getFieldWithDefault(msg, 22, 0),
    logicCount: jspb.Message.getFieldWithDefault(msg, 23, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.DiagnosticSystemInfoResponse}
 */
proto.DiagnosticSystemInfoResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DiagnosticSystemInfoResponse;
  return proto.DiagnosticSystemInfoResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DiagnosticSystemInfoResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DiagnosticSystemInfoResponse}
 */
proto.DiagnosticSystemInfoResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFirmware(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setHardware(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setError(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setInputCount(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setOutputCount(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIrCount(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setListStepCount(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setListCount(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAlarmCount(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setBurninCount(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSpektraSeqCount(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSpektraSeqStepCount(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSpektraThemeCount(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSpektraStaticCount(value);
      break;
    case 15:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setProtoVersion(value);
      break;
    case 16:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLineCount(value);
      break;
    case 17:
      var value = /** @type {!Array<!proto.LineType>} */ (reader.readPackedEnum());
      msg.setLinesList(value);
      break;
    case 18:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setProfileCount(value);
      break;
    case 19:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPresetCodeCount(value);
      break;
    case 20:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setUserLevelCount(value);
      break;
    case 21:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setDmxToDaliCount(value);
      break;
    case 22:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSpektraZoneCount(value);
      break;
    case 23:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLogicCount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.DiagnosticSystemInfoResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DiagnosticSystemInfoResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DiagnosticSystemInfoResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DiagnosticSystemInfoResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFirmware();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getHardware();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getError();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getInputCount();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getOutputCount();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = message.getIrCount();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
  f = message.getListStepCount();
  if (f !== 0) {
    writer.writeUint32(
      7,
      f
    );
  }
  f = message.getListCount();
  if (f !== 0) {
    writer.writeUint32(
      8,
      f
    );
  }
  f = message.getAlarmCount();
  if (f !== 0) {
    writer.writeUint32(
      9,
      f
    );
  }
  f = message.getBurninCount();
  if (f !== 0) {
    writer.writeUint32(
      10,
      f
    );
  }
  f = message.getSpektraSeqCount();
  if (f !== 0) {
    writer.writeUint32(
      11,
      f
    );
  }
  f = message.getSpektraSeqStepCount();
  if (f !== 0) {
    writer.writeUint32(
      12,
      f
    );
  }
  f = message.getSpektraThemeCount();
  if (f !== 0) {
    writer.writeUint32(
      13,
      f
    );
  }
  f = message.getSpektraStaticCount();
  if (f !== 0) {
    writer.writeUint32(
      14,
      f
    );
  }
  f = message.getProtoVersion();
  if (f !== 0) {
    writer.writeUint32(
      15,
      f
    );
  }
  f = message.getLineCount();
  if (f !== 0) {
    writer.writeUint32(
      16,
      f
    );
  }
  f = message.getLinesList();
  if (f.length > 0) {
    writer.writePackedEnum(
      17,
      f
    );
  }
  f = message.getProfileCount();
  if (f !== 0) {
    writer.writeUint32(
      18,
      f
    );
  }
  f = message.getPresetCodeCount();
  if (f !== 0) {
    writer.writeUint32(
      19,
      f
    );
  }
  f = message.getUserLevelCount();
  if (f !== 0) {
    writer.writeUint32(
      20,
      f
    );
  }
  f = message.getDmxToDaliCount();
  if (f !== 0) {
    writer.writeUint32(
      21,
      f
    );
  }
  f = message.getSpektraZoneCount();
  if (f !== 0) {
    writer.writeUint32(
      22,
      f
    );
  }
  f = message.getLogicCount();
  if (f !== 0) {
    writer.writeUint32(
      23,
      f
    );
  }
};


/**
 * optional string firmware = 1;
 * @return {string}
 */
proto.DiagnosticSystemInfoResponse.prototype.getFirmware = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.DiagnosticSystemInfoResponse.prototype.setFirmware = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string hardware = 2;
 * @return {string}
 */
proto.DiagnosticSystemInfoResponse.prototype.getHardware = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.DiagnosticSystemInfoResponse.prototype.setHardware = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string error = 3;
 * @return {string}
 */
proto.DiagnosticSystemInfoResponse.prototype.getError = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.DiagnosticSystemInfoResponse.prototype.setError = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional uint32 input_count = 4;
 * @return {number}
 */
proto.DiagnosticSystemInfoResponse.prototype.getInputCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.DiagnosticSystemInfoResponse.prototype.setInputCount = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint32 output_count = 5;
 * @return {number}
 */
proto.DiagnosticSystemInfoResponse.prototype.getOutputCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.DiagnosticSystemInfoResponse.prototype.setOutputCount = function(value) {
  jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional uint32 ir_count = 6;
 * @return {number}
 */
proto.DiagnosticSystemInfoResponse.prototype.getIrCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.DiagnosticSystemInfoResponse.prototype.setIrCount = function(value) {
  jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional uint32 list_step_count = 7;
 * @return {number}
 */
proto.DiagnosticSystemInfoResponse.prototype.getListStepCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {number} value */
proto.DiagnosticSystemInfoResponse.prototype.setListStepCount = function(value) {
  jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional uint32 list_count = 8;
 * @return {number}
 */
proto.DiagnosticSystemInfoResponse.prototype.getListCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/** @param {number} value */
proto.DiagnosticSystemInfoResponse.prototype.setListCount = function(value) {
  jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional uint32 alarm_count = 9;
 * @return {number}
 */
proto.DiagnosticSystemInfoResponse.prototype.getAlarmCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/** @param {number} value */
proto.DiagnosticSystemInfoResponse.prototype.setAlarmCount = function(value) {
  jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional uint32 burnin_count = 10;
 * @return {number}
 */
proto.DiagnosticSystemInfoResponse.prototype.getBurninCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/** @param {number} value */
proto.DiagnosticSystemInfoResponse.prototype.setBurninCount = function(value) {
  jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional uint32 spektra_seq_count = 11;
 * @return {number}
 */
proto.DiagnosticSystemInfoResponse.prototype.getSpektraSeqCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/** @param {number} value */
proto.DiagnosticSystemInfoResponse.prototype.setSpektraSeqCount = function(value) {
  jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional uint32 spektra_seq_step_count = 12;
 * @return {number}
 */
proto.DiagnosticSystemInfoResponse.prototype.getSpektraSeqStepCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/** @param {number} value */
proto.DiagnosticSystemInfoResponse.prototype.setSpektraSeqStepCount = function(value) {
  jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional uint32 spektra_theme_count = 13;
 * @return {number}
 */
proto.DiagnosticSystemInfoResponse.prototype.getSpektraThemeCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/** @param {number} value */
proto.DiagnosticSystemInfoResponse.prototype.setSpektraThemeCount = function(value) {
  jspb.Message.setProto3IntField(this, 13, value);
};


/**
 * optional uint32 spektra_static_count = 14;
 * @return {number}
 */
proto.DiagnosticSystemInfoResponse.prototype.getSpektraStaticCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/** @param {number} value */
proto.DiagnosticSystemInfoResponse.prototype.setSpektraStaticCount = function(value) {
  jspb.Message.setProto3IntField(this, 14, value);
};


/**
 * optional uint32 proto_version = 15;
 * @return {number}
 */
proto.DiagnosticSystemInfoResponse.prototype.getProtoVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};


/** @param {number} value */
proto.DiagnosticSystemInfoResponse.prototype.setProtoVersion = function(value) {
  jspb.Message.setProto3IntField(this, 15, value);
};


/**
 * optional uint32 line_count = 16;
 * @return {number}
 */
proto.DiagnosticSystemInfoResponse.prototype.getLineCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 16, 0));
};


/** @param {number} value */
proto.DiagnosticSystemInfoResponse.prototype.setLineCount = function(value) {
  jspb.Message.setProto3IntField(this, 16, value);
};


/**
 * repeated LineType lines = 17;
 * @return {!Array<!proto.LineType>}
 */
proto.DiagnosticSystemInfoResponse.prototype.getLinesList = function() {
  return /** @type {!Array<!proto.LineType>} */ (jspb.Message.getRepeatedField(this, 17));
};


/** @param {!Array<!proto.LineType>} value */
proto.DiagnosticSystemInfoResponse.prototype.setLinesList = function(value) {
  jspb.Message.setField(this, 17, value || []);
};


/**
 * @param {!proto.LineType} value
 * @param {number=} opt_index
 */
proto.DiagnosticSystemInfoResponse.prototype.addLines = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 17, value, opt_index);
};


proto.DiagnosticSystemInfoResponse.prototype.clearLinesList = function() {
  this.setLinesList([]);
};


/**
 * optional uint32 profile_count = 18;
 * @return {number}
 */
proto.DiagnosticSystemInfoResponse.prototype.getProfileCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 18, 0));
};


/** @param {number} value */
proto.DiagnosticSystemInfoResponse.prototype.setProfileCount = function(value) {
  jspb.Message.setProto3IntField(this, 18, value);
};


/**
 * optional uint32 preset_code_count = 19;
 * @return {number}
 */
proto.DiagnosticSystemInfoResponse.prototype.getPresetCodeCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 19, 0));
};


/** @param {number} value */
proto.DiagnosticSystemInfoResponse.prototype.setPresetCodeCount = function(value) {
  jspb.Message.setProto3IntField(this, 19, value);
};


/**
 * optional uint32 user_level_count = 20;
 * @return {number}
 */
proto.DiagnosticSystemInfoResponse.prototype.getUserLevelCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 20, 0));
};


/** @param {number} value */
proto.DiagnosticSystemInfoResponse.prototype.setUserLevelCount = function(value) {
  jspb.Message.setProto3IntField(this, 20, value);
};


/**
 * optional uint32 dmx_to_dali_count = 21;
 * @return {number}
 */
proto.DiagnosticSystemInfoResponse.prototype.getDmxToDaliCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 21, 0));
};


/** @param {number} value */
proto.DiagnosticSystemInfoResponse.prototype.setDmxToDaliCount = function(value) {
  jspb.Message.setProto3IntField(this, 21, value);
};


/**
 * optional uint32 spektra_zone_count = 22;
 * @return {number}
 */
proto.DiagnosticSystemInfoResponse.prototype.getSpektraZoneCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 22, 0));
};


/** @param {number} value */
proto.DiagnosticSystemInfoResponse.prototype.setSpektraZoneCount = function(value) {
  jspb.Message.setProto3IntField(this, 22, value);
};


/**
 * optional uint32 logic_count = 23;
 * @return {number}
 */
proto.DiagnosticSystemInfoResponse.prototype.getLogicCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 23, 0));
};


/** @param {number} value */
proto.DiagnosticSystemInfoResponse.prototype.setLogicCount = function(value) {
  jspb.Message.setProto3IntField(this, 23, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.DiagnosticMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DiagnosticMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DiagnosticMessage.displayName = 'proto.DiagnosticMessage';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.DiagnosticMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.DiagnosticMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DiagnosticMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DiagnosticMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    page: jspb.Message.getFieldWithDefault(msg, 2, 0),
    line: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.DiagnosticMessage}
 */
proto.DiagnosticMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DiagnosticMessage;
  return proto.DiagnosticMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DiagnosticMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DiagnosticMessage}
 */
proto.DiagnosticMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.DiagnosticMessageType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPage(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLine(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.DiagnosticMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DiagnosticMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DiagnosticMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DiagnosticMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getPage();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getLine();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
};


/**
 * optional DiagnosticMessageType type = 1;
 * @return {!proto.DiagnosticMessageType}
 */
proto.DiagnosticMessage.prototype.getType = function() {
  return /** @type {!proto.DiagnosticMessageType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.DiagnosticMessageType} value */
proto.DiagnosticMessage.prototype.setType = function(value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional uint32 page = 2;
 * @return {number}
 */
proto.DiagnosticMessage.prototype.getPage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.DiagnosticMessage.prototype.setPage = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 line = 3;
 * @return {number}
 */
proto.DiagnosticMessage.prototype.getLine = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.DiagnosticMessage.prototype.setLine = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.AdminProjectPropertiesMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.AdminProjectPropertiesMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.AdminProjectPropertiesMessage.displayName = 'proto.AdminProjectPropertiesMessage';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.AdminProjectPropertiesMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.AdminProjectPropertiesMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.AdminProjectPropertiesMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AdminProjectPropertiesMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    deviceName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    projectName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    longitude: +jspb.Message.getFieldWithDefault(msg, 4, 0.0),
    latitude: +jspb.Message.getFieldWithDefault(msg, 5, 0.0),
    localOffset: +jspb.Message.getFieldWithDefault(msg, 6, 0.0),
    daylightSavings: jspb.Message.getFieldWithDefault(msg, 7, false),
    daylightSavingsStart: jspb.Message.getFieldWithDefault(msg, 8, 0),
    daylightSavingsEnd: jspb.Message.getFieldWithDefault(msg, 9, 0),
    pollActive: jspb.Message.getFieldWithDefault(msg, 10, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.AdminProjectPropertiesMessage}
 */
proto.AdminProjectPropertiesMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.AdminProjectPropertiesMessage;
  return proto.AdminProjectPropertiesMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.AdminProjectPropertiesMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.AdminProjectPropertiesMessage}
 */
proto.AdminProjectPropertiesMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDeviceName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectName(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setLongitude(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setLatitude(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setLocalOffset(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDaylightSavings(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setDaylightSavingsStart(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setDaylightSavingsEnd(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPollActive(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.AdminProjectPropertiesMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.AdminProjectPropertiesMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.AdminProjectPropertiesMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AdminProjectPropertiesMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDeviceName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getProjectName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getLongitude();
  if (f !== 0.0) {
    writer.writeFloat(
      4,
      f
    );
  }
  f = message.getLatitude();
  if (f !== 0.0) {
    writer.writeFloat(
      5,
      f
    );
  }
  f = message.getLocalOffset();
  if (f !== 0.0) {
    writer.writeFloat(
      6,
      f
    );
  }
  f = message.getDaylightSavings();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getDaylightSavingsStart();
  if (f !== 0) {
    writer.writeUint32(
      8,
      f
    );
  }
  f = message.getDaylightSavingsEnd();
  if (f !== 0) {
    writer.writeUint32(
      9,
      f
    );
  }
  f = message.getPollActive();
  if (f) {
    writer.writeBool(
      10,
      f
    );
  }
};


/**
 * optional string device_name = 2;
 * @return {string}
 */
proto.AdminProjectPropertiesMessage.prototype.getDeviceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.AdminProjectPropertiesMessage.prototype.setDeviceName = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string project_name = 3;
 * @return {string}
 */
proto.AdminProjectPropertiesMessage.prototype.getProjectName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.AdminProjectPropertiesMessage.prototype.setProjectName = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional float longitude = 4;
 * @return {number}
 */
proto.AdminProjectPropertiesMessage.prototype.getLongitude = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 4, 0.0));
};


/** @param {number} value */
proto.AdminProjectPropertiesMessage.prototype.setLongitude = function(value) {
  jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional float latitude = 5;
 * @return {number}
 */
proto.AdminProjectPropertiesMessage.prototype.getLatitude = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 5, 0.0));
};


/** @param {number} value */
proto.AdminProjectPropertiesMessage.prototype.setLatitude = function(value) {
  jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional float local_offset = 6;
 * @return {number}
 */
proto.AdminProjectPropertiesMessage.prototype.getLocalOffset = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 6, 0.0));
};


/** @param {number} value */
proto.AdminProjectPropertiesMessage.prototype.setLocalOffset = function(value) {
  jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * optional bool daylight_savings = 7;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.AdminProjectPropertiesMessage.prototype.getDaylightSavings = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 7, false));
};


/** @param {boolean} value */
proto.AdminProjectPropertiesMessage.prototype.setDaylightSavings = function(value) {
  jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * optional uint32 daylight_savings_start = 8;
 * @return {number}
 */
proto.AdminProjectPropertiesMessage.prototype.getDaylightSavingsStart = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/** @param {number} value */
proto.AdminProjectPropertiesMessage.prototype.setDaylightSavingsStart = function(value) {
  jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional uint32 daylight_savings_end = 9;
 * @return {number}
 */
proto.AdminProjectPropertiesMessage.prototype.getDaylightSavingsEnd = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/** @param {number} value */
proto.AdminProjectPropertiesMessage.prototype.setDaylightSavingsEnd = function(value) {
  jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional bool poll_active = 10;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.AdminProjectPropertiesMessage.prototype.getPollActive = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 10, false));
};


/** @param {boolean} value */
proto.AdminProjectPropertiesMessage.prototype.setPollActive = function(value) {
  jspb.Message.setProto3BooleanField(this, 10, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.AdminConfigStatusMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.AdminConfigStatusMessage.repeatedFields_, null);
};
goog.inherits(proto.AdminConfigStatusMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.AdminConfigStatusMessage.displayName = 'proto.AdminConfigStatusMessage';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.AdminConfigStatusMessage.repeatedFields_ = [1,2,5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.AdminConfigStatusMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.AdminConfigStatusMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.AdminConfigStatusMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AdminConfigStatusMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    listStatusList: jspb.Message.getRepeatedField(msg, 1),
    burnInStatusList: jspb.Message.getRepeatedField(msg, 2),
    alarmStatus: jspb.Message.getFieldWithDefault(msg, 3, 0),
    alarmTimeFromReg: (f = msg.getAlarmTimeFromReg()) && proto.TimeClockMessage.toObject(includeInstance, f),
    sensorStatusList: jspb.Message.getRepeatedField(msg, 5)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.AdminConfigStatusMessage}
 */
proto.AdminConfigStatusMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.AdminConfigStatusMessage;
  return proto.AdminConfigStatusMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.AdminConfigStatusMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.AdminConfigStatusMessage}
 */
proto.AdminConfigStatusMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Array<number>} */ (reader.readPackedUint32());
      msg.setListStatusList(value);
      break;
    case 2:
      var value = /** @type {!Array<number>} */ (reader.readPackedUint32());
      msg.setBurnInStatusList(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAlarmStatus(value);
      break;
    case 4:
      var value = new proto.TimeClockMessage;
      reader.readMessage(value,proto.TimeClockMessage.deserializeBinaryFromReader);
      msg.setAlarmTimeFromReg(value);
      break;
    case 5:
      var value = /** @type {!Array<number>} */ (reader.readPackedUint32());
      msg.setSensorStatusList(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.AdminConfigStatusMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.AdminConfigStatusMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.AdminConfigStatusMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AdminConfigStatusMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getListStatusList();
  if (f.length > 0) {
    writer.writePackedUint32(
      1,
      f
    );
  }
  f = message.getBurnInStatusList();
  if (f.length > 0) {
    writer.writePackedUint32(
      2,
      f
    );
  }
  f = message.getAlarmStatus();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getAlarmTimeFromReg();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.TimeClockMessage.serializeBinaryToWriter
    );
  }
  f = message.getSensorStatusList();
  if (f.length > 0) {
    writer.writePackedUint32(
      5,
      f
    );
  }
};


/**
 * repeated uint32 list_status = 1;
 * @return {!Array<number>}
 */
proto.AdminConfigStatusMessage.prototype.getListStatusList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 1));
};


/** @param {!Array<number>} value */
proto.AdminConfigStatusMessage.prototype.setListStatusList = function(value) {
  jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
proto.AdminConfigStatusMessage.prototype.addListStatus = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


proto.AdminConfigStatusMessage.prototype.clearListStatusList = function() {
  this.setListStatusList([]);
};


/**
 * repeated uint32 burn_in_status = 2;
 * @return {!Array<number>}
 */
proto.AdminConfigStatusMessage.prototype.getBurnInStatusList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 2));
};


/** @param {!Array<number>} value */
proto.AdminConfigStatusMessage.prototype.setBurnInStatusList = function(value) {
  jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
proto.AdminConfigStatusMessage.prototype.addBurnInStatus = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


proto.AdminConfigStatusMessage.prototype.clearBurnInStatusList = function() {
  this.setBurnInStatusList([]);
};


/**
 * optional uint32 alarm_status = 3;
 * @return {number}
 */
proto.AdminConfigStatusMessage.prototype.getAlarmStatus = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.AdminConfigStatusMessage.prototype.setAlarmStatus = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional TimeClockMessage alarm_time_from_reg = 4;
 * @return {?proto.TimeClockMessage}
 */
proto.AdminConfigStatusMessage.prototype.getAlarmTimeFromReg = function() {
  return /** @type{?proto.TimeClockMessage} */ (
    jspb.Message.getWrapperField(this, proto.TimeClockMessage, 4));
};


/** @param {?proto.TimeClockMessage|undefined} value */
proto.AdminConfigStatusMessage.prototype.setAlarmTimeFromReg = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.AdminConfigStatusMessage.prototype.clearAlarmTimeFromReg = function() {
  this.setAlarmTimeFromReg(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.AdminConfigStatusMessage.prototype.hasAlarmTimeFromReg = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * repeated uint32 sensor_status = 5;
 * @return {!Array<number>}
 */
proto.AdminConfigStatusMessage.prototype.getSensorStatusList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 5));
};


/** @param {!Array<number>} value */
proto.AdminConfigStatusMessage.prototype.setSensorStatusList = function(value) {
  jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
proto.AdminConfigStatusMessage.prototype.addSensorStatus = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


proto.AdminConfigStatusMessage.prototype.clearSensorStatusList = function() {
  this.setSensorStatusList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.AdminNetworkPropertiesMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.AdminNetworkPropertiesMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.AdminNetworkPropertiesMessage.displayName = 'proto.AdminNetworkPropertiesMessage';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.AdminNetworkPropertiesMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.AdminNetworkPropertiesMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.AdminNetworkPropertiesMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AdminNetworkPropertiesMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    dhcp: jspb.Message.getFieldWithDefault(msg, 1, false),
    ip: jspb.Message.getFieldWithDefault(msg, 2, ""),
    mac: jspb.Message.getFieldWithDefault(msg, 3, ""),
    gateway: jspb.Message.getFieldWithDefault(msg, 4, ""),
    ntpserver: jspb.Message.getFieldWithDefault(msg, 5, ""),
    ntp: jspb.Message.getFieldWithDefault(msg, 6, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.AdminNetworkPropertiesMessage}
 */
proto.AdminNetworkPropertiesMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.AdminNetworkPropertiesMessage;
  return proto.AdminNetworkPropertiesMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.AdminNetworkPropertiesMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.AdminNetworkPropertiesMessage}
 */
proto.AdminNetworkPropertiesMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDhcp(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setIp(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMac(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setGateway(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setNtpserver(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setNtp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.AdminNetworkPropertiesMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.AdminNetworkPropertiesMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.AdminNetworkPropertiesMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AdminNetworkPropertiesMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDhcp();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getIp();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMac();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getGateway();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getNtpserver();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getNtp();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
};


/**
 * optional bool DHCP = 1;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.AdminNetworkPropertiesMessage.prototype.getDhcp = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1, false));
};


/** @param {boolean} value */
proto.AdminNetworkPropertiesMessage.prototype.setDhcp = function(value) {
  jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional string IP = 2;
 * @return {string}
 */
proto.AdminNetworkPropertiesMessage.prototype.getIp = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.AdminNetworkPropertiesMessage.prototype.setIp = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string MAC = 3;
 * @return {string}
 */
proto.AdminNetworkPropertiesMessage.prototype.getMac = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.AdminNetworkPropertiesMessage.prototype.setMac = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string gateway = 4;
 * @return {string}
 */
proto.AdminNetworkPropertiesMessage.prototype.getGateway = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.AdminNetworkPropertiesMessage.prototype.setGateway = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string NTPServer = 5;
 * @return {string}
 */
proto.AdminNetworkPropertiesMessage.prototype.getNtpserver = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.AdminNetworkPropertiesMessage.prototype.setNtpserver = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional bool NTP = 6;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.AdminNetworkPropertiesMessage.prototype.getNtp = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 6, false));
};


/** @param {boolean} value */
proto.AdminNetworkPropertiesMessage.prototype.setNtp = function(value) {
  jspb.Message.setProto3BooleanField(this, 6, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.AdminControllerLinesMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.AdminControllerLinesMessage.repeatedFields_, null);
};
goog.inherits(proto.AdminControllerLinesMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.AdminControllerLinesMessage.displayName = 'proto.AdminControllerLinesMessage';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.AdminControllerLinesMessage.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.AdminControllerLinesMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.AdminControllerLinesMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.AdminControllerLinesMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AdminControllerLinesMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    linesList: jspb.Message.getRepeatedField(msg, 1)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.AdminControllerLinesMessage}
 */
proto.AdminControllerLinesMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.AdminControllerLinesMessage;
  return proto.AdminControllerLinesMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.AdminControllerLinesMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.AdminControllerLinesMessage}
 */
proto.AdminControllerLinesMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Array<!proto.LineType>} */ (reader.readPackedEnum());
      msg.setLinesList(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.AdminControllerLinesMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.AdminControllerLinesMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.AdminControllerLinesMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AdminControllerLinesMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLinesList();
  if (f.length > 0) {
    writer.writePackedEnum(
      1,
      f
    );
  }
};


/**
 * repeated LineType lines = 1;
 * @return {!Array<!proto.LineType>}
 */
proto.AdminControllerLinesMessage.prototype.getLinesList = function() {
  return /** @type {!Array<!proto.LineType>} */ (jspb.Message.getRepeatedField(this, 1));
};


/** @param {!Array<!proto.LineType>} value */
proto.AdminControllerLinesMessage.prototype.setLinesList = function(value) {
  jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!proto.LineType} value
 * @param {number=} opt_index
 */
proto.AdminControllerLinesMessage.prototype.addLines = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


proto.AdminControllerLinesMessage.prototype.clearLinesList = function() {
  this.setLinesList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.AdminDeviceStatusMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.AdminDeviceStatusMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.AdminDeviceStatusMessage.displayName = 'proto.AdminDeviceStatusMessage';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.AdminDeviceStatusMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.AdminDeviceStatusMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.AdminDeviceStatusMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AdminDeviceStatusMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    temperature: +jspb.Message.getFieldWithDefault(msg, 1, 0.0),
    battery: +jspb.Message.getFieldWithDefault(msg, 2, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.AdminDeviceStatusMessage}
 */
proto.AdminDeviceStatusMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.AdminDeviceStatusMessage;
  return proto.AdminDeviceStatusMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.AdminDeviceStatusMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.AdminDeviceStatusMessage}
 */
proto.AdminDeviceStatusMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setTemperature(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setBattery(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.AdminDeviceStatusMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.AdminDeviceStatusMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.AdminDeviceStatusMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AdminDeviceStatusMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTemperature();
  if (f !== 0.0) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = message.getBattery();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
};


/**
 * optional float temperature = 1;
 * @return {number}
 */
proto.AdminDeviceStatusMessage.prototype.getTemperature = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 1, 0.0));
};


/** @param {number} value */
proto.AdminDeviceStatusMessage.prototype.setTemperature = function(value) {
  jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional float battery = 2;
 * @return {number}
 */
proto.AdminDeviceStatusMessage.prototype.getBattery = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 2, 0.0));
};


/** @param {number} value */
proto.AdminDeviceStatusMessage.prototype.setBattery = function(value) {
  jspb.Message.setProto3FloatField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.AdminSecureLoginMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.AdminSecureLoginMessage.repeatedFields_, null);
};
goog.inherits(proto.AdminSecureLoginMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.AdminSecureLoginMessage.displayName = 'proto.AdminSecureLoginMessage';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.AdminSecureLoginMessage.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.AdminSecureLoginMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.AdminSecureLoginMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.AdminSecureLoginMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AdminSecureLoginMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    username: jspb.Message.getFieldWithDefault(msg, 1, ""),
    cnonce: jspb.Message.getFieldWithDefault(msg, 2, ""),
    hashList: jspb.Message.getRepeatedField(msg, 3)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.AdminSecureLoginMessage}
 */
proto.AdminSecureLoginMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.AdminSecureLoginMessage;
  return proto.AdminSecureLoginMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.AdminSecureLoginMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.AdminSecureLoginMessage}
 */
proto.AdminSecureLoginMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCnonce(value);
      break;
    case 3:
      var value = /** @type {!Array<number>} */ (reader.readPackedUint32());
      msg.setHashList(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.AdminSecureLoginMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.AdminSecureLoginMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.AdminSecureLoginMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AdminSecureLoginMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUsername();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCnonce();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getHashList();
  if (f.length > 0) {
    writer.writePackedUint32(
      3,
      f
    );
  }
};


/**
 * optional string username = 1;
 * @return {string}
 */
proto.AdminSecureLoginMessage.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.AdminSecureLoginMessage.prototype.setUsername = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string cnonce = 2;
 * @return {string}
 */
proto.AdminSecureLoginMessage.prototype.getCnonce = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.AdminSecureLoginMessage.prototype.setCnonce = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated uint32 hash = 3;
 * @return {!Array<number>}
 */
proto.AdminSecureLoginMessage.prototype.getHashList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 3));
};


/** @param {!Array<number>} value */
proto.AdminSecureLoginMessage.prototype.setHashList = function(value) {
  jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
proto.AdminSecureLoginMessage.prototype.addHash = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


proto.AdminSecureLoginMessage.prototype.clearHashList = function() {
  this.setHashList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.AdminMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.AdminMessage.oneofGroups_);
};
goog.inherits(proto.AdminMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.AdminMessage.displayName = 'proto.AdminMessage';
}
/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.AdminMessage.oneofGroups_ = [[3,4,5,6,7,8,9]];

/**
 * @enum {number}
 */
proto.AdminMessage.PayloadCase = {
  PAYLOAD_NOT_SET: 0,
  DATA: 3,
  NETWORK_PROPERTIES: 4,
  PROJECT_PROPERTIES: 5,
  CONTROLLER_LINES: 6,
  DEVICE_STATUS: 7,
  CONFIG_STATUS: 8,
  DEVICE_TIME: 9
};

/**
 * @return {proto.AdminMessage.PayloadCase}
 */
proto.AdminMessage.prototype.getPayloadCase = function() {
  return /** @type {proto.AdminMessage.PayloadCase} */(jspb.Message.computeOneofCase(this, proto.AdminMessage.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.AdminMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.AdminMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.AdminMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AdminMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    command: jspb.Message.getFieldWithDefault(msg, 1, 0),
    target: jspb.Message.getFieldWithDefault(msg, 2, 0),
    data: (f = msg.getData()) && proto.PayloadMessage.toObject(includeInstance, f),
    networkProperties: (f = msg.getNetworkProperties()) && proto.AdminNetworkPropertiesMessage.toObject(includeInstance, f),
    projectProperties: (f = msg.getProjectProperties()) && proto.AdminProjectPropertiesMessage.toObject(includeInstance, f),
    controllerLines: (f = msg.getControllerLines()) && proto.AdminControllerLinesMessage.toObject(includeInstance, f),
    deviceStatus: (f = msg.getDeviceStatus()) && proto.AdminDeviceStatusMessage.toObject(includeInstance, f),
    configStatus: (f = msg.getConfigStatus()) && proto.AdminConfigStatusMessage.toObject(includeInstance, f),
    deviceTime: (f = msg.getDeviceTime()) && proto.UpdateTimeMessage.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.AdminMessage}
 */
proto.AdminMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.AdminMessage;
  return proto.AdminMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.AdminMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.AdminMessage}
 */
proto.AdminMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.AdminCommandType} */ (reader.readEnum());
      msg.setCommand(value);
      break;
    case 2:
      var value = /** @type {!proto.AdminPropertyType} */ (reader.readEnum());
      msg.setTarget(value);
      break;
    case 3:
      var value = new proto.PayloadMessage;
      reader.readMessage(value,proto.PayloadMessage.deserializeBinaryFromReader);
      msg.setData(value);
      break;
    case 4:
      var value = new proto.AdminNetworkPropertiesMessage;
      reader.readMessage(value,proto.AdminNetworkPropertiesMessage.deserializeBinaryFromReader);
      msg.setNetworkProperties(value);
      break;
    case 5:
      var value = new proto.AdminProjectPropertiesMessage;
      reader.readMessage(value,proto.AdminProjectPropertiesMessage.deserializeBinaryFromReader);
      msg.setProjectProperties(value);
      break;
    case 6:
      var value = new proto.AdminControllerLinesMessage;
      reader.readMessage(value,proto.AdminControllerLinesMessage.deserializeBinaryFromReader);
      msg.setControllerLines(value);
      break;
    case 7:
      var value = new proto.AdminDeviceStatusMessage;
      reader.readMessage(value,proto.AdminDeviceStatusMessage.deserializeBinaryFromReader);
      msg.setDeviceStatus(value);
      break;
    case 8:
      var value = new proto.AdminConfigStatusMessage;
      reader.readMessage(value,proto.AdminConfigStatusMessage.deserializeBinaryFromReader);
      msg.setConfigStatus(value);
      break;
    case 9:
      var value = new proto.UpdateTimeMessage;
      reader.readMessage(value,proto.UpdateTimeMessage.deserializeBinaryFromReader);
      msg.setDeviceTime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.AdminMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.AdminMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.AdminMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AdminMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommand();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getTarget();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getData();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.PayloadMessage.serializeBinaryToWriter
    );
  }
  f = message.getNetworkProperties();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.AdminNetworkPropertiesMessage.serializeBinaryToWriter
    );
  }
  f = message.getProjectProperties();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.AdminProjectPropertiesMessage.serializeBinaryToWriter
    );
  }
  f = message.getControllerLines();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.AdminControllerLinesMessage.serializeBinaryToWriter
    );
  }
  f = message.getDeviceStatus();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.AdminDeviceStatusMessage.serializeBinaryToWriter
    );
  }
  f = message.getConfigStatus();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.AdminConfigStatusMessage.serializeBinaryToWriter
    );
  }
  f = message.getDeviceTime();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.UpdateTimeMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional AdminCommandType command = 1;
 * @return {!proto.AdminCommandType}
 */
proto.AdminMessage.prototype.getCommand = function() {
  return /** @type {!proto.AdminCommandType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.AdminCommandType} value */
proto.AdminMessage.prototype.setCommand = function(value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional AdminPropertyType target = 2;
 * @return {!proto.AdminPropertyType}
 */
proto.AdminMessage.prototype.getTarget = function() {
  return /** @type {!proto.AdminPropertyType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {!proto.AdminPropertyType} value */
proto.AdminMessage.prototype.setTarget = function(value) {
  jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional PayloadMessage data = 3;
 * @return {?proto.PayloadMessage}
 */
proto.AdminMessage.prototype.getData = function() {
  return /** @type{?proto.PayloadMessage} */ (
    jspb.Message.getWrapperField(this, proto.PayloadMessage, 3));
};


/** @param {?proto.PayloadMessage|undefined} value */
proto.AdminMessage.prototype.setData = function(value) {
  jspb.Message.setOneofWrapperField(this, 3, proto.AdminMessage.oneofGroups_[0], value);
};


proto.AdminMessage.prototype.clearData = function() {
  this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.AdminMessage.prototype.hasData = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional AdminNetworkPropertiesMessage network_properties = 4;
 * @return {?proto.AdminNetworkPropertiesMessage}
 */
proto.AdminMessage.prototype.getNetworkProperties = function() {
  return /** @type{?proto.AdminNetworkPropertiesMessage} */ (
    jspb.Message.getWrapperField(this, proto.AdminNetworkPropertiesMessage, 4));
};


/** @param {?proto.AdminNetworkPropertiesMessage|undefined} value */
proto.AdminMessage.prototype.setNetworkProperties = function(value) {
  jspb.Message.setOneofWrapperField(this, 4, proto.AdminMessage.oneofGroups_[0], value);
};


proto.AdminMessage.prototype.clearNetworkProperties = function() {
  this.setNetworkProperties(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.AdminMessage.prototype.hasNetworkProperties = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional AdminProjectPropertiesMessage project_properties = 5;
 * @return {?proto.AdminProjectPropertiesMessage}
 */
proto.AdminMessage.prototype.getProjectProperties = function() {
  return /** @type{?proto.AdminProjectPropertiesMessage} */ (
    jspb.Message.getWrapperField(this, proto.AdminProjectPropertiesMessage, 5));
};


/** @param {?proto.AdminProjectPropertiesMessage|undefined} value */
proto.AdminMessage.prototype.setProjectProperties = function(value) {
  jspb.Message.setOneofWrapperField(this, 5, proto.AdminMessage.oneofGroups_[0], value);
};


proto.AdminMessage.prototype.clearProjectProperties = function() {
  this.setProjectProperties(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.AdminMessage.prototype.hasProjectProperties = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional AdminControllerLinesMessage controller_lines = 6;
 * @return {?proto.AdminControllerLinesMessage}
 */
proto.AdminMessage.prototype.getControllerLines = function() {
  return /** @type{?proto.AdminControllerLinesMessage} */ (
    jspb.Message.getWrapperField(this, proto.AdminControllerLinesMessage, 6));
};


/** @param {?proto.AdminControllerLinesMessage|undefined} value */
proto.AdminMessage.prototype.setControllerLines = function(value) {
  jspb.Message.setOneofWrapperField(this, 6, proto.AdminMessage.oneofGroups_[0], value);
};


proto.AdminMessage.prototype.clearControllerLines = function() {
  this.setControllerLines(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.AdminMessage.prototype.hasControllerLines = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional AdminDeviceStatusMessage device_status = 7;
 * @return {?proto.AdminDeviceStatusMessage}
 */
proto.AdminMessage.prototype.getDeviceStatus = function() {
  return /** @type{?proto.AdminDeviceStatusMessage} */ (
    jspb.Message.getWrapperField(this, proto.AdminDeviceStatusMessage, 7));
};


/** @param {?proto.AdminDeviceStatusMessage|undefined} value */
proto.AdminMessage.prototype.setDeviceStatus = function(value) {
  jspb.Message.setOneofWrapperField(this, 7, proto.AdminMessage.oneofGroups_[0], value);
};


proto.AdminMessage.prototype.clearDeviceStatus = function() {
  this.setDeviceStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.AdminMessage.prototype.hasDeviceStatus = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional AdminConfigStatusMessage config_status = 8;
 * @return {?proto.AdminConfigStatusMessage}
 */
proto.AdminMessage.prototype.getConfigStatus = function() {
  return /** @type{?proto.AdminConfigStatusMessage} */ (
    jspb.Message.getWrapperField(this, proto.AdminConfigStatusMessage, 8));
};


/** @param {?proto.AdminConfigStatusMessage|undefined} value */
proto.AdminMessage.prototype.setConfigStatus = function(value) {
  jspb.Message.setOneofWrapperField(this, 8, proto.AdminMessage.oneofGroups_[0], value);
};


proto.AdminMessage.prototype.clearConfigStatus = function() {
  this.setConfigStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.AdminMessage.prototype.hasConfigStatus = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional UpdateTimeMessage device_time = 9;
 * @return {?proto.UpdateTimeMessage}
 */
proto.AdminMessage.prototype.getDeviceTime = function() {
  return /** @type{?proto.UpdateTimeMessage} */ (
    jspb.Message.getWrapperField(this, proto.UpdateTimeMessage, 9));
};


/** @param {?proto.UpdateTimeMessage|undefined} value */
proto.AdminMessage.prototype.setDeviceTime = function(value) {
  jspb.Message.setOneofWrapperField(this, 9, proto.AdminMessage.oneofGroups_[0], value);
};


proto.AdminMessage.prototype.clearDeviceTime = function() {
  this.setDeviceTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.AdminMessage.prototype.hasDeviceTime = function() {
  return jspb.Message.getField(this, 9) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.DataMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.DataMessage.repeatedFields_, null);
};
goog.inherits(proto.DataMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.DataMessage.displayName = 'proto.DataMessage';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.DataMessage.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.DataMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.DataMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DataMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DataMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    identifier: jspb.Message.getFieldWithDefault(msg, 1, 0),
    seq: jspb.Message.getFieldWithDefault(msg, 2, 0),
    count: jspb.Message.getFieldWithDefault(msg, 3, 0),
    dataList: jspb.Message.getRepeatedField(msg, 4)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.DataMessage}
 */
proto.DataMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DataMessage;
  return proto.DataMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DataMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DataMessage}
 */
proto.DataMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIdentifier(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSeq(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCount(value);
      break;
    case 4:
      var value = /** @type {!Array<number>} */ (reader.readPackedUint32());
      msg.setDataList(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.DataMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DataMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DataMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DataMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIdentifier();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getSeq();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getCount();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getDataList();
  if (f.length > 0) {
    writer.writePackedUint32(
      4,
      f
    );
  }
};


/**
 * optional uint32 identifier = 1;
 * @return {number}
 */
proto.DataMessage.prototype.getIdentifier = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.DataMessage.prototype.setIdentifier = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 seq = 2;
 * @return {number}
 */
proto.DataMessage.prototype.getSeq = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.DataMessage.prototype.setSeq = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 count = 3;
 * @return {number}
 */
proto.DataMessage.prototype.getCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.DataMessage.prototype.setCount = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * repeated uint32 data = 4;
 * @return {!Array<number>}
 */
proto.DataMessage.prototype.getDataList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 4));
};


/** @param {!Array<number>} value */
proto.DataMessage.prototype.setDataList = function(value) {
  jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
proto.DataMessage.prototype.addData = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


proto.DataMessage.prototype.clearDataList = function() {
  this.setDataList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.FirmwareMetaMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.FirmwareMetaMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.FirmwareMetaMessage.displayName = 'proto.FirmwareMetaMessage';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.FirmwareMetaMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.FirmwareMetaMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.FirmwareMetaMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.FirmwareMetaMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    firmwareVersion: jspb.Message.getFieldWithDefault(msg, 1, 0),
    firmwareDate: jspb.Message.getFieldWithDefault(msg, 2, 0),
    firmwareDateUpload: jspb.Message.getFieldWithDefault(msg, 3, 0),
    firmwareChecksum: jspb.Message.getFieldWithDefault(msg, 4, 0),
    firmwareChunkCount: jspb.Message.getFieldWithDefault(msg, 5, 0),
    firmwareBaseAddress: jspb.Message.getFieldWithDefault(msg, 6, 0),
    firmwareEndAddress: jspb.Message.getFieldWithDefault(msg, 7, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.FirmwareMetaMessage}
 */
proto.FirmwareMetaMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.FirmwareMetaMessage;
  return proto.FirmwareMetaMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.FirmwareMetaMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.FirmwareMetaMessage}
 */
proto.FirmwareMetaMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setFirmwareVersion(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setFirmwareDate(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setFirmwareDateUpload(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setFirmwareChecksum(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setFirmwareChunkCount(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setFirmwareBaseAddress(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setFirmwareEndAddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.FirmwareMetaMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.FirmwareMetaMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.FirmwareMetaMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.FirmwareMetaMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFirmwareVersion();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getFirmwareDate();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getFirmwareDateUpload();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getFirmwareChecksum();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getFirmwareChunkCount();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = message.getFirmwareBaseAddress();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
  f = message.getFirmwareEndAddress();
  if (f !== 0) {
    writer.writeUint32(
      7,
      f
    );
  }
};


/**
 * optional uint32 firmware_version = 1;
 * @return {number}
 */
proto.FirmwareMetaMessage.prototype.getFirmwareVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.FirmwareMetaMessage.prototype.setFirmwareVersion = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 firmware_date = 2;
 * @return {number}
 */
proto.FirmwareMetaMessage.prototype.getFirmwareDate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.FirmwareMetaMessage.prototype.setFirmwareDate = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 firmware_date_upload = 3;
 * @return {number}
 */
proto.FirmwareMetaMessage.prototype.getFirmwareDateUpload = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.FirmwareMetaMessage.prototype.setFirmwareDateUpload = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 firmware_checksum = 4;
 * @return {number}
 */
proto.FirmwareMetaMessage.prototype.getFirmwareChecksum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.FirmwareMetaMessage.prototype.setFirmwareChecksum = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint32 firmware_chunk_count = 5;
 * @return {number}
 */
proto.FirmwareMetaMessage.prototype.getFirmwareChunkCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.FirmwareMetaMessage.prototype.setFirmwareChunkCount = function(value) {
  jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional uint32 firmware_base_address = 6;
 * @return {number}
 */
proto.FirmwareMetaMessage.prototype.getFirmwareBaseAddress = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.FirmwareMetaMessage.prototype.setFirmwareBaseAddress = function(value) {
  jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional uint32 firmware_end_address = 7;
 * @return {number}
 */
proto.FirmwareMetaMessage.prototype.getFirmwareEndAddress = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {number} value */
proto.FirmwareMetaMessage.prototype.setFirmwareEndAddress = function(value) {
  jspb.Message.setProto3IntField(this, 7, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.FirmwareControlMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.FirmwareControlMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.FirmwareControlMessage.displayName = 'proto.FirmwareControlMessage';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.FirmwareControlMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.FirmwareControlMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.FirmwareControlMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.FirmwareControlMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    cmd: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.FirmwareControlMessage}
 */
proto.FirmwareControlMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.FirmwareControlMessage;
  return proto.FirmwareControlMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.FirmwareControlMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.FirmwareControlMessage}
 */
proto.FirmwareControlMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.FirmwareCommandType} */ (reader.readEnum());
      msg.setCmd(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.FirmwareControlMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.FirmwareControlMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.FirmwareControlMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.FirmwareControlMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCmd();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional FirmwareCommandType cmd = 1;
 * @return {!proto.FirmwareCommandType}
 */
proto.FirmwareControlMessage.prototype.getCmd = function() {
  return /** @type {!proto.FirmwareCommandType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.FirmwareCommandType} value */
proto.FirmwareControlMessage.prototype.setCmd = function(value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.FirmwareChunkMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.FirmwareChunkMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.FirmwareChunkMessage.displayName = 'proto.FirmwareChunkMessage';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.FirmwareChunkMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.FirmwareChunkMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.FirmwareChunkMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.FirmwareChunkMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    firmwareAddress: jspb.Message.getFieldWithDefault(msg, 1, 0),
    totalBytes: jspb.Message.getFieldWithDefault(msg, 2, 0),
    payload: (f = msg.getPayload()) && proto.DataMessage.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.FirmwareChunkMessage}
 */
proto.FirmwareChunkMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.FirmwareChunkMessage;
  return proto.FirmwareChunkMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.FirmwareChunkMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.FirmwareChunkMessage}
 */
proto.FirmwareChunkMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setFirmwareAddress(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTotalBytes(value);
      break;
    case 3:
      var value = new proto.DataMessage;
      reader.readMessage(value,proto.DataMessage.deserializeBinaryFromReader);
      msg.setPayload(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.FirmwareChunkMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.FirmwareChunkMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.FirmwareChunkMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.FirmwareChunkMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFirmwareAddress();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getTotalBytes();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getPayload();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.DataMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 firmware_address = 1;
 * @return {number}
 */
proto.FirmwareChunkMessage.prototype.getFirmwareAddress = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.FirmwareChunkMessage.prototype.setFirmwareAddress = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 total_bytes = 2;
 * @return {number}
 */
proto.FirmwareChunkMessage.prototype.getTotalBytes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.FirmwareChunkMessage.prototype.setTotalBytes = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional DataMessage payload = 3;
 * @return {?proto.DataMessage}
 */
proto.FirmwareChunkMessage.prototype.getPayload = function() {
  return /** @type{?proto.DataMessage} */ (
    jspb.Message.getWrapperField(this, proto.DataMessage, 3));
};


/** @param {?proto.DataMessage|undefined} value */
proto.FirmwareChunkMessage.prototype.setPayload = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.FirmwareChunkMessage.prototype.clearPayload = function() {
  this.setPayload(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.FirmwareChunkMessage.prototype.hasPayload = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.TriggerEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.TriggerEvent.oneofGroups_);
};
goog.inherits(proto.TriggerEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.TriggerEvent.displayName = 'proto.TriggerEvent';
}
/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.TriggerEvent.oneofGroups_ = [[2,3]];

/**
 * @enum {number}
 */
proto.TriggerEvent.PayloadCase = {
  PAYLOAD_NOT_SET: 0,
  LEVEL: 2,
  DALI_COMMAND: 3
};

/**
 * @return {proto.TriggerEvent.PayloadCase}
 */
proto.TriggerEvent.prototype.getPayloadCase = function() {
  return /** @type {proto.TriggerEvent.PayloadCase} */(jspb.Message.computeOneofCase(this, proto.TriggerEvent.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.TriggerEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.TriggerEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.TriggerEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.TriggerEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    level: jspb.Message.getFieldWithDefault(msg, 2, 0),
    daliCommand: jspb.Message.getFieldWithDefault(msg, 3, 0),
    targetAddress: jspb.Message.getFieldWithDefault(msg, 4, 0),
    lineMask: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.TriggerEvent}
 */
proto.TriggerEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.TriggerEvent;
  return proto.TriggerEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.TriggerEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.TriggerEvent}
 */
proto.TriggerEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.TriggerType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLevel(value);
      break;
    case 3:
      var value = /** @type {!proto.DALICommandType} */ (reader.readEnum());
      msg.setDaliCommand(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTargetAddress(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLineMask(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.TriggerEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.TriggerEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.TriggerEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.TriggerEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = /** @type {!proto.DALICommandType} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getTargetAddress();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getLineMask();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
};


/**
 * optional TriggerType type = 1;
 * @return {!proto.TriggerType}
 */
proto.TriggerEvent.prototype.getType = function() {
  return /** @type {!proto.TriggerType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.TriggerType} value */
proto.TriggerEvent.prototype.setType = function(value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional uint32 level = 2;
 * @return {number}
 */
proto.TriggerEvent.prototype.getLevel = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.TriggerEvent.prototype.setLevel = function(value) {
  jspb.Message.setOneofField(this, 2, proto.TriggerEvent.oneofGroups_[0], value);
};


proto.TriggerEvent.prototype.clearLevel = function() {
  jspb.Message.setOneofField(this, 2, proto.TriggerEvent.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.TriggerEvent.prototype.hasLevel = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional DALICommandType dali_command = 3;
 * @return {!proto.DALICommandType}
 */
proto.TriggerEvent.prototype.getDaliCommand = function() {
  return /** @type {!proto.DALICommandType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {!proto.DALICommandType} value */
proto.TriggerEvent.prototype.setDaliCommand = function(value) {
  jspb.Message.setOneofField(this, 3, proto.TriggerEvent.oneofGroups_[0], value);
};


proto.TriggerEvent.prototype.clearDaliCommand = function() {
  jspb.Message.setOneofField(this, 3, proto.TriggerEvent.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.TriggerEvent.prototype.hasDaliCommand = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional uint32 target_address = 4;
 * @return {number}
 */
proto.TriggerEvent.prototype.getTargetAddress = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.TriggerEvent.prototype.setTargetAddress = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint32 line_mask = 5;
 * @return {number}
 */
proto.TriggerEvent.prototype.getLineMask = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.TriggerEvent.prototype.setLineMask = function(value) {
  jspb.Message.setProto3IntField(this, 5, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.EventMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.EventMessage.oneofGroups_);
};
goog.inherits(proto.EventMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.EventMessage.displayName = 'proto.EventMessage';
}
/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.EventMessage.oneofGroups_ = [[2,3,4,5]];

/**
 * @enum {number}
 */
proto.EventMessage.EventDataCase = {
  EVENT_DATA_NOT_SET: 0,
  TRIGGER: 2,
  INPUTS: 3,
  PAYLOAD: 4,
  JOINED_ROOMS: 5
};

/**
 * @return {proto.EventMessage.EventDataCase}
 */
proto.EventMessage.prototype.getEventDataCase = function() {
  return /** @type {proto.EventMessage.EventDataCase} */(jspb.Message.computeOneofCase(this, proto.EventMessage.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.EventMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.EventMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.EventMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.EventMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    event: jspb.Message.getFieldWithDefault(msg, 1, 0),
    trigger: (f = msg.getTrigger()) && proto.TriggerEvent.toObject(includeInstance, f),
    inputs: (f = msg.getInputs()) && proto.InputStateResponse.toObject(includeInstance, f),
    payload: (f = msg.getPayload()) && proto.PayloadMessage.toObject(includeInstance, f),
    joinedRooms: (f = msg.getJoinedRooms()) && proto.JoinedRoomsMessage.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.EventMessage}
 */
proto.EventMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.EventMessage;
  return proto.EventMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.EventMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.EventMessage}
 */
proto.EventMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.EventType} */ (reader.readEnum());
      msg.setEvent(value);
      break;
    case 2:
      var value = new proto.TriggerEvent;
      reader.readMessage(value,proto.TriggerEvent.deserializeBinaryFromReader);
      msg.setTrigger(value);
      break;
    case 3:
      var value = new proto.InputStateResponse;
      reader.readMessage(value,proto.InputStateResponse.deserializeBinaryFromReader);
      msg.setInputs(value);
      break;
    case 4:
      var value = new proto.PayloadMessage;
      reader.readMessage(value,proto.PayloadMessage.deserializeBinaryFromReader);
      msg.setPayload(value);
      break;
    case 5:
      var value = new proto.JoinedRoomsMessage;
      reader.readMessage(value,proto.JoinedRoomsMessage.deserializeBinaryFromReader);
      msg.setJoinedRooms(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.EventMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.EventMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.EventMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.EventMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEvent();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getTrigger();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.TriggerEvent.serializeBinaryToWriter
    );
  }
  f = message.getInputs();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.InputStateResponse.serializeBinaryToWriter
    );
  }
  f = message.getPayload();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.PayloadMessage.serializeBinaryToWriter
    );
  }
  f = message.getJoinedRooms();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.JoinedRoomsMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional EventType event = 1;
 * @return {!proto.EventType}
 */
proto.EventMessage.prototype.getEvent = function() {
  return /** @type {!proto.EventType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.EventType} value */
proto.EventMessage.prototype.setEvent = function(value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional TriggerEvent trigger = 2;
 * @return {?proto.TriggerEvent}
 */
proto.EventMessage.prototype.getTrigger = function() {
  return /** @type{?proto.TriggerEvent} */ (
    jspb.Message.getWrapperField(this, proto.TriggerEvent, 2));
};


/** @param {?proto.TriggerEvent|undefined} value */
proto.EventMessage.prototype.setTrigger = function(value) {
  jspb.Message.setOneofWrapperField(this, 2, proto.EventMessage.oneofGroups_[0], value);
};


proto.EventMessage.prototype.clearTrigger = function() {
  this.setTrigger(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.EventMessage.prototype.hasTrigger = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional InputStateResponse inputs = 3;
 * @return {?proto.InputStateResponse}
 */
proto.EventMessage.prototype.getInputs = function() {
  return /** @type{?proto.InputStateResponse} */ (
    jspb.Message.getWrapperField(this, proto.InputStateResponse, 3));
};


/** @param {?proto.InputStateResponse|undefined} value */
proto.EventMessage.prototype.setInputs = function(value) {
  jspb.Message.setOneofWrapperField(this, 3, proto.EventMessage.oneofGroups_[0], value);
};


proto.EventMessage.prototype.clearInputs = function() {
  this.setInputs(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.EventMessage.prototype.hasInputs = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional PayloadMessage payload = 4;
 * @return {?proto.PayloadMessage}
 */
proto.EventMessage.prototype.getPayload = function() {
  return /** @type{?proto.PayloadMessage} */ (
    jspb.Message.getWrapperField(this, proto.PayloadMessage, 4));
};


/** @param {?proto.PayloadMessage|undefined} value */
proto.EventMessage.prototype.setPayload = function(value) {
  jspb.Message.setOneofWrapperField(this, 4, proto.EventMessage.oneofGroups_[0], value);
};


proto.EventMessage.prototype.clearPayload = function() {
  this.setPayload(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.EventMessage.prototype.hasPayload = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional JoinedRoomsMessage joined_rooms = 5;
 * @return {?proto.JoinedRoomsMessage}
 */
proto.EventMessage.prototype.getJoinedRooms = function() {
  return /** @type{?proto.JoinedRoomsMessage} */ (
    jspb.Message.getWrapperField(this, proto.JoinedRoomsMessage, 5));
};


/** @param {?proto.JoinedRoomsMessage|undefined} value */
proto.EventMessage.prototype.setJoinedRooms = function(value) {
  jspb.Message.setOneofWrapperField(this, 5, proto.EventMessage.oneofGroups_[0], value);
};


proto.EventMessage.prototype.clearJoinedRooms = function() {
  this.setJoinedRooms(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.EventMessage.prototype.hasJoinedRooms = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.EdidioMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.EdidioMessage.oneofGroups_);
};
goog.inherits(proto.EdidioMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.EdidioMessage.displayName = 'proto.EdidioMessage';
}
/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.EdidioMessage.oneofGroups_ = [[2,3,4,5,6,8,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47]];

/**
 * @enum {number}
 */
proto.EdidioMessage.PayloadCase = {
  PAYLOAD_NOT_SET: 0,
  ACK: 2,
  INPUTS: 3,
  OUTPUTS: 4,
  IRS: 5,
  SENSOR: 6,
  LIST: 8,
  ALARM: 10,
  ALARMS: 11,
  BURN_INS: 12,
  SENSOR_COMMAND: 13,
  CHANGE_PROFILE: 14,
  IDENTIFY_MESSAGE: 15,
  UPDATE_TIME: 16,
  READ_DEVICE: 17,
  DALI_MESSAGE: 18,
  DALI_QUERY: 19,
  DMX_MESSAGE: 20,
  EXTERNAL_TRIGGER: 21,
  SPEKTRA_SETTINGS: 22,
  SPEKTRA_SEQUENCE: 23,
  SPEKTRA_CALENDAR: 24,
  SPEKTRA_THEME: 25,
  SPEKTRA_READ: 26,
  SPEKTRA_CONTROL: 27,
  DMX_TRANSLATOR: 28,
  INPUT_REQUEST: 29,
  INPUT_RESPONSE: 30,
  DIAG_SYSTEM: 31,
  DIAG_MESSAGE: 32,
  ADMIN_MESSAGE: 33,
  EVENT: 34,
  SECURE_DEVICE_SETTINGS: 35,
  FIRMWARE_NEW: 36,
  FIRMWARE_CONTROL: 37,
  FIRMWARE_CHUNK: 38,
  LEVEL_CACHE_RESPONSE: 39,
  JOINED_ROOMS: 40,
  LIST_EXTENDED: 41,
  AYT_MESSAGE: 42,
  RDM_MESSAGE: 43,
  RDM_RESPONSE_MESSAGE: 44,
  LOGIC_MESSAGE: 45,
  SECURE_LOGIN: 46,
  DEVICE_STATE_MESSAGE: 47
};

/**
 * @return {proto.EdidioMessage.PayloadCase}
 */
proto.EdidioMessage.prototype.getPayloadCase = function() {
  return /** @type {proto.EdidioMessage.PayloadCase} */(jspb.Message.computeOneofCase(this, proto.EdidioMessage.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.EdidioMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.EdidioMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.EdidioMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.EdidioMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    messageId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    ack: (f = msg.getAck()) && proto.AckMessage.toObject(includeInstance, f),
    inputs: (f = msg.getInputs()) && proto.InputMultiMessage.toObject(includeInstance, f),
    outputs: (f = msg.getOutputs()) && proto.OutputMultiMessage.toObject(includeInstance, f),
    irs: (f = msg.getIrs()) && proto.IRMultiMessage.toObject(includeInstance, f),
    sensor: (f = msg.getSensor()) && proto.SensorMessage.toObject(includeInstance, f),
    list: (f = msg.getList()) && proto.ListMessage.toObject(includeInstance, f),
    alarm: (f = msg.getAlarm()) && proto.AlarmMessage.toObject(includeInstance, f),
    alarms: (f = msg.getAlarms()) && proto.AlarmMultiMessage.toObject(includeInstance, f),
    burnIns: (f = msg.getBurnIns()) && proto.BurnInMultiMessage.toObject(includeInstance, f),
    sensorCommand: (f = msg.getSensorCommand()) && proto.SensorCommandMessage.toObject(includeInstance, f),
    changeProfile: (f = msg.getChangeProfile()) && proto.ChangeProfileMessage.toObject(includeInstance, f),
    identifyMessage: (f = msg.getIdentifyMessage()) && proto.IdentifyMessage.toObject(includeInstance, f),
    updateTime: (f = msg.getUpdateTime()) && proto.UpdateTimeMessage.toObject(includeInstance, f),
    readDevice: (f = msg.getReadDevice()) && proto.ReadDeviceMessage.toObject(includeInstance, f),
    daliMessage: (f = msg.getDaliMessage()) && proto.DALIMessage.toObject(includeInstance, f),
    daliQuery: (f = msg.getDaliQuery()) && proto.DALIQueryResponse.toObject(includeInstance, f),
    dmxMessage: (f = msg.getDmxMessage()) && proto.DMXMessage.toObject(includeInstance, f),
    externalTrigger: (f = msg.getExternalTrigger()) && proto.ExternalTriggerMessage.toObject(includeInstance, f),
    spektraSettings: (f = msg.getSpektraSettings()) && proto.SpektraSettingMessage.toObject(includeInstance, f),
    spektraSequence: (f = msg.getSpektraSequence()) && proto.SpektraSequenceConfigMessage.toObject(includeInstance, f),
    spektraCalendar: (f = msg.getSpektraCalendar()) && proto.SpektraCalendarMessage.toObject(includeInstance, f),
    spektraTheme: (f = msg.getSpektraTheme()) && proto.SpektraThemeConfigMessage.toObject(includeInstance, f),
    spektraRead: (f = msg.getSpektraRead()) && proto.SpektraReadMessage.toObject(includeInstance, f),
    spektraControl: (f = msg.getSpektraControl()) && proto.SpektraControlMessage.toObject(includeInstance, f),
    dmxTranslator: (f = msg.getDmxTranslator()) && proto.DMXProtocolTranslation.toObject(includeInstance, f),
    inputRequest: (f = msg.getInputRequest()) && proto.InputStateMessage.toObject(includeInstance, f),
    inputResponse: (f = msg.getInputResponse()) && proto.InputStateResponse.toObject(includeInstance, f),
    diagSystem: (f = msg.getDiagSystem()) && proto.DiagnosticSystemInfoResponse.toObject(includeInstance, f),
    diagMessage: (f = msg.getDiagMessage()) && proto.DiagnosticMessage.toObject(includeInstance, f),
    adminMessage: (f = msg.getAdminMessage()) && proto.AdminMessage.toObject(includeInstance, f),
    event: (f = msg.getEvent()) && proto.EventMessage.toObject(includeInstance, f),
    secureDeviceSettings: (f = msg.getSecureDeviceSettings()) && proto.SecureDeviceSettingsMessage.toObject(includeInstance, f),
    firmwareNew: (f = msg.getFirmwareNew()) && proto.FirmwareMetaMessage.toObject(includeInstance, f),
    firmwareControl: (f = msg.getFirmwareControl()) && proto.FirmwareControlMessage.toObject(includeInstance, f),
    firmwareChunk: (f = msg.getFirmwareChunk()) && proto.FirmwareChunkMessage.toObject(includeInstance, f),
    levelCacheResponse: (f = msg.getLevelCacheResponse()) && proto.LevelCacheResponse.toObject(includeInstance, f),
    joinedRooms: (f = msg.getJoinedRooms()) && proto.JoinedRoomsMessage.toObject(includeInstance, f),
    listExtended: (f = msg.getListExtended()) && proto.ExtendedListMessage.toObject(includeInstance, f),
    aytMessage: (f = msg.getAytMessage()) && proto.AytMessage.toObject(includeInstance, f),
    rdmMessage: (f = msg.getRdmMessage()) && proto.RDMMessage.toObject(includeInstance, f),
    rdmResponseMessage: (f = msg.getRdmResponseMessage()) && proto.RDMResponseMessage.toObject(includeInstance, f),
    logicMessage: (f = msg.getLogicMessage()) && proto.LogicMultiMessage.toObject(includeInstance, f),
    secureLogin: (f = msg.getSecureLogin()) && proto.AdminSecureLoginMessage.toObject(includeInstance, f),
    deviceStateMessage: (f = msg.getDeviceStateMessage()) && proto.DeviceStateMessage.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.EdidioMessage}
 */
proto.EdidioMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.EdidioMessage;
  return proto.EdidioMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.EdidioMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.EdidioMessage}
 */
proto.EdidioMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMessageId(value);
      break;
    case 2:
      var value = new proto.AckMessage;
      reader.readMessage(value,proto.AckMessage.deserializeBinaryFromReader);
      msg.setAck(value);
      break;
    case 3:
      var value = new proto.InputMultiMessage;
      reader.readMessage(value,proto.InputMultiMessage.deserializeBinaryFromReader);
      msg.setInputs(value);
      break;
    case 4:
      var value = new proto.OutputMultiMessage;
      reader.readMessage(value,proto.OutputMultiMessage.deserializeBinaryFromReader);
      msg.setOutputs(value);
      break;
    case 5:
      var value = new proto.IRMultiMessage;
      reader.readMessage(value,proto.IRMultiMessage.deserializeBinaryFromReader);
      msg.setIrs(value);
      break;
    case 6:
      var value = new proto.SensorMessage;
      reader.readMessage(value,proto.SensorMessage.deserializeBinaryFromReader);
      msg.setSensor(value);
      break;
    case 8:
      var value = new proto.ListMessage;
      reader.readMessage(value,proto.ListMessage.deserializeBinaryFromReader);
      msg.setList(value);
      break;
    case 10:
      var value = new proto.AlarmMessage;
      reader.readMessage(value,proto.AlarmMessage.deserializeBinaryFromReader);
      msg.setAlarm(value);
      break;
    case 11:
      var value = new proto.AlarmMultiMessage;
      reader.readMessage(value,proto.AlarmMultiMessage.deserializeBinaryFromReader);
      msg.setAlarms(value);
      break;
    case 12:
      var value = new proto.BurnInMultiMessage;
      reader.readMessage(value,proto.BurnInMultiMessage.deserializeBinaryFromReader);
      msg.setBurnIns(value);
      break;
    case 13:
      var value = new proto.SensorCommandMessage;
      reader.readMessage(value,proto.SensorCommandMessage.deserializeBinaryFromReader);
      msg.setSensorCommand(value);
      break;
    case 14:
      var value = new proto.ChangeProfileMessage;
      reader.readMessage(value,proto.ChangeProfileMessage.deserializeBinaryFromReader);
      msg.setChangeProfile(value);
      break;
    case 15:
      var value = new proto.IdentifyMessage;
      reader.readMessage(value,proto.IdentifyMessage.deserializeBinaryFromReader);
      msg.setIdentifyMessage(value);
      break;
    case 16:
      var value = new proto.UpdateTimeMessage;
      reader.readMessage(value,proto.UpdateTimeMessage.deserializeBinaryFromReader);
      msg.setUpdateTime(value);
      break;
    case 17:
      var value = new proto.ReadDeviceMessage;
      reader.readMessage(value,proto.ReadDeviceMessage.deserializeBinaryFromReader);
      msg.setReadDevice(value);
      break;
    case 18:
      var value = new proto.DALIMessage;
      reader.readMessage(value,proto.DALIMessage.deserializeBinaryFromReader);
      msg.setDaliMessage(value);
      break;
    case 19:
      var value = new proto.DALIQueryResponse;
      reader.readMessage(value,proto.DALIQueryResponse.deserializeBinaryFromReader);
      msg.setDaliQuery(value);
      break;
    case 20:
      var value = new proto.DMXMessage;
      reader.readMessage(value,proto.DMXMessage.deserializeBinaryFromReader);
      msg.setDmxMessage(value);
      break;
    case 21:
      var value = new proto.ExternalTriggerMessage;
      reader.readMessage(value,proto.ExternalTriggerMessage.deserializeBinaryFromReader);
      msg.setExternalTrigger(value);
      break;
    case 22:
      var value = new proto.SpektraSettingMessage;
      reader.readMessage(value,proto.SpektraSettingMessage.deserializeBinaryFromReader);
      msg.setSpektraSettings(value);
      break;
    case 23:
      var value = new proto.SpektraSequenceConfigMessage;
      reader.readMessage(value,proto.SpektraSequenceConfigMessage.deserializeBinaryFromReader);
      msg.setSpektraSequence(value);
      break;
    case 24:
      var value = new proto.SpektraCalendarMessage;
      reader.readMessage(value,proto.SpektraCalendarMessage.deserializeBinaryFromReader);
      msg.setSpektraCalendar(value);
      break;
    case 25:
      var value = new proto.SpektraThemeConfigMessage;
      reader.readMessage(value,proto.SpektraThemeConfigMessage.deserializeBinaryFromReader);
      msg.setSpektraTheme(value);
      break;
    case 26:
      var value = new proto.SpektraReadMessage;
      reader.readMessage(value,proto.SpektraReadMessage.deserializeBinaryFromReader);
      msg.setSpektraRead(value);
      break;
    case 27:
      var value = new proto.SpektraControlMessage;
      reader.readMessage(value,proto.SpektraControlMessage.deserializeBinaryFromReader);
      msg.setSpektraControl(value);
      break;
    case 28:
      var value = new proto.DMXProtocolTranslation;
      reader.readMessage(value,proto.DMXProtocolTranslation.deserializeBinaryFromReader);
      msg.setDmxTranslator(value);
      break;
    case 29:
      var value = new proto.InputStateMessage;
      reader.readMessage(value,proto.InputStateMessage.deserializeBinaryFromReader);
      msg.setInputRequest(value);
      break;
    case 30:
      var value = new proto.InputStateResponse;
      reader.readMessage(value,proto.InputStateResponse.deserializeBinaryFromReader);
      msg.setInputResponse(value);
      break;
    case 31:
      var value = new proto.DiagnosticSystemInfoResponse;
      reader.readMessage(value,proto.DiagnosticSystemInfoResponse.deserializeBinaryFromReader);
      msg.setDiagSystem(value);
      break;
    case 32:
      var value = new proto.DiagnosticMessage;
      reader.readMessage(value,proto.DiagnosticMessage.deserializeBinaryFromReader);
      msg.setDiagMessage(value);
      break;
    case 33:
      var value = new proto.AdminMessage;
      reader.readMessage(value,proto.AdminMessage.deserializeBinaryFromReader);
      msg.setAdminMessage(value);
      break;
    case 34:
      var value = new proto.EventMessage;
      reader.readMessage(value,proto.EventMessage.deserializeBinaryFromReader);
      msg.setEvent(value);
      break;
    case 35:
      var value = new proto.SecureDeviceSettingsMessage;
      reader.readMessage(value,proto.SecureDeviceSettingsMessage.deserializeBinaryFromReader);
      msg.setSecureDeviceSettings(value);
      break;
    case 36:
      var value = new proto.FirmwareMetaMessage;
      reader.readMessage(value,proto.FirmwareMetaMessage.deserializeBinaryFromReader);
      msg.setFirmwareNew(value);
      break;
    case 37:
      var value = new proto.FirmwareControlMessage;
      reader.readMessage(value,proto.FirmwareControlMessage.deserializeBinaryFromReader);
      msg.setFirmwareControl(value);
      break;
    case 38:
      var value = new proto.FirmwareChunkMessage;
      reader.readMessage(value,proto.FirmwareChunkMessage.deserializeBinaryFromReader);
      msg.setFirmwareChunk(value);
      break;
    case 39:
      var value = new proto.LevelCacheResponse;
      reader.readMessage(value,proto.LevelCacheResponse.deserializeBinaryFromReader);
      msg.setLevelCacheResponse(value);
      break;
    case 40:
      var value = new proto.JoinedRoomsMessage;
      reader.readMessage(value,proto.JoinedRoomsMessage.deserializeBinaryFromReader);
      msg.setJoinedRooms(value);
      break;
    case 41:
      var value = new proto.ExtendedListMessage;
      reader.readMessage(value,proto.ExtendedListMessage.deserializeBinaryFromReader);
      msg.setListExtended(value);
      break;
    case 42:
      var value = new proto.AytMessage;
      reader.readMessage(value,proto.AytMessage.deserializeBinaryFromReader);
      msg.setAytMessage(value);
      break;
    case 43:
      var value = new proto.RDMMessage;
      reader.readMessage(value,proto.RDMMessage.deserializeBinaryFromReader);
      msg.setRdmMessage(value);
      break;
    case 44:
      var value = new proto.RDMResponseMessage;
      reader.readMessage(value,proto.RDMResponseMessage.deserializeBinaryFromReader);
      msg.setRdmResponseMessage(value);
      break;
    case 45:
      var value = new proto.LogicMultiMessage;
      reader.readMessage(value,proto.LogicMultiMessage.deserializeBinaryFromReader);
      msg.setLogicMessage(value);
      break;
    case 46:
      var value = new proto.AdminSecureLoginMessage;
      reader.readMessage(value,proto.AdminSecureLoginMessage.deserializeBinaryFromReader);
      msg.setSecureLogin(value);
      break;
    case 47:
      var value = new proto.DeviceStateMessage;
      reader.readMessage(value,proto.DeviceStateMessage.deserializeBinaryFromReader);
      msg.setDeviceStateMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.EdidioMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.EdidioMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.EdidioMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.EdidioMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessageId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getAck();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.AckMessage.serializeBinaryToWriter
    );
  }
  f = message.getInputs();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.InputMultiMessage.serializeBinaryToWriter
    );
  }
  f = message.getOutputs();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.OutputMultiMessage.serializeBinaryToWriter
    );
  }
  f = message.getIrs();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.IRMultiMessage.serializeBinaryToWriter
    );
  }
  f = message.getSensor();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.SensorMessage.serializeBinaryToWriter
    );
  }
  f = message.getList();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.ListMessage.serializeBinaryToWriter
    );
  }
  f = message.getAlarm();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.AlarmMessage.serializeBinaryToWriter
    );
  }
  f = message.getAlarms();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.AlarmMultiMessage.serializeBinaryToWriter
    );
  }
  f = message.getBurnIns();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.BurnInMultiMessage.serializeBinaryToWriter
    );
  }
  f = message.getSensorCommand();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.SensorCommandMessage.serializeBinaryToWriter
    );
  }
  f = message.getChangeProfile();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto.ChangeProfileMessage.serializeBinaryToWriter
    );
  }
  f = message.getIdentifyMessage();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto.IdentifyMessage.serializeBinaryToWriter
    );
  }
  f = message.getUpdateTime();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      proto.UpdateTimeMessage.serializeBinaryToWriter
    );
  }
  f = message.getReadDevice();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto.ReadDeviceMessage.serializeBinaryToWriter
    );
  }
  f = message.getDaliMessage();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      proto.DALIMessage.serializeBinaryToWriter
    );
  }
  f = message.getDaliQuery();
  if (f != null) {
    writer.writeMessage(
      19,
      f,
      proto.DALIQueryResponse.serializeBinaryToWriter
    );
  }
  f = message.getDmxMessage();
  if (f != null) {
    writer.writeMessage(
      20,
      f,
      proto.DMXMessage.serializeBinaryToWriter
    );
  }
  f = message.getExternalTrigger();
  if (f != null) {
    writer.writeMessage(
      21,
      f,
      proto.ExternalTriggerMessage.serializeBinaryToWriter
    );
  }
  f = message.getSpektraSettings();
  if (f != null) {
    writer.writeMessage(
      22,
      f,
      proto.SpektraSettingMessage.serializeBinaryToWriter
    );
  }
  f = message.getSpektraSequence();
  if (f != null) {
    writer.writeMessage(
      23,
      f,
      proto.SpektraSequenceConfigMessage.serializeBinaryToWriter
    );
  }
  f = message.getSpektraCalendar();
  if (f != null) {
    writer.writeMessage(
      24,
      f,
      proto.SpektraCalendarMessage.serializeBinaryToWriter
    );
  }
  f = message.getSpektraTheme();
  if (f != null) {
    writer.writeMessage(
      25,
      f,
      proto.SpektraThemeConfigMessage.serializeBinaryToWriter
    );
  }
  f = message.getSpektraRead();
  if (f != null) {
    writer.writeMessage(
      26,
      f,
      proto.SpektraReadMessage.serializeBinaryToWriter
    );
  }
  f = message.getSpektraControl();
  if (f != null) {
    writer.writeMessage(
      27,
      f,
      proto.SpektraControlMessage.serializeBinaryToWriter
    );
  }
  f = message.getDmxTranslator();
  if (f != null) {
    writer.writeMessage(
      28,
      f,
      proto.DMXProtocolTranslation.serializeBinaryToWriter
    );
  }
  f = message.getInputRequest();
  if (f != null) {
    writer.writeMessage(
      29,
      f,
      proto.InputStateMessage.serializeBinaryToWriter
    );
  }
  f = message.getInputResponse();
  if (f != null) {
    writer.writeMessage(
      30,
      f,
      proto.InputStateResponse.serializeBinaryToWriter
    );
  }
  f = message.getDiagSystem();
  if (f != null) {
    writer.writeMessage(
      31,
      f,
      proto.DiagnosticSystemInfoResponse.serializeBinaryToWriter
    );
  }
  f = message.getDiagMessage();
  if (f != null) {
    writer.writeMessage(
      32,
      f,
      proto.DiagnosticMessage.serializeBinaryToWriter
    );
  }
  f = message.getAdminMessage();
  if (f != null) {
    writer.writeMessage(
      33,
      f,
      proto.AdminMessage.serializeBinaryToWriter
    );
  }
  f = message.getEvent();
  if (f != null) {
    writer.writeMessage(
      34,
      f,
      proto.EventMessage.serializeBinaryToWriter
    );
  }
  f = message.getSecureDeviceSettings();
  if (f != null) {
    writer.writeMessage(
      35,
      f,
      proto.SecureDeviceSettingsMessage.serializeBinaryToWriter
    );
  }
  f = message.getFirmwareNew();
  if (f != null) {
    writer.writeMessage(
      36,
      f,
      proto.FirmwareMetaMessage.serializeBinaryToWriter
    );
  }
  f = message.getFirmwareControl();
  if (f != null) {
    writer.writeMessage(
      37,
      f,
      proto.FirmwareControlMessage.serializeBinaryToWriter
    );
  }
  f = message.getFirmwareChunk();
  if (f != null) {
    writer.writeMessage(
      38,
      f,
      proto.FirmwareChunkMessage.serializeBinaryToWriter
    );
  }
  f = message.getLevelCacheResponse();
  if (f != null) {
    writer.writeMessage(
      39,
      f,
      proto.LevelCacheResponse.serializeBinaryToWriter
    );
  }
  f = message.getJoinedRooms();
  if (f != null) {
    writer.writeMessage(
      40,
      f,
      proto.JoinedRoomsMessage.serializeBinaryToWriter
    );
  }
  f = message.getListExtended();
  if (f != null) {
    writer.writeMessage(
      41,
      f,
      proto.ExtendedListMessage.serializeBinaryToWriter
    );
  }
  f = message.getAytMessage();
  if (f != null) {
    writer.writeMessage(
      42,
      f,
      proto.AytMessage.serializeBinaryToWriter
    );
  }
  f = message.getRdmMessage();
  if (f != null) {
    writer.writeMessage(
      43,
      f,
      proto.RDMMessage.serializeBinaryToWriter
    );
  }
  f = message.getRdmResponseMessage();
  if (f != null) {
    writer.writeMessage(
      44,
      f,
      proto.RDMResponseMessage.serializeBinaryToWriter
    );
  }
  f = message.getLogicMessage();
  if (f != null) {
    writer.writeMessage(
      45,
      f,
      proto.LogicMultiMessage.serializeBinaryToWriter
    );
  }
  f = message.getSecureLogin();
  if (f != null) {
    writer.writeMessage(
      46,
      f,
      proto.AdminSecureLoginMessage.serializeBinaryToWriter
    );
  }
  f = message.getDeviceStateMessage();
  if (f != null) {
    writer.writeMessage(
      47,
      f,
      proto.DeviceStateMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 message_id = 1;
 * @return {number}
 */
proto.EdidioMessage.prototype.getMessageId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.EdidioMessage.prototype.setMessageId = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional AckMessage ack = 2;
 * @return {?proto.AckMessage}
 */
proto.EdidioMessage.prototype.getAck = function() {
  return /** @type{?proto.AckMessage} */ (
    jspb.Message.getWrapperField(this, proto.AckMessage, 2));
};


/** @param {?proto.AckMessage|undefined} value */
proto.EdidioMessage.prototype.setAck = function(value) {
  jspb.Message.setOneofWrapperField(this, 2, proto.EdidioMessage.oneofGroups_[0], value);
};


proto.EdidioMessage.prototype.clearAck = function() {
  this.setAck(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.EdidioMessage.prototype.hasAck = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional InputMultiMessage inputs = 3;
 * @return {?proto.InputMultiMessage}
 */
proto.EdidioMessage.prototype.getInputs = function() {
  return /** @type{?proto.InputMultiMessage} */ (
    jspb.Message.getWrapperField(this, proto.InputMultiMessage, 3));
};


/** @param {?proto.InputMultiMessage|undefined} value */
proto.EdidioMessage.prototype.setInputs = function(value) {
  jspb.Message.setOneofWrapperField(this, 3, proto.EdidioMessage.oneofGroups_[0], value);
};


proto.EdidioMessage.prototype.clearInputs = function() {
  this.setInputs(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.EdidioMessage.prototype.hasInputs = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional OutputMultiMessage outputs = 4;
 * @return {?proto.OutputMultiMessage}
 */
proto.EdidioMessage.prototype.getOutputs = function() {
  return /** @type{?proto.OutputMultiMessage} */ (
    jspb.Message.getWrapperField(this, proto.OutputMultiMessage, 4));
};


/** @param {?proto.OutputMultiMessage|undefined} value */
proto.EdidioMessage.prototype.setOutputs = function(value) {
  jspb.Message.setOneofWrapperField(this, 4, proto.EdidioMessage.oneofGroups_[0], value);
};


proto.EdidioMessage.prototype.clearOutputs = function() {
  this.setOutputs(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.EdidioMessage.prototype.hasOutputs = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional IRMultiMessage irs = 5;
 * @return {?proto.IRMultiMessage}
 */
proto.EdidioMessage.prototype.getIrs = function() {
  return /** @type{?proto.IRMultiMessage} */ (
    jspb.Message.getWrapperField(this, proto.IRMultiMessage, 5));
};


/** @param {?proto.IRMultiMessage|undefined} value */
proto.EdidioMessage.prototype.setIrs = function(value) {
  jspb.Message.setOneofWrapperField(this, 5, proto.EdidioMessage.oneofGroups_[0], value);
};


proto.EdidioMessage.prototype.clearIrs = function() {
  this.setIrs(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.EdidioMessage.prototype.hasIrs = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional SensorMessage sensor = 6;
 * @return {?proto.SensorMessage}
 */
proto.EdidioMessage.prototype.getSensor = function() {
  return /** @type{?proto.SensorMessage} */ (
    jspb.Message.getWrapperField(this, proto.SensorMessage, 6));
};


/** @param {?proto.SensorMessage|undefined} value */
proto.EdidioMessage.prototype.setSensor = function(value) {
  jspb.Message.setOneofWrapperField(this, 6, proto.EdidioMessage.oneofGroups_[0], value);
};


proto.EdidioMessage.prototype.clearSensor = function() {
  this.setSensor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.EdidioMessage.prototype.hasSensor = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional ListMessage list = 8;
 * @return {?proto.ListMessage}
 */
proto.EdidioMessage.prototype.getList = function() {
  return /** @type{?proto.ListMessage} */ (
    jspb.Message.getWrapperField(this, proto.ListMessage, 8));
};


/** @param {?proto.ListMessage|undefined} value */
proto.EdidioMessage.prototype.setList = function(value) {
  jspb.Message.setOneofWrapperField(this, 8, proto.EdidioMessage.oneofGroups_[0], value);
};


proto.EdidioMessage.prototype.clearList = function() {
  this.setList(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.EdidioMessage.prototype.hasList = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional AlarmMessage alarm = 10;
 * @return {?proto.AlarmMessage}
 */
proto.EdidioMessage.prototype.getAlarm = function() {
  return /** @type{?proto.AlarmMessage} */ (
    jspb.Message.getWrapperField(this, proto.AlarmMessage, 10));
};


/** @param {?proto.AlarmMessage|undefined} value */
proto.EdidioMessage.prototype.setAlarm = function(value) {
  jspb.Message.setOneofWrapperField(this, 10, proto.EdidioMessage.oneofGroups_[0], value);
};


proto.EdidioMessage.prototype.clearAlarm = function() {
  this.setAlarm(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.EdidioMessage.prototype.hasAlarm = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional AlarmMultiMessage alarms = 11;
 * @return {?proto.AlarmMultiMessage}
 */
proto.EdidioMessage.prototype.getAlarms = function() {
  return /** @type{?proto.AlarmMultiMessage} */ (
    jspb.Message.getWrapperField(this, proto.AlarmMultiMessage, 11));
};


/** @param {?proto.AlarmMultiMessage|undefined} value */
proto.EdidioMessage.prototype.setAlarms = function(value) {
  jspb.Message.setOneofWrapperField(this, 11, proto.EdidioMessage.oneofGroups_[0], value);
};


proto.EdidioMessage.prototype.clearAlarms = function() {
  this.setAlarms(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.EdidioMessage.prototype.hasAlarms = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional BurnInMultiMessage burn_ins = 12;
 * @return {?proto.BurnInMultiMessage}
 */
proto.EdidioMessage.prototype.getBurnIns = function() {
  return /** @type{?proto.BurnInMultiMessage} */ (
    jspb.Message.getWrapperField(this, proto.BurnInMultiMessage, 12));
};


/** @param {?proto.BurnInMultiMessage|undefined} value */
proto.EdidioMessage.prototype.setBurnIns = function(value) {
  jspb.Message.setOneofWrapperField(this, 12, proto.EdidioMessage.oneofGroups_[0], value);
};


proto.EdidioMessage.prototype.clearBurnIns = function() {
  this.setBurnIns(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.EdidioMessage.prototype.hasBurnIns = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional SensorCommandMessage sensor_command = 13;
 * @return {?proto.SensorCommandMessage}
 */
proto.EdidioMessage.prototype.getSensorCommand = function() {
  return /** @type{?proto.SensorCommandMessage} */ (
    jspb.Message.getWrapperField(this, proto.SensorCommandMessage, 13));
};


/** @param {?proto.SensorCommandMessage|undefined} value */
proto.EdidioMessage.prototype.setSensorCommand = function(value) {
  jspb.Message.setOneofWrapperField(this, 13, proto.EdidioMessage.oneofGroups_[0], value);
};


proto.EdidioMessage.prototype.clearSensorCommand = function() {
  this.setSensorCommand(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.EdidioMessage.prototype.hasSensorCommand = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional ChangeProfileMessage change_profile = 14;
 * @return {?proto.ChangeProfileMessage}
 */
proto.EdidioMessage.prototype.getChangeProfile = function() {
  return /** @type{?proto.ChangeProfileMessage} */ (
    jspb.Message.getWrapperField(this, proto.ChangeProfileMessage, 14));
};


/** @param {?proto.ChangeProfileMessage|undefined} value */
proto.EdidioMessage.prototype.setChangeProfile = function(value) {
  jspb.Message.setOneofWrapperField(this, 14, proto.EdidioMessage.oneofGroups_[0], value);
};


proto.EdidioMessage.prototype.clearChangeProfile = function() {
  this.setChangeProfile(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.EdidioMessage.prototype.hasChangeProfile = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional IdentifyMessage identify_message = 15;
 * @return {?proto.IdentifyMessage}
 */
proto.EdidioMessage.prototype.getIdentifyMessage = function() {
  return /** @type{?proto.IdentifyMessage} */ (
    jspb.Message.getWrapperField(this, proto.IdentifyMessage, 15));
};


/** @param {?proto.IdentifyMessage|undefined} value */
proto.EdidioMessage.prototype.setIdentifyMessage = function(value) {
  jspb.Message.setOneofWrapperField(this, 15, proto.EdidioMessage.oneofGroups_[0], value);
};


proto.EdidioMessage.prototype.clearIdentifyMessage = function() {
  this.setIdentifyMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.EdidioMessage.prototype.hasIdentifyMessage = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional UpdateTimeMessage update_time = 16;
 * @return {?proto.UpdateTimeMessage}
 */
proto.EdidioMessage.prototype.getUpdateTime = function() {
  return /** @type{?proto.UpdateTimeMessage} */ (
    jspb.Message.getWrapperField(this, proto.UpdateTimeMessage, 16));
};


/** @param {?proto.UpdateTimeMessage|undefined} value */
proto.EdidioMessage.prototype.setUpdateTime = function(value) {
  jspb.Message.setOneofWrapperField(this, 16, proto.EdidioMessage.oneofGroups_[0], value);
};


proto.EdidioMessage.prototype.clearUpdateTime = function() {
  this.setUpdateTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.EdidioMessage.prototype.hasUpdateTime = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional ReadDeviceMessage read_device = 17;
 * @return {?proto.ReadDeviceMessage}
 */
proto.EdidioMessage.prototype.getReadDevice = function() {
  return /** @type{?proto.ReadDeviceMessage} */ (
    jspb.Message.getWrapperField(this, proto.ReadDeviceMessage, 17));
};


/** @param {?proto.ReadDeviceMessage|undefined} value */
proto.EdidioMessage.prototype.setReadDevice = function(value) {
  jspb.Message.setOneofWrapperField(this, 17, proto.EdidioMessage.oneofGroups_[0], value);
};


proto.EdidioMessage.prototype.clearReadDevice = function() {
  this.setReadDevice(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.EdidioMessage.prototype.hasReadDevice = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional DALIMessage dali_message = 18;
 * @return {?proto.DALIMessage}
 */
proto.EdidioMessage.prototype.getDaliMessage = function() {
  return /** @type{?proto.DALIMessage} */ (
    jspb.Message.getWrapperField(this, proto.DALIMessage, 18));
};


/** @param {?proto.DALIMessage|undefined} value */
proto.EdidioMessage.prototype.setDaliMessage = function(value) {
  jspb.Message.setOneofWrapperField(this, 18, proto.EdidioMessage.oneofGroups_[0], value);
};


proto.EdidioMessage.prototype.clearDaliMessage = function() {
  this.setDaliMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.EdidioMessage.prototype.hasDaliMessage = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional DALIQueryResponse dali_query = 19;
 * @return {?proto.DALIQueryResponse}
 */
proto.EdidioMessage.prototype.getDaliQuery = function() {
  return /** @type{?proto.DALIQueryResponse} */ (
    jspb.Message.getWrapperField(this, proto.DALIQueryResponse, 19));
};


/** @param {?proto.DALIQueryResponse|undefined} value */
proto.EdidioMessage.prototype.setDaliQuery = function(value) {
  jspb.Message.setOneofWrapperField(this, 19, proto.EdidioMessage.oneofGroups_[0], value);
};


proto.EdidioMessage.prototype.clearDaliQuery = function() {
  this.setDaliQuery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.EdidioMessage.prototype.hasDaliQuery = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional DMXMessage dmx_message = 20;
 * @return {?proto.DMXMessage}
 */
proto.EdidioMessage.prototype.getDmxMessage = function() {
  return /** @type{?proto.DMXMessage} */ (
    jspb.Message.getWrapperField(this, proto.DMXMessage, 20));
};


/** @param {?proto.DMXMessage|undefined} value */
proto.EdidioMessage.prototype.setDmxMessage = function(value) {
  jspb.Message.setOneofWrapperField(this, 20, proto.EdidioMessage.oneofGroups_[0], value);
};


proto.EdidioMessage.prototype.clearDmxMessage = function() {
  this.setDmxMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.EdidioMessage.prototype.hasDmxMessage = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional ExternalTriggerMessage external_trigger = 21;
 * @return {?proto.ExternalTriggerMessage}
 */
proto.EdidioMessage.prototype.getExternalTrigger = function() {
  return /** @type{?proto.ExternalTriggerMessage} */ (
    jspb.Message.getWrapperField(this, proto.ExternalTriggerMessage, 21));
};


/** @param {?proto.ExternalTriggerMessage|undefined} value */
proto.EdidioMessage.prototype.setExternalTrigger = function(value) {
  jspb.Message.setOneofWrapperField(this, 21, proto.EdidioMessage.oneofGroups_[0], value);
};


proto.EdidioMessage.prototype.clearExternalTrigger = function() {
  this.setExternalTrigger(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.EdidioMessage.prototype.hasExternalTrigger = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional SpektraSettingMessage spektra_settings = 22;
 * @return {?proto.SpektraSettingMessage}
 */
proto.EdidioMessage.prototype.getSpektraSettings = function() {
  return /** @type{?proto.SpektraSettingMessage} */ (
    jspb.Message.getWrapperField(this, proto.SpektraSettingMessage, 22));
};


/** @param {?proto.SpektraSettingMessage|undefined} value */
proto.EdidioMessage.prototype.setSpektraSettings = function(value) {
  jspb.Message.setOneofWrapperField(this, 22, proto.EdidioMessage.oneofGroups_[0], value);
};


proto.EdidioMessage.prototype.clearSpektraSettings = function() {
  this.setSpektraSettings(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.EdidioMessage.prototype.hasSpektraSettings = function() {
  return jspb.Message.getField(this, 22) != null;
};


/**
 * optional SpektraSequenceConfigMessage spektra_sequence = 23;
 * @return {?proto.SpektraSequenceConfigMessage}
 */
proto.EdidioMessage.prototype.getSpektraSequence = function() {
  return /** @type{?proto.SpektraSequenceConfigMessage} */ (
    jspb.Message.getWrapperField(this, proto.SpektraSequenceConfigMessage, 23));
};


/** @param {?proto.SpektraSequenceConfigMessage|undefined} value */
proto.EdidioMessage.prototype.setSpektraSequence = function(value) {
  jspb.Message.setOneofWrapperField(this, 23, proto.EdidioMessage.oneofGroups_[0], value);
};


proto.EdidioMessage.prototype.clearSpektraSequence = function() {
  this.setSpektraSequence(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.EdidioMessage.prototype.hasSpektraSequence = function() {
  return jspb.Message.getField(this, 23) != null;
};


/**
 * optional SpektraCalendarMessage spektra_calendar = 24;
 * @return {?proto.SpektraCalendarMessage}
 */
proto.EdidioMessage.prototype.getSpektraCalendar = function() {
  return /** @type{?proto.SpektraCalendarMessage} */ (
    jspb.Message.getWrapperField(this, proto.SpektraCalendarMessage, 24));
};


/** @param {?proto.SpektraCalendarMessage|undefined} value */
proto.EdidioMessage.prototype.setSpektraCalendar = function(value) {
  jspb.Message.setOneofWrapperField(this, 24, proto.EdidioMessage.oneofGroups_[0], value);
};


proto.EdidioMessage.prototype.clearSpektraCalendar = function() {
  this.setSpektraCalendar(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.EdidioMessage.prototype.hasSpektraCalendar = function() {
  return jspb.Message.getField(this, 24) != null;
};


/**
 * optional SpektraThemeConfigMessage spektra_theme = 25;
 * @return {?proto.SpektraThemeConfigMessage}
 */
proto.EdidioMessage.prototype.getSpektraTheme = function() {
  return /** @type{?proto.SpektraThemeConfigMessage} */ (
    jspb.Message.getWrapperField(this, proto.SpektraThemeConfigMessage, 25));
};


/** @param {?proto.SpektraThemeConfigMessage|undefined} value */
proto.EdidioMessage.prototype.setSpektraTheme = function(value) {
  jspb.Message.setOneofWrapperField(this, 25, proto.EdidioMessage.oneofGroups_[0], value);
};


proto.EdidioMessage.prototype.clearSpektraTheme = function() {
  this.setSpektraTheme(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.EdidioMessage.prototype.hasSpektraTheme = function() {
  return jspb.Message.getField(this, 25) != null;
};


/**
 * optional SpektraReadMessage spektra_read = 26;
 * @return {?proto.SpektraReadMessage}
 */
proto.EdidioMessage.prototype.getSpektraRead = function() {
  return /** @type{?proto.SpektraReadMessage} */ (
    jspb.Message.getWrapperField(this, proto.SpektraReadMessage, 26));
};


/** @param {?proto.SpektraReadMessage|undefined} value */
proto.EdidioMessage.prototype.setSpektraRead = function(value) {
  jspb.Message.setOneofWrapperField(this, 26, proto.EdidioMessage.oneofGroups_[0], value);
};


proto.EdidioMessage.prototype.clearSpektraRead = function() {
  this.setSpektraRead(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.EdidioMessage.prototype.hasSpektraRead = function() {
  return jspb.Message.getField(this, 26) != null;
};


/**
 * optional SpektraControlMessage spektra_control = 27;
 * @return {?proto.SpektraControlMessage}
 */
proto.EdidioMessage.prototype.getSpektraControl = function() {
  return /** @type{?proto.SpektraControlMessage} */ (
    jspb.Message.getWrapperField(this, proto.SpektraControlMessage, 27));
};


/** @param {?proto.SpektraControlMessage|undefined} value */
proto.EdidioMessage.prototype.setSpektraControl = function(value) {
  jspb.Message.setOneofWrapperField(this, 27, proto.EdidioMessage.oneofGroups_[0], value);
};


proto.EdidioMessage.prototype.clearSpektraControl = function() {
  this.setSpektraControl(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.EdidioMessage.prototype.hasSpektraControl = function() {
  return jspb.Message.getField(this, 27) != null;
};


/**
 * optional DMXProtocolTranslation dmx_translator = 28;
 * @return {?proto.DMXProtocolTranslation}
 */
proto.EdidioMessage.prototype.getDmxTranslator = function() {
  return /** @type{?proto.DMXProtocolTranslation} */ (
    jspb.Message.getWrapperField(this, proto.DMXProtocolTranslation, 28));
};


/** @param {?proto.DMXProtocolTranslation|undefined} value */
proto.EdidioMessage.prototype.setDmxTranslator = function(value) {
  jspb.Message.setOneofWrapperField(this, 28, proto.EdidioMessage.oneofGroups_[0], value);
};


proto.EdidioMessage.prototype.clearDmxTranslator = function() {
  this.setDmxTranslator(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.EdidioMessage.prototype.hasDmxTranslator = function() {
  return jspb.Message.getField(this, 28) != null;
};


/**
 * optional InputStateMessage input_request = 29;
 * @return {?proto.InputStateMessage}
 */
proto.EdidioMessage.prototype.getInputRequest = function() {
  return /** @type{?proto.InputStateMessage} */ (
    jspb.Message.getWrapperField(this, proto.InputStateMessage, 29));
};


/** @param {?proto.InputStateMessage|undefined} value */
proto.EdidioMessage.prototype.setInputRequest = function(value) {
  jspb.Message.setOneofWrapperField(this, 29, proto.EdidioMessage.oneofGroups_[0], value);
};


proto.EdidioMessage.prototype.clearInputRequest = function() {
  this.setInputRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.EdidioMessage.prototype.hasInputRequest = function() {
  return jspb.Message.getField(this, 29) != null;
};


/**
 * optional InputStateResponse input_response = 30;
 * @return {?proto.InputStateResponse}
 */
proto.EdidioMessage.prototype.getInputResponse = function() {
  return /** @type{?proto.InputStateResponse} */ (
    jspb.Message.getWrapperField(this, proto.InputStateResponse, 30));
};


/** @param {?proto.InputStateResponse|undefined} value */
proto.EdidioMessage.prototype.setInputResponse = function(value) {
  jspb.Message.setOneofWrapperField(this, 30, proto.EdidioMessage.oneofGroups_[0], value);
};


proto.EdidioMessage.prototype.clearInputResponse = function() {
  this.setInputResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.EdidioMessage.prototype.hasInputResponse = function() {
  return jspb.Message.getField(this, 30) != null;
};


/**
 * optional DiagnosticSystemInfoResponse diag_system = 31;
 * @return {?proto.DiagnosticSystemInfoResponse}
 */
proto.EdidioMessage.prototype.getDiagSystem = function() {
  return /** @type{?proto.DiagnosticSystemInfoResponse} */ (
    jspb.Message.getWrapperField(this, proto.DiagnosticSystemInfoResponse, 31));
};


/** @param {?proto.DiagnosticSystemInfoResponse|undefined} value */
proto.EdidioMessage.prototype.setDiagSystem = function(value) {
  jspb.Message.setOneofWrapperField(this, 31, proto.EdidioMessage.oneofGroups_[0], value);
};


proto.EdidioMessage.prototype.clearDiagSystem = function() {
  this.setDiagSystem(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.EdidioMessage.prototype.hasDiagSystem = function() {
  return jspb.Message.getField(this, 31) != null;
};


/**
 * optional DiagnosticMessage diag_message = 32;
 * @return {?proto.DiagnosticMessage}
 */
proto.EdidioMessage.prototype.getDiagMessage = function() {
  return /** @type{?proto.DiagnosticMessage} */ (
    jspb.Message.getWrapperField(this, proto.DiagnosticMessage, 32));
};


/** @param {?proto.DiagnosticMessage|undefined} value */
proto.EdidioMessage.prototype.setDiagMessage = function(value) {
  jspb.Message.setOneofWrapperField(this, 32, proto.EdidioMessage.oneofGroups_[0], value);
};


proto.EdidioMessage.prototype.clearDiagMessage = function() {
  this.setDiagMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.EdidioMessage.prototype.hasDiagMessage = function() {
  return jspb.Message.getField(this, 32) != null;
};


/**
 * optional AdminMessage admin_message = 33;
 * @return {?proto.AdminMessage}
 */
proto.EdidioMessage.prototype.getAdminMessage = function() {
  return /** @type{?proto.AdminMessage} */ (
    jspb.Message.getWrapperField(this, proto.AdminMessage, 33));
};


/** @param {?proto.AdminMessage|undefined} value */
proto.EdidioMessage.prototype.setAdminMessage = function(value) {
  jspb.Message.setOneofWrapperField(this, 33, proto.EdidioMessage.oneofGroups_[0], value);
};


proto.EdidioMessage.prototype.clearAdminMessage = function() {
  this.setAdminMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.EdidioMessage.prototype.hasAdminMessage = function() {
  return jspb.Message.getField(this, 33) != null;
};


/**
 * optional EventMessage event = 34;
 * @return {?proto.EventMessage}
 */
proto.EdidioMessage.prototype.getEvent = function() {
  return /** @type{?proto.EventMessage} */ (
    jspb.Message.getWrapperField(this, proto.EventMessage, 34));
};


/** @param {?proto.EventMessage|undefined} value */
proto.EdidioMessage.prototype.setEvent = function(value) {
  jspb.Message.setOneofWrapperField(this, 34, proto.EdidioMessage.oneofGroups_[0], value);
};


proto.EdidioMessage.prototype.clearEvent = function() {
  this.setEvent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.EdidioMessage.prototype.hasEvent = function() {
  return jspb.Message.getField(this, 34) != null;
};


/**
 * optional SecureDeviceSettingsMessage secure_device_settings = 35;
 * @return {?proto.SecureDeviceSettingsMessage}
 */
proto.EdidioMessage.prototype.getSecureDeviceSettings = function() {
  return /** @type{?proto.SecureDeviceSettingsMessage} */ (
    jspb.Message.getWrapperField(this, proto.SecureDeviceSettingsMessage, 35));
};


/** @param {?proto.SecureDeviceSettingsMessage|undefined} value */
proto.EdidioMessage.prototype.setSecureDeviceSettings = function(value) {
  jspb.Message.setOneofWrapperField(this, 35, proto.EdidioMessage.oneofGroups_[0], value);
};


proto.EdidioMessage.prototype.clearSecureDeviceSettings = function() {
  this.setSecureDeviceSettings(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.EdidioMessage.prototype.hasSecureDeviceSettings = function() {
  return jspb.Message.getField(this, 35) != null;
};


/**
 * optional FirmwareMetaMessage firmware_new = 36;
 * @return {?proto.FirmwareMetaMessage}
 */
proto.EdidioMessage.prototype.getFirmwareNew = function() {
  return /** @type{?proto.FirmwareMetaMessage} */ (
    jspb.Message.getWrapperField(this, proto.FirmwareMetaMessage, 36));
};


/** @param {?proto.FirmwareMetaMessage|undefined} value */
proto.EdidioMessage.prototype.setFirmwareNew = function(value) {
  jspb.Message.setOneofWrapperField(this, 36, proto.EdidioMessage.oneofGroups_[0], value);
};


proto.EdidioMessage.prototype.clearFirmwareNew = function() {
  this.setFirmwareNew(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.EdidioMessage.prototype.hasFirmwareNew = function() {
  return jspb.Message.getField(this, 36) != null;
};


/**
 * optional FirmwareControlMessage firmware_control = 37;
 * @return {?proto.FirmwareControlMessage}
 */
proto.EdidioMessage.prototype.getFirmwareControl = function() {
  return /** @type{?proto.FirmwareControlMessage} */ (
    jspb.Message.getWrapperField(this, proto.FirmwareControlMessage, 37));
};


/** @param {?proto.FirmwareControlMessage|undefined} value */
proto.EdidioMessage.prototype.setFirmwareControl = function(value) {
  jspb.Message.setOneofWrapperField(this, 37, proto.EdidioMessage.oneofGroups_[0], value);
};


proto.EdidioMessage.prototype.clearFirmwareControl = function() {
  this.setFirmwareControl(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.EdidioMessage.prototype.hasFirmwareControl = function() {
  return jspb.Message.getField(this, 37) != null;
};


/**
 * optional FirmwareChunkMessage firmware_chunk = 38;
 * @return {?proto.FirmwareChunkMessage}
 */
proto.EdidioMessage.prototype.getFirmwareChunk = function() {
  return /** @type{?proto.FirmwareChunkMessage} */ (
    jspb.Message.getWrapperField(this, proto.FirmwareChunkMessage, 38));
};


/** @param {?proto.FirmwareChunkMessage|undefined} value */
proto.EdidioMessage.prototype.setFirmwareChunk = function(value) {
  jspb.Message.setOneofWrapperField(this, 38, proto.EdidioMessage.oneofGroups_[0], value);
};


proto.EdidioMessage.prototype.clearFirmwareChunk = function() {
  this.setFirmwareChunk(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.EdidioMessage.prototype.hasFirmwareChunk = function() {
  return jspb.Message.getField(this, 38) != null;
};


/**
 * optional LevelCacheResponse level_cache_response = 39;
 * @return {?proto.LevelCacheResponse}
 */
proto.EdidioMessage.prototype.getLevelCacheResponse = function() {
  return /** @type{?proto.LevelCacheResponse} */ (
    jspb.Message.getWrapperField(this, proto.LevelCacheResponse, 39));
};


/** @param {?proto.LevelCacheResponse|undefined} value */
proto.EdidioMessage.prototype.setLevelCacheResponse = function(value) {
  jspb.Message.setOneofWrapperField(this, 39, proto.EdidioMessage.oneofGroups_[0], value);
};


proto.EdidioMessage.prototype.clearLevelCacheResponse = function() {
  this.setLevelCacheResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.EdidioMessage.prototype.hasLevelCacheResponse = function() {
  return jspb.Message.getField(this, 39) != null;
};


/**
 * optional JoinedRoomsMessage joined_rooms = 40;
 * @return {?proto.JoinedRoomsMessage}
 */
proto.EdidioMessage.prototype.getJoinedRooms = function() {
  return /** @type{?proto.JoinedRoomsMessage} */ (
    jspb.Message.getWrapperField(this, proto.JoinedRoomsMessage, 40));
};


/** @param {?proto.JoinedRoomsMessage|undefined} value */
proto.EdidioMessage.prototype.setJoinedRooms = function(value) {
  jspb.Message.setOneofWrapperField(this, 40, proto.EdidioMessage.oneofGroups_[0], value);
};


proto.EdidioMessage.prototype.clearJoinedRooms = function() {
  this.setJoinedRooms(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.EdidioMessage.prototype.hasJoinedRooms = function() {
  return jspb.Message.getField(this, 40) != null;
};


/**
 * optional ExtendedListMessage list_extended = 41;
 * @return {?proto.ExtendedListMessage}
 */
proto.EdidioMessage.prototype.getListExtended = function() {
  return /** @type{?proto.ExtendedListMessage} */ (
    jspb.Message.getWrapperField(this, proto.ExtendedListMessage, 41));
};


/** @param {?proto.ExtendedListMessage|undefined} value */
proto.EdidioMessage.prototype.setListExtended = function(value) {
  jspb.Message.setOneofWrapperField(this, 41, proto.EdidioMessage.oneofGroups_[0], value);
};


proto.EdidioMessage.prototype.clearListExtended = function() {
  this.setListExtended(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.EdidioMessage.prototype.hasListExtended = function() {
  return jspb.Message.getField(this, 41) != null;
};


/**
 * optional AytMessage ayt_message = 42;
 * @return {?proto.AytMessage}
 */
proto.EdidioMessage.prototype.getAytMessage = function() {
  return /** @type{?proto.AytMessage} */ (
    jspb.Message.getWrapperField(this, proto.AytMessage, 42));
};


/** @param {?proto.AytMessage|undefined} value */
proto.EdidioMessage.prototype.setAytMessage = function(value) {
  jspb.Message.setOneofWrapperField(this, 42, proto.EdidioMessage.oneofGroups_[0], value);
};


proto.EdidioMessage.prototype.clearAytMessage = function() {
  this.setAytMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.EdidioMessage.prototype.hasAytMessage = function() {
  return jspb.Message.getField(this, 42) != null;
};


/**
 * optional RDMMessage rdm_message = 43;
 * @return {?proto.RDMMessage}
 */
proto.EdidioMessage.prototype.getRdmMessage = function() {
  return /** @type{?proto.RDMMessage} */ (
    jspb.Message.getWrapperField(this, proto.RDMMessage, 43));
};


/** @param {?proto.RDMMessage|undefined} value */
proto.EdidioMessage.prototype.setRdmMessage = function(value) {
  jspb.Message.setOneofWrapperField(this, 43, proto.EdidioMessage.oneofGroups_[0], value);
};


proto.EdidioMessage.prototype.clearRdmMessage = function() {
  this.setRdmMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.EdidioMessage.prototype.hasRdmMessage = function() {
  return jspb.Message.getField(this, 43) != null;
};


/**
 * optional RDMResponseMessage rdm_response_message = 44;
 * @return {?proto.RDMResponseMessage}
 */
proto.EdidioMessage.prototype.getRdmResponseMessage = function() {
  return /** @type{?proto.RDMResponseMessage} */ (
    jspb.Message.getWrapperField(this, proto.RDMResponseMessage, 44));
};


/** @param {?proto.RDMResponseMessage|undefined} value */
proto.EdidioMessage.prototype.setRdmResponseMessage = function(value) {
  jspb.Message.setOneofWrapperField(this, 44, proto.EdidioMessage.oneofGroups_[0], value);
};


proto.EdidioMessage.prototype.clearRdmResponseMessage = function() {
  this.setRdmResponseMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.EdidioMessage.prototype.hasRdmResponseMessage = function() {
  return jspb.Message.getField(this, 44) != null;
};


/**
 * optional LogicMultiMessage logic_message = 45;
 * @return {?proto.LogicMultiMessage}
 */
proto.EdidioMessage.prototype.getLogicMessage = function() {
  return /** @type{?proto.LogicMultiMessage} */ (
    jspb.Message.getWrapperField(this, proto.LogicMultiMessage, 45));
};


/** @param {?proto.LogicMultiMessage|undefined} value */
proto.EdidioMessage.prototype.setLogicMessage = function(value) {
  jspb.Message.setOneofWrapperField(this, 45, proto.EdidioMessage.oneofGroups_[0], value);
};


proto.EdidioMessage.prototype.clearLogicMessage = function() {
  this.setLogicMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.EdidioMessage.prototype.hasLogicMessage = function() {
  return jspb.Message.getField(this, 45) != null;
};


/**
 * optional AdminSecureLoginMessage secure_login = 46;
 * @return {?proto.AdminSecureLoginMessage}
 */
proto.EdidioMessage.prototype.getSecureLogin = function() {
  return /** @type{?proto.AdminSecureLoginMessage} */ (
    jspb.Message.getWrapperField(this, proto.AdminSecureLoginMessage, 46));
};


/** @param {?proto.AdminSecureLoginMessage|undefined} value */
proto.EdidioMessage.prototype.setSecureLogin = function(value) {
  jspb.Message.setOneofWrapperField(this, 46, proto.EdidioMessage.oneofGroups_[0], value);
};


proto.EdidioMessage.prototype.clearSecureLogin = function() {
  this.setSecureLogin(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.EdidioMessage.prototype.hasSecureLogin = function() {
  return jspb.Message.getField(this, 46) != null;
};


/**
 * optional DeviceStateMessage device_state_message = 47;
 * @return {?proto.DeviceStateMessage}
 */
proto.EdidioMessage.prototype.getDeviceStateMessage = function() {
  return /** @type{?proto.DeviceStateMessage} */ (
    jspb.Message.getWrapperField(this, proto.DeviceStateMessage, 47));
};


/** @param {?proto.DeviceStateMessage|undefined} value */
proto.EdidioMessage.prototype.setDeviceStateMessage = function(value) {
  jspb.Message.setOneofWrapperField(this, 47, proto.EdidioMessage.oneofGroups_[0], value);
};


proto.EdidioMessage.prototype.clearDeviceStateMessage = function() {
  this.setDeviceStateMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.EdidioMessage.prototype.hasDeviceStateMessage = function() {
  return jspb.Message.getField(this, 47) != null;
};


/**
 * @enum {number}
 */
proto.TriggerOperationType = {
  MOMENTARY: 0,
  LATCHING: 1,
  MOMENTARY_OUTPUT: 2,
  LATCHING_OUTPUT: 3,
  MOMENTARY_DISABLED: 128,
  LATCHING_DISABLED: 129
};

/**
 * @enum {number}
 */
proto.TriggerType = {
  DALI_ARC: 0,
  DALI_COMMAND: 1,
  DMX_CHANNELS_SPLIT_LOW: 2,
  DMX_CHANNELS_SPLIT_HIGH: 3,
  DMX_MULTICAST_CHANNELS_SPLIT_LOW: 4,
  DMX_MULTICAST_CHANNELS_SPLIT_HIGH: 5,
  DMX_BROADCAST: 6,
  DIDIO: 7,
  FADE_UP_WITH_MIN: 8,
  LIST_START: 9,
  LIST_START_CONTINUOUS: 10,
  LIST_STOP: 11,
  SPEKTRA_START_SEQ: 12,
  SPEKTRA_STOP_SEQ: 13,
  SPEKTRA_THEME: 14,
  SPEKTRA_STATIC: 15,
  SPEKTRA_SCHEDULE: 16,
  LINK_START: 17,
  LINK_STOP: 18,
  DISABLE_BURN: 19,
  ENABLE_BURN: 20,
  ON_OFF_TOG: 21,
  MIN_MAX_TOG: 22,
  ENABLE_INPUT: 23,
  DISABLE_INPUT: 24,
  ENABLE_TOG_INPUT: 25,
  OUTPUT_TOG: 26,
  OUTPUT_HIGH: 27,
  OUTPUT_LOW: 28,
  OUTPUT_TRIG: 29,
  PROFILE_CHANGE: 30,
  FADE_LONG_PRESS: 31,
  SYNCRO: 32,
  PRESET_CODE: 33,
  CUSTOM_CODE: 34,
  SPEKTRA_SLEEP: 35,
  SPEKTRA_RESUME: 36,
  DEVICE_RESET: 37,
  DEVICE_SAVE: 38,
  USER_LEVEL_STORE_NEW: 39,
  USER_LEVEL_SET_DEFAULT: 40,
  USER_LEVEL_RECALL: 41,
  ROOM_JOIN: 43,
  ROOM_UNJOIN: 44,
  TYPE8_TC_WARMER: 45,
  TYPE8_TC_COOLER: 46,
  TYPE8_TC_ACTUAL: 47,
  LOGIC_OPERATION: 48,
  ALARM_ENABLE: 49,
  ALARM_DISABLE: 50,
  NO_COMMAND: 254
};

/**
 * @enum {number}
 */
proto.ReadType = {
  INPUTS: 0,
  OUTPUTS: 1,
  IR: 2,
  SENSOR: 3,
  LIST: 5,
  ALARMS: 7,
  BURN_IN: 8,
  PROJECT: 9,
  NETWORK: 10,
  DEVICE: 11,
  POLL_DATA: 12,
  LIST_EXTENDED: 13,
  LOGIC: 14
};

/**
 * @enum {number}
 */
proto.AlarmRepeatType = {
  ALARM_NO_REPEAT: 0,
  ALARM_REPEAT_DAILY: 1,
  ALARM_REPEAT_WORK_DAY: 2,
  ALARM_REPEAT_WEEKLY: 3,
  ALARM_REPEAT_MONTHLY: 4
};

/**
 * @enum {number}
 */
proto.AlarmAstroType = {
  ALARM_NO_ASTRO: 0,
  ALARM_SUNRUSE: 1,
  ALARM_SUNSET: 2
};

/**
 * @enum {number}
 */
proto.SpektraTargetType = {
  SETTINGS: 0,
  SEQUENCE: 1,
  THEME: 2,
  STATIC: 3,
  CALENDAR: 4
};

/**
 * @enum {number}
 */
proto.SpektraActionType = {
  START: 0,
  STOP: 1,
  PAUSE: 2,
  SAVE: 3
};

/**
 * @enum {number}
 */
proto.SpektraUnscheduledBehaviourType = {
  RUN_RANDOM_COLOURED_SEQUENCE: 0,
  RUN_SEQUENCE_1: 1,
  RESUME_PREVIOUS: 2,
  DO_NOTHING: 254
};

/**
 * @enum {number}
 */
proto.AckMessageType = {
  DECODE_FAILED: 0,
  INDEX_OUT_OF_BOUNDS: 1,
  UNEXPECTED_TYPE: 2,
  ENCODE_FAILED: 3,
  KEY_MISMATCH: 4,
  SUCCESS: 5,
  INVALID_PARAMS: 6,
  UNEXPECTED_COMMAND: 7,
  COMMUNICATION_FAILED: 8,
  COMMUNICATION_TIMEOUT: 9,
  DATA_TOO_LONG: 10,
  UNEXPECTED_CASE: 11,
  SLOTS_FULL: 12,
  UNAUTHORISED: 13
};

/**
 * @enum {number}
 */
proto.Type8CommandType = {
  ENABLE_DEVICE_TYPE8: 0,
  SET_TEMP_X_COORD: 1,
  SET_TEMP_Y_COORD: 2,
  ACTIVATE: 3,
  X_COORD_STEP_UP: 4,
  X_COORD_STEP_DOWN: 5,
  Y_COORD_STEP_UP: 6,
  Y_COORD_STEP_DOWN: 7,
  SET_TEMP_COLOUR_TEMPERATURE: 8,
  COLOUR_TEMPERATURE_STEP_COOLER: 9,
  COLOUR_TEMPERATURE_STEP_WARMER: 10,
  SET_TEMP_PRI_N_DIMLEVEL: 11,
  SET_TEMP_RGB_DIMLEVEL: 12,
  SET_TEMP_WAF_DIMLEVEL: 13,
  SET_TEMP_RGBWAF_CONTROL: 14,
  COPY_REPORT_TEMPORARY: 15,
  STORE_TY_PRI_N: 16,
  STORE_XY_COORD_PRI_N: 17,
  STORE_COLOUR_TEMPERATURE_LIMIT: 18,
  STORE_GEAR_FEATURES_STATUS: 19,
  ASSIGN_COLOR_LINKED_CH: 20,
  START_AUTO_CAL: 21
};

/**
 * @enum {number}
 */
proto.Type8QueryType = {
  TYPE8_QUERY_GEAR_FEATURES_STATUS: 0,
  TYPE8_QUERY_COLOUR_STATUS: 1,
  TYPE8_QUERY_COLOUR_TYPE_FEATURES: 2,
  TYPE8_QUERY_COLOUR_VALUE: 3,
  TYPE8_QUERY_RGBWAF_CONTROL: 4,
  TYPE8_QUERY_ASSIGNED_COLOUR: 5,
  TYPE8_QUERY_EXT_VERSION_NUM: 6
};

/**
 * @enum {number}
 */
proto.LineType = {
  LINE_EMPTY: 0,
  LINE_DALI: 1,
  LINE_DMX: 2,
  LINE_DMX_IN: 3
};

/**
 * @enum {number}
 */
proto.EventType = {
  REGISTER: 0,
  TRIGGER_EVENT: 1,
  INPUT_EVENT: 2,
  SENSOR_EVENT: 3,
  CONTROL_EVENT: 4,
  ROOM_JOIN_EVENT: 5
};

/**
 * @enum {number}
 */
proto.DALIQueryType = {
  DALI_QUERY_NULL: 0,
  DALI_QUERY_STATUS: 144,
  DALI_QUERY_BALLAST: 145,
  DALI_QUERY_LAMP_FAILURE: 146,
  DALI_QUERY_LAMP_POWER_ON: 147,
  DALI_QUERY_LIMIT_ERROR: 148,
  DALI_QUERY_RESET_STATE: 149,
  DALI_QUERY_MISSING_SHORT_ADDRESS: 150,
  DALI_QUERY_VERSION_NUMBER: 151,
  DALI_QUERY_DTR0: 152,
  DALI_QUERY_DEVICE_TYPE: 153,
  DALI_QUERY_PHYSICAL_MIN: 154,
  DALI_QUERY_POWER_FAILURE: 155,
  DALI_QUERY_DTR1: 156,
  DALI_QUERY_DTR2: 157,
  DALI_QUERY_OPERATING_MODE: 158,
  DALI_QUERY_LIGHTSOURCE_TYPE: 159,
  DALI_QUERY_ACTUAL_LEVEL: 160,
  DALI_QUERY_MAX_LEVEL: 161,
  DALI_QUERY_MIN_LEVEL: 162,
  DALI_QUERY_POWER_ON_LEVEL: 163,
  DALI_QUERY_SYSTEM_FAILURE_LEVEL: 164,
  DALI_QUERY_FADETIME_FADERATE: 165,
  DALI_QUERY_MANUFACTURER_SPECIFIC_MODE: 166,
  DALI_QUERY_NEXT_DEVICE_TYPE: 167,
  DALI_QUERY_EXTENDED_FADE_TIME: 168,
  DALI_QUERY_CONTROL_GEAR_FAILURE: 170,
  DALI_QUERY_SCENE_X_LEVEL: 176,
  DALI_QUERY_GROUPS_0_7: 192,
  DALI_QUERY_GROUPS_8_15: 193,
  DALI_QUERY_RANDOM_ADDRESS_H: 194,
  DALI_QUERY_RANDOM_ADDRESS_M: 195,
  DALI_QUERY_RANDOM_ADDRESS_L: 196,
  DALI_QUERY_READ_DTR_0_1: 197,
  DALI_QUERY_APP_EXT_COMMANDS: 224,
  DALI_QUERY_EXT_VERSION_NUMBER: 255,
  DALI_QUERY_COMPARE: 260,
  DALI_QUERY_VERIFY_SHORT_ADDRESS: 268,
  DALI_QUERY_SHORT_ADDRESS: 269
};

/**
 * @enum {number}
 */
proto.DALICommandType = {
  DALI_OFF: 0,
  DALI_FADE_UP: 1,
  DALI_FADE_DOWN: 2,
  DALI_STEP_UP: 3,
  DALI_STEP_DOWN: 4,
  DALI_MAX_LEVEL: 5,
  DALI_MIN_LEVEL: 6,
  DALI_STEP_DOWN_OFF: 7,
  DALI_ON_STEP_UP: 8,
  DALI_ENABLE_DAPC_SEQ: 9,
  DALI_RECALL_LAST_ACTIVE_LEVEL: 10,
  DALI_RECALL_SCENE_X: 16,
  DALI_RESET: 32,
  DALI_STORE_ACTUAL_LEVEL_DTR0: 33,
  DALI_SAVE_PERSISTENT_VARS: 34,
  DALI_SET_OPERATING_MODE: 35,
  DALI_RESET_MEMORY_BANK: 36,
  DALI_IDENTIFY_DEVICE: 37,
  DALI_SET_MAX_LEVEL: 42,
  DALI_SET_MIN_LEVEL: 43,
  DALI_SET_SYSTEM_FAILURE_LEVEL: 44,
  DALI_SET_POWER_ON_LEVEL: 45,
  DALI_SET_FADE_TIME: 46,
  DALI_SET_FADE_RATE: 47,
  DALI_SET_EXT_FADE_TIME: 48,
  DALI_SET_SCENE_X: 64,
  DALI_REMOVE_FROM_SCENE_X: 80,
  DALI_ADD_TO_GROUP_X: 96,
  DALI_REMOVE_FROM_GROUP_X: 112,
  DALI_SET_SHORT_ADDRESS: 128,
  DALI_ENABLE_WRITE_MEMORY: 129,
  DALI_TERMINATE: 255,
  DALI_INITIALISE: 258,
  DALI_RANDOMISE: 259,
  DALI_WITHDRAW: 261,
  DALI_SEARCH_ADDR_H: 264,
  DALI_SEARCH_ADDR_M: 265,
  DALI_SEARCH_ADDR_L: 266,
  DALI_PROGRAM_SHORT_ADDRESS: 267
};

/**
 * @enum {number}
 */
proto.CustomDALICommandType = {
  DALI_ARC_LEVEL: 0,
  DALI_DAPC_LEVEL: 1,
  DALI_GROUP_ARC_LEVEL: 2,
  DALI_BROADCAST_SCENE: 3,
  DALI_SCENE_ON_GROUP: 4,
  DALI_SCENE_ON_ADDRESS: 5
};

/**
 * @enum {number}
 */
proto.AdminPropertyType = {
  DEVICE_NAME: 0,
  PROJECT_NAME: 1,
  LONGITUDE: 2,
  LATITUDE: 3,
  LOCAL_UTC_OFFSET: 4,
  DAYLIGHT_SAVINGS: 5,
  POLL_ACTIVE: 6,
  DHCP_ENABLED: 7,
  IP_ADDR: 8,
  MAC_ADDR: 9,
  GATEWAY_IP: 10,
  NETWORK_PROPERTIES: 11,
  SYSTEM_PROPERTIES: 12,
  CONTROLLER_LINES: 13,
  EEPROM_FULL_CHIP: 14,
  CONFIG_DATA: 15,
  SPEKTRA_DATA: 16,
  DEVICE_STATUS: 17,
  CONFIG_STATUS: 18,
  DEVICE_TIME: 19,
  NTP_DETAILS: 20,
  TRIDONIC_MSENSORS: 21,
  SECURE_SESSION: 22,
  NONCE: 23
};

/**
 * @enum {number}
 */
proto.AdminCommandType = {
  SET: 0,
  GET: 1,
  ADD: 2,
  REMOVE: 3,
  RESET: 4
};

/**
 * @enum {number}
 */
proto.DALIStatusType = {
  LAMP_OFF: 0,
  CONTROL_GEAR_FAILURE: 1,
  LAMP_FAILURE: 3,
  LAMP_ON: 7,
  LIMIT_ERROR: 15,
  FADE_RUNNING: 31,
  RESET_STATE: 63,
  SHORT_ADDRESS: 127,
  POWER_CYCLE_SEEN: 255
};

/**
 * @enum {number}
 */
proto.DiagnosticMessageType = {
  DIAGNOSTIC_SYSTEM_INFO: 0,
  DIAGNOSTIC_INPUT_STATUS: 1,
  DALI_LEVEL_CACHE: 2,
  DMX_LEVEL_CACHE: 3,
  ROOM_JOINS: 4
};

/**
 * @enum {number}
 */
proto.FirmwareCommandType = {
  FW_READY: 0,
  FW_APPLY: 1,
  FW_VERIFY: 2,
  FW_VERIFY_FAILED: 3,
  FW_VERIFY_SUCCESS: 4,
  FW_READ: 5
};

/**
 * @enum {number}
 */
proto.SpektraTransitionType = {
  BLEND: 0,
  SNAP: 1,
  FADE_TO_BLACK: 2
};

/**
 * @enum {number}
 */
proto.LogicType = {
  DALI_LEVEL: 0,
  INPUT_STATE: 1,
  LIST_RUNNING: 2,
  OCCUPANCY_DETECTED: 3,
  DMX_PRESENT: 4,
  CAL_WEEKDAY: 5,
  CAL_MONTH: 6,
  ALARM_SCHEDULED: 7
};

/**
 * @enum {number}
 */
proto.LogicComparisonType = {
  LESS_THAN: 0,
  LESS_THAN_OR_EQUALS: 1,
  EQUALS: 2,
  MORE_THAN: 3,
  MORE_THAN_OR_EQUALS: 4,
  NOT_EQUAL: 5
};

goog.object.extend(exports, proto);
