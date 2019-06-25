'use strict';

import fp from 'lodash/fp';
import get from 'lodash/get';

export const getAddressComponentFromGoogle = (addressComponents, name, short = false) => {
  return fp.compose(
    //eslint-disable-line
    fp.defaultTo(''),
    fp.get(short ? 'short_name' : 'long_name'),
    fp.find(item => item.types.includes(name))
  )(addressComponents);
};

export const parseGeocodeApiResult = result => {
  const addressComponents = get(result, 'address_components');
  if (addressComponents) {
    const streetNumber = getAddressComponentFromGoogle(addressComponents, 'street_number');
    const route = getAddressComponentFromGoogle(addressComponents, 'route');
    const name = streetNumber ? `${streetNumber} ${route}` : route;
    const city = getAddressComponentFromGoogle(addressComponents, 'locality');
    const postcode = getAddressComponentFromGoogle(addressComponents, 'postal_code');
    const administrative = getAddressComponentFromGoogle(addressComponents, 'administrative_area_level_1', true);
    if (name && city && postcode && administrative) {
      return { city, postcode, administrative, name };
    } else {
      console.error('missing address component', { city, postcode, administrative, name });
      return null;
    }
  } else {
    console.error('empty address components');
    return null;
  }
};
