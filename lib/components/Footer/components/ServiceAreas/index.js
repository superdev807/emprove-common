'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _FooterList = _interopRequireDefault(require("../FooterList"));

require("./styles.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var renderServiceAreaColumns = function renderServiceAreaColumns(serviceAreas) {
  var middleIndex = serviceAreas.length / 2;
  var serviceAreasFirstHalf = serviceAreas.slice(0, middleIndex);
  var serviceAreasSecondHalf = serviceAreas.slice(middleIndex);
  return _react["default"].createElement("div", {
    className: "service-area-split-columns"
  }, _react["default"].createElement(_FooterList["default"], {
    className: "service-area-column",
    items: serviceAreasFirstHalf
  }), _react["default"].createElement("div", {
    className: "service-area-column-separator"
  }), _react["default"].createElement(_FooterList["default"], {
    className: "service-area-column",
    items: serviceAreasSecondHalf
  }));
};

var ServiceAreas = function ServiceAreas(props) {
  if (props.splitColumns) {
    return renderServiceAreaColumns(props.areas);
  }

  return _react["default"].createElement(_FooterList["default"], {
    items: props.areas
  });
};

ServiceAreas.propTypes = {
  splitColumns: _propTypes["default"].bool,
  areas: _propTypes["default"].array
};
ServiceAreas.defaultProps = {
  splitColumns: false
};
var _default = ServiceAreas;
exports["default"] = _default;