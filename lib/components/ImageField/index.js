'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _FormControl = _interopRequireDefault(require("@material-ui/core/FormControl"));

var _FormHelperText = _interopRequireDefault(require("@material-ui/core/FormHelperText"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _classnames = _interopRequireDefault(require("classnames"));

var _redux = require("redux");

var _styles = require("@material-ui/core/styles");

var _IconAddPhotos = _interopRequireDefault(require("../../icons/IconAddPhotos"));

var _withCloudinary = _interopRequireDefault(require("../../hocs/withCloudinary"));

var _styles2 = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ImageField =
/*#__PURE__*/
function (_Component) {
  _inherits(ImageField, _Component);

  function ImageField() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ImageField);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ImageField)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "handleUploadPhoto", function () {
      var _this$props = _this.props,
          aspectRatio = _this$props.aspectRatio,
          clOpenUploadWidget = _this$props.clOpenUploadWidget,
          input = _this$props.input,
          uploadFolder = _this$props.uploadFolder,
          uploadPreset = _this$props.uploadPreset;
      var sizeMb = parseInt(process.env.CLOUDINARY_MAX_FILE_SIZE / (1024 * 1024), 10);
      clOpenUploadWidget({
        folder: uploadFolder,
        //setting the upload_preset here to override the preset in withCloudinary hoc
        upload_preset: uploadPreset,
        max_file_size: process.env.CLOUDINARY_MAX_FILE_SIZE,
        client_allowed_formats: process.env.CLOUDINARY_IMAGE_ALLOWED_FORMATS.split(','),
        text: {
          'sources.local.drop_file': "Drop file here (".concat(sizeMb, "MB max.)")
        },
        cropping_default_selection_ratio: aspectRatio,
        cropping_aspect_ratio: aspectRatio,
        theme: 'white'
      }, function (error, result) {
        if (!error) {
          input.onChange(result[0]);
        }
      });
    });

    return _this;
  }

  _createClass(ImageField, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          className = _this$props2.className,
          classes = _this$props2.classes,
          errorMessageClass = _this$props2.errorMessageClass,
          input = _this$props2.input,
          defaultImageUrl = _this$props2.defaultImageUrl,
          _this$props2$meta = _this$props2.meta,
          touched = _this$props2$meta.touched,
          error = _this$props2$meta.error;
      var imageUrl = input.value ? input.value.secure_url : defaultImageUrl;
      return _react["default"].createElement(_FormControl["default"], {
        className: (0, _classnames["default"])(className, classes.root),
        error: touched && !!error,
        onClick: this.handleUploadPhoto
      }, imageUrl ? _react["default"].createElement("div", {
        style: {
          backgroundImage: "url(".concat(imageUrl, ")")
        },
        className: classes.image
      }) : _react["default"].createElement(_react.Fragment, null, _react["default"].createElement(_IconAddPhotos["default"], {
        className: classes.addImage
      }), _react["default"].createElement(_Typography["default"], {
        className: classes.addText
      }, "click to add")), touched && error && _react["default"].createElement(_FormHelperText["default"], {
        className: (0, _classnames["default"])(errorMessageClass, classes.error)
      }, error));
    }
  }]);

  return ImageField;
}(_react.Component);

_defineProperty(ImageField, "propTypes", {
  aspectRatio: _propTypes["default"].number,
  className: _propTypes["default"].string,
  classes: _propTypes["default"].object.isRequired,
  clOpenUploadWidget: _propTypes["default"].func,
  defaultImageUrl: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  errorMessageClass: _propTypes["default"].string,
  input: _propTypes["default"].object.isRequired,
  meta: _propTypes["default"].object.isRequired,
  uploadFolder: _propTypes["default"].string,
  uploadPreset: _propTypes["default"].string
});

_defineProperty(ImageField, "defaultProps", {
  aspectRatio: 1,
  uploadFolder: process.env.CLOUDINARY_PROFILE_PICTURE_FOLDER,
  uploadPreset: process.env.CLOUDINARY_PROFILE_PICTURE_UPLOAD_PRESET
});

var _default = (0, _redux.compose)((0, _styles.withStyles)(_styles2["default"]), _withCloudinary["default"])(ImageField);

exports["default"] = _default;