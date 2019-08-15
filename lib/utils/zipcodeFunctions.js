'use strict';

import "core-js/modules/es.symbol";
import "core-js/modules/es.symbol.description";
import "core-js/modules/es.symbol.iterator";
import "core-js/modules/es.array.concat";
import "core-js/modules/es.array.filter";
import "core-js/modules/es.array.includes";
import "core-js/modules/es.array.iterator";
import "core-js/modules/es.array.sort";
import "core-js/modules/es.number.constructor";
import "core-js/modules/es.object.to-string";
import "core-js/modules/es.string.includes";
import "core-js/modules/es.string.iterator";
import "core-js/modules/web.dom-collections.iterator";
import { distance, lookup, radius } from 'zipcodes';
import metaDataCities from '../data/EUI_citiesData.json';
import supportedZipCodes from '../data/supported_zipCodes.json';
import { FIND_NEAR_CITY_START_RADIUS } from '../config/constants';
export var isValidZipCode = function isValidZipCode(zipcode) {
  if (zipcode && (zipcode.length !== 5 || /^\d+$/.test(zipcode) === false)) {
    return false;
  } else {
    return Boolean(getNearestCityFromZipCode(zipcode));
  }
};
export var getCityFromMetaData = function getCityFromMetaData(cityName, stateNameShort) {
  var state = metaDataCities[stateNameShort];

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
export var getCityFromZipCode = function getCityFromZipCode(zip) {
  var passedZip = zip;
  zip = Number(zip);
  var city = null;

  if (zip === zip) {
    var location = lookup(passedZip);

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
export var getCityStateFromZipCode = function getCityStateFromZipCode(zip) {
  if (zip && zip.length == 5 && /^[0-9]+$/.test(zip)) {
    return lookup(zip);
  } else {
    return null;
  }
};
export var getCityStateNameFromZipCode = function getCityStateNameFromZipCode(zip) {
  var cityMeta = getCityFromZipCode(zip);

  if (cityMeta) {
    return "".concat(cityMeta.label, ", ").concat(cityMeta.stateNameShort);
  }

  return null;
};
export var getNearestCityWithinRadius = function getNearestCityWithinRadius(passedZip, rad) {
  var zipcodes = radius(passedZip, rad);
  zipcodes = zipcodes.filter(function (z) {
    return z !== passedZip;
  });
  zipcodes.sort(function (a, b) {
    return distance(passedZip, a) - distance(passedZip, b);
  });
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = zipcodes[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var zipcode = _step2.value;
      var location = lookup(zipcode);

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
export var getNearestCityFromZipCode = function getNearestCityFromZipCode(passedZip) {
  var city = null;
  var location = lookup(passedZip);

  if (location) {
    var _radius = FIND_NEAR_CITY_START_RADIUS;

    while (!city) {
      city = getNearestCityWithinRadius(passedZip, _radius);
      _radius += _radius;
    }
  }

  return city;
};
export var getRealCityFromZipCode = function getRealCityFromZipCode(zip) {
  var realCity = {
    label: '',
    stateNameShort: '',
    cityId: 0,
    zip: zip
  };
  var city = null;
  var location = lookup(zip);

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
export var isSupportedZipCode = function isSupportedZipCode(zipcode) {
  return supportedZipCodes.includes(zipcode);
};
export var getLocation = function getLocation(zipcode) {
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
export var formatCityStateZip = function formatCityStateZip(address) {
  return "".concat(address.city, ", ").concat(address.state, " ").concat(address.zipcode);
};