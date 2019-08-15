'use strict';

import _concatInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/concat";
import _classCallCheck from "@babel/runtime-corejs3/helpers/classCallCheck";
import _createClass from "@babel/runtime-corejs3/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime-corejs3/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime-corejs3/helpers/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime-corejs3/helpers/assertThisInitialized";
import _inherits from "@babel/runtime-corejs3/helpers/inherits";
import _defineProperty from "@babel/runtime-corejs3/helpers/defineProperty";
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
    var _getPrototypeOf2, _context;

    var _this;

    _classCallCheck(this, VideoModal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(VideoModal)).call.apply(_getPrototypeOf2, _concatInstanceProperty(_context = [this]).call(_context, args)));

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