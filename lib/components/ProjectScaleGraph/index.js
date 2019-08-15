'use strict';

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component, Fragment } from 'react';
import cx from 'classnames';
import get from 'lodash/get';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Colors from '../../config/colors';
import { getMinimum, getMaximum } from '../../utils/projectCostFunctions';
import { isPhoneSelector } from '../../redux/selectors';
import './styles.scss';

var ProjectScaleGraph =
/*#__PURE__*/
function (_Component) {
  _inherits(ProjectScaleGraph, _Component);

  function ProjectScaleGraph(props) {
    var _this;

    _classCallCheck(this, ProjectScaleGraph);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ProjectScaleGraph).call(this, props));
    _this.state = _objectSpread({
      grid: _objectSpread({
        width: 500,
        height: 400,
        horizontalLines: 9
      }, props.grid),
      margin: props.margin,
      mappedSets: [],
      processing: true
    }, _this.parseDataSet());
    return _this;
  }

  _createClass(ProjectScaleGraph, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var mappedSets = this.getMappedDataSets();
      this.setState({
        mappedSets: mappedSets,
        processing: false
      });
    }
    /**
     * Determine the min and max values for the grid coordinates
     */

  }, {
    key: "parseDataSet",
    value: function parseDataSet() {
      var dataSets = this.props.dataSets;

      if (dataSets.length === 0) {
        return {
          minX: 0,
          maxX: 0,
          minY: 0,
          maxY: 0
        };
      }

      var minX = dataSets[0].values[0].xValue;
      var minY = dataSets[0].values[0].yValue;
      var maxX = dataSets[0].values[0].xValue;
      var maxY = dataSets[0].values[0].yValue;

      for (var i = 0; i < dataSets[0].values.length; i++) {
        for (var j = 0; j < dataSets.length; j++) {
          var dataSet = dataSets[j];

          if (dataSet.values[i].xValue > maxX) {
            maxX = dataSet.values[i].xValue;
          }

          if (dataSet.values[i].xValue < minX) {
            minX = dataSet.values[i].xValue;
          }

          if (dataSet.values[i].yValue > maxY) {
            maxY = dataSet.values[i].yValue;
          }

          if (dataSet.values[i].yValue < minY) {
            minY = dataSet.values[i].yValue;
          }
        }
      }

      return {
        minX: minX,
        maxX: maxX,
        minY: this.props.startYFromZero ? 0 : minY,
        maxY: Number((maxY * 1.05).toPrecision(2))
      };
    }
    /**
     * Convert the dataset points from actual coordinates to the grid coordinates.
     */

  }, {
    key: "getMappedDataSets",
    value: function getMappedDataSets() {
      var dataSets = this.props.dataSets;

      if (dataSets.length === 0) {
        return [];
      }

      var mappedSets = new Array(this.props.dataSets.length);

      for (var i = 0; i < dataSets[0].values.length; i++) {
        for (var j = 0; j < dataSets.length; j++) {
          var dataSet = dataSets[j];
          var mappedSet = mappedSets[j] || [];
          mappedSet = mappedSet.concat({
            xValue: this.mapRealXToGraphX(dataSet.values[i].xValue),
            yValue: this.mapRealYToGraphY(dataSet.values[i].yValue)
          });
          mappedSets[j] = mappedSet;
        }
      }

      return mappedSets;
    }
  }, {
    key: "renderXAxis",
    value: function renderXAxis() {
      return React.createElement("g", {
        className: "project-scale-graph__x-axis"
      }, React.createElement("line", {
        x1: this.state.margin.left,
        y1: this.state.margin.top + this.state.grid.height,
        x2: this.state.margin.left + this.state.grid.width,
        y2: this.state.margin.top + this.state.grid.height,
        stroke: "#000000",
        strokeWidth: "1"
      }));
    }
  }, {
    key: "renderYAxis",
    value: function renderYAxis() {
      return React.createElement("g", {
        className: "project-scale-graph__y-axis"
      }, React.createElement("line", {
        x1: this.state.margin.left,
        y1: this.state.margin.top,
        x2: this.state.margin.left,
        y2: this.state.margin.top + this.state.grid.height,
        stroke: "#000000",
        strokeWidth: "1"
      }));
    }
  }, {
    key: "renderHorizontalLines",
    value: function renderHorizontalLines() {
      var steps = this.state.grid.horizontalLines;
      var dy = (this.state.maxY - this.state.minY) / steps;
      var horizontalLines = [];

      for (var j = 0; j < steps + 1; ++j) {
        var y = this.mapRealYToGraphY(this.state.minY + (steps - j) * dy);
        horizontalLines.push(React.createElement("line", {
          key: j,
          x1: this.state.margin.left,
          y1: y,
          x2: this.state.margin.left + this.state.grid.width,
          y2: y,
          stroke: "#dddddd",
          strokeWidth: "1"
        }));
      }

      return React.createElement("g", {
        className: "project-scale-graph__horizontal-grid-lines"
      }, horizontalLines);
    }
  }, {
    key: "renderVerticalLines",
    value: function renderVerticalLines() {
      var _this2 = this;

      return React.createElement("g", {
        className: "project-scale-graph_vertical-grid-lines"
      }, this.props.dataSets[0].values.map(function (datum, index) {
        var x = _this2.mapRealXToGraphX(datum.xValue);

        return React.createElement("line", {
          key: index,
          x1: x,
          y1: _this2.state.margin.top,
          x2: x,
          y2: _this2.state.margin.top + _this2.state.grid.height,
          stroke: "#dddddd",
          strokeWidth: "1"
        });
      }));
    }
  }, {
    key: "renderYLabels",
    value: function renderYLabels() {
      var steps = this.state.grid.horizontalLines;
      var dy = (this.state.maxY - this.state.minY) / steps;
      var yLabels = [];

      for (var j = 0; j < steps + 1; ++j) {
        var value = this.state.minY + (steps - j) * dy;
        var y = this.mapRealYToGraphY(value);
        yLabels.push(React.createElement("text", {
          key: j,
          x: this.state.margin.left,
          y: y,
          textAnchor: "end",
          alignmentBaseline: "middle"
        }, "$", (Math.round(value / 500) * 500).toLocaleString('en-US')));
      }

      return React.createElement("g", {
        className: "project-scale-graph__y-labels"
      }, yLabels);
    }
  }, {
    key: "renderXLabels",
    value: function renderXLabels() {
      var _this3 = this;

      var dataValues = get(this.props, 'dataSets[0].values');

      if (dataValues) {
        var lastXValue = dataValues[dataValues.length - 1].xValue;
        return React.createElement("g", {
          className: "project-scale-graph__x-labels"
        }, dataValues.map(function (datum, index) {
          var x = _this3.mapRealXToGraphX(datum.xValue);

          return React.createElement("text", {
            key: index,
            x: x,
            y: _this3.state.margin.top + _this3.state.grid.height,
            textAnchor: datum.xValue === lastXValue ? 'end' : 'middle',
            alignmentBaseline: "hanging"
          }, datum.xLabel.split(' ').map(function (word, index) {
            return React.createElement("tspan", {
              key: index,
              x: x,
              dy: "1.2em"
            }, word);
          }));
        }));
      } else {
        return null;
      }
    }
  }, {
    key: "mapRealYToGraphY",
    value: function mapRealYToGraphY(realY) {
      return this.state.grid.height * (realY - this.state.maxY) / (this.state.minY - this.state.maxY) + this.state.margin.top;
    }
  }, {
    key: "mapRealXToGraphX",
    value: function mapRealXToGraphX(realX) {
      return this.state.grid.width * (realX - this.state.minX) / (this.state.maxX - this.state.minX) + this.state.margin.left;
    }
  }, {
    key: "renderPlotLine",
    value: function renderPlotLine(data, mappedData) {
      var points = data.values.map(function (datum, index) {
        var x = mappedData[index].xValue;
        var y = mappedData[index].yValue;
        return x + ',' + y;
      });
      return React.createElement("polyline", {
        fill: "none",
        stroke: data.color || 'blue',
        strokeWidth: data.strokeWidth || '3',
        points: points.join(' ')
      });
    }
  }, {
    key: "renderPlotName",
    value: function renderPlotName(data, mappedData, upperMappedData) {
      var lastPoint = mappedData[mappedData.length - 1];
      var beforeLastPoint = mappedData[mappedData.length - 2];

      if (!beforeLastPoint || !lastPoint) {
        return null;
      } // b is last point; a the second before last
      // (points under the line name)


      var xa = beforeLastPoint.xValue;
      var ya = beforeLastPoint.yValue;
      var xb = lastPoint.xValue;
      var yb = lastPoint.yValue; // at first, assume text will be aligned with bottom line

      var theta = Math.atan((yb - ya) / (xb - xa));
      var distanceToUpper = 16;

      if (upperMappedData) {
        // points from the line above the current one
        var lastUpperPoint = upperMappedData[upperMappedData.length - 1];
        var beforeLastUpperPoint = upperMappedData[upperMappedData.length - 2];

        if (!lastUpperPoint || !beforeLastUpperPoint) {
          return null;
        } // d is last point of line above current one;
        // c is the second before last point of line above current


        var xc = beforeLastUpperPoint.xValue;
        var yc = beforeLastUpperPoint.yValue;
        var xd = lastUpperPoint.xValue;
        var yd = lastUpperPoint.yValue; // angle for the text to be aligned with upper line

        theta = Math.atan((yd - yc) / (xd - xc));
        distanceToUpper = (yb - yd - 6) / 2;
      } // to move the text upward vertically
      // (the coordinate is rotated so can't do translateY directly)


      var yOffset = Math.round(distanceToUpper * Math.cos(theta));
      var xOffset = Math.round(distanceToUpper * Math.sin(theta));
      var style = {
        transform: "rotateZ(".concat(theta * 180 / Math.PI, "deg) translate(").concat(-xOffset - 12, "px, ").concat(-yOffset, "px)"),
        transformOrigin: "".concat(lastPoint.xValue, "px ").concat(lastPoint.yValue, "px")
      };
      return React.createElement("g", {
        className: "project-scale-graph__plot-name",
        style: style
      }, React.createElement("text", {
        x: lastPoint.xValue,
        y: lastPoint.yValue,
        textAnchor: "end",
        alignmentBaseline: "baseline",
        fill: data.nameColor
      }, data.name));
    }
  }, {
    key: "renderPlotAreaUnderLine",
    value: function renderPlotAreaUnderLine(data, mappedData) {
      if (data.values.length > 1) {
        var _this$state = this.state,
            grid = _this$state.grid,
            margin = _this$state.margin;
        var surfaces = [];

        for (var i = 0; i < data.values.length - 1; i++) {
          var ax = mappedData[i].xValue;
          var ay = mappedData[i].yValue;
          var bx = mappedData[i + 1].xValue;
          var by = mappedData[i + 1].yValue;
          surfaces.push(React.createElement("polyline", {
            key: i,
            fill: data.areaColor,
            points: "".concat(ax, ",").concat(ay, " ").concat(ax, ",").concat(grid.height + margin.top, " ").concat(bx, ",").concat(grid.height + margin.top, " ").concat(bx, ",").concat(by),
            strokeWidth: "3",
            stroke: data.areaColor,
            strokeOpacity: "1"
          }));
        }

        return React.createElement("g", {
          className: "project-scale-graph__plot-area"
        }, surfaces);
      }
    }
  }, {
    key: "renderGrid",
    value: function renderGrid() {
      return React.createElement(Fragment, null, this.props.showVerticalGridLines && this.renderVerticalLines(), this.renderHorizontalLines());
    }
  }, {
    key: "renderPlots",
    value: function renderPlots() {
      var _this4 = this;

      if (!this.state.processing) {
        var mappedSets = this.state.mappedSets;
        return this.props.dataSets.map(function (dataSet, index) {
          return React.createElement("g", {
            className: "project-scale-graph__plot",
            key: dataSet.id
          }, _this4.renderPlotAreaUnderLine(dataSet, mappedSets[index]), _this4.renderPlotLine(dataSet, mappedSets[index]), _this4.renderPlotName(dataSet, mappedSets[index], mappedSets[index - 1]));
        });
      }
    }
  }, {
    key: "getSvgViewBox",
    value: function getSvgViewBox() {
      var _this$state2 = this.state,
          grid = _this$state2.grid,
          margin = _this$state2.margin;
      return "0 0 ".concat(grid.width + margin.left + margin.right, " ").concat(grid.height + margin.top + margin.bottom);
    }
  }, {
    key: "renderMark",
    value: function renderMark() {
      var _this$props = this.props,
          mark = _this$props.mark,
          markColor = _this$props.markColor;

      if (mark) {
        var _cx = this.mapRealXToGraphX(this.props.mark.xValue);

        var cy = this.mapRealYToGraphY(this.props.mark.yValue);
        return React.createElement("g", {
          className: "project-scale-graph__mark"
        }, React.createElement("circle", {
          cx: _cx,
          cy: cy,
          r: "15",
          fill: markColor ? markColor : Colors.PRIMARY
        }), React.createElement("circle", {
          cx: _cx,
          cy: cy,
          r: "5",
          fill: "#ffffff"
        }));
      }
    }
  }, {
    key: "renderTooltips",
    value: function renderTooltips() {
      var _this5 = this;

      var mark = this.props.mark;
      return mark ? React.createElement("g", {
        className: "project-scale-graph__tooltips"
      }, this.props.dataSets[0].values.map(function (datum, index) {
        var x1 = _this5.mapRealXToGraphX(datum.xValue - 0.5);

        var x2 = _this5.mapRealXToGraphX(datum.xValue + 0.5);

        return React.createElement("g", {
          key: index,
          className: "project-scale-graph__tooltips-item"
        }, React.createElement("rect", {
          x: x1,
          y: _this5.state.margin.top,
          width: x2 - x1,
          height: _this5.state.grid.height,
          fill: "rgba(0,0,0,0)"
        }), _this5.renderTooltip(datum.xValue));
      })) : null;
    }
  }, {
    key: "renderTooltip",
    value: function renderTooltip(xValue) {
      var markColor = this.props.markColor;
      var marginTop = 40;
      var marginLeft = 30;
      var tooltipWidth = 200;
      var tooltipHeight = 350;
      var isLeftTooltip = this.props.isPhone && xValue > 2 || xValue > 3;
      var cx = this.mapRealXToGraphX(xValue);
      var tooltipX = cx + (isLeftTooltip ? -tooltipWidth - 50 : 50);
      var tooltipY = this.state.margin.top + (this.state.grid.height - tooltipHeight) / 2;
      var cy = tooltipY + tooltipHeight * 0.7;
      var polygonPoints = isLeftTooltip ? "".concat(cx - 25, ",").concat(cy, " ").concat(cx - 50, ",").concat(cy, " ").concat(cx - 50, ",").concat(cy - 15) : "".concat(cx + 25, ",").concat(cy, " ").concat(cx + 50, ",").concat(cy, " ").concat(cx + 50, ",").concat(cy - 15);
      var projectScale = '';
      var costValues = [];

      for (var i = 1; i < 6; i++) {
        var dataSet = this.props.dataSets[i];
        var found = dataSet.values.find(function (item) {
          return item.xValue === xValue;
        });
        var cost = found ? found.yValue : 0;
        costValues.push({
          label: dataSet.name,
          min: getMinimum(cost),
          max: getMaximum(cost)
        });
        projectScale = found.xLabel;
      }

      return React.createElement("g", {
        className: "project-scale-graph__tooltip"
      }, React.createElement("line", {
        x1: cx,
        y1: this.state.margin.top,
        x2: cx,
        y2: this.state.margin.top + this.state.grid.height,
        stroke: markColor ? markColor : Colors.PRIMARY,
        strokeWidth: "1"
      }), React.createElement("polygon", {
        points: polygonPoints,
        fill: "rgba(0,0,0,0.6)"
      }), React.createElement("rect", {
        x: tooltipX,
        y: tooltipY,
        width: tooltipWidth,
        height: tooltipHeight,
        rx: "10",
        ry: "10",
        fill: "rgba(0,0,0,0.6)"
      }), React.createElement("text", {
        x: tooltipX + marginLeft,
        y: tooltipY + marginTop,
        fill: "#ffffff"
      }, projectScale), React.createElement("g", {
        className: "project-scale-graph__tooltip-costs"
      }, costValues.map(function (value, index) {
        return React.createElement(Fragment, {
          key: index
        }, React.createElement("text", {
          x: tooltipX + marginLeft,
          y: tooltipY + marginTop + 30 + 56 * index,
          fill: "#ffffff"
        }, "\u2022 ", value.label), React.createElement("text", {
          x: tooltipX + marginLeft + 10,
          y: tooltipY + marginTop + 54 + 56 * index,
          fill: "#ffffff"
        }, "$".concat(value.min.toLocaleString(), " - $").concat(value.max.toLocaleString())));
      })));
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", {
        className: cx('project-scale-graph', this.props.className)
      }, this.props.dataSets.length > 0 ? React.createElement("svg", {
        className: "project-scale-graph__svg",
        viewBox: this.getSvgViewBox()
      }, this.renderGrid(), this.props.showYAxis && this.renderYAxis(), this.props.showXAxis && this.renderXAxis(), this.renderPlots(), this.renderXLabels(), this.renderYLabels(), this.renderMark(), this.renderTooltips()) : !this.props.hideErrorMsg ? React.createElement("div", null, "There are no data sets to make a plot") : null);
    }
  }]);

  return ProjectScaleGraph;
}(Component);

_defineProperty(ProjectScaleGraph, "propTypes", {
  className: PropTypes.string,
  dataSets: PropTypes.arrayOf(PropTypes.object),
  grid: PropTypes.object,
  isPhone: PropTypes.bool,
  margin: PropTypes.object,
  mark: PropTypes.object,
  showVerticalGridLines: PropTypes.bool,
  showXAxis: PropTypes.bool,
  showYAxis: PropTypes.bool,
  startYFromZero: PropTypes.bool
});

_defineProperty(ProjectScaleGraph, "defaultProps", {
  grid: {},
  isPhone: false,
  margin: {
    top: 32,
    right: 32,
    bottom: 64,
    left: 112
  },
  showVerticalGridLines: false,
  showXAxis: false,
  showYAxis: false,
  startYFromZero: true
});

var selector = createStructuredSelector({
  isPhone: isPhoneSelector
});
export default connect(selector)(ProjectScaleGraph);