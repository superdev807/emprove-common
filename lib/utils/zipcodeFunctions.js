'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatCityStateZip = exports.getLocation = exports.isSupportedZipCode = exports.getRealCityFromZipCode = exports.getNearestCityFromZipCode = exports.getNearestCityWithinRadius = exports.getCityStateNameFromZipCode = exports.getCityStateFromZipCode = exports.getCityFromZipCode = exports.getCityFromMetaData = exports.isValidZipCode = void 0;

var _zipcodes = require("zipcodes");

var _EUI_citiesData = _interopRequireDefault(require("../data/EUI_citiesData.json"));

var _supported_zipCodes = _interopRequireDefault(require("../data/supported_zipCodes.json"));

var _constants = require("../config/constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var isValidZipCode = function isValidZipCode(zipcode) {
  if (zipcode && (zipcode.length !== 5 || /^\d+$/.test(zipcode) === false)) {
    return false;
  } else {
    return Boolean(getNearestCityFromZipCode(zipcode));
  }
};

exports.isValidZipCode = isValidZipCode;

var getCityFromMetaData = function getCityFromMetaData(cityName, stateNameShort) {
  var state = _EUI_citiesData["default"][stateNameShort];

  if (state) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = state[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var city = _step.value;

        if (city.label === cityName) {
          city.stateNameShort = stateNameShort;
          return city;
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }

  return null;
};

exports.getCityFromMetaData = getCityFromMetaData;

var getCityFromZipCode = function getCityFromZipCode(zip) {
  var passedZip = zip;
  zip = Number(zip);
  var city = null;

  if (zip === zip) {
    var location = (0, _zipcodes.lookup)(passedZip);

    if (location) {
      city = getCityFromMetaData(location.city, location.state);

      if (!city) {
        city = {
          label: location.city,
          stateNameShort: location.state
        };
      }
    }
  }

  return city;
};

exports.getCityFromZipCode = getCityFromZipCode;

var getCityStateFromZipCode = function getCityStateFromZipCode(zip) {
  if (zip && zip.length == 5 && /^[0-9]+$/.test(zip)) {
    return (0, _zipcodes.lookup)(zip);
  } else {
    return null;
  }
};

exports.getCityStateFromZipCode = getCityStateFromZipCode;

var getCityStateNameFromZipCode = function getCityStateNameFromZipCode(zip) {
  var cityMeta = getCityFromZipCode(zip);

  if (cityMeta) {
    return "".concat(cityMeta.label, ", ").concat(cityMeta.stateNameShort);
  }

  return null;
};

exports.getCityStateNameFromZipCode = getCityStateNameFromZipCode;

var getNearestCityWithinRadius = function getNearestCityWithinRadius(passedZip, rad) {
  var zipcodes = (0, _zipcodes.radius)(passedZip, rad);
  zipcodes = zipcodes.filter(function (z) {
    return z !== passedZip;
  });
  zipcodes.sort(function (a, b) {
    return (0, _zipcodes.distance)(passedZip, a) - (0, _zipcodes.distance)(passedZip, b);
  });
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = zipcodes[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var zipcode = _step2.value;
      var location = (0, _zipcodes.lookup)(zipcode);

      if (location) {
        var city = getCityFromMetaData(location.city, location.state);

        if (city) {
          city.zip = zipcode;
          return city;
        }
      }
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
        _iterator2["return"]();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  return null;
};

exports.getNearestCityWithinRadius = getNearestCityWithinRadius;

var getNearestCityFromZipCode = function getNearestCityFromZipCode(passedZip) {
  var city = null;
  var location = (0, _zipcodes.lookup)(passedZip);

  if (location) {
    var _radius = _constants.FIND_NEAR_CITY_START_RADIUS;

    while (!city) {
      city = getNearestCityWithinRadius(passedZip, _radius);
      _radius += _radius;
    }
  }

  return city;
};

exports.getNearestCityFromZipCode = getNearestCityFromZipCode;

var getRealCityFromZipCode = function getRealCityFromZipCode(zip) {
  var realCity = {
    label: '',
    stateNameShort: '',
    cityId: 0,
    zip: zip
  };
  var city = null;
  var location = (0, _zipcodes.lookup)(zip);

  if (location) {
    city = getCityFromMetaData(location.city, location.state);
    realCity.label = location.city;
    realCity.stateNameShort = location.state;

    if (!city) {
      city = getNearestCityFromZipCode(zip);

      if (city) {
        realCity.zip = city.zip;
        realCity.cityId = Number(city.value); //Make sure we have the cityId
      }
    } else {
      realCity.zip = city.zip;
      realCity.cityId = Number(city.value); //Make sure we have the cityId
    }
  }

  return realCity;
};

exports.getRealCityFromZipCode = getRealCityFromZipCode;

var isSupportedZipCode = function isSupportedZipCode(zipcode) {
  return _supported_zipCodes["default"].includes(zipcode);
};

exports.isSupportedZipCode = isSupportedZipCode;

var getLocation = function getLocation(zipcode) {
  var city = getCityFromZipCode(zipcode);
  var nearestCity = getNearestCityFromZipCode(zipcode) || {};

  if (!city) {
    city = nearestCity;
  }

  if (!city.label) {
    city.label = nearestCity.label;
  }

  if (!city.value) {
    city.value = nearestCity.value;
  }

  return {
    city: city.label,
    locationId: city.value,
    stateInitials: city.stateNameShort,
    zipcode: zipcode
  };
};

exports.getLocation = getLocation;

var formatCityStateZip = function formatCityStateZip(address) {
  return "".concat(address.city, ", ").concat(address.state, " ").concat(address.zipcode);
};

exports.formatCityStateZip = formatCityStateZip;