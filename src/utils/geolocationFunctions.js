'use strict';

import fp from 'lodash/fp';

const addressComponentFromGoogleResult = (result, name, short = false) => {
  return fp.compose(
    //eslint-disable-line
    fp.defaultTo(''),
    fp.get(short ? 'short_name' : 'long_name'),
    fp.find(item => item.types.includes(name))
  )(result.address_components);
};

export const parseGeocodeApiResult = result => {
  const streetNumber = addressComponentFromGoogleResult(result, 'street_number');
  const route = addressComponentFromGoogleResult(result, 'route');
  const name = streetNumber ? `${streetNumber} ${route}` : route;
  const city = addressComponentFromGoogleResult(result, 'locality');
  const postcode = addressComponentFromGoogleResult(result, 'postal_code');
  const administrative = addressComponentFromGoogleResult(result, 'administrative_area_level_1', true);
  if (name && city && postcode && administrative) {
    return { city, postcode, administrative, name };
  } else {
    console.error('missing address component', { city, postcode, administrative, name });
    return null;
  }
};
