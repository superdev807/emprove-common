'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./style.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FallbackView = function (_Component) {
  _inherits(FallbackView, _Component);

  function FallbackView() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, FallbackView);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = FallbackView.__proto__ || Object.getPrototypeOf(FallbackView)).call.apply(_ref, [this].concat(args))), _this), _this.handleClickLiveChat = function () {
      window.Intercom && window.Intercom('show');
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(FallbackView, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          header = _props.header,
          isMobile = _props.isMobile;


      return _react2.default.createElement(
        'div',
        { className: 'fallback-view' },
        header,
        _react2.default.createElement(
          'div',
          { className: 'fallback-view__container' },
          _react2.default.createElement(
            'div',
            { className: 'fallback-view__heading' },
            'OOPS!'
          ),
          _react2.default.createElement(
            'div',
            { className: 'fallback-view__subheading' },
            'Looks like something went wrong!'
          ),
          _react2.default.createElement(
            'div',
            { className: 'fallback-view__image' },
            _react2.default.createElement('img', {
              className: 'fallback-view__character fallback-view__character-left',
              src: '/images/ic_page_not_found_filled.png',
              alt: 'pageNotFound'
            }),
            _react2.default.createElement('img', {
              className: 'fallback-view__character fallback-view__character-right',
              src: '/images/ic_page_not_found_consumer_filled_01.png',
              alt: 'pageNotFound'
            })
          ),
          _react2.default.createElement(
            'div',
            { className: 'fallback-view__error-code' },
            'Error code: 500'
          ),
          _react2.default.createElement(
            'div',
            { className: 'fallback-view__message' },
            _react2.default.createElement(
              'p',
              { className: 'fallback-view__message-text' },
              'We track these errors automatically so we can address them quickly!'
            ),
            _react2.default.createElement(
              'p',
              { className: 'fallback-view__message-text' },
              'If the problem persists, please feel free to contact us. In the meantime, try refreshing. For urgent matters, please call us.'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'fallback-view__links' },
            !isMobile && _react2.default.createElement(
              'div',
              { className: 'fallback-view__link', onClick: this.handleClickLiveChat },
              'Live Chat'
            ),
            !isMobile && _react2.default.createElement('div', { className: 'fallback-view__vertical-bar' }),
            _react2.default.createElement(
              'a',
              { className: 'fallback-view__link', href: 'mailto:support@emproveit.com' },
              'Contact Us'
            ),
            _react2.default.createElement('div', { className: 'fallback-view__vertical-bar' }),
            _react2.default.createElement(
              'a',
              { className: 'fallback-view__link', href: '/about-emprove' },
              'About Us'
            )
          )
        )
      );
    }
  }]);

  return FallbackView;
}(_react.Component);

exports.default = FallbackView;