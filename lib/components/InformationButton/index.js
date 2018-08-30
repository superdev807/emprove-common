'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InformationButton = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _IconButton = require('@material-ui/core/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _HelpOutline = require('@material-ui/icons/HelpOutline');

var _HelpOutline2 = _interopRequireDefault(_HelpOutline);

var _IconInfo = require('../../icons/IconInfo');

var _IconInfo2 = _interopRequireDefault(_IconInfo);

var _reactRedux = require('react-redux');

var _reduxModal = require('redux-modal');

require('./styles.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InformationButton = function (_Component) {
  _inherits(InformationButton, _Component);

  function InformationButton() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, InformationButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = InformationButton.__proto__ || Object.getPrototypeOf(InformationButton)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function () {
      _this.props.showModal('informationModal', _this.props.information);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(InformationButton, [{
    key: 'render',
    value: function render() {
      var Icon = this.props.icon === 'help' ? _HelpOutline2.default : _IconInfo2.default;

      return _react2.default.createElement(
        _IconButton2.default,
        {
          className: (0, _classnames2.default)('information-button', { 'information-button--size-16': this.props.size === 16 }, this.props.className),
          onClick: this.handleClick },
        _react2.default.createElement(Icon, { className: (0, _classnames2.default)({ 'information-button--size-16': this.props.size === 16 }, this.props.iconClass) })
      );
    }
  }]);

  return InformationButton;
}(_react.Component);

InformationButton.propTypes = {
  information: _propTypes2.default.object.isRequired,
  size: _propTypes2.default.oneOf([16]),
  className: _propTypes2.default.string,
  icon: _propTypes2.default.oneOf(['help', 'info']),
  iconClass: _propTypes2.default.string
};

InformationButton.defaultProps = {
  icon: 'info'
};

var actions = {
  showModal: _reduxModal.show
};

exports.default = (0, _reactRedux.connect)(null, actions)(InformationButton);
exports.InformationButton = InformationButton; // for testing