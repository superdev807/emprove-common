'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.trackJsErrorReporter = void 0;

var trackJsErrorReporter = function trackJsErrorReporter(error, errorInfo, componentName, props) {
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

exports.trackJsErrorReporter = trackJsErrorReporter;