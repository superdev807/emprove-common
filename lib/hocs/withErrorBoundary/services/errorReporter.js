'use strict';

import "core-js/modules/es.array.join";
import "core-js/modules/es.function.name";
import "core-js/modules/es.regexp.exec";
import "core-js/modules/es.string.split";
export var trackJsErrorReporter = function trackJsErrorReporter(error, errorInfo, componentName, props) {
  // formatting the error to display
  var stack = 'Error Caught' + errorInfo.componentStack.split("\n    in").join(' <');
  var errorReport = {
    componentName: componentName || 'Not Provided',
    type: error.name,
    message: error.message,
    stack: stack
  };
  return console.error('Error caught in React Error Boundary', errorReport);
};