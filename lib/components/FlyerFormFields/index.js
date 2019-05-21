'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _Divider = _interopRequireDefault(require("@material-ui/core/Divider"));

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _classnames = _interopRequireDefault(require("classnames"));

var _get = _interopRequireDefault(require("lodash/get"));

var _reduxForm = require("redux-form");

var _styles = require("@material-ui/core/styles");

var _DropdownField = _interopRequireDefault(require("../DropdownField"));

var _FlyerFormAddressField = _interopRequireDefault(require("./components/FlyerFormAddressField"));

var _IconArrowDropdown = _interopRequireDefault(require("../../icons/IconArrowDropdown"));

var _ImageField = _interopRequireDefault(require("../ImageField"));

var _InputField = _interopRequireDefault(require("../InputField"));

var _LoadingIndicator = _interopRequireDefault(require("../LoadingIndicator"));

var _PhoneNumberField = _interopRequireDefault(require("../PhoneNumberField"));

var _RealtorInfo = _interopRequireDefault(require("./components/RealtorInfo"));

var _SearchableDropdownField = _interopRequireDefault(require("../SearchableDropdownField"));

var _ZipCodeField = _interopRequireDefault(require("../ZipCodeField"));

var _metaData = _interopRequireDefault(require("../../data/metaData.json"));

var _validators = require("../../utils/validators");

var _styles2 = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var homeAreaOptions = _metaData["default"].homeAreas.map(function (homeArea) {
  return {
    value: homeArea.id,
    label: homeArea.label
  };
});

var scaleOptions = _metaData["default"].projectScale.slice(0, 4).map(function (scale) {
  return {
    value: scale.id,
    label: scale.description
  };
});

