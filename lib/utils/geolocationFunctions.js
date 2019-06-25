'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseGeocodeApiResult = exports.getAddressComponentFromGoogle = void 0;

var _fp = _interopRequireDefault(require("lodash/fp"));

var _get = _interopRequireDefault(require("lodash/get"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getAddressComponentFromGoogle = function getAddressComponentFromGoogle(addressComponents, name) {
  var _short = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  return _fp["default"].compose( //eslint-disable-line
  _fp["default"].defaultTo(''), _fp["default"].get(_short ? 'short_name' : 'long_name'), _fp["default"].find(function (item) {
    return item.types.includes(name);
  }))(addressComponents);
};

exports.getAddressComponentFromGoogle = getAddressComponentFromGoogle;

var parseGeocodeApiResult = function parseGeocodeApiResult(result) {
  var addressComponents = (0, _get["default"])(result, 'address_components');

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

exports.parseGeocodeApiResult = parseGeocodeApiResult;