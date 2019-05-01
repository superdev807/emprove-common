'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _Divider = _interopRequireDefault(require("@material-ui/core/Divider"));

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reduxForm = require("redux-form");

var _styles = require("@material-ui/core/styles");

var _DropdownField = _interopRequireDefault(require("../DropdownField"));

var _ImageField = _interopRequireDefault(require("../ImageField"));

var _InputField = _interopRequireDefault(require("../InputField"));

var _LoadingIndicator = _interopRequireDefault(require("../LoadingIndicator"));

var _PhoneNumberField = _interopRequireDefault(require("../PhoneNumberField"));

var _SearchableDropdownField = _interopRequireDefault(require("../SearchableDropdownField"));

var _ZipCodeField = _interopRequireDefault(require("../ZipCodeField"));

var _metaData = _interopRequireDefault(require("../../data/metaData.json"));

var _validators = require("../../utils/validators");

var _styles2 = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var homeAreaOptions = _metaData.default.homeAreas.map(function (homeArea) {
  return {
    value: homeArea.id,
    label: homeArea.label
  };
});

var scaleOptions = _metaData.default.projectScale.map(function (scale) {
  return {
    value: scale.id,
    label: scale.description
  };
});

var qualityOptions = _metaData.default.qualityStandard.map(function (quality) {
  return {
    value: quality.id,
    label: quality.label
  };
});

var isRequired = function isRequired(value) {
  return !value ? 'This field is required' : undefined;
};

var isValidEmail = function isValidEmail(value) {
  return value && !(0, _validators.validateEmail)(value) ? 'Invalid email address' : undefined;
};

