'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Button = require('@material-ui/core/Button');

var _Button2 = _interopRequireDefault(_Button);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Snackbar = require('@material-ui/core/Snackbar');

var _Snackbar2 = _interopRequireDefault(_Snackbar);

var _Typography = require('@material-ui/core/Typography');

var _Typography2 = _interopRequireDefault(_Typography);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

_moment2.default.relativeTimeThreshold('s', 59);
_moment2.default.relativeTimeThreshold('ss', 0);
_moment2.default.relativeTimeThreshold('m', 40);

var getTimeLeft = function getTimeLeft(exp) {
  return _moment2.default.duration((0, _moment2.default)(exp ? exp * 1000 : undefined).diff((0, _moment2.default)()));
};

var ImpersonationMonitor = function (_Component) {
  _inherits(ImpersonationMonitor, _Component);

  function ImpersonationMonitor(props) {
    _classCallCheck(this, ImpersonationMonitor);

    var _this = _possibleConstructorReturn(this, (ImpersonationMonitor.__proto__ || Object.getPrototypeOf(ImpersonationMonitor)).call(this, props));

    _this.handleTimer = function () {
      var timeLeft = getTimeLeft(_this.props.tokenExp);
      if (timeLeft.asSeconds() <= 0) {
        _this.handleClose();
      } else {
        _this.setState({ timeLeft: timeLeft.humanize() });
      }
    };

    _this.handleClose = function () {
      window.close();
    };

    _this.state = {
      timeLeft: getTimeLeft(props.tokenExp).humanize()
    };
    return _this;
  }

  _createClass(ImpersonationMonitor, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var impersonator = this.props.impersonator;

      if (impersonator) {
        this.timer = setInterval(this.handleTimer, 1000);
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (this.props.impersonator && !this.timer) {
        this.timer = setInterval(this.handleTimer, 1000);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.timer) {
        clearInterval(this.timer);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var impersonator = this.props.impersonator;
      var timeLeft = this.state.timeLeft;


      return impersonator ? _react2.default.createElement(_Snackbar2.default, {
        anchorOrigin: { vertical: 'bottom', horizontal: 'center' },
        open: true,
        message: _react2.default.createElement(
          'span',
          { className: 'impersonation-monitor-text' },
          'Admin Mode (',
          impersonator.email,
          ') Expires in ',
          timeLeft
        ),
        action: [_react2.default.createElement(
          _Button2.default,
          { key: 'close', color: 'inherit', onClick: this.handleClose },
          'Exit'
        )]
      }) : null;
    }
  }], [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(props, state) {
      return {
        timeLeft: getTimeLeft(props.tokenExp).humanize()
      };
    }
  }]);

  return ImpersonationMonitor;
}(_react.Component);

ImpersonationMonitor.propTypes = {
  tokenExp: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  impersonator: _propTypes2.default.object
};
exports.default = ImpersonationMonitor;