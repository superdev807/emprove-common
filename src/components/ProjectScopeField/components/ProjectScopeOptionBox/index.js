'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import ProjectScopeBar from '../ProjectScopeBar';
import './styles.scss';

class ProjectScopeOptionBox extends Component {
  static propTypes = {
    className: PropTypes.string,
    highlightOnHover: PropTypes.bool,
    id: PropTypes.string,
    onClick: PropTypes.func,
    opaque: PropTypes.bool,
    option: PropTypes.object.isRequired,
    showSelectButton: PropTypes.bool
  };

  static defaultProps = {
    highlightOnHover: true,
    opaque: false,
    showSelectButton: true
  };

  render() {
    const { onClick, option, showSelectButton } = this.props;

    return (
      <div
        id={this.props.id}
        className={cx('project-scope-option-box', {
          'project-scope-option-box--opaque': this.props.opaque,
          'project-scope-option-box--no-cursor': !onClick,
          'project-scope-option-box--highlight-on-hover': this.props.highlightOnHover
        })}
        onClick={onClick}>
        <div
          className={cx('project-scope-option-box__option-top', { 'project-scope-option-box__option-top--centered': !showSelectButton })}>
          <Typography className="project-scope-option-box__text project-scope-option-box__text--title" variant="body2">
            {option.label}
          </Typography>
          <ProjectScopeBar
            className="project-scope-option-box__option-bar"
            refinish={option.barValues.refinish}
            replace={option.barValues.replace}
          />
          <Typography className="project-scope-option-box__text project-scope-option-box__text--help" variant="body1">
            {option.text}
          </Typography>
        </div>
        {showSelectButton && (
          <div className="project-scope-option-box__option-bottom">
            <Button className="project-scope-option-box__option-button" color="primary" fullWidth variant="contained">
              Select
            </Button>
          </div>
        )}
      </div>
    );
  }
}

export default ProjectScopeOptionBox;
