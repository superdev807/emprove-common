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

var serviceAreas = ['North Las Vegas', 'Nellis AFB', 'Las Vegas', 'Sunrise Manor', 'Winchester', 'Summerlin', 'Spring Valley', 'Whitney', 'Paradise', 'Blue Diamond', 'Enterprise', 'Henderson', 'Boulder City'];

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
  if (props.splitColumns) {
    return renderServiceAreaColumns(serviceAreas);
  }

  return _react2.default.createElement(_FooterList2.default, { items: serviceAreas });
};

ServiceAreas.propTypes = {
  splitColumns: _propTypes2.default.bool
};

ServiceAreas.defaultProps = {
  splitColumns: false
};

exports.default = ServiceAreas;