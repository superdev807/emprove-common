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
import PropTypes from 'prop-types';
import cx from 'classnames';
import IconButton from '@material-ui/core/IconButton';
import IconHelpOutline from '@material-ui/icons/HelpOutline';
import IconInfo from '../../icons/IconInfo';
import { connect } from 'react-redux';
import { show as showModal } from 'redux-modal';
import './styles.scss';

var InformationButton =
/*#__PURE__*/
function (_Component) {
  _inherits(InformationButton, _Component);

  function InformationButton() {
    var _getPrototypeOf2, _context;

    var _this;

    _classCallCheck(this, InformationButton);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(InformationButton)).call.apply(_getPrototypeOf2, _concatInstanceProperty(_context = [this]).call(_context, args)));

    _defineProperty(_assertThisInitialized(_this), "handleClick", function () {
      _this.props.showModal('informationModal', _this.props.information);
    });

    return _this;
  }

  _createClass(InformationButton, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          icon = _this$props.icon,
          iconClass = _this$props.iconClass,
          size = _this$props.size,
          tooltip = _this$props.tooltip,
          blink = _this$props.blink;
      var Icon = icon === 'help' ? IconHelpOutline : IconInfo;
      return React.createElement(IconButton, {
        className: cx('information-button', "information-button--size-".concat(size), className),
        onClick: this.handleClick
      }, React.createElement(Icon, {
        className: cx("information-button--size-".concat(size), iconClass, {
          'information-button--blink': blink
        })
      }), tooltip);
    }
  }]);

  return InformationButton;
}(Component);

InformationButton.propTypes = {
  information: PropTypes.object.isRequired,
  size: PropTypes.number,
  className: PropTypes.string,
  icon: PropTypes.oneOf(['help', 'info']),
  iconClass: PropTypes.string,
  tooltip: PropTypes.object,
  blink: PropTypes.bool
};
InformationButton.defaultProps = {
  icon: 'info'
};
var actions = {
  showModal: showModal
};
export default connect(null, actions)(InformationButton);
export { InformationButton }; // for testing