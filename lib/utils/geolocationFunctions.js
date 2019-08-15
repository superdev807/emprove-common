'use strict';

import "core-js/modules/es.array.concat";
import "core-js/modules/es.array.find";
import "core-js/modules/es.array.includes";
import "core-js/modules/es.string.includes";
import fp from 'lodash/fp';
import get from 'lodash/get';

var getAddressComponentFromGoogle = function getAddressComponentFromGoogle(addressComponents, name) {
  var _short = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  return fp.compose( // eslint-disable-line
  fp.defaultTo(''), fp.get(_short ? 'short_name' : 'long_name'), fp.find(function (item) {
    return item.types.includes(name);
  }))(addressComponents);
};

export var parseGeocodeApiResult = function parseGeocodeApiResult(result) {
  var addressComponents = get(result, 'address_components');

  if (addressComponents) {
    var streetNumber = getAddressComponentFromGoogle(addressComponents, 'street_number');
    var route = getAddressComponentFromGoogle(addressComponents, 'route');
    var name = streetNumber ? "".concat(streetNumber, " ").concat(route) : route;
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