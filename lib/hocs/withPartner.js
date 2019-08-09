'use strict';

import _extends from "@babel/runtime-corejs3/helpers/extends";
import _classCallCheck from "@babel/runtime-corejs3/helpers/classCallCheck";
import _createClass from "@babel/runtime-corejs3/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime-corejs3/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime-corejs3/helpers/getPrototypeOf";
import _inherits from "@babel/runtime-corejs3/helpers/inherits";
import React, { Component } from 'react';
import { getPartnerFromHost } from '../utils/partnerFunctions';

var withPartner = function withPartner(WrappedComponent) {
  var PartnerWrapper =
  /*#__PURE__*/
  function (_Component) {
    _inherits(PartnerWrapper, _Component);

    function PartnerWrapper() {
      _classCallCheck(this, PartnerWrapper);

      return _possibleConstructorReturn(this, _getPrototypeOf(PartnerWrapper).apply(this, arguments));
    }

    _createClass(PartnerWrapper, [{
      key: "render",
      value: function render() {
        var partner = getPartnerFromHost();
        return React.createElement(WrappedComponent, _extends({}, this.props, {
          subDomain: partner
        }));
      }
    }]);

    return PartnerWrapper;
  }(Component);

  return PartnerWrapper;
};

export default withPartner;