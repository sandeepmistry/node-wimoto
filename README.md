# node-wimoto

Node.js lib for [Wimoto](http://www.wimoto.com) devices utilizing [noble](https://github.com/sandeepmistry/noble) and [noble-device](https://github.com/sandeepmistry/noble-device)

## Prerequisites

 * See [noble prerequisites](https://github.com/sandeepmistry/noble#prerequisites) for your platform
 * See [Wimoto developer guide](https://github.com/Wimoto/Developers/blob/master/Wimoto%20Developer%20Guide%20v1.0.5.pdf)

## Install

```sh
npm install wimoto
```

## Usage

Wimoto motes have two methods to communicate, broadcasting and connecting.

## Broadcast Mode

```javascript
var Wimoto = require('wimoto');
var WimotoBroadcast = Wimoto.Broadcast;
```

### Start scanning

```javascript
WimotoBroadcast.startScanning();
```

#### Events

```javascript
WimotoBroadcast.on('data', callback(mote));
```
##### mote
 * ```temperature``` - Measured in celcius
 * ```light``` - Measured in lux between 0-65535
 * ```humidity``` - as a percent between 0-100
 * ```battery``` - as a percent between 0-100

## Connection Mode

```javascript
var Wimoto = require('wimoto');
var WimotoClimate = Wimoto.Climate;
```

### Discover

```javascript
wimotoClimate.discover(callback(wimotoClimate));
```

### Connect and SetUp (discover services and characteristics)

```javascript
wimotoClimate.connectAndSetUp(callback());
```

### Read Device Name

```javascript
wimotoClimate.readDeviceName(callback(error, deviceName));
```

### Read Manufacturer Name

```javascript
wimotoClimate.readManufacturerName(callback(error, manufacturerName));
```

### Read Model Number

```javascript
wimotoClimate.readModelNumber(callback(error, modelNumber));
```

### Read System Id

```javascript
wimotoClimate.readSystemId(callback(error, systemId));
```

### Read Battery Level

```javascript
wimotoClimate.readBatteryLevel(callback(error, batteryLevel));
```

### Read Current Temperature

```javascript
wimotoClimate.readCurrentTemperature(callback(error, currentTemperature));
```

### Notify Current Temperature

```javascript
wimotoClimate.notifyCurrentTemperature([callback(error)]);
```

### UnNotify Current Temperature

```javascript
wimotoClimate.unnotifyCurrentTemperature([callback(error)]);
```

### Read Current Light

```javascript
wimotoClimate.readCurrentLight(callback(error, currentLight));
```

### Notify Current Light

```javascript
wimotoClimate.notifyCurrentLight([callback(error)]);
```

### UnNotify Current Light

```javascript
wimotoClimate.unnotifyCurrentLight([callback(error)]);
```

### Read Current Humidity

```javascript
wimotoClimate.readCurrentHumidity(callback(error, currentHumidity));
```

### Notify Current Humidity

```javascript
wimotoClimate.notifyCurrentHumidity([callback(error)]);
```

### UnNotify Current Humidity

```javascript
wimotoClimate.unnotifyCurrentHumidity([callback(error)]);
```

### Disconnect

```javascript
wimotoClimate.disconnect([callback(error)]);
```

### Events

```javascript
wimotoClimate.on('disconnect', callback();
```

```javascript
wimotoClimate.on('currentTemperatureChange', callback(currentTemperature);
```

```javascript
wimotoClimate.on('currentLightChange', callback(currentLight);
```

```javascript
wimotoClimate.on('currentHumidityChange', callback(currentHumidity);
```
