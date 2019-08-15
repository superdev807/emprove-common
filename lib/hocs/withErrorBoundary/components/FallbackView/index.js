'use strict';

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

import React, { Component } from 'react';
import './style.scss';

var FallbackView =
/*#__PURE__*/
function (_Component) {
  _inherits(FallbackView, _Component);

  function FallbackView() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, FallbackView);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(FallbackView)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "handleClickLiveChat", function () {
      window.Intercom && window.Intercom('show');
    });

    return _this;
  }

  _createClass(FallbackView, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          header = _this$props.header,
          isMobile = _this$props.isMobile;
      return React.createElement("div", {
        className: "fallback-view"
      }, header, React.createElement("div", {
        className: "fallback-view__container"
      }, React.createElement("div", {
        className: "fallback-view__heading"
      }, "OOPS!"), React.createElement("div", {
        className: "fallback-view__subheading"
      }, "Looks like something went wrong!"), React.createElement("div", {
        className: "fallback-view__image"
      }, React.createElement("img", {
        className: "fallback-view__character fallback-view__character-left",
        src: "/images/ic_page_not_found_filled.png",
        alt: "pageNotFound"
      }), React.createElement("img", {
        className: "fallback-view__character fallback-view__character-right",
        src: "/images/ic_page_not_found_consumer_filled_01.png",
        alt: "pageNotFound"
      })), React.createElement("div", {
        className: "fallback-view__error-code"
      }, "Error code: 500"), React.createElement("div", {
        className: "fallback-view__message"
      }, React.createElement("p", {
        className: "fallback-view__message-text"
      }, "We track these errors automatically so we can address them quickly!"), React.createElement("p", {
        className: "fallback-view__message-text"
      }, "If the problem persists, please feel free to contact us. In the meantime, try refreshing. For urgent matters, please call us.")), React.createElement("div", {
        className: "fallback-view__links"
      }, !isMobile && React.createElement("div", {
        className: "fallback-view__link",
        onClick: this.handleClickLiveChat
      }, "Live Chat"), !isMobile && React.createElement("div", {
        className: "fallback-view__vertical-bar"
      }), React.createElement("a", {
        className: "fallback-view__link",
        href: "mailto:contact@emproveit.com"
      }, "Contact Us"), React.createElement("div", {
        className: "fallback-view__vertical-bar"
      }), React.createElement("a", {
        className: "fallback-view__link",
        href: "/about-emprove"
      }, "About Us"))));
    }
  }]);

  return FallbackView;
}(Component);

export default FallbackView;