'use strict';

import "core-js/modules/es.symbol";
import "core-js/modules/es.symbol.description";
import "core-js/modules/es.symbol.iterator";
import "core-js/modules/es.array.filter";
import "core-js/modules/es.array.for-each";
import "core-js/modules/es.array.iterator";
import "core-js/modules/es.object.assign";
import "core-js/modules/es.object.create";
import "core-js/modules/es.object.define-properties";
import "core-js/modules/es.object.define-property";
import "core-js/modules/es.object.get-own-property-descriptor";
import "core-js/modules/es.object.get-own-property-descriptors";
import "core-js/modules/es.object.get-prototype-of";
import "core-js/modules/es.object.keys";
import "core-js/modules/es.object.set-prototype-of";
import "core-js/modules/es.object.to-string";
import "core-js/modules/es.string.iterator";
import "core-js/modules/web.dom-collections.for-each";
import "core-js/modules/web.dom-collections.iterator";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

import React, { Component } from 'react';
import loadScript from '../utils/loadScript';
import { makeCancelable } from '../utils/promiseFunctions';
var cloudinaryStyle = "#cloudinary-widget {\n        width: 100% !important;\n        box-sizing: border-box;\n        transform: translateX(-50%);\n        left: 50% !important;\n        max-width: 675px;\n    }\n    #cloudinary-widget .panel {\n        overflow: hidden;\n    }\n    #cloudinary-navbar .source.active {\n        border-bottom: 3px solid #ff9e3c;\n    }\n    #cloudinary-widget .button, #cloudinary-widget .button.small_button {\n        color: white;\n        background: #ff9e3c;\n        cursor: pointer;\n    }\n    #cloudinary-widget .panel.local .drag_area .drag_content .label {\n        color: #ff9e3c;\n    }\n    #cloudinary-widget .panel.progress.cropping .thumbnails {\n        padding: 0;\n    }\n    #cloudinary-widget .panel.progress .thumbnails .thumbnail .image_holder {\n        margin: 0 auto;\n    }\n    .widget .panel.local .drag_area .drag_content .or {\n        color: #ff9e3ca3;\n    }\n    #cloudinary-overlay.modal {\n        background-color: rgba(0,0,0,0.7)\n    }\n    #cloudinary-widget .upload_button_holder:hover .button {\n        background: #ff9e3ca3\n    }\n    .widget .panel.url input[type=text]:focus {\n        outline: #ff9e3c auto 5px;\n    }\n    #cloudinary-widget .button:hover {\n        background: #ff9e3ca3;\n    }\n    .widget .panel.local .upload_button_holder input[type=file] {\n        cursor: pointer;\n    }";
export default (function (WrappedComponent) {
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
          this.cancelableLoadScript = makeCancelable(loadScript('//widget.cloudinary.com/global/all.js'));
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
        return React.createElement(WrappedComponent, _extends({}, this.props, {
          clOpenUploadWidget: clOpenUploadWidget
        }));
      }
    }]);

    return CloudinaryWrapper;
  }(Component);

  return CloudinaryWrapper;
});