'use strict';
/**
 * Wraps a promise in an object that allows calling the cancel() method to
 * reject the promise when it resolves.
 * Useful for cases such as "canceling" requests after a component unmounts.
 * Use this to avoid Warning: Can't call setState (or forceUpdate) on an unmounted component
 * Ref https://reactjs.org/blog/2015/12/16/ismounted-antipattern.html
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeCancelable = void 0;

var makeCancelable = function makeCancelable(promise) {
  var hasCanceled_ = false;
  var wrappedPromise = new Promise(function (resolve, reject) {
    promise.then(function (val) {
      return hasCanceled_ ? reject({
        isCanceled: true
      }) : resolve(val);
    }, function (error) {
      return hasCanceled_ ? reject({
        isCanceled: true
      }) : reject(error);
    });
  });
  return {
    promise: wrappedPromise,
    cancel: function cancel() {
      hasCanceled_ = true;
    }
  };
};

exports.makeCancelable = makeCancelable;