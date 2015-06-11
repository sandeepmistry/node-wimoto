var Broadcast = require('./lib/broadcast');
var Climate = require('./lib/climate');

module.exports = {
  Broadcast: new Broadcast(),
  Climate: Climate
};
