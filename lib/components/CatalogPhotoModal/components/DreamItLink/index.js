'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _IconDreamIt = require('../../../../icons/IconDreamIt');

var _IconDreamIt2 = _interopRequireDefault(_IconDreamIt);

require('./styles.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DreamItLink = function DreamItLink(props) {
  return _react2.default.createElement(
    'div',
    { className: 'dream-it-link' },
    _react2.default.createElement(_IconDreamIt2.default, { className: 'dream-it-link__icon' }),
    _react2.default.createElement(
      _reactRouterDom.Link,
      { className: 'dream-it-link__text', to: '/browse/' + props.browseFilter },
      'Go to Dream It'
    )
  );
};

DreamItLink.defaultProps = {
  browseFilter: 'any-home'
};

exports.default = DreamItLink;