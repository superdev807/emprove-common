'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _withErrorHandler = require('./components/withErrorHandler');

var _withErrorHandler2 = _interopRequireDefault(_withErrorHandler);

var _FallbackView = require('./components/FallbackView');

var _FallbackView2 = _interopRequireDefault(_FallbackView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// import errorReportService from '../services/errorReporter'


exports.default = function (WrappedComponent) {
  var _console;

  (_console = console).log.apply(_console, ['index props'].concat(_toConsumableArray(undefined.props)));
  var ErrorWrapper = function ErrorWrapper(_ref) {
    var customErrorReportService = _ref.customErrorReportService,
        customFallbackView = _ref.customFallbackView;

    // console.log('wrapped???', this.props);
    return (0, _withErrorHandler2.default)(customErrorReportService || console.log, customFallbackView || _FallbackView2.default, WrappedComponent);
  };
  return ErrorWrapper;
};