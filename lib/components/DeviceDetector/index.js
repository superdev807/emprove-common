'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = require('react-redux');

var _reselect = require('reselect');

var _helpers = require('./helpers');

var _device = require('../../redux/modules/device');

var _selectors = require('../../redux/selectors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DeviceDetector = function (_Component) {
  _inherits(DeviceDetector, _Component);

  function DeviceDetector() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, DeviceDetector);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DeviceDetector.__proto__ || Object.getPrototypeOf(DeviceDetector)).call.apply(_ref, [this].concat(args))), _this), _this.setDeviceType = function () {
      var _getDeviceType = (0, _helpers.getDeviceType)(),
          isMobile = _getDeviceType.isMobile,
          isTablet = _getDeviceType.isTablet;

      _this.props.detectDevice({ isMobile: isMobile, isTablet: isTablet });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(DeviceDetector, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setDeviceType();
      window.addEventListener('resize', this.setDeviceType);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.setDeviceType);
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children;
    }
  }]);

  return DeviceDetector;
}(_react.Component);

var selector = (0, _reselect.createStructuredSelector)({
  isMobile: _selectors.isMobileSelector,
  isTablet: _selectors.isTabletSelector
});

var action = {
  detectDevice: _device.detectDevice
};

DeviceDetector.propTypes = {
  children: _propTypes2.default.element,
  detectDevice: _propTypes2.default.function.isRequired
};

exports.default = (0, _reactRedux.connect)(selector, action)(DeviceDetector);