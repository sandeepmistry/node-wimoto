var NobleDevice = require('noble-device');

var Wimoto = function(peripheral) {
  NobleDevice.call(this, peripheral);
};

Wimoto.SCAN_UUIDS = ['5608', '5614', '560e'];

NobleDevice.Util.inherits(Wimoto, NobleDevice);

NobleDevice.Util.mixin(Wimoto, NobleDevice.DeviceInformationService, [
  'readManufacturerName',
  'readModelNumber',
  'readSystemId'
]);
NobleDevice.Util.mixin(Wimoto, NobleDevice.BatteryService);

module.exports = Wimoto;
