'use strict';

import _Object$defineProperty from "@babel/runtime-corejs3/core-js-stable/object/define-property";
import _Object$defineProperties from "@babel/runtime-corejs3/core-js-stable/object/define-properties";
import _Object$getOwnPropertyDescriptors from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors";
import _forEachInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/for-each";
import _Object$getOwnPropertyDescriptor from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor";
import _filterInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/filter";
import _Object$getOwnPropertySymbols from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols";
import _Object$keys from "@babel/runtime-corejs3/core-js-stable/object/keys";
import _extends from "@babel/runtime-corejs3/helpers/extends";
import _concatInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/concat";
import _classCallCheck from "@babel/runtime-corejs3/helpers/classCallCheck";
import _createClass from "@babel/runtime-corejs3/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime-corejs3/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime-corejs3/helpers/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime-corejs3/helpers/assertThisInitialized";
import _inherits from "@babel/runtime-corejs3/helpers/inherits";
import _defineProperty from "@babel/runtime-corejs3/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = _Object$keys(object); if (_Object$getOwnPropertySymbols) { var symbols = _Object$getOwnPropertySymbols(object); if (enumerableOnly) symbols = _filterInstanceProperty(symbols).call(symbols, function (sym) { return _Object$getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context2; _forEachInstanceProperty(_context2 = ownKeys(source, true)).call(_context2, function (key) { _defineProperty(target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors) { _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)); } else { var _context3; _forEachInstanceProperty(_context3 = ownKeys(source)).call(_context3, function (key) { _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { jsonToQueryString, parseQueryString } from '../utils/pureFunctions';

var withRouterAndQueryParams = function withRouterAndQueryParams(WrappedComponent) {
  var QueryParamsWrapper =
  /*#__PURE__*/
  function (_Component) {
    _inherits(QueryParamsWrapper, _Component);

    function QueryParamsWrapper() {
      var _getPrototypeOf2, _context;

      var _this;

      _classCallCheck(this, QueryParamsWrapper);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(QueryParamsWrapper)).call.apply(_getPrototypeOf2, _concatInstanceProperty(_context = [this]).call(_context, args)));

      _defineProperty(_assertThisInitialized(_this), "pushWithQuery", function (_ref) {
        var location = _ref.location,
            queryParams = _ref.queryParams;

        _this.props.history.push(_objectSpread({}, location, {
          search: jsonToQueryString(queryParams)
        }));
      });

      _defineProperty(_assertThisInitialized(_this), "replaceWithQuery", function (_ref2) {
        var location = _ref2.location,
            queryParams = _ref2.queryParams;

        _this.props.history.replace(_objectSpread({}, location, {
          search: jsonToQueryString(queryParams)
        }));
      });

      return _this;
    }

    _createClass(QueryParamsWrapper, [{
      key: "render",
      value: function render() {
        var queryParams = parseQueryString(location.search);
        return React.createElement(WrappedComponent, _extends({}, this.props, {
          queryParams: queryParams,
          pushWithQuery: this.pushWithQuery,
          replaceWithQuery: this.replaceWithQuery
        }));
      }
    }]);

    return QueryParamsWrapper;
  }(Component);

  _defineProperty(QueryParamsWrapper, "propTypes", {
    location: PropTypes.object.isRequired
  });

  return withRouter(QueryParamsWrapper);
};

export default withRouterAndQueryParams;