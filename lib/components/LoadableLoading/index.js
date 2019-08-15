'use strict';

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import Button from '@material-ui/core/Button';
import LoadingIndicator from '../LoadingIndicator';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '../SnackbarContent';

var LoadableLoading =
/*#__PURE__*/
function (_React$Component) {
  _inherits(LoadableLoading, _React$Component);

  function LoadableLoading(props) {
    var _this;

    _classCallCheck(this, LoadableLoading);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LoadableLoading).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleClose", function () {
      _this.setState({
        errorOpen: false
      });
    });

    _this.state = {
      errorOpen: true
    };
    return _this;
  }

  _createClass(LoadableLoading, [{
    key: "renderError",
    value: function renderError() {
      return React.createElement(Snackbar, {
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'center'
        },
        open: this.state.errorOpen,
        onClose: this.handleClose
      }, React.createElement(SnackbarContent, {
        variant: "warning",
        message: "We had trouble with your request.",
        action: [React.createElement(Button, {
          key: "try-again",
          style: {
            marginLeft: '1rem'
          },
          onClick: this.props.retry,
          variant: "contained"
        }, "TRY AGAIN")]
      }));
    }
  }, {
    key: "render",
    value: function render() {
      if (this.props.error) {
        return this.renderError();
      }

      return React.createElement(LoadingIndicator, {
        fixed: this.props.indicatorFixed
      });
    }
  }]);

  return LoadableLoading;
}(React.Component);

_defineProperty(LoadableLoading, "defaultProps", {
  indicatorFixed: true
});

export { LoadableLoading as default };