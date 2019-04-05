'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.decodeSpecialCharacters = exports.propsChanged = exports.jsonToQueryString = exports.parseQueryString = exports.bindCallbackToPromise = exports.formatAddress = exports.secureWebsiteUrl = exports.sanitizeWebsiteUrl = exports.sanitizeFields = exports.capitalize = void 0;

var _fp = _interopRequireDefault(require("lodash/fp"));

var _lodash = _interopRequireDefault(require("lodash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var capitalize = function capitalize(str) {
  return typeof str === 'string' && str.length > 0 ? str.charAt(0).toUpperCase() + str.slice(1) : str;
};

exports.capitalize = capitalize;

var sanitizeFields = function sanitizeFields(obj) {
  Object.keys(obj).forEach(function (key) {
    return obj[key] === undefined && delete obj[key];
  });
  return obj;
};

exports.sanitizeFields = sanitizeFields;

var sanitizeWebsiteUrl = function sanitizeWebsiteUrl(website) {
  if (!website) {
    return '#';
  }

  if (website.substring(0, 4).toLowerCase() !== 'http' && website.substring(0, 5).toLowerCase() !== 'https') {
    return 'http://' + website;
  } else {
    return website;
  }
};

exports.sanitizeWebsiteUrl = sanitizeWebsiteUrl;

var secureWebsiteUrl = function secureWebsiteUrl(website) {
  if (!website) {
    return '#';
  }

  if (website.substring(0, 5).toLowerCase() !== 'https') {
    return 'https' + website.substring(4);
  } else {
    return website;
  }
};

exports.secureWebsiteUrl = secureWebsiteUrl;

var formatAddress = function formatAddress(_ref) {
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

exports.formatAddress = formatAddress;

var bindCallbackToPromise = function bindCallbackToPromise() {
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

exports.bindCallbackToPromise = bindCallbackToPromise;

var parseQueryString = function parseQueryString(string) {
  return _fp.default.compose(JSON.parse, JSON.stringify, _fp.default.reduce(function (acc, part) {
    var _part$split = part.split('='),
        _part$split2 = _toArray(_part$split),
        name = _part$split2[0],
        values = _part$split2.slice(1);

    var value = values.join('=');
    acc[name] = decodeURIComponent(value || '');
    return acc;
  }, {}), function (str) {
    return str ? str.split('&') : [];
  }, _fp.default.replace('?', ''))(string);
};

exports.parseQueryString = parseQueryString;

var jsonToQueryString = function jsonToQueryString(obj) {
  var pairs = [];
  obj && Object.keys(obj).forEach(function (key) {
    if (obj[key]) {
      var value = encodeURIComponent(obj[key]);
      value && pairs.push("".concat(key, "=").concat(value));
    }
  });
  return pairs.length ? "?".concat(pairs.join('&')) : '';
};

exports.jsonToQueryString = jsonToQueryString;

var propsChanged = function propsChanged(propKeys, props, nextProps) {
  var deepCompare = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  if (deepCompare) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = propKeys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var key = _step.value;
        if (!(0, _lodash.default)(_fp.default.get(key)(props), _fp.default.get(key)(nextProps))) return true;
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
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
        if (_fp.default.get(_key)(props) !== _fp.default.get(_key)(nextProps)) return true;
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
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

exports.propsChanged = propsChanged;

var decodeSpecialCharacters = function decodeSpecialCharacters(str) {
  return str.replace(/&#(\d+);/g, function (match, dec) {
    return String.fromCharCode(dec);
  });
};

exports.decodeSpecialCharacters = decodeSpecialCharacters;