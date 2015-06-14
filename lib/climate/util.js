module.exports = {

  convertCurrentTemperature: function(rawValue) {
    return (-46.85 + (175.72 / 65536.0) * rawValue);
  },

  convertCurrentLight: function(rawValue) {
    return rawValue;
  },

  convertCurrentHumidity: function(rawValue) {
    return (-6.0 + (125.0 / 65536.0) * rawValue);
  }

};
