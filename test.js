var async = require('async');

var Wimoto = require('./index');
var WimotoClimate = Wimoto.Climate;

WimotoClimate.discover(function(wimotoClimate) {
  console.log('discovered: ' + wimotoClimate);

  wimotoClimate.on('disconnect', function() {
    console.log('disconnected!');
    process.exit(0);
  });

  wimotoClimate.on('currentTemperatureChange', function(currentTemperature) {
    console.log('on currentTemperatureChange -> ' + currentTemperature.toFixed(1) + ' °C');
  });

  wimotoClimate.on('currentHumidityChange', function(currentHumidity) {
    console.log('on currentHumidityChange -> ' + currentHumidity.toFixed(1) + ' %');
  });

  async.series([
      function(callback) {
        console.log('connectAndSetUp');
        wimotoClimate.connectAndSetUp(callback);
      },
      function(callback) {
        console.log('readDeviceName');
        wimotoClimate.readDeviceName(function(error, deviceName) {
          console.log('\tdevice name = ' + deviceName);
          callback();
        });
      },
      function(callback) {
        console.log('readManufacturerName');
        wimotoClimate.readManufacturerName(function(error, manufacturerName) {
          console.log('\tmanufacturer name = ' + manufacturerName);
          callback();
        });
      },
      function(callback) {
        console.log('readModelNumber');
        wimotoClimate.readModelNumber(function(error, modelNumber) {
          console.log('\tmodel number = ' + modelNumber);
          callback();
        });
      },
      function(callback) {
        console.log('readSystemId');
        wimotoClimate.readSystemId(function(error, systemId) {
          console.log('\tsystem id = ' + systemId);
          callback();
        });
      },
      function(callback) {
        console.log('readBatteryLevel');
        wimotoClimate.readBatteryLevel(function(error, batteryLevel) {
          console.log('\tbattery level = ' + batteryLevel);
          callback();
        });
      },
      function(callback) {
        console.log('readCurrentTemperature');
        wimotoClimate.readCurrentTemperature(function(error, currentTemperature) {
          console.log('\tcurrent temperature = ' + currentTemperature.toFixed(1) + ' °C');
          callback();
        });
      },
      // function(callback) {
      //   console.log('notifyCurrentTemperature');
      //   wimotoClimate.notifyCurrentTemperature(callback);
      // },
      // function(callback) {
      //   setTimeout(callback, 30 * 1000);
      // },
      // function(callback) {
      //   console.log('unnotifyCurrentTemperature');
      //   wimotoClimate.unnotifyCurrentTemperature(callback);
      // },
      function(callback) {
        console.log('readCurrentLight');
        wimotoClimate.readCurrentLight(function(error, light) {
          console.log('\tcurrent light = ' + light + ' lux');
          callback();
        });
      },
      function(callback) {
        console.log('readCurrentHumidity');
        wimotoClimate.readCurrentHumidity(function(error, currentHumidity) {
          console.log('\tcurrent humidity = ' + currentHumidity.toFixed(1) + ' %');
          callback();
        });
      },
      // function(callback) {
      //   console.log('notifyCurrentHumidity');
      //   wimotoClimate.notifyCurrentHumidity(callback);
      // },
      // function(callback) {
      //   setTimeout(callback, 30 * 1000);
      // },
      // function(callback) {
      //   console.log('unnotifyCurrentHumidity');
      //   wimotoClimate.unnotifyCurrentHumidity(callback);
      // },
      function(callback) {
        console.log('disconnect');
        wimotoClimate.disconnect(callback);
      }
    ]
  );
});
