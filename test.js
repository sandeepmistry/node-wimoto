var util = require('util');

var async = require('async');

var Wimoto = require('./index');

Wimoto.discover(function(wimoto) {
  console.log('discovered: ' + wimoto);

  wimoto.on('disconnect', function() {
    console.log('disconnected!');
    process.exit(0);
  });

  async.series([
      function(callback) {
        console.log('connectAndSetUp');
        wimoto.connectAndSetUp(callback);
      },
      function(callback) {
        console.log('readDeviceName');
        wimoto.readDeviceName(function(error, deviceName) {
          console.log('\tdevice name = ' + deviceName);
          callback();
        });
      },
      function(callback) {
        console.log('readManufacturerName');
        wimoto.readManufacturerName(function(error, manufacturerName) {
          console.log('\tmanufacturer name = ' + manufacturerName);
          callback();
        });
      },
      function(callback) {
        console.log('readModelNumber');
        wimoto.readModelNumber(function(error, modelNumber) {
          console.log('\tmodel number = ' + modelNumber);
          callback();
        });
      },
      function(callback) {
        console.log('readSystemId');
        wimoto.readSystemId(function(error, systemId) {
          console.log('\tsystem id = ' + systemId);
          callback();
        });
      },
      function(callback) {
        console.log('readBatteryLevel');
        wimoto.readBatteryLevel(function(error, batteryLevel) {
          console.log('\tbattery level = ' + batteryLevel);
          callback();
        });
      },
      function(callback) {
        console.log('disconnect');
        wimoto.disconnect(callback);
      }
    ]
  );
});
