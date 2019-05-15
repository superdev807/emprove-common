'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _get = _interopRequireDefault(require("lodash/get"));

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _phonenumberFunctions = require("../../../../utils/phonenumberFunctions");

var _styles = require("@material-ui/core/styles");

var _styles2 = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var RealtorInfo = function RealtorInfo(_ref) {
  var classes = _ref.classes,
      realtorDetails = _ref.realtorDetails;
  return _react["default"].createElement("div", {
    className: classes.realtorInfo
  }, _react["default"].createElement(_Grid["default"], {
    container: true,
    spacing: 16
  }, _react["default"].createElement(_Grid["default"], {
    item: true,
    xs: 6
  }, _react["default"].createElement("div", {
    className: (0, _classnames["default"])(classes.field, classes.imageField)
  }, _react["default"].createElement(_Typography["default"], {
    className: (0, _classnames["default"])(classes.label, classes.imageFieldLabel)
  }, "Logo:"), _react["default"].createElement("div", {
    className: classes.image,
    style: {
      backgroundImage: "url(".concat((0, _get["default"])(realtorDetails, 'logo.url', ''), ")")
    }
  }))), _react["default"].createElement(_Grid["default"], {
    item: true,
    xs: 6
  }, _react["default"].createElement("div", {
    className: (0, _classnames["default"])(classes.field, classes.imageField)
  }, _react["default"].createElement(_Typography["default"], {
    className: (0, _classnames["default"])(classes.label, classes.imageFieldLabel)
  }, "Profile photo:"), _react["default"].createElement("div", {
    className: classes.image,
    style: {
      backgroundImage: "url(".concat((0, _get["default"])(realtorDetails, 'profilePicture.url', ''), ")")
    }
  })))), _react["default"].createElement(_Grid["default"], {
    container: true,
    spacing: 16
  }, _react["default"].createElement(_Grid["default"], {
    item: true,
    xs: 4
  }, _react["default"].createElement(_Typography["default"], {
    className: classes.label
  }, "Realtor's Name:"), _react["default"].createElement(_Typography["default"], {
    className: classes.textLabel
  }, (0, _get["default"])(realtorDetails, 'profileName', '-'))), _react["default"].createElement(_Grid["default"], {
    item: true,
    xs: 4
  }, _react["default"].createElement(_Typography["default"], {
    className: classes.label
  }, "Phone number:"), _react["default"].createElement(_Typography["default"], {
    className: classes.textLabel
  }, (0, _phonenumberFunctions.formatPhoneNumber)((0, _get["default"])(realtorDetails, 'phoneNumber', '-')))), _react["default"].createElement(_Grid["default"], {
    item: true,
    xs: 4
  }, _react["default"].createElement(_Typography["default"], {
    className: classes.label
  }, "Email:"), _react["default"].createElement(_Typography["default"], {
    className: classes.textLabel
  }, (0, _get["default"])(realtorDetails, 'email', '-')))));
};

var _default = (0, _styles.withStyles)(_styles2["default"])(RealtorInfo);

exports["default"] = _default;