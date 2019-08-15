'use strict';

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import fp from 'lodash/fp';
import isEqual from 'lodash/isEqual';
export var capitalize = function capitalize(str) {
  return typeof str === 'string' && str.length > 0 ? str.charAt(0).toUpperCase() + str.slice(1) : str;
};
export var sanitizeFields = function sanitizeFields(obj) {
  Object.keys(obj).forEach(function (key) {
    return obj[key] === undefined && delete obj[key];
  });
  return obj;
};
export var sanitizeWebsiteUrl = function sanitizeWebsiteUrl(website) {
  if (!website) {
    return '#';
  }

  if (website.substring(0, 4).toLowerCase() !== 'http' && website.substring(0, 5).toLowerCase() !== 'https') {
    return 'http://' + website;
  } else {
    return website;
  }
};
export var secureWebsiteUrl = function secureWebsiteUrl(website) {
  if (!website) {
    return '#';
  }

  if (website.substring(0, 5).toLowerCase() !== 'https') {
    return 'https' + website.substring(4);
  } else {
    return website;
  }
};
export var formatAddress = function formatAddress(_ref) {
  var address1 = _ref.address1,
      address2 = _ref.address2,
      city = _ref.city,
      state = _ref.state,
      zip = _ref.zip;
  var separator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ', ';
  return [address1, address2, city, state, zip].filter(function (val) {
    return val;
  }).join(separator);
};
export var bindCallbackToPromise = function bindCallbackToPromise() {
  var _resolve;

  var promise = function promise() {
    return new Promise(function (resolve) {
      _resolve = resolve;
    });
  };

  var cb = function cb(args) {
    return _resolve(args);
  };

  return {
    promise: promise,
    cb: cb
  };
};
export var parseQueryString = function parseQueryString(string) {
  return fp.compose(JSON.parse, JSON.stringify, fp.reduce(function (acc, part) {
    var _part$split = part.split('='),
        _part$split2 = _toArray(_part$split),
        name = _part$split2[0],
        values = _part$split2.slice(1);

    var value = values.join('=');
    acc[name] = decodeURIComponent(value || '');
    return acc;
  }, {}), function (str) {
    return str ? str.split('&') : [];
  }, fp.replace('?', ''))(string);
};
export var jsonToQueryString = function jsonToQueryString(obj) {
  var pairs = [];
  obj && Object.keys(obj).forEach(function (key) {
    if (obj[key]) {
      var value = encodeURIComponent(obj[key]);
      value && pairs.push("".concat(key, "=").concat(value));
    }
  });
  return pairs.length ? "?".concat(pairs.join('&')) : '';
};
export var propsChanged = function propsChanged(propKeys, props, nextProps) {
  var deepCompare = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  if (deepCompare) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = propKeys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var key = _step.value;
        if (!isEqual(fp.get(key)(props), fp.get(key)(nextProps))) return true;
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
  } else {
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = propKeys[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var _key = _step2.value;
        if (fp.get(_key)(props) !== fp.get(_key)(nextProps)) return true;
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
  }

  return false;
};
export var decodeSpecialCharacters = function decodeSpecialCharacters(str) {
  return str.replace(/&#(\d+);/g, function (match, dec) {
    return String.fromCharCode(dec);
  });
}; //14.995 -> 14.99

export var truncateToCentsWithoutRounding = function truncateToCentsWithoutRounding(number) {
  return parseFloat(parseFloat(number).toFixed(2)); //toFixed becomes a string
};