'use strict';

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
  var theInvestors = investors.map(function (investor) {
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