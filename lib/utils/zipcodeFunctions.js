'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRealCityFromZipCode = exports.getNearestCityFromZipCode = exports.getCityFromMetaData = void 0;

var _EUI_citiesData = _interopRequireDefault(require("../data/EUI_citiesData.json"));

var _zipcodes = require("zipcodes");

var _constants = require("../config/constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getCityFromMetaData = function getCityFromMetaData(cityName, stateNameShort) {
  var state = _EUI_citiesData.default[stateNameShort];

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
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
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