'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _FooterList = require('../FooterList');

var _FooterList2 = _interopRequireDefault(_FooterList);

require('./styles.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var serviceAreas = ['Greater Las Vegas, NV', 'Greater Phoenix, AZ'];

var comingSoonAreas = ['Greater Los Angeles, CA', 'Greater San Diego, CA'];

var SERVICE_AREAS = 'service_areas';
var COMING_SOON = 'coming_soon';

var renderServiceAreaColumns = function renderServiceAreaColumns(serviceAreas) {
  var middleIndex = serviceAreas.length / 2;
  var serviceAreasFirstHalf = serviceAreas.slice(0, middleIndex);
  var serviceAreasSecondHalf = serviceAreas.slice(middleIndex);

  return _react2.default.createElement(
    'div',
    { className: 'service-area-split-columns' },
    _react2.default.createElement(_FooterList2.default, { className: 'service-area-column', items: serviceAreasFirstHalf }),
    _react2.default.createElement('div', { className: 'service-area-column-separator' }),
    _react2.default.createElement(_FooterList2.default, { className: 'service-area-column', items: serviceAreasSecondHalf })
  );
};

var ServiceAreas = function ServiceAreas(props) {
  var areas = void 0;

  switch (props.columnType) {
    case SERVICE_AREAS:
      areas = serviceAreas;
      break;
    case COMING_SOON:
      areas = comingSoonAreas;
      break;
    default:
      areas = '';
  }

  if (props.splitColumns) {
    return renderServiceAreaColumns(areas);
  }

  return _react2.default.createElement(_FooterList2.default, { items: areas });
};

ServiceAreas.propTypes = {
  splitColumns: _propTypes2.default.bool,
  columnType: _propTypes2.default.oneOf([SERVICE_AREAS, COMING_SOON])
};

ServiceAreas.defaultProps = {
  splitColumns: false,
  columnType: SERVICE_AREAS
};

exports.default = ServiceAreas;