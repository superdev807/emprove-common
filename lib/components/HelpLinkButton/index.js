'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import IconButton from '@material-ui/core/IconButton';
import IconHelpOutline from '@material-ui/icons/HelpOutline';
import './styles.scss';

var HelpLinkButton = function HelpLinkButton(props) {
  return React.createElement(IconButton, {
    id: props.id,
    className: cx('help-link-button', {
      'help-link-button--size-16': props.size === 16,
      'help-link-button--size-32': props.size === 32,
      'help-link-button--left-margin': props.margin === 'left',
      'help-link-button--right-margin-16': props.margin === 'right-16',
      'help-link-button--blink': props.blink,
      'help-link-button--highlighted': props.highlighted
    }, props.className),
    component: "a",
    href: "".concat(process.env.HELP_DOMAIN, "/").concat(props.path),
    target: "_blank"
  }, React.createElement(IconHelpOutline, {
    className: cx({
      'help-link-button--size-16': props.size === 16,
      'help-link-button--size-32': props.size === 32
    })
  }));
};

HelpLinkButton.propTypes = {
  blink: PropTypes.bool,
  className: PropTypes.string,
  highlighted: PropTypes.bool,
  id: PropTypes.string,
  margin: PropTypes.oneOf(['left', 'right-16']),
  path: PropTypes.string.isRequired,
  size: PropTypes.oneOf([16, 32])
};
HelpLinkButton.defaultProps = {
  blink: false,
  highlighted: false
};
export default HelpLinkButton;