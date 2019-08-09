'use strict';

import _classCallCheck from "@babel/runtime-corejs3/helpers/classCallCheck";
import _createClass from "@babel/runtime-corejs3/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime-corejs3/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime-corejs3/helpers/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime-corejs3/helpers/assertThisInitialized";
import _inherits from "@babel/runtime-corejs3/helpers/inherits";
import _defineProperty from "@babel/runtime-corejs3/helpers/defineProperty";
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