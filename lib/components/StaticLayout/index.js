'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Divider = require('@material-ui/core/Divider');

var _Divider2 = _interopRequireDefault(_Divider);

var _Container = require('~/components/Container');

var _Container2 = _interopRequireDefault(_Container);

require('./styles.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StaticLayout = function StaticLayout(props) {
  return _react2.default.createElement(
    'div',
    { className: 'static-layout' },
    props.header,
    props.children,
    props.withoutFooterDivider ? null : _react2.default.createElement(_Divider2.default, { className: 'static-layout__footer-divider' }),
    _react2.default.createElement(
      _Container2.default,
      null,
      props.footer
    )
  );
};

StaticLayout.propTypes = {
  children: _propTypes2.default.node,
  footer: _propTypes2.default.element,
  header: _propTypes2.default.element,
  withoutFooterDivider: _propTypes2.default.bool
};

StaticLayout.defaultProps = {
  withoutFooterDivider: false
};

exports.default = StaticLayout;