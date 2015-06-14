var events = require('events');
var util = require('util');

var noble = require('noble');

var ClimateUtil = require('./climate/util');

var Broadcast = function() {
  noble.on('discover', this.onDiscover.bind(this));
};

util.inherits(Broadcast, events.EventEmitter);

Broadcast.prototype.startScanning = function() {
  if (noble.state === 'poweredOn') {
    noble.startScanning([], true);
  } else {
    noble.once('stateChange', function() {
      noble.startScanning([], true);
    });
  }
};

Broadcast.prototype.stopScanning = function() {
  noble.stopScanning();
};

Broadcast.prototype.onDiscover = function(peripheral) {
  var localName        = peripheral.advertisement.localName;
  var manufacturerData = peripheral.advertisement.manufacturerData;

  if (!localName || localName.indexOf('_') === -1 ||
        !manufacturerData || manufacturerData.length !== 9 || manufacturerData[0] !== 0x01 || manufacturerData[1] !== 0x17) {
    return;
  }

  var splitLocalName = localName.split('_');
  var type           = splitLocalName[0].toLowerCase();
  var id             = splitLocalName[1].toLowerCase();
  var sensorData     = manufacturerData.slice(2);

  if (type === 'climate') {
    var temperature = ClimateUtil.convertCurrentTemperature(sensorData.readUInt16LE(0));
    var light       = ClimateUtil.convertCurrentLight(sensorData.readUInt16LE(2));
    var humidity    = ClimateUtil.convertCurrentHumidity(sensorData.readUInt16LE(4));
    var battery     = sensorData.readUInt8(6);

    this.emit('data', {
      id: id,
      type: type,
      temperature: temperature,
      light: light,
      humidity: humidity,
      battery: battery
    });
  }
};

module.exports = Broadcast;
