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

import React, { Component } from 'react';
import cx from 'classnames';
import { compose } from 'redux';
import { connectModal } from 'redux-modal';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import IconClose from '@material-ui/icons/Close';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import Vimeo from '@u-wave/react-vimeo';
import './style.scss';

var VideoModal =
/*#__PURE__*/
function (_Component) {
  _inherits(VideoModal, _Component);

  function VideoModal() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, VideoModal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(VideoModal)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "handleClose", function () {
      _this.props.handleHide();
    });

    return _this;
  }

  _createClass(VideoModal, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          classes = _this$props.classes,
          show = _this$props.show;
      return React.createElement(Dialog, {
        maxWidth: false,
        open: show,
        classes: {
          paper: classes.dialogContentPaper
        },
        onClose: this.handleClose
      }, React.createElement("div", {
        className: classes.videoContainer
      }, React.createElement(IconButton, {
        className: classes.fixedCloseIcon,
        onClick: this.handleClose
      }, React.createElement(IconClose, {
        className: classes.iconClose
      })), React.createElement(DialogContent, {
        className: cx(classes.dialogContent, 'responsiveVideoBackground')
      }, React.createElement(Vimeo, {
        id: "video",
        video: process.env.EMPROVE_HOME_VIDEO_ID,
        autoplay: true
      }))));
    }
  }]);

  return VideoModal;
}(Component);

export default compose(withStyles(styles), connectModal({
  name: 'videoModal',
  destroyOnHide: true
}))(VideoModal);