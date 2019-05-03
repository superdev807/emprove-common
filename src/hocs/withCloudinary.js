'use strict';

import React, { Component } from 'react';

import loadScript from '../utils/loadScript';
import { makeCancelable } from '../utils/promiseFunctions';

const cloudinaryStyle = `#cloudinary-widget {
        width: 100% !important;
        box-sizing: border-box;
        transform: translateX(-50%);
        left: 50% !important;
        max-width: 675px;
    }
    #cloudinary-widget .panel {
        overflow: hidden;
    }
    #cloudinary-navbar .source.active {
        border-bottom: 3px solid #ff9e3c;
    }
    #cloudinary-widget .button, #cloudinary-widget .button.small_button {
        color: white;
        background: #ff9e3c;
        cursor: pointer;
    }
    #cloudinary-widget .panel.local .drag_area .drag_content .label {
        color: #ff9e3c;
    }
    #cloudinary-widget .panel.progress.cropping .thumbnails {
        padding: 0;
    }
    #cloudinary-widget .panel.progress .thumbnails .thumbnail .image_holder {
        margin: 0 auto;
    }
    .widget .panel.local .drag_area .drag_content .or {
        color: #ff9e3ca3;
    }
    #cloudinary-overlay.modal {
        background-color: rgba(0,0,0,0.7)
    }
    #cloudinary-widget .upload_button_holder:hover .button {
        background: #ff9e3ca3
    }
    .widget .panel.url input[type=text]:focus {
        outline: #ff9e3c auto 5px;
    }
    #cloudinary-widget .button:hover {
        background: #ff9e3ca3;
    }
    .widget .panel.local .upload_button_holder input[type=file] {
        cursor: pointer;
    }`;

export default WrappedComponent => {
  class CloudinaryWrapper extends Component {
    constructor(props) {
      super(props);
      this.state = {
        clOpenUploadWidget: window.cloudinary ? this.createClOpenUploadWidget(window.cloudinary) : null
      };
      this.cancelableLoadScript = null;
    }

    componentDidMount() {
      if (!window.cloudinary) {
        this.cancelableLoadScript = makeCancelable(loadScript('//widget.cloudinary.com/global/all.js'));
        this.cancelableLoadScript.promise.then(() => {
          this.setState({
            clOpenUploadWidget: this.createClOpenUploadWidget(window.cloudinary)
          });
        });
      }
    }

    componentWillUnmount() {
      this.cancelableLoadScript && this.cancelableLoadScript.cancel();
    }

    createClOpenUploadWidget(cloudinary) {
      return (options, callback) => {
        cloudinary.openUploadWidget(
          {
            cloud_name: process.env.CLOUDINARY_CLOUDNAME,
            upload_preset: process.env.CLOUDINARY_PROFILE_PICTURE_UPLOAD_PRESET,
            cropping: 'server',
            stylesheet: cloudinaryStyle,
            ...options
          },
          callback
        );
      };
    }

    render() {
      const { clOpenUploadWidget } = this.state;
      return <WrappedComponent {...this.props} clOpenUploadWidget={clOpenUploadWidget} />;
    }
  }
  return CloudinaryWrapper;
};
