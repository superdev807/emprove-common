'use strict';

import _concatInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/concat";
import _includesInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/includes";
import _findInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/find";
import fp from 'lodash/fp';
import get from 'lodash/get';

var getAddressComponentFromGoogle = function getAddressComponentFromGoogle(addressComponents, name) {
  var _short = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  return fp.compose( // eslint-disable-line
  fp.defaultTo(''), fp.get(_short ? 'short_name' : 'long_name'), _findInstanceProperty(fp).call(fp, function (item) {
    var _context;

    return _includesInstanceProperty(_context = item.types).call(_context, name);
  }))(addressComponents);
};

export var parseGeocodeApiResult = function parseGeocodeApiResult(result) {
  var addressComponents = get(result, 'address_components');

  if (addressComponents) {
    var _context2;

    var streetNumber = getAddressComponentFromGoogle(addressComponents, 'street_number');
    var route = getAddressComponentFromGoogle(addressComponents, 'route');
    var name = streetNumber ? _concatInstanceProperty(_context2 = "".concat(streetNumber, " ")).call(_context2, route) : route;
    var city = getAddressComponentFromGoogle(addressComponents, 'locality');
    var postcode = getAddressComponentFromGoogle(addressComponents, 'postal_code');
    var administrative = getAddressComponentFromGoogle(addressComponents, 'administrative_area_level_1', true);

    if (name && city && postcode && administrative) {
      return {
        city: city,
        postcode: postcode,
        administrative: administrative,
        name: name
      };
    } else {
      console.error('missing address component', {
        city: city,
        postcode: postcode,
        administrative: administrative,
        name: name
      });
      return null;
    }
  } else {
    console.error('empty address components');
    return null;
  }
};
export var parseZipcodeAndState = function parseZipcodeAndState(result) {
  var addressComponents = get(result, 'address_components');

  if (addressComponents) {
    var zipcode = getAddressComponentFromGoogle(addressComponents, 'postal_code');
    var state = getAddressComponentFromGoogle(addressComponents, 'administrative_area_level_1', true);

    if (zipcode && state) {
      return {
        zipcode: zipcode,
        state: state
      };
    }
  }

  return {};
};