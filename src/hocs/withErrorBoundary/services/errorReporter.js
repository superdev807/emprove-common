'use strict';

export const trackJsErrorReporter = (error, errorInfo, componentName, props) => {
  // formatting the error to display
  const stack = 'Error Caught' + errorInfo.componentStack.split(`\n    in`).join(' <');
  const errorReport = { componentName: componentName || 'Not Provided', type: error.name, message: error.message, stack };

  // return console.error('Error caught in React Error Boundary', errorReport);
  return console.log;
};
