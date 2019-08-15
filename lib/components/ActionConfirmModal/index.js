'use strict';

import "core-js/modules/es.symbol";
import "core-js/modules/es.symbol.description";
import _mapInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/map";
import _typeof from "@babel/runtime-corejs3/helpers/typeof";
import _concatInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/concat";
import _classCallCheck from "@babel/runtime-corejs3/helpers/classCallCheck";
import _createClass from "@babel/runtime-corejs3/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime-corejs3/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime-corejs3/helpers/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime-corejs3/helpers/assertThisInitialized";
import _inherits from "@babel/runtime-corejs3/helpers/inherits";
import _defineProperty from "@babel/runtime-corejs3/helpers/defineProperty";
import React, { Component } from 'react';
import { compose } from 'redux';
import { connectModal } from 'redux-modal';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Button from '@material-ui/core/Button';
import CloseButton from '../CloseButton';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import styles from './styles';

var ActionConfirmModal =
/*#__PURE__*/
function (_Component) {
  _inherits(ActionConfirmModal, _Component);

  function ActionConfirmModal() {
    var _getPrototypeOf2, _context;

    var _this;

    _classCallCheck(this, ActionConfirmModal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ActionConfirmModal)).call.apply(_getPrototypeOf2, _concatInstanceProperty(_context = [this]).call(_context, args)));

    _defineProperty(_assertThisInitialized(_this), "handleCancel", function () {
      _this.props.handleHide();

      _this.props.onCancel && _this.props.onCancel();
    });

    _defineProperty(_assertThisInitialized(_this), "handleClose", function () {
      _this.props.handleHide();

      _this.props.onClose && _this.props.onClose();
    });

    _defineProperty(_assertThisInitialized(_this), "handleConfirm", function () {
      _this.props.onConfirm && _this.props.onConfirm();

      _this.handleClose();
    });

    return _this;
  }

  _createClass(ActionConfirmModal, [{
    key: "renderDescription",
    value: function renderDescription() {
      var _this2 = this;

      var _this$props = this.props,
          classNames = _this$props.classNames,
          description = _this$props.description;

      if (description === undefined) {
        return null;
      }

      var entries;

      if (typeof description === 'string' || _typeof(description) === 'object' && description.length === undefined) {
        entries = [description];
      } else {
        entries = description;
      }

      return _mapInstanceProperty(entries).call(entries, function (text) {
        return React.createElement(Typography, {
          key: text,
          className: cx(_this2.props.classes.description, classNames.description),
          variant: "body1",
          gutterBottom: true
        }, text);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          classes = _this$props2.classes,
          classNames = _this$props2.classNames,
          modalTitle = _this$props2.modalTitle,
          confirmButtonText = _this$props2.confirmButtonText,
          cancelButtonText = _this$props2.cancelButtonText,
          objectName = _this$props2.objectName,
          show = _this$props2.show,
          showCloseButton = _this$props2.showCloseButton,
          fullScreen = _this$props2.fullScreen,
          onlyConfirmButton = _this$props2.onlyConfirmButton,
          withExtraPadding = _this$props2.withExtraPadding;
      return React.createElement(Dialog, {
        fullScreen: fullScreen,
        open: show,
        onClose: this.handleCancel,
        classes: {
          paper: classNames.paper
        },
        disableEnforceFocus: true
      }, showCloseButton && React.createElement(CloseButton, {
        className: classes.closeButton,
        onClick: this.props.onClose ? this.handleClose : this.handleCancel
      }), React.createElement(DialogTitle, {
        className: cx(_defineProperty({}, classes.dialogTitleExtraPadding, withExtraPadding), classNames.dialogTitle),
        disableTypography: true
      }, React.createElement(Typography, {
        variant: "subtitle2",
        color: "primary"
      }, modalTitle)), React.createElement(DialogContent, {
        className: cx(_defineProperty({}, classes.dialogContentExtraPadding, withExtraPadding), classNames.dialogContent)
      }, this.renderDescription(), objectName && React.createElement(Typography, {
        variant: "body1"
      }, React.createElement("strong", null, objectName)), React.createElement("div", {
        className: classes.dialogActions
      }, !onlyConfirmButton && React.createElement(Button, {
        className: cx(classes.button, classes.cancelButton),
        onClick: this.handleCancel,
        variant: "outlined",
        color: "primary"
      }, cancelButtonText || 'CANCEL'), React.createElement(Button, {
        className: classes.button,
        onClick: this.handleConfirm,
        variant: "contained",
        color: "primary"
      }, confirmButtonText || 'DELETE'))));
    }
  }]);

  return ActionConfirmModal;
}(Component);

_defineProperty(ActionConfirmModal, "propTypes", {
  classNames: PropTypes.object,
  // can't name classes because of withStyles
  modalTitle: PropTypes.string,
  description: PropTypes.oneOfType([PropTypes.object, PropTypes.arrayOf(PropTypes.object), PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  confirmButtonText: PropTypes.string,
  cancelButtonText: PropTypes.string,
  objectName: PropTypes.string,
  params: PropTypes.object,
  onCancel: PropTypes.func,
  onClose: PropTypes.func,
  // if given, X button will no longer use onCancel
  onConfirm: PropTypes.func,
  onlyConfirmButton: PropTypes.bool,
  show: PropTypes.bool.isRequired,
  handleHide: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  showCloseButton: PropTypes.bool,
  withExtraPadding: PropTypes.bool
});

_defineProperty(ActionConfirmModal, "defaultProps", {
  classNames: {},
  showCloseButton: false,
  withExtraPadding: false
});

export default compose(withStyles(styles), connectModal({
  name: 'actionConfirmModal',
  destroyOnHide: false
}))(ActionConfirmModal);