var FlyerFormFields =
/*#__PURE__*/
function (_Component) {
  _inherits(FlyerFormFields, _Component);

  function FlyerFormFields() {
    _classCallCheck(this, FlyerFormFields);

    return _possibleConstructorReturn(this, _getPrototypeOf(FlyerFormFields).apply(this, arguments));
  }

  _createClass(FlyerFormFields, [{
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          city = _this$props.city,
          classes = _this$props.classes,
          handleSubmit = _this$props.handleSubmit,
          imageNames = _this$props.imageNames,
          onHomeAreaChange = _this$props.onHomeAreaChange,
          onZipcodeChange = _this$props.onZipcodeChange,
          submitting = _this$props.submitting;
      return _react.default.createElement("form", {
        onSubmit: handleSubmit,
        className: classes.root
      }, _react.default.createElement(_Grid.default, {
        container: true
      }, _react.default.createElement(_Grid.default, {
        item: true,
        xs: 4
      }, _react.default.createElement(_Typography.default, {
        className: classes.label
      }, "Flyer Name:")), _react.default.createElement(_Grid.default, {
        item: true,
        xs: 8
      }, _react.default.createElement(_reduxForm.Field, {
        name: "description",
        type: "text",
        component: _InputField.default,
        fullWidth: true,
        validate: [isRequired],
        className: classes.field,
        errorMessageClass: classes.error
      }))), _react.default.createElement(_Grid.default, {
        container: true,
        spacing: 16
      }, _react.default.createElement(_Grid.default, {
        item: true,
        xs: 6
      }, _react.default.createElement("div", {
        className: (0, _classnames.default)(classes.field, classes.imageField)
      }, _react.default.createElement(_Typography.default, {
        className: (0, _classnames.default)(classes.label, classes.imageFieldLabel)
      }, "Logo:"), _react.default.createElement(_reduxForm.Field, {
        name: "realtor.logo",
        component: _ImageField.default,
        validate: [isRequired],
        errorMessageClass: classes.error,
        aspectRatio: 3,
        uploadFolder: process.env.CLOUDINARY_REALTOR_PICTURE_FOLDER,
        uploadPreset: process.env.CLOUDINARY_REALTOR_PICTURE_UPLOAD_PRESET
      }))), _react.default.createElement(_Grid.default, {
        item: true,
        xs: 6
      }, _react.default.createElement("div", {
        className: (0, _classnames.default)(classes.field, classes.imageField)
      }, _react.default.createElement(_Typography.default, {
        className: (0, _classnames.default)(classes.label, classes.imageFieldLabel)
      }, "Profile photo:"), _react.default.createElement(_reduxForm.Field, {
        name: "realtorPicture",
        component: _ImageField.default,
        validate: [isRequired],
        errorMessageClass: classes.error,
        uploadFolder: process.env.CLOUDINARY_REALTOR_PICTURE_FOLDER,
        uploadPreset: process.env.CLOUDINARY_REALTOR_PICTURE_UPLOAD_PRESET
      })))), _react.default.createElement(_Grid.default, {
        container: true,
        spacing: 16
      }, _react.default.createElement(_Grid.default, {
        item: true,
        xs: 4
      }, _react.default.createElement(_Typography.default, {
        className: classes.label
      }, "Realtor's Name:"), _react.default.createElement(_reduxForm.Field, {
        name: "realtorName",
        type: "text",
        component: _InputField.default,
        fullWidth: true,
        validate: [isRequired],
        className: classes.field,
        errorMessageClass: classes.error
      })), _react.default.createElement(_Grid.default, {
        item: true,
        xs: 4
      }, _react.default.createElement(_Typography.default, {
        className: classes.label
      }, "Phone number:"), _react.default.createElement(_reduxForm.Field, {
        name: "realtorPhoneNumber",
        type: "text",
        component: _PhoneNumberField.default,
        fullWidth: true,
        validate: [isRequired],
        className: classes.field,
        errorMessageClass: classes.error
      })), _react.default.createElement(_Grid.default, {
        item: true,
        xs: 4
      }, _react.default.createElement(_Typography.default, {
        className: classes.label
      }, "Email:"), _react.default.createElement(_reduxForm.Field, {
        name: "realtorEmail",
        type: "text",
        component: _InputField.default,
        fullWidth: true,
        validate: [isValidEmail],
        className: classes.field,
        errorMessageClass: classes.error
      }))), _react.default.createElement(_Divider.default, {
        className: classes.divider
      }), _react.default.createElement(_Grid.default, {
        container: true,
        spacing: 16,
        justify: "space-between"
      }, _react.default.createElement(_Grid.default, {
        item: true,
        xs: 7
      }, _react.default.createElement(_Typography.default, {
        className: classes.label
      }, "Property address:"), _react.default.createElement(_reduxForm.Field, {
        name: "property.address1",
        type: "text",
        component: _InputField.default,
        fullWidth: true,
        validate: [isRequired],
        className: classes.field,
        errorMessageClass: classes.error
      }), _react.default.createElement(_Grid.default, {
        container: true,
        alignItems: "center",
        spacing: 16
      }, _react.default.createElement(_Grid.default, {
        item: true,
        xs: 6
      }, _react.default.createElement(_Typography.default, {
        className: classes.label
      }, "Zipcode:"), _react.default.createElement(_reduxForm.Field, {
        name: "property.zipcode",
        type: "text",
        component: _ZipCodeField.default,
        fullWidth: true,
        validate: [isRequired],
        className: classes.field,
        errorMessageClass: classes.error,
        onChange: onZipcodeChange
      })), _react.default.createElement(_Grid.default, {
        item: true,
        xs: 6
      }, _react.default.createElement(_Typography.default, {
        className: classes.label,
        color: "primary"
      }, city && "".concat(city.label, ", ").concat(city.stateNameShort)))), _react.default.createElement(_Grid.default, {
        container: true,
        spacing: 16
      }, _react.default.createElement(_Grid.default, {
        item: true,
        xs: 6
      }, _react.default.createElement(_Typography.default, {
        className: classes.label
      }, "Listing Price:"), _react.default.createElement(_reduxForm.Field, {
        name: "listingPrice",
        type: "text",
        component: _InputField.default,
        fullWidth: true,
        validate: [isRequired],
        className: classes.field,
        errorMessageClass: classes.error
      })), _react.default.createElement(_Grid.default, {
        item: true,
        xs: 6
      }, _react.default.createElement(_Typography.default, {
        className: classes.label
      }, "Home SQFT:"), _react.default.createElement(_reduxForm.Field, {
        name: "property.sqft",
        type: "text",
        component: _InputField.default,
        fullWidth: true,
        validate: [isRequired],
        className: classes.field,
        errorMessageClass: classes.error
      })))), _react.default.createElement(_Grid.default, {
        item: true,
        xs: 4
      }, _react.default.createElement(_Typography.default, {
        className: classes.label
      }, "Current Space:"), _react.default.createElement(_reduxForm.Field, {
        name: "picture",
        component: _ImageField.default,
        validate: [isRequired],
        errorMessageClass: classes.error,
        aspectRatio: 1.5,
        uploadFolder: process.env.CLOUDINARY_CONSUMER_IMAGES_FOLDER,
        uploadPreset: process.env.CLOUDINARY_CONSUMER_IMAGES_UPLOAD_PRESET
      }))), _react.default.createElement(_Divider.default, {
        className: classes.divider
      }), _react.default.createElement(_Grid.default, {
        container: true,
        spacing: 16
      }, _react.default.createElement(_Grid.default, {
        item: true,
        xs: 4
      }, _react.default.createElement(_Typography.default, {
        className: classes.label
      }, "Home Area:"), _react.default.createElement(_reduxForm.Field, {
        name: "homeAreaId",
        component: _DropdownField.default,
        options: homeAreaOptions,
        fullWidth: true,
        validate: [isRequired],
        className: classes.field,
        errorMessageClass: classes.error,
        onBlur: onHomeAreaChange
      })), _react.default.createElement(_Grid.default, {
        item: true,
        xs: 4
      }, _react.default.createElement(_Typography.default, {
        className: classes.label
      }, "Area SQFT:"), _react.default.createElement(_reduxForm.Field, {
        name: "areaSqft",
        type: "text",
        component: _InputField.default,
        fullWidth: true,
        validate: [isRequired],
        className: classes.field,
        errorMessageClass: classes.error
      })), _react.default.createElement(_Grid.default, {
        item: true,
        xs: 4
      }, _react.default.createElement(_Typography.default, {
        className: classes.label
      }, "SnapPrice:"), _react.default.createElement(_reduxForm.Field, {
        name: "imageKey",
        component: _SearchableDropdownField.default,
        options: imageNames,
        fullWidth: true,
        validate: [isRequired],
        className: classes.field,
        errorMessageClass: classes.error
      }))), _react.default.createElement(_Grid.default, {
        container: true,
        spacing: 16
      }, _react.default.createElement(_Grid.default, {
        item: true,
        xs: 6
      }, _react.default.createElement(_Typography.default, {
        className: classes.label
      }, "Project Scale:"), _react.default.createElement(_reduxForm.Field, {
        name: "projectScaleId",
        component: _DropdownField.default,
        options: scaleOptions,
        fullWidth: true,
        validate: [isRequired],
        className: classes.field,
        errorMessageClass: classes.error
      })), _react.default.createElement(_Grid.default, {
        item: true,
        xs: 6
      }, _react.default.createElement(_Typography.default, {
        className: classes.label
      }, "Project Quality:"), _react.default.createElement(_reduxForm.Field, {
        name: "qualityStandardId",
        component: _DropdownField.default,
        options: qualityOptions,
        fullWidth: true,
        validate: [isRequired],
        className: classes.field,
        errorMessageClass: classes.error
      }))), _react.default.createElement(_Grid.default, {
        container: true,
        justify: "flex-end",
        spacing: 16
      }, _react.default.createElement(_Grid.default, {
        item: true
      }, _react.default.createElement(_Button.default, {
        variant: "contained",
        color: "primary",
        onClick: handleSubmit(function (values) {
          return _this.props.onSubmit(_objectSpread({}, values, {
            preview: true
          }));
        })
      }, "Preview")), _react.default.createElement(_Grid.default, {
        item: true
      }, _react.default.createElement(_Button.default, {
        type: "submit",
        variant: "contained",
        color: "primary"
      }, "Save"))), submitting && _react.default.createElement(_LoadingIndicator.default, null));
    }
  }]);

  return FlyerFormFields;
}(_react.Component);

var _default = (0, _styles.withStyles)(_styles2.default)(FlyerFormFields);

exports.default = _default;