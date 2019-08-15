'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import './styles.scss';

var ErrorMessage = function ErrorMessage(props) {
  if (props.error) {
    return React.createElement(Paper, {
      className: cx('error-message', {
        'error-message--floating': props.floating
      }, props.className),
      elevation: 1
    }, React.createElement("div", null, props.error), props.tryAgain && React.createElement(Button, {
      className: "error-message__try-again-button",
      variant: "contained",
      onClick: props.onTryAgainClick
    }, "Try Again"));
  }

  return null;
};

ErrorMessage.propTypes = {
  className: PropTypes.string,
  error: PropTypes.string,
  floating: PropTypes.bool,
  onTryAgainClick: PropTypes.func,
  tryAgain: PropTypes.bool
};
ErrorMessage.defaultProps = {
  floating: false,
  tryAgain: false
};
export default ErrorMessage;