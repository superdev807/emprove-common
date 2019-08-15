'use strict';

import _classCallCheck from "@babel/runtime-corejs3/helpers/classCallCheck";
import _createClass from "@babel/runtime-corejs3/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime-corejs3/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime-corejs3/helpers/getPrototypeOf";
import _inherits from "@babel/runtime-corejs3/helpers/inherits";
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