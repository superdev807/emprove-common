'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Button = require('@material-ui/core/Button');

var _Button2 = _interopRequireDefault(_Button);

require('./style.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BidItPartial = function (_Component) {
  _inherits(BidItPartial, _Component);

  function BidItPartial() {
    _classCallCheck(this, BidItPartial);

    return _possibleConstructorReturn(this, (BidItPartial.__proto__ || Object.getPrototypeOf(BidItPartial)).apply(this, arguments));
  }

  _createClass(BidItPartial, [{
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
          { id: 'bidItImages', className: 'bidItImages' },
          _react2.default.createElement(
            'div',
            { id: 'bidItCircle', className: 'bidItCircle' },
            _react2.default.createElement(
              'div',
              { id: 'bidItStep1', className: (0, _classnames2.default)('bidItStep1', { onStep: onStep }) },
              _react2.default.createElement(
                'div',
                {
                  id: 'bidItStep1Inner',
                  className: 'bidItStep1Inner',
                  style: { backgroundImage: 'url(' + domain + 'images/bidItStep1.png)' },
                  title: 'Turn your project dream into a comprehensive request-for-proposal package for contractors to bid!' },
                _react2.default.createElement(
                  'div',
                  { className: 'bidItStepNumber' },
                  '1'
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { id: 'bidItStep2', className: (0, _classnames2.default)('bidItStep2', { onStep: onStep }) },
              _react2.default.createElement(
                'div',
                {
                  id: 'bidItStep2Inner',
                  className: 'bidItStep2Inner',
                  style: { backgroundImage: 'url(' + domain + 'images/bidItStep2.png)' },
                  title: 'Turn your project dream into a comprehensive request-for-proposal package for contractors to bid!' },
                _react2.default.createElement(
                  'div',
                  { className: 'bidItStepNumber' },
                  '2'
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { id: 'bidItStep3', className: (0, _classnames2.default)('bidItStep3', { onStep: onStep }) },
              _react2.default.createElement(
                'div',
                {
                  id: 'bidItStep3Inner',
                  className: 'bidItStep3Inner',
                  style: { backgroundImage: 'url(' + domain + 'images/bidItStep3.png)' },
                  title: 'Turn your project dream into a comprehensive request-for-proposal package for contractors to bid!' },
                _react2.default.createElement(
                  'div',
                  { className: 'bidItStepNumber' },
                  '3'
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { id: 'bidIt', className: (0, _classnames2.default)('partial__description', 'bidIt', { onStep: onStep }) },
          _react2.default.createElement(
            'div',
            { id: 'bidItTitle', className: 'bidItTitle' },
            _react2.default.createElement(
              'b',
              null,
              'BID'
            ),
            ' IT',
            _react2.default.createElement(
              'span',
              { style: { color: '#ff9e3c', fontWeight: 'bold' } },
              '!'
            )
          ),
          _react2.default.createElement(
            'div',
            { id: 'bidItBody', className: 'bidItBody' },
            'Sit back, while we create a detailed ',
            _react2.default.createElement(
              'b',
              null,
              'Request for Proposal'
            ),
            ' package to multiple qualified contractors. They submit their best price and you pick the one who presents the ',
            _react2.default.createElement(
              'b',
              null,
              'best value!'
            )
          ),
          _react2.default.createElement(
            'div',
            { id: 'bidItButton', className: 'partial__button' },
            actionText && _react2.default.createElement(
              _Button2.default,
              {
                className: 'partial__button-start-now',
                variant: 'raised',
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

  return BidItPartial;
}(_react.Component);

BidItPartial.propTypes = {
  domain: _propTypes2.default.string,
  onStep: _propTypes2.default.bool,
  actionText: _propTypes2.default.string,
  action: _propTypes2.default.func
};
exports.default = BidItPartial;