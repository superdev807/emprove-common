'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactRouterDom = require('react-router-dom');

var _IconDreamIt = require('../../../../icons/IconDreamIt');

var _IconDreamIt2 = _interopRequireDefault(_IconDreamIt);

require('./styles.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DreamItLink = function DreamItLink(props) {
  var path = '/browse/' + props.browseFilter;
  var TheLink = void 0;
  var linkProps = {};
  if (props.fromContractor) {
    TheLink = 'a';
    linkProps.href = process.env.CONSUMER_DOMAIN + path;
    linkProps.target = '_blank';
    linkProps.rel = 'noopener noreferrer';
  } else {
    TheLink = _reactRouterDom.Link;
    linkProps.to = path;
  }

  return _react2.default.createElement(
    'div',
    { className: (0, _classnames2.default)('dream-it-link', { 'dream-it-link--disabled': props.disabled }) },
    _react2.default.createElement(_IconDreamIt2.default, { className: 'dream-it-link__icon' }),
    _react2.default.createElement(
      TheLink,
      _extends({ className: 'dream-it-link__text' }, linkProps),
      'Go to Dream It'
    )
  );
};

DreamItLink.propTypes = {
  browseFilter: _propTypes2.default.string,
  disabled: _propTypes2.default.bool,
  fromContractor: _propTypes2.default.bool
};

DreamItLink.defaultProps = {
  browseFilter: 'any-home',
  disabled: false,
  fromContractor: false
};

exports.default = DreamItLink;