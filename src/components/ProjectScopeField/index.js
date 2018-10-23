'use strict';

import React, { Component } from 'react';
import cx from 'classnames';
import Grid from '@material-ui/core/Grid';
import MobileDetect from 'mobile-detect';
import ProjectScopeOptionBox from './components/ProjectScopeOptionBox';
import Typography from '@material-ui/core/Typography';
import options from './projectScopeOptions';
import './style.scss';

const chartOptions = [
  { value: 'refinish', label: 'Refinish' },
  { value: 'replace', label: 'New / Replace' },
  { value: 'keep', label: 'Keep Existing' }
];

class ProjectScopeField extends Component {
  constructor(props) {
    super(props);

    const md = new MobileDetect(window.navigator.userAgent);
    this.state = {
      isMobile: Boolean(md.phone())
    };
  }

  handleChange = value => () => {
    const { onSelect } = this.props;
    onSelect && onSelect(value);
  };

  render() {
    const { meta: { error }, className, showFreeFormOption } = this.props;

    console.log({ showFreeFormOption });
    return (
      <div className={cx('project-scope-field', { [className]: Boolean(className) })}>
        <Grid container spacing={24}>
          {options.map((option, index) => (
            <Grid key={index} item className="project-scope-field__option">
              <ProjectScopeOptionBox onClick={this.handleChange(option.value)} option={option} isMobile={this.state.isMobile} />
            </Grid>
          ))}
        </Grid>
        {showFreeFormOption && (
          <div className="projet-scope-field__free-form">
            <Typography className="project-scope-field__free-form-text" variant="body1" onClick={this.handleChange(6)}>
              Or, describe a simple project yourself
            </Typography>
          </div>
        )}
        <div className="project-scope-field__charts">
          {chartOptions.map((option, index) => (
            <div key={index} className="project-scope-field__chart">
              <div className={`project-scope-field__chart-box ${option.value}`} />
              <Typography className="project-scope-field__text project-scope-field__text--help" variant="body1">
                {option.label}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ProjectScopeField;
