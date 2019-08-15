'use strict';

import "core-js/modules/es.symbol";
import "core-js/modules/es.symbol.description";
import "core-js/modules/es.symbol.iterator";
import "core-js/modules/es.array.concat";
import "core-js/modules/es.array.iterator";
import "core-js/modules/es.array.map";
import "core-js/modules/es.object.create";
import "core-js/modules/es.object.define-property";
import "core-js/modules/es.object.get-prototype-of";
import "core-js/modules/es.object.set-prototype-of";
import "core-js/modules/es.object.to-string";
import "core-js/modules/es.string.iterator";
import "core-js/modules/web.dom-collections.iterator";

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
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ActionConfirmModal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ActionConfirmModal)).call.apply(_getPrototypeOf2, [this].concat(args)));

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

      return entries.map(function (text) {
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