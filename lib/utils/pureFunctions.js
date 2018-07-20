'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.decodeSpecialCharacters = exports.propsChanged = exports.jsonToQueryString = exports.parseQueryString = exports.bindCallbackToPromise = exports.formatAddress = exports.secureWebsiteUrl = exports.sanitizeWebsiteUrl = exports.sanitizeFields = exports.capitalize = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _fp = require('lodash/fp');

var _fp2 = _interopRequireDefault(_fp);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var capitalize = exports.capitalize = function capitalize(str) {
  return typeof str === 'string' && str.length > 0 ? str.charAt(0).toUpperCase() + str.slice(1) : str;
};

var sanitizeFields = exports.sanitizeFields = function sanitizeFields(obj) {
  Object.keys(obj).forEach(function (key) {
    return obj[key] === undefined && delete obj[key];
  });
  return obj;
};

var sanitizeWebsiteUrl = exports.sanitizeWebsiteUrl = function sanitizeWebsiteUrl(website) {
  if (!website) {
    return '#';
  }
  if (website.substring(0, 4).toLowerCase() !== 'http' && website.substring(0, 5).toLowerCase() !== 'https') {
    return 'http://' + website;
  } else {
    return website;
  }
};

var secureWebsiteUrl = exports.secureWebsiteUrl = function secureWebsiteUrl(website) {
  if (!website) {
    return '#';
  }
  if (website.substring(0, 5).toLowerCase() !== 'https') {
    return 'https' + website.substring(4);
  } else {
    return website;
  }
};

var formatAddress = exports.formatAddress = function formatAddress(_ref) {
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

var bindCallbackToPromise = exports.bindCallbackToPromise = function bindCallbackToPromise() {
  var _resolve = void 0;
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

var parseQueryString = exports.parseQueryString = function parseQueryString(string) {
  return _fp2.default.compose(JSON.parse, JSON.stringify, _fp2.default.reduce(function (acc, part) {
    var _part$split = part.split('='),
        _part$split2 = _slicedToArray(_part$split, 2),
        name = _part$split2[0],
        value = _part$split2[1];

    acc[name] = decodeURIComponent(value || '');
    return acc;
  }, {}), function (str) {
    return str ? str.split('&') : [];
  }, _fp2.default.replace('?', ''))(string);
};

var jsonToQueryString = exports.jsonToQueryString = function jsonToQueryString(obj) {
  var pairs = [];
  obj && Object.keys(obj).forEach(function (key) {
    if (obj[key]) {
      var value = encodeURIComponent(obj[key]);
      value && pairs.push(key + '=' + value);
    }
  });

  return pairs.length ? '?' + pairs.join('&') : '';
};

var propsChanged = exports.propsChanged = function propsChanged(propKeys, props, nextProps) {
  var deepCompare = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  if (deepCompare) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = propKeys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var key = _step.value;

        if (!(0, _lodash2.default)(_fp2.default.get(key)(props), _fp2.default.get(key)(nextProps))) return true;
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
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

        if (_fp2.default.get(_key)(props) !== _fp2.default.get(_key)(nextProps)) return true;
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2.return) {
          _iterator2.return();
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

var decodeSpecialCharacters = exports.decodeSpecialCharacters = function decodeSpecialCharacters(str) {
  return str.replace(/&#(\d+);/g, function (match, dec) {
    return String.fromCharCode(dec);
  });
};