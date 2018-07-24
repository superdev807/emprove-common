'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Divider = require('@material-ui/core/Divider');

var _Divider2 = _interopRequireDefault(_Divider);

var _Container = require('../Container');

var _Container2 = _interopRequireDefault(_Container);

require('./styles.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StaticLayout = function (_Component) {
  _inherits(StaticLayout, _Component);

  function StaticLayout(props) {
    _classCallCheck(this, StaticLayout);

    var _this = _possibleConstructorReturn(this, (StaticLayout.__proto__ || Object.getPrototypeOf(StaticLayout)).call(this, props));

    _this.originalBodyStyle = document.body.style;
    return _this;
  }

  _createClass(StaticLayout, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // needed for (smooth) scrolling
      document.body.style.overflow = 'visible';
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.body.style = this.originalBodyStyle;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'static-layout' },
        this.props.header,
        this.props.children,
        this.props.withoutFooterDivider ? null : _react2.default.createElement(_Divider2.default, { className: 'static-layout__footer-divider' }),
        _react2.default.createElement(
          _Container2.default,
          null,
          this.props.footer
        )
      );
    }
  }]);

  return StaticLayout;
}(_react.Component);

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