'use strict';

import fp from 'lodash/fp';
import isEqual from 'lodash';

export const capitalize = str => (typeof str === 'string' && str.length > 0 ? str.charAt(0).toUpperCase() + str.slice(1) : str);

export const sanitizeFields = obj => {
  Object.keys(obj).forEach(key => obj[key] === undefined && delete obj[key]);
  return obj;
};

export const sanitizeWebsiteUrl = website => {
  if (!website) {
    return '#';
  }
  if (website.substring(0, 4).toLowerCase() !== 'http' && website.substring(0, 5).toLowerCase() !== 'https') {
    return 'http://' + website;
  } else {
    return website;
  }
};

export const secureWebsiteUrl = website => {
  if (!website) {
    return '#';
  }
  if (website.substring(0, 5).toLowerCase() !== 'https') {
    return 'https' + website.substring(4);
  } else {
    return website;
  }
};

export const formatAddress = ({ address1, address2, city, state, zip }, separator = ', ') =>
  [address1, address2, city, state, zip].filter(val => val).join(separator);

export const bindCallbackToPromise = () => {
  let _resolve;
  const promise = () => {
    return new Promise(resolve => {
      _resolve = resolve;
    });
  };
  const cb = args => _resolve(args);

  return {
    promise,
    cb
  };
};

export const parseQueryString = string =>
  fp.compose(
    JSON.parse,
    JSON.stringify,
    fp.reduce((acc, part) => {
      let [name, ...values] = part.split('=');
      const value = values.join('=');
      acc[name] = decodeURIComponent(value || '');
      return acc;
    }, {}),
    str => (str ? str.split('&') : []),
    fp.replace('?', '')
  )(string);

export const jsonToQueryString = obj => {
  const pairs = [];
  obj &&
    Object.keys(obj).forEach(key => {
      if (obj[key]) {
        const value = encodeURIComponent(obj[key]);
        value && pairs.push(`${key}=${value}`);
      }
    });

  return pairs.length ? `?${pairs.join('&')}` : '';
};

export const propsChanged = (propKeys, props, nextProps, deepCompare = false) => {
  if (deepCompare) {
    for (let key of propKeys) {
      if (!isEqual(fp.get(key)(props), fp.get(key)(nextProps))) return true;
    }
  } else {
    for (let key of propKeys) {
      if (fp.get(key)(props) !== fp.get(key)(nextProps)) return true;
    }
  }
  return false;
};

export const decodeSpecialCharacters = str => {
  return str.replace(/&#(\d+);/g, (match, dec) => {
    return String.fromCharCode(dec);
  });
};
