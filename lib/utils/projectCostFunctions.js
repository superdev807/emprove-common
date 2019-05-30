'use strict'; //The minimum is -5% of the cost, then round to the nearest 500 to 10.

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMaximum = exports.getMinimum = void 0;

var getMinimum = function getMinimum(totalCost) {
  var minus5Percent = totalCost - totalCost * 5 / 100;

  if (totalCost >= 500) {
    return 500 * Math.floor(minus5Percent / 500);
  } else if (totalCost >= 100) {
    return 10 * Math.floor(minus5Percent / 10);
  } else {
    var minus5 = 10 * Math.floor(totalCost / 10) - 10;
    return minus5 >= 0 ? minus5 : 0;
  }
}; //The maximum is +5% of the cost, then round to the nearest 500 or 10.


exports.getMinimum = getMinimum;

var getMaximum = function getMaximum(totalCost) {
  var plus5Percent = totalCost + totalCost * 5 / 100;

  if (totalCost >= 500) {
    return 500 * Math.ceil(plus5Percent / 500);
  } else if (totalCost >= 100) {
    return 10 * Math.ceil(plus5Percent / 10);
  } else {
    return 10 * Math.ceil(totalCost / 10) + 10;
  }
};

exports.getMaximum = getMaximum;