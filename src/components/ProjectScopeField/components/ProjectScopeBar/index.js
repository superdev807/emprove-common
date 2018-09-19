'use strict';

import React from 'react';
import cx from 'classnames';
import './style.scss';

const ProjectScopeBar = ({ className, refinish, replace }) => (
  <div className={cx('project-scope-bar', { [className]: Boolean(className) })}>
    <div className="project-scope-bar__segment project-scope-bar__segment--refinish" style={{ width: `${refinish || 0}%` }} />
    <div className="project-scope-bar__segment project-scope-bar__segment--replace" style={{ width: `${replace || 0}%` }} />
  </div>
);

export default ProjectScopeBar;