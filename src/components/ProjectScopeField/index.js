'use strict';

import React, { Component } from 'react';
import cx from 'classnames';
import Grid from '@material-ui/core/Grid';
import ProjectScopeOptionBox from './components/ProjectScopeOptionBox';
import Typography from '@material-ui/core/Typography';
import options from './projectScopeOptions';
import './style.scss';

const chartOptions = [
  { value: 'refinish', label: 'Refinish' },
  { value: 'replace', label: 'New or Replace' },
  { value: 'keep', label: 'Keep Existing' }
];

class ProjectScopeField extends Component {
  handleChange = value => () => {
    const { onSelect } = this.props;
    onSelect && onSelect(value);
  };

  render() {
    const { meta: { error }, className } = this.props;

    return (
      <div className={cx('project-scope-field', { [className]: Boolean(className) })}>
        <Grid container spacing={24}>
          {options.map((option, index) => (
            <Grid key={index} item className="project-scope-field__option">
              <ProjectScopeOptionBox onClick={this.handleChange(option.value)} option={option} />
            </Grid>
          ))}
        </Grid>
        <div className="project-scope-field__charts">
          {chartOptions.map((option, index) => (
            <div key={index} className="project-scope-field__chart">
              <div className={`project-scope-field__chart-box ${option.value}`} />
              <Typography className="project-scope-field__text project-scope-field__text--chart" variant="body1">
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
