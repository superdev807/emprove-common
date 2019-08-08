'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import './styles.scss';

class ProjectScopeOptionBox extends Component {
  static propTypes = {
    className: PropTypes.string,
    highlightOnHover: PropTypes.bool,
    id: PropTypes.string,
    onClick: PropTypes.func,
    onClickScopeDetail: PropTypes.func,
    opaque: PropTypes.bool,
    option: PropTypes.object.isRequired,
    showSelectButton: PropTypes.bool
  };

  static defaultProps = {
    highlightOnHover: true,
    opaque: false,
    showSelectButton: true,
    showScaleInfo: false
  };

  handleClickDetail = event => {
    const { onClickDetail, option } = this.props;
    onClickDetail && onClickDetail(event, option.value);
  };

  render() {
    const { onClick, option, showSelectButton, showScaleInfo, selected, isMobile } = this.props;

    return (
      <div className="project-scope-option-box-wrapper">
        <div
          id={this.props.id}
          className={cx(
            'project-scope-option-box',
            {
              'project-scope-option-box--opaque': this.props.opaque,
              'project-scope-option-box--no-cursor': !onClick,
              'project-scope-option-box--highlight-on-hover': this.props.highlightOnHover,
              'project-scope-option-box--selected': selected
            },
            this.props.className
          )}
          onClick={onClick}>
          {showScaleInfo &&
            showSelectButton && (
              <div
                className={cx('project-scope-option-box__option-top-button', {
                  'project-scope-option-box__option-top-button--mobile': isMobile
                })}>
                <Button
                  className={cx('project-scope-option-box__option-button', { 'project-scope-option-box__option-button--mobile': isMobile })}
                  color="primary"
                  fullWidth
                  variant="contained">
                  Select
                </Button>
              </div>
            )}
          <div
            className={cx('project-scope-option-box__option-top', {
              'project-scope-option-box__option-top--centered': !showSelectButton,
              'project-scope-option-box__option-top--mobile': isMobile
            })}>
            <Typography className="project-scope-option-box__text project-scope-option-box__text--title" variant="body2">
              {option.label}
            </Typography>
            <Typography className="project-scope-option-box__text project-scope-option-box__text--help" variant="body1">
              {option.text}
            </Typography>
          </div>
          {!showScaleInfo &&
            showSelectButton && (
              <div
                className={cx('project-scope-option-box__option-bottom', { 'project-scope-option-box__option-bottom--mobile': isMobile })}>
                <Button
                  className={cx('project-scope-option-box__option-button', { 'project-scope-option-box__option-button--mobile': isMobile })}
                  color="primary"
                  fullWidth
                  variant="contained">
                  {selected ? 'Selected' : 'Select'}
                </Button>
              </div>
            )}
        </div>
        {showScaleInfo && (
          <div className={cx('project-scope-option-box__option-bottom', { 'project-scope-option-box__option-bottom--mobile': isMobile })}>
            <Button
              className={cx('project-scope-option-box__include-button', { 'project-scope-option-box__include-button--mobile': isMobile })}
              color="primary"
              fullWidth
              onClick={this.handleClickDetail}
              variant="contained"
              classes={{ label: 'project-scope-option-box__include-button--no-capitalize' }}>
              What&apos;s included
            </Button>
          </div>
        )}
      </div>
    );
  }
}

export default ProjectScopeOptionBox;
