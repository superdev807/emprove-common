'use strict';

import "core-js/modules/es.array.join";
import "core-js/modules/es.number.to-fixed";
import "core-js/modules/es.regexp.exec";
import "core-js/modules/es.string.replace";
import "core-js/modules/es.string.split";
import _parseFloat from "@babel/runtime-corejs3/core-js-stable/parse-float";
import _getIterator from "@babel/runtime-corejs3/core-js/get-iterator";
import _concatInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/concat";
import _toArray from "@babel/runtime-corejs3/helpers/toArray";
import _reduceInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/reduce";
import _JSON$stringify from "@babel/runtime-corejs3/core-js-stable/json/stringify";
import _Promise from "@babel/runtime-corejs3/core-js-stable/promise";
import _filterInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/filter";
import _Object$keys from "@babel/runtime-corejs3/core-js-stable/object/keys";
import _forEachInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/for-each";
import _sliceInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/slice";
import fp from 'lodash/fp';
import isEqual from 'lodash/isEqual';
export var capitalize = function capitalize(str) {
  return typeof str === 'string' && str.length > 0 ? str.charAt(0).toUpperCase() + _sliceInstanceProperty(str).call(str, 1) : str;
};
export var sanitizeFields = function sanitizeFields(obj) {
  var _context;

  _forEachInstanceProperty(_context = _Object$keys(obj)).call(_context, function (key) {
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
  var _context2;

  var address1 = _ref.address1,
      address2 = _ref.address2,
      city = _ref.city,
      state = _ref.state,
      zip = _ref.zip;
  var separator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ', ';
  return _filterInstanceProperty(_context2 = [address1, address2, city, state, zip]).call(_context2, function (val) {
    return val;
  }).join(separator);
};
export var bindCallbackToPromise = function bindCallbackToPromise() {
  var _resolve;

  var promise = function promise() {
    return new _Promise(function (resolve) {
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
  return fp.compose(JSON.parse, _JSON$stringify, _reduceInstanceProperty(fp).call(fp, function (acc, part) {
    var _part$split = part.split('='),
        _part$split2 = _toArray(_part$split),
        name = _part$split2[0],
        values = _sliceInstanceProperty(_part$split2).call(_part$split2, 1);

    var value = values.join('=');
    acc[name] = decodeURIComponent(value || '');
    return acc;
  }, {}), function (str) {
    return str ? str.split('&') : [];
  }, fp.replace('?', ''))(string);
};
export var jsonToQueryString = function jsonToQueryString(obj) {
  var _context3;

  var pairs = [];
  obj && _forEachInstanceProperty(_context3 = _Object$keys(obj)).call(_context3, function (key) {
    if (obj[key]) {
      var _context4;

      var value = encodeURIComponent(obj[key]);
      value && pairs.push(_concatInstanceProperty(_context4 = "".concat(key, "=")).call(_context4, value));
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
      for (var _iterator = _getIterator(propKeys), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
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
      for (var _iterator2 = _getIterator(propKeys), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
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
  return _parseFloat(_parseFloat(number).toFixed(2)); //toFixed becomes a string
};