'use strict';

import React, { Component, Fragment } from 'react';
import Button from '@material-ui/core/Button';
import cx from 'classnames';
import Grid from '@material-ui/core/Grid';
import ProjectScopeBar from './components/ProjectScopeBar';
import Typography from '@material-ui/core/Typography';
import './style.scss';

const options = [
  {
    label: (
      <Fragment>
        REPAINT<br />ONLY
      </Fragment>
    ),
    value: 1,
    barValues: { refinish: 40, replace: 0 },
    text: 'Freshen your space up with a new coat of paint'
  },
  {
    label: (
      <Fragment>
        UPGRADE<br />FINISHES
      </Fragment>
    ),
    value: 2,
    barValues: { refinish: 30, replace: 20 },
    text: 'A facelift for your space, with new hard surfaces and a repaint'
  },
  {
    label: (
      <Fragment>
        LIGHT<br />RENOVATION
      </Fragment>
    ),
    value: 3,
    barValues: { refinish: 25, replace: 60 },
    text: 'A brand new look, keeping plumbing and walls where they are'
  },
  {
    label: (
      <Fragment>
        FULL<br />RENOVATION
      </Fragment>
    ),
    value: 4,
    barValues: { refinish: 0, replace: 100 },
    text: 'Make it precisely yours by moving a wall or two, and relocating plubing'
  }
];

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
      <div className={cx("project-scope-field", { [className]: Boolean(className) })}>
        <Grid container spacing={24}>
          {options.map((option, index) => (
            <Grid key={index} item className="project-scope-field__option">
              <div className="project-scope-field__option-box" onClick={this.handleChange(option.value)}>
                <div className="project-scope-field__option-top">
                  <Typography className="project-scope-field__text project-scope-field__text--title" variant="body2">
                    {option.label}
                  </Typography>
                  <ProjectScopeBar
                    className="project-scope-field__option-bar"
                    refinish={option.barValues.refinish}
                    replace={option.barValues.replace}
                  />
                  <Typography className="project-scope-field__text project-scope-field__text--help" variant="body1">
                    {option.text}
                  </Typography>
                </div>
                <div className="project-scope-field__option-bottom">
                  <Button className="project-scope-field__option-button" color="primary" fullWidth variant="contained">
                    Select
                  </Button>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
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
