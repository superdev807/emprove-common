'use strict';

import metaDataCities from '../data/EUI_citiesData.json';
import { distance, lookup, radius } from 'zipcodes';
import { FIND_NEAR_CITY_START_RADIUS } from '../config/constants';

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
