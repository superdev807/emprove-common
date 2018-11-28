'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Button = require('@material-ui/core/Button');

var _Button2 = _interopRequireDefault(_Button);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('./style.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DreamItPartial = function (_Component) {
  _inherits(DreamItPartial, _Component);

  function DreamItPartial() {
    _classCallCheck(this, DreamItPartial);

    return _possibleConstructorReturn(this, (DreamItPartial.__proto__ || Object.getPrototypeOf(DreamItPartial)).apply(this, arguments));
  }

  _createClass(DreamItPartial, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          domain = _props.domain,
          onStep = _props.onStep,
          actionText = _props.actionText,
          action = _props.action;


      return _react2.default.createElement(
        'div',
        { className: 'partial__container' },
        _react2.default.createElement(
          'div',
          {
            id: 'monitor',
            className: 'monitor',
            style: { backgroundImage: 'url(' + domain + 'images/monitor.png)' },
            title: 'Dream up your home improvements with Emprove\'s interactive scope definition cost estimation tools!' },
          _react2.default.createElement('iframe', {
            id: 'monitorContent',
            className: 'monitorContent',
            src: 'https://player.vimeo.com/video/252014513?quality=720p&background=1',
            width: '640',
            height: '360',
            frameBorder: '0'
          })
        ),
        _react2.default.createElement(
          'div',
          { id: 'dreamIt', className: (0, _classnames2.default)('dreamIt', 'partial__description', { onStep: onStep }) },
          _react2.default.createElement(
            'div',
            { id: 'dreamItTitle', className: 'dreamItTitle' },
            'STYLE IT'
          ),
          _react2.default.createElement(
            'div',
            { id: 'dreamItBody', className: 'dreamItBody' },
            'Our photos aren\'t just pretty... they\'re PrettySmart\u2122! As you select photos you like, they send costing information to our',
            ' ',
            _react2.default.createElement('img', { src: '/images/ic_e_logo_grey.svg' }),
            'stimator, the most advanced budgeting tool in the residential design and construction industry.'
          ),
          _react2.default.createElement(
            'div',
            { id: 'dreamItButton', className: 'partial__button' },
            actionText && _react2.default.createElement(
              _Button2.default,
              {
                className: 'partial__button-start-now',
                variant: 'contained',
                color: 'primary',
                onClick: action,
                style: { display: 'block', marginTop: '5vh' } },
              actionText
            )
          )
        )
      );
    }
  }]);

  return DreamItPartial;
}(_react.Component);

DreamItPartial.propTypes = {
  domain: _propTypes2.default.string,
  onStep: _propTypes2.default.bool,
  actionText: _propTypes2.default.string,
  action: _propTypes2.default.func
};
exports.default = DreamItPartial;