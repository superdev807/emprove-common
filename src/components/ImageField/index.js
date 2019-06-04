'use strict';

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

class ImageField extends Component {
  static propTypes = {
    aspectRatio: PropTypes.number,
    className: PropTypes.string,
    classes: PropTypes.object.isRequired,
    clOpenUploadWidget: PropTypes.func,
    disabled: PropTypes.bool,
    errorMessageClass: PropTypes.string,
    input: PropTypes.object.isRequired,
    meta: PropTypes.object.isRequired,
    uploadFolder: PropTypes.string,
    uploadPreset: PropTypes.string
  };

  static defaultProps = {
    aspectRatio: 1,
    uploadFolder: process.env.CLOUDINARY_PROFILE_PICTURE_FOLDER,
    uploadPreset: process.env.CLOUDINARY_PROFILE_PICTURE_UPLOAD_PRESET
  };

  handleUploadPhoto = () => {
    const { aspectRatio, clOpenUploadWidget, input, uploadFolder, uploadPreset } = this.props;

    const sizeMb = parseInt(process.env.CLOUDINARY_MAX_FILE_SIZE / (1024 * 1024), 10);
    clOpenUploadWidget(
      {
        folder: uploadFolder,
        //setting the upload_preset here to override the preset in withCloudinary hoc
        upload_preset: uploadPreset,
        max_file_size: process.env.CLOUDINARY_MAX_FILE_SIZE,
        client_allowed_formats: process.env.CLOUDINARY_IMAGE_ALLOWED_FORMATS.split(','),
        text: { 'sources.local.drop_file': `Drop file here (${sizeMb}MB max.)` },
        cropping_default_selection_ratio: aspectRatio,
        cropping_aspect_ratio: aspectRatio,
        theme: 'white'
      },
      (error, result) => {
        if (!error) {
          input.onChange(result[0]);
        }
      }
    );
  };

  render() {
    const {
      className,
      classes,
      errorMessageClass,
      input,
      meta: { touched, error }
    } = this.props;

    return (
      <FormControl className={cx(className, classes.root)} error={touched && !!error} onClick={this.handleUploadPhoto}>
        {input.value ? (
          <div style={{ backgroundImage: `url(${input.value.secure_url})` }} className={classes.image} />
        ) : (
          <Fragment>
            <IconAddPhotos className={classes.addImage} />
            <Typography className={classes.addText}>click to add</Typography>
          </Fragment>
        )}
        {touched && error && <FormHelperText className={cx(errorMessageClass, classes.error)}>{error}</FormHelperText>}
      </FormControl>
    );
  }
}

export default compose(withStyles(styles), withCloudinary)(ImageField);
