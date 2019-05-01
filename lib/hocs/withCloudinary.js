'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _loadScript = _interopRequireDefault(require("../utils/loadScript"));

var _promiseFunctions = require("../utils/promiseFunctions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

var cloudinaryStyle = "#cloudinary-widget {\n        width: 100% !important;\n        box-sizing: border-box;\n        transform: translateX(-50%);\n        left: 50% !important;\n        max-width: 675px;\n    }\n    #cloudinary-widget .panel {\n        overflow: hidden;\n    }\n    #cloudinary-navbar .source.active {\n        border-bottom: 3px solid #ff9e3c;\n    }\n    #cloudinary-widget .button, #cloudinary-widget .button.small_button {\n        color: white;\n        background: #ff9e3c;\n        cursor: pointer;\n    }\n    #cloudinary-widget .panel.local .drag_area .drag_content .label {\n        color: #ff9e3c;\n    }\n    #cloudinary-widget .panel.progress.cropping .thumbnails {\n        padding: 0;\n    }\n    #cloudinary-widget .panel.progress .thumbnails .thumbnail .image_holder {\n        margin: 0 auto;\n    }\n    .widget .panel.local .drag_area .drag_content .or {\n        color: #ff9e3ca3;\n    }\n    #cloudinary-overlay.modal {\n        background-color: rgba(0,0,0,0.7)\n    }\n    #cloudinary-widget .upload_button_holder:hover .button {\n        background: #ff9e3ca3\n    }\n    .widget .panel.url input[type=text]:focus {\n        outline: #ff9e3c auto 5px;\n    }\n    #cloudinary-widget .button:hover {\n        background: #ff9e3ca3;\n    }\n    .widget .panel.local .upload_button_holder input[type=file] {\n        cursor: pointer;\n    }";

var _default = function _default(WrappedComponent) {
  var CloudinaryWrapper =
  /*#__PURE__*/
  function (_Component) {
    _inherits(CloudinaryWrapper, _Component);

    function CloudinaryWrapper(props) {
      var _this;

      _classCallCheck(this, CloudinaryWrapper);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(CloudinaryWrapper).call(this, props));
      _this.state = {
        clOpenUploadWidget: window.cloudinary ? _this.createClOpenUploadWidget(window.cloudinary) : null
      };
      _this.cancelableLoadScript = null;
      return _this;
    }

    _createClass(CloudinaryWrapper, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this2 = this;

        if (!window.cloudinary) {
          this.cancelableLoadScript = (0, _promiseFunctions.makeCancelable)((0, _loadScript.default)('//widget.cloudinary.com/global/all.js'));
          this.cancelableLoadScript.promise.then(function () {
            _this2.setState({
              clOpenUploadWidget: _this2.createClOpenUploadWidget(window.cloudinary)
            });
          });
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.cancelableLoadScript && this.cancelableLoadScript.cancel();
      }
    }, {
      key: "createClOpenUploadWidget",
      value: function createClOpenUploadWidget(cloudinary) {
        return function (options, callback) {
          cloudinary.openUploadWidget(_objectSpread({
            cloud_name: process.env.CLOUDINARY_CLOUDNAME,
            upload_preset: process.env.CLOUDINARY_PROFILE_PICTURE_UPLOAD_PRESET,
            cropping: 'server',
            stylesheet: cloudinaryStyle
          }, options), callback);
        };
      }
    }, {
      key: "render",
      value: function render() {
        var clOpenUploadWidget = this.state.clOpenUploadWidget;
        return _react.default.createElement(WrappedComponent, _extends({}, this.props, {
          clOpenUploadWidget: clOpenUploadWidget
        }));
      }
    }]);

    return CloudinaryWrapper;
  }(_react.Component);

  return CloudinaryWrapper;
};

exports.default = _default;