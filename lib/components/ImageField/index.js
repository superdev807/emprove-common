'use strict';

import _parseInt from "@babel/runtime-corejs3/core-js-stable/parse-int";
import _concatInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/concat";
import _classCallCheck from "@babel/runtime-corejs3/helpers/classCallCheck";
import _createClass from "@babel/runtime-corejs3/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime-corejs3/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime-corejs3/helpers/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime-corejs3/helpers/assertThisInitialized";
import _inherits from "@babel/runtime-corejs3/helpers/inherits";
import _defineProperty from "@babel/runtime-corejs3/helpers/defineProperty";
import React, { Component, Fragment } from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import cx from 'classnames';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import IconAddPhotos from '../../icons/IconAddPhotos';
import withCloudinary from '../../hocs/withCloudinary';
import styles from './styles';

var ImageField =
/*#__PURE__*/
function (_Component) {
  _inherits(ImageField, _Component);

  function ImageField() {
    var _getPrototypeOf2, _context;

    var _this;

    _classCallCheck(this, ImageField);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ImageField)).call.apply(_getPrototypeOf2, _concatInstanceProperty(_context = [this]).call(_context, args)));

    _defineProperty(_assertThisInitialized(_this), "handleUploadPhoto", function () {
      var _this$props = _this.props,
          aspectRatio = _this$props.aspectRatio,
          clOpenUploadWidget = _this$props.clOpenUploadWidget,
          input = _this$props.input,
          uploadFolder = _this$props.uploadFolder,
          uploadPreset = _this$props.uploadPreset;

      var sizeMb = _parseInt(process.env.CLOUDINARY_MAX_FILE_SIZE / (1024 * 1024), 10);

      clOpenUploadWidget({
        folder: uploadFolder,
        //setting the upload_preset here to override the preset in withCloudinary hoc
        upload_preset: uploadPreset,
        max_file_size: process.env.CLOUDINARY_MAX_FILE_SIZE,
        client_allowed_formats: process.env.CLOUDINARY_IMAGE_ALLOWED_FORMATS.split(','),
        text: {
          'sources.local.drop_file': "Drop file here (".concat(sizeMb, "MB max.)")
        },
        cropping_default_selection_ratio: aspectRatio,
        cropping_aspect_ratio: aspectRatio,
        theme: 'white'
      }, function (error, result) {
        if (!error) {
          input.onChange(result[0]);
        }
      });
    });

    return _this;
  }

  _createClass(ImageField, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          className = _this$props2.className,
          classes = _this$props2.classes,
          errorMessageClass = _this$props2.errorMessageClass,
          input = _this$props2.input,
          defaultImageUrl = _this$props2.defaultImageUrl,
          _this$props2$meta = _this$props2.meta,
          touched = _this$props2$meta.touched,
          error = _this$props2$meta.error;
      var imageUrl = input.value ? input.value.secure_url : defaultImageUrl;
      return React.createElement(FormControl, {
        className: cx(className, classes.root),
        error: touched && !!error,
        onClick: this.handleUploadPhoto
      }, imageUrl ? React.createElement("div", {
        style: {
          backgroundImage: "url(".concat(imageUrl, ")")
        },
        className: classes.image
      }) : React.createElement(Fragment, null, React.createElement(IconAddPhotos, {
        className: classes.addImage
      }), React.createElement(Typography, {
        className: classes.addText
      }, "click to add")), touched && error && React.createElement(FormHelperText, {
        className: cx(errorMessageClass, classes.error)
      }, error));
    }
  }]);

  return ImageField;
}(Component);

_defineProperty(ImageField, "propTypes", {
  aspectRatio: PropTypes.number,
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  clOpenUploadWidget: PropTypes.func,
  defaultImageUrl: PropTypes.string,
  disabled: PropTypes.bool,
  errorMessageClass: PropTypes.string,
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  uploadFolder: PropTypes.string,
  uploadPreset: PropTypes.string
});

_defineProperty(ImageField, "defaultProps", {
  aspectRatio: 1,
  uploadFolder: process.env.CLOUDINARY_PROFILE_PICTURE_FOLDER,
  uploadPreset: process.env.CLOUDINARY_PROFILE_PICTURE_UPLOAD_PRESET
});

export default compose(withStyles(styles), withCloudinary)(ImageField);