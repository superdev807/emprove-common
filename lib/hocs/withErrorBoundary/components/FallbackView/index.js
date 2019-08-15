'use strict';

import _concatInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/concat";
import _classCallCheck from "@babel/runtime-corejs3/helpers/classCallCheck";
import _createClass from "@babel/runtime-corejs3/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime-corejs3/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime-corejs3/helpers/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime-corejs3/helpers/assertThisInitialized";
import _inherits from "@babel/runtime-corejs3/helpers/inherits";
import _defineProperty from "@babel/runtime-corejs3/helpers/defineProperty";
import React, { Component } from 'react';
import './style.scss';

var FallbackView =
/*#__PURE__*/
function (_Component) {
  _inherits(FallbackView, _Component);

  function FallbackView() {
    var _getPrototypeOf2, _context;

    var _this;

    _classCallCheck(this, FallbackView);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(FallbackView)).call.apply(_getPrototypeOf2, _concatInstanceProperty(_context = [this]).call(_context, args)));

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