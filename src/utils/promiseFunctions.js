'use strict';

/**
 * Wraps a promise in an object that allows calling the cancel() method to
 * reject the promise when it resolves.
 * Useful for cases such as "canceling" requests after a component unmounts.
 * Use this to avoid Warning: Can't call setState (or forceUpdate) on an unmounted component
 * Ref https://reactjs.org/blog/2015/12/16/ismounted-antipattern.html
 */
export const makeCancelable = promise => {
  let hasCanceled_ = false;

  const wrappedPromise = new Promise((resolve, reject) => {
    promise.then(
      val => (hasCanceled_ ? reject({ isCanceled: true }) : resolve(val)),
      error => (hasCanceled_ ? reject({ isCanceled: true }) : reject(error))
    );
  });

  return {
    promise: wrappedPromise,
    cancel() {
      hasCanceled_ = true;
    }
  };
};