var qualityOptions = _metaData["default"].qualityStandard.map(function (quality) {
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

  function FlyerFormFields(props) {
    var _this;

    _classCallCheck(this, FlyerFormFields);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FlyerFormFields).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleToggleProperties", function (event, forceToggle) {
      event && event.stopPropagation();

      if (!_this.state.manualAddressEntry || forceToggle) {
        _this.setState({
          showProperties: !_this.state.showProperties
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleClickProperty", function (property) {
      _this.setState({
        manualAddressEntry: false,
        showProperties: false
      }, function () {
        _this.props.onSelectProperty(property);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleClickManualEntry", function () {
      _this.setState({
        manualAddressEntry: true,
        showProperties: false
      }, function () {
        _this.addressFieldRef.current.focus();
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleCloseProperties", function () {
      _this.setState({
        showProperties: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleRealtorChange", function (event, value) {
      var onRealtorChange = _this.props.onRealtorChange;
      onRealtorChange && onRealtorChange(value);
    });

    var properties = (0, _get["default"])(props, 'properties', []);
    _this.state = {
      manualAddressEntry: properties.length === 0,
      showProperties: false
    };
    _this.addressFieldRef = _react["default"].createRef();
    return _this;
  }

  _createClass(FlyerFormFields, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          city = _this$props.city,
          classes = _this$props.classes,
          handleSubmit = _this$props.handleSubmit,
          hideRealtorDropdown = _this$props.hideRealtorDropdown,
          hideRealtorInfo = _this$props.hideRealtorInfo,
          imageNames = _this$props.imageNames,
          onHomeAreaChange = _this$props.onHomeAreaChange,
          onZipcodeChange = _this$props.onZipcodeChange,
          properties = _this$props.properties,
          realtors = _this$props.realtors,
          realtorDetails = _this$props.realtorDetails,
          submitting = _this$props.submitting,
          snapPriceImage = _this$props.snapPriceImage;
      var manualAddressEntry = this.state.manualAddressEntry;
      var hasProperties = properties && properties.length > 0;
      return _react["default"].createElement("form", {
        onSubmit: handleSubmit(function (values) {
          return _this2.props.onSubmit(_objectSpread({}, values, {
            imageKey: values.imageKey || snapPriceImage.imageKey
          }));
        }),
        className: classes.root
      }, _react["default"].createElement(_Grid["default"], {
        container: true
      }, _react["default"].createElement(_Grid["default"], {
        item: true,
        xs: 4
      }, _react["default"].createElement(_Typography["default"], {
        className: classes.label
      }, "Flyer Name:")), _react["default"].createElement(_Grid["default"], {
        item: true,
        xs: 8
      }, _react["default"].createElement(_reduxForm.Field, {
        name: "description",
        type: "text",
        component: _InputField["default"],
        fullWidth: true,
        validate: [isRequired],
        className: classes.field,
        errorMessageClass: classes.error
      }))), realtors && _react["default"].createElement(_Grid["default"], {
        container: true,
        spacing: 16
      }, _react["default"].createElement(_Grid["default"], {
        item: true,
        xs: 4
      }, _react["default"].createElement(_Typography["default"], {
        className: classes.label
      }, "Realtor:"), _react["default"].createElement("div", {
        className: (0, _classnames["default"])(_defineProperty({}, classes.hidden, hideRealtorDropdown))
      }, _react["default"].createElement(_reduxForm.Field, {
        name: "realtorId",
        component: _SearchableDropdownField["default"],
        options: realtors,
        fullWidth: true,
        validate: [isRequired],
        className: classes.field,
        errorMessageClass: classes.error,
        onChange: this.handleRealtorChange
      })))), !hideRealtorInfo && _react["default"].createElement(_RealtorInfo["default"], {
        realtorDetails: realtorDetails
      }), _react["default"].createElement(_Grid["default"], {
        container: true,
        spacing: 16,
        justify: "space-between"
      }, _react["default"].createElement(_Grid["default"], {
        item: true,
        xs: 7
      }, _react["default"].createElement(_Grid["default"], {
        container: true,
        spacing: 16
      }, _react["default"].createElement(_Grid["default"], {
        className: classes.withRelativePosition,
        item: true,
        xs: 12
      }, _react["default"].createElement(_Typography["default"], {
        className: classes.label
      }, "Property address:"), _react["default"].createElement(_react.Fragment, null, _react["default"].createElement("div", {
        className: classes.addressFieldContainer,
        ref: this.addressFieldRef,
        onClick: this.handleToggleProperties
      }, _react["default"].createElement(_reduxForm.Field, {
        ref: "address1",
        withRef: true,
        name: "property.address1",
        type: manualAddressEntry ? 'text' : 'button',
        component: _InputField["default"],
        fullWidth: true,
        validate: [isRequired],
        className: classes.field,
        errorMessageClass: classes.error,
        inputClasses: {
          input: classes.inputText
        } // onChange={onAddressChange ? onAddressChange : undefined}

      }), hasProperties && _react["default"].createElement(_IconArrowDropdown["default"], {
        className: classes.arrowIcon,
        onClick: function onClick(event) {
          return _this2.handleToggleProperties(event, true);
        }
      })), hasProperties && _react["default"].createElement(_FlyerFormAddressField["default"], {
        anchorEl: (0, _get["default"])(this.addressFieldRef, 'current'),
        open: this.state.showProperties,
        onClickProperty: this.handleClickProperty,
        onClickManualEntry: this.handleClickManualEntry,
        onClose: this.handleCloseProperties,
        properties: properties,
        placement: "bottom-start"
      })), _react["default"].createElement(_Grid["default"], {
        container: true,
        alignItems: "center",
        spacing: 16
      }, _react["default"].createElement(_Grid["default"], {
        item: true,
        xs: 4
      }, _react["default"].createElement(_Typography["default"], {
        className: classes.label
      }, "Zipcode:"), _react["default"].createElement("div", {
        className: classes.withRelativePosition
      }, _react["default"].createElement(_reduxForm.Field, {
        name: "property.zipcode",
        type: "text",
        component: _ZipCodeField["default"],
        fullWidth: true,
        validate: [isRequired],
        className: classes.field,
        errorMessageClass: classes.error,
        onChange: onZipcodeChange ? onZipcodeChange : undefined
      }), Boolean((0, _get["default"])(city, 'label')) && _react["default"].createElement(_Typography["default"], {
        className: classes.helptext,
        color: "primary"
      }, "".concat(city.label, ", ").concat(city.stateNameShort)))), _react["default"].createElement(_Grid["default"], {
        item: true,
        xs: 4
      }, _react["default"].createElement(_Typography["default"], {
        className: classes.label
      }, "Listing Price:"), _react["default"].createElement(_reduxForm.Field, {
        name: "listingPrice",
        type: "text",
        component: _InputField["default"],
        fullWidth: true,
        validate: [isRequired],
        className: classes.field,
        errorMessageClass: classes.error
      })), _react["default"].createElement(_Grid["default"], {
        item: true,
        xs: 4
      }, _react["default"].createElement(_Typography["default"], {
        className: classes.label
      }, "Home (ft\xB2):"), _react["default"].createElement(_reduxForm.Field, {
        name: "property.sqft",
        type: "text",
        component: _InputField["default"],
        fullWidth: true,
        validate: [isRequired],
        className: classes.field,
        errorMessageClass: classes.error
      })))))), _react["default"].createElement(_Grid["default"], {
        item: true,
        xs: 5
      }, _react["default"].createElement(_Typography["default"], {
        className: classes.label
      }, "Current Space:"), _react["default"].createElement(_reduxForm.Field, {
        name: "picture",
        component: _ImageField["default"],
        className: classes.imageField,
        validate: [isRequired],
        errorMessageClass: classes.error,
        aspectRatio: 1.5,
        uploadFolder: process.env.CLOUDINARY_CONSUMER_IMAGES_FOLDER,
        uploadPreset: process.env.CLOUDINARY_CONSUMER_IMAGES_UPLOAD_PRESET
      }))), _react["default"].createElement(_Divider["default"], {
        className: classes.divider
      }), _react["default"].createElement(_Grid["default"], {
        container: true,
        spacing: 16
      }, _react["default"].createElement(_Grid["default"], {
        item: true,
        xs: 7
      }, _react["default"].createElement(_Grid["default"], {
        container: true,
        spacing: 16
      }, _react["default"].createElement(_Grid["default"], {
        item: true,
        xs: 6
      }, _react["default"].createElement(_Typography["default"], {
        className: classes.label
      }, "Home Area:"), _react["default"].createElement(_reduxForm.Field, {
        name: "homeAreaId",
        component: _DropdownField["default"],
        options: homeAreaOptions,
        fullWidth: true,
        validate: [isRequired],
        className: classes.field,
        errorMessageClass: classes.error,
        onBlur: onHomeAreaChange
      })), _react["default"].createElement(_Grid["default"], {
        item: true,
        xs: 6
      }, _react["default"].createElement(_Typography["default"], {
        className: classes.label
      }, "Area (ft\xB2):"), _react["default"].createElement(_reduxForm.Field, {
        name: "areaSqft",
        type: "text",
        component: _InputField["default"],
        fullWidth: true,
        validate: [isRequired],
        className: classes.field,
        errorMessageClass: classes.error
      }))), _react["default"].createElement(_Grid["default"], {
        container: true,
        spacing: 16
      }, _react["default"].createElement(_Grid["default"], {
        item: true,
        xs: 6
      }, _react["default"].createElement(_Typography["default"], {
        className: classes.label
      }, "Project Scale:"), _react["default"].createElement(_reduxForm.Field, {
        name: "projectScaleId",
        component: _DropdownField["default"],
        options: scaleOptions,
        fullWidth: true,
        validate: [isRequired],
        className: classes.field,
        errorMessageClass: classes.error
      })), _react["default"].createElement(_Grid["default"], {
        item: true,
        xs: 6
      }, _react["default"].createElement(_Typography["default"], {
        className: classes.label
      }, "Project Quality:"), _react["default"].createElement(_reduxForm.Field, {
        name: "qualityStandardId",
        component: _DropdownField["default"],
        options: qualityOptions,
        fullWidth: true,
        validate: [isRequired],
        className: classes.field,
        errorMessageClass: classes.error
      })))), _react["default"].createElement(_Grid["default"], {
        item: true,
        xs: 5
      }, _react["default"].createElement(_Typography["default"], {
        className: classes.label
      }, "SnapPrice:"), snapPriceImage ? _react["default"].createElement("div", {
        className: classes.image,
        style: {
          backgroundImage: "url(".concat(snapPriceImage.url, ")")
        }
      }) : _react["default"].createElement(_reduxForm.Field, {
        name: "imageKey",
        component: _SearchableDropdownField["default"],
        options: imageNames,
        fullWidth: true,
        validate: [isRequired],
        className: classes.field,
        errorMessageClass: classes.error
      }))), _react["default"].createElement(_Grid["default"], {
        container: true,
        justify: "flex-end",
        spacing: 16
      }, _react["default"].createElement(_Grid["default"], {
        item: true
      }, _react["default"].createElement(_Button["default"], {
        variant: "contained",
        color: "primary",
        onClick: handleSubmit(function (values) {
          return _this2.props.onSubmit(_objectSpread({}, values, {
            preview: true,
            imageKey: values.imageKey || snapPriceImage.imageKey
          }));
        })
      }, "Save & Preview")), _react["default"].createElement(_Grid["default"], {
        item: true
      }, _react["default"].createElement(_Button["default"], {
        type: "submit",
        variant: "contained",
        color: "primary"
      }, "Save"))), submitting && _react["default"].createElement(_LoadingIndicator["default"], null));
    }
  }]);

  return FlyerFormFields;
}(_react.Component);

var _default = (0, _styles.withStyles)(_styles2["default"])(FlyerFormFields);

exports["default"] = _default;