'use strict';

import "core-js/modules/es.symbol";
import "core-js/modules/es.symbol.description";
import "core-js/modules/es.symbol.iterator";
import "core-js/modules/es.array.iterator";
import "core-js/modules/es.object.create";
import "core-js/modules/es.object.define-property";
import "core-js/modules/es.object.get-prototype-of";
import "core-js/modules/es.object.set-prototype-of";
import "core-js/modules/es.object.to-string";
import "core-js/modules/es.string.iterator";
import "core-js/modules/web.dom-collections.iterator";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';
import Container from '../Container';
import './styles.scss';

var StaticLayout =
/*#__PURE__*/
function (_Component) {
  _inherits(StaticLayout, _Component);

  function StaticLayout(props) {
    var _this;

    _classCallCheck(this, StaticLayout);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(StaticLayout).call(this, props));
    _this.originalBodyStyle = document.body.style;
    return _this;
  }

  _createClass(StaticLayout, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // needed for (smooth) scrolling
      document.body.style.overflow = 'visible';
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.body.style = this.originalBodyStyle;
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", {
        className: "static-layout"
      }, this.props.header, this.props.children, this.props.withoutFooterDivider ? null : React.createElement(Divider, {
        className: "static-layout__footer-divider"
      }), React.createElement(Container, null, this.props.footer));
    }
  }]);

  return StaticLayout;
}(Component);

StaticLayout.propTypes = {
  children: PropTypes.node,
  footer: PropTypes.element,
  header: PropTypes.element,
  withoutFooterDivider: PropTypes.bool
};
StaticLayout.defaultProps = {
  withoutFooterDivider: false
};
export default StaticLayout;