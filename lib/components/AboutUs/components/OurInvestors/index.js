'use strict';

import _Object$defineProperty from "@babel/runtime-corejs3/core-js-stable/object/define-property";
import _Object$defineProperties from "@babel/runtime-corejs3/core-js-stable/object/define-properties";
import _Object$getOwnPropertyDescriptors from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors";
import _forEachInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/for-each";
import _Object$getOwnPropertyDescriptor from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor";
import _filterInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/filter";
import _Object$getOwnPropertySymbols from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols";
import _Object$keys from "@babel/runtime-corejs3/core-js-stable/object/keys";
import _defineProperty from "@babel/runtime-corejs3/helpers/defineProperty";
import _mapInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/map";

function ownKeys(object, enumerableOnly) { var keys = _Object$keys(object); if (_Object$getOwnPropertySymbols) { var symbols = _Object$getOwnPropertySymbols(object); if (enumerableOnly) symbols = _filterInstanceProperty(symbols).call(symbols, function (sym) { return _Object$getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context; _forEachInstanceProperty(_context = ownKeys(source, true)).call(_context, function (key) { _defineProperty(target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors) { _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)); } else { var _context2; _forEachInstanceProperty(_context2 = ownKeys(source)).call(_context2, function (key) { _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React from 'react';
import Investor from './Investor';
import './styles.scss';
var investors = [{
  id: 1,
  name: '',
  imageKey: 'ic_investor_01.svg'
}, {
  id: 2,
  name: '',
  imageKey: 'ic_investor_02.svg'
}, {
  id: 3,
  name: '',
  imageKey: 'ic_investor_01.svg'
}];

var OurInvestors = function OurInvestors(props) {
  var theInvestors = _mapInstanceProperty(investors).call(investors, function (investor) {
    var investorWithImageUrl = _objectSpread({}, investor, {
      imageUrl: "/images/".concat(investor.imageKey)
    });

    return React.createElement("div", {
      key: investor.id,
      className: "our-investors__investor"
    }, React.createElement(Investor, {
      investor: investorWithImageUrl
    }));
  });

  return React.createElement("section", {
    className: "our-investors"
  }, React.createElement("div", {
    className: "our-investors__title"
  }, "Our ", React.createElement("strong", null, "Investors")), React.createElement("p", {
    className: "our-investors__paragraph"
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis, tellus non aliquam gravida, augue dui lacinia felis, nec auctor mi dui nec lacus. Ut in iaculis nulla."), React.createElement("div", {
    className: "our-investors__investors"
  }, theInvestors));
};

export default OurInvestors;