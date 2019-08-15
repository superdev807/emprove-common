'use strict';

import _Object$defineProperty from "@babel/runtime-corejs3/core-js-stable/object/define-property";
import _Object$defineProperties from "@babel/runtime-corejs3/core-js-stable/object/define-properties";
import _Object$getOwnPropertyDescriptors from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors";
import _forEachInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/for-each";
import _Object$getOwnPropertyDescriptor from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor";
import _filterInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/filter";
import _Object$getOwnPropertySymbols from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols";
import _Object$keys from "@babel/runtime-corejs3/core-js-stable/object/keys";
import _extends from "@babel/runtime-corejs3/helpers/extends";
import _defineProperty from "@babel/runtime-corejs3/helpers/defineProperty";
import _classCallCheck from "@babel/runtime-corejs3/helpers/classCallCheck";
import _createClass from "@babel/runtime-corejs3/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime-corejs3/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime-corejs3/helpers/getPrototypeOf";
import _inherits from "@babel/runtime-corejs3/helpers/inherits";

function ownKeys(object, enumerableOnly) { var keys = _Object$keys(object); if (_Object$getOwnPropertySymbols) { var symbols = _Object$getOwnPropertySymbols(object); if (enumerableOnly) symbols = _filterInstanceProperty(symbols).call(symbols, function (sym) { return _Object$getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context; _forEachInstanceProperty(_context = ownKeys(source, true)).call(_context, function (key) { _defineProperty(target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors) { _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)); } else { var _context2; _forEachInstanceProperty(_context2 = ownKeys(source)).call(_context2, function (key) { _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key)); }); } } return target; }

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