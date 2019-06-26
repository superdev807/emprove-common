'use strict';

import { distance, lookup, radius } from 'zipcodes';

import metaDataCities from '../data/EUI_citiesData.json';
import supportedZipCodes from '../data/supported_zipCodes.json';
import { FIND_NEAR_CITY_START_RADIUS } from '../config/constants';

export const isValidZipCode = zipcode => {
  if (zipcode && (zipcode.length !== 5 || /^\d+$/.test(zipcode) === false)) {
    return false;
  } else {
    return Boolean(getNearestCityFromZipCode(zipcode));
  }
};

export const getCityFromMetaData = (cityName, stateNameShort) => {
  const state = metaDataCities[stateNameShort];
  if (state) {
    for (let city of state) {
      if (city.label === cityName) {
        city.stateNameShort = stateNameShort;
        return city;
      }
    }
  }
  return null;
};

export const getCityFromZipCode = zip => {
  const passedZip = zip;
  zip = Number(zip);
  let city = null;
  if (zip === zip) {
    const location = lookup(passedZip);
    if (location) {
      city = getCityFromMetaData(location.city, location.state);
      if (!city) {
        city = { label: location.city, stateNameShort: location.state };
      }
    }
  }
  return city;
};

export const getCityStateFromZipCode = zip => {
  if (zip && zip.length == 5 && /^[0-9]+$/.test(zip)) {
    return lookup(zip);
  } else {
    return null;
  }
};

export const getCityStateNameFromZipCode = zip => {
  const cityMeta = getCityFromZipCode(zip);
  if (cityMeta) {
    return `${cityMeta.label}, ${cityMeta.stateNameShort}`;
  }
  return null;
};

export const getNearestCityWithinRadius = (passedZip, rad) => {
  let zipcodes = radius(passedZip, rad);
  zipcodes = zipcodes.filter(function(z) {
    return z !== passedZip;
  });
  zipcodes.sort(function(a, b) {
    return distance(passedZip, a) - distance(passedZip, b);
  });
  for (let zipcode of zipcodes) {
    let location = lookup(zipcode);
    if (location) {
      let city = getCityFromMetaData(location.city, location.state);
      if (city) {
        city.zip = zipcode;
        return city;
      }
    }
  }
  return null;
};

export const getNearestCityFromZipCode = passedZip => {
  let city = null;
  const location = lookup(passedZip);
  if (location) {
    let radius = FIND_NEAR_CITY_START_RADIUS;
    while (!city) {
      city = getNearestCityWithinRadius(passedZip, radius);
      radius += radius;
    }
  }
  return city;
};

export const getRealCityFromZipCode = zip => {
  let realCity = { label: '', stateNameShort: '', cityId: 0, zip: zip };
  let city = null;

  const location = lookup(zip);

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

export const isSupportedZipCode = zipcode => {
  return supportedZipCodes.includes(zipcode);
};

export const getLocation = zipcode => {
  let city = getCityFromZipCode(zipcode);
  const nearestCity = getNearestCityFromZipCode(zipcode) || {};

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
    zipcode
  };
};

export const formatCityStateZip = address => {
  return `${address.city}, ${address.state} ${address.zipcode}`;
};
