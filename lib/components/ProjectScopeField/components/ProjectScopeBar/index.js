'use strict';

import "core-js/modules/es.regexp.exec";
import "core-js/modules/es.string.replace";
import _defineProperty from "@babel/runtime-corejs3/helpers/defineProperty";
import React from 'react';
import cx from 'classnames';
import './style.scss';

var ProjectScopeBar = function ProjectScopeBar(_ref) {
  var className = _ref.className,
      refinish = _ref.refinish,
      replace = _ref.replace;
  return React.createElement("div", {
    className: cx('project-scope-bar', _defineProperty({}, className, Boolean(className)))
  }, React.createElement("div", {
    className: "project-scope-bar__segment project-scope-bar__segment--refinish",
    style: {
      width: "".concat(refinish || 0, "%")
    }
  }), React.createElement("div", {
    className: "project-scope-bar__segment project-scope-bar__segment--replace",
    style: {
      width: "".concat(replace || 0, "%")
    }
  }));
};

export default ProjectScopeBar;