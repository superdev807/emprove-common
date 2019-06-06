'use strict';

import React, { Component, Fragment } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { FormattedNumber } from 'react-intl';
import { getMinimum, getMaximum } from '../../utils/projectCostFunctions';

import './styles.scss';

class ProjectScaleGraph extends Component {
  static propTypes = {
    className: PropTypes.string,
    dataSets: PropTypes.arrayOf(PropTypes.object),
    grid: PropTypes.object,
    margin: PropTypes.object,
    mark: PropTypes.object,
    showVerticalGridLines: PropTypes.bool,
    showXAxis: PropTypes.bool,
    showYAxis: PropTypes.bool,
    startYFromZero: PropTypes.bool
  };

  static defaultProps = {
    grid: {},
    margin: { top: 32, right: 32, bottom: 64, left: 112 },
    showVerticalGridLines: false,
    showXAxis: false,
    showYAxis: false,
    startYFromZero: true
  };

  constructor(props) {
    super(props);

    this.state = {
      grid: {
        width: 500,
        height: 400,
        horizontalLines: 9,
        ...props.grid
      },
      margin: props.margin,
      mappedSets: [],
      processing: true,
      ...this.parseDataSet()
    };
  }

  componentDidMount() {
    const mappedSets = this.getMappedDataSets();

    this.setState({
      mappedSets,
      processing: false
    });
  }

  /**
   * Determine the min and max values for the grid coordinates
   */
  parseDataSet() {
    const { dataSets } = this.props;

    if (dataSets.length === 0) {
      return {
        minX: 0,
        maxX: 0,
        minY: 0,
        maxY: 0
      };
    }

    let minX = dataSets[0].values[0].xValue;
    let minY = dataSets[0].values[0].yValue;
    let maxX = dataSets[0].values[0].xValue;
    let maxY = dataSets[0].values[0].yValue;

    for (let i = 0; i < dataSets[0].values.length; i++) {
      for (let j = 0; j < dataSets.length; j++) {
        const dataSet = dataSets[j];

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
      minX,
      maxX,
      minY: this.props.startYFromZero ? 0 : minY,
      maxY: Number((maxY * 1.05).toPrecision(2))
    };
  }

  /**
   * Convert the dataset points from actual coordinates to the grid coordinates.
   */
  getMappedDataSets() {
    const { dataSets } = this.props;

    if (dataSets.length === 0) {
      return [];
    }

    const mappedSets = new Array(this.props.dataSets.length);

    for (let i = 0; i < dataSets[0].values.length; i++) {
      for (let j = 0; j < dataSets.length; j++) {
        const dataSet = dataSets[j];
        let mappedSet = mappedSets[j] || [];
        mappedSet = mappedSet.concat({
          xValue: this.mapRealXToGraphX(dataSet.values[i].xValue),
          yValue: this.mapRealYToGraphY(dataSet.values[i].yValue)
        });
        mappedSets[j] = mappedSet;
      }
    }

    return mappedSets;
  }

  renderXAxis() {
    return (
      <g className="project-scale-graph__x-axis">
        <line
          x1={this.state.margin.left}
          y1={this.state.margin.top + this.state.grid.height}
          x2={this.state.margin.left + this.state.grid.width}
          y2={this.state.margin.top + this.state.grid.height}
          stroke="#000000"
          strokeWidth="1"
        />
      </g>
    );
  }

  renderYAxis() {
    return (
      <g className="project-scale-graph__y-axis">
        <line
          x1={this.state.margin.left}
          y1={this.state.margin.top}
          x2={this.state.margin.left}
          y2={this.state.margin.top + this.state.grid.height}
          stroke="#000000"
          strokeWidth="1"
        />
      </g>
    );
  }

  renderHorizontalLines() {
    const steps = this.state.grid.horizontalLines;
    const dy = (this.state.maxY - this.state.minY) / steps;

    const horizontalLines = [];
    for (let j = 0; j < steps + 1; ++j) {
      const y = this.mapRealYToGraphY(this.state.minY + (steps - j) * dy);

      horizontalLines.push(
        <line
          key={j}
          x1={this.state.margin.left}
          y1={y}
          x2={this.state.margin.left + this.state.grid.width}
          y2={y}
          stroke="#dddddd"
          strokeWidth="1"
        />
      );
    }

    return <g className="project-scale-graph__horizontal-grid-lines">{horizontalLines}</g>;
  }

  renderVerticalLines() {
    return (
      <g className="project-scale-graph_vertical-grid-lines">
        {this.props.dataSets[0].values.map((datum, index) => {
          const x = this.mapRealXToGraphX(datum.xValue);

          return (
            <line
              key={index}
              x1={x}
              y1={this.state.margin.top}
              x2={x}
              y2={this.state.margin.top + this.state.grid.height}
              stroke="#dddddd"
              strokeWidth="1"
            />
          );
        })}
      </g>
    );
  }

  renderYLabels() {
    const steps = this.state.grid.horizontalLines;
    const dy = (this.state.maxY - this.state.minY) / steps;

    const yLabels = [];
    for (let j = 0; j < steps + 1; ++j) {
      const value = this.state.minY + (steps - j) * dy;
      const y = this.mapRealYToGraphY(value);

      yLabels.push(
        <text key={j} x={this.state.margin.left} y={y} textAnchor="end" alignmentBaseline="middle">
          ${(Math.round(value / 500) * 500).toLocaleString('en-US')}
        </text>
      );
    }

    return <g className="project-scale-graph__y-labels">{yLabels}</g>;
  }

  renderXLabels() {
    return (
      <g className="project-scale-graph__x-labels">
        {this.props.dataSets[0].values.map(datum => {
          const x = this.mapRealXToGraphX(datum.xValue);

          return (
            <text key={x} x={x} y={this.state.margin.top + this.state.grid.height} textAnchor="middle" alignmentBaseline="hanging">
              {datum.xLabel.split(' ').map((word, index) => (
                <tspan key={index} x={x} dy="1.2em">
                  {word}
                </tspan>
              ))}
            </text>
          );
        })}
      </g>
    );
  }
  mapRealYToGraphY(realY) {
    return this.state.grid.height * (realY - this.state.maxY) / (this.state.minY - this.state.maxY) + this.state.margin.top;
  }

  mapRealXToGraphX(realX) {
    return this.state.grid.width * (realX - this.state.minX) / (this.state.maxX - this.state.minX) + this.state.margin.left;
  }

  renderPlotLine(data, mappedData) {
    const points = data.values.map((datum, index) => {
      const x = mappedData[index].xValue;
      const y = mappedData[index].yValue;

      return x + ',' + y;
    });

    return <polyline fill="none" stroke={data.color || 'blue'} strokeWidth={data.strokeWidth || '3'} points={points.join(' ')} />;
  }

  renderPlotName(data, mappedData, upperMappedData) {
    const lastPoint = mappedData[mappedData.length - 1];
    const beforeLastPoint = mappedData[mappedData.length - 2];

    if (!beforeLastPoint || !lastPoint) {
      return null;
    }

    // b is last point; a the second before last
    // (points under the line name)
    const xa = beforeLastPoint.xValue;
    const ya = beforeLastPoint.yValue;
    const xb = lastPoint.xValue;
    const yb = lastPoint.yValue;

    // at first, assume text will be aligned with bottom line
    let theta = Math.atan((yb - ya) / (xb - xa));
    let distanceToUpper = 16;

    if (upperMappedData) {
      // points from the line above the current one
      const lastUpperPoint = upperMappedData[upperMappedData.length - 1];
      const beforeLastUpperPoint = upperMappedData[upperMappedData.length - 2];

      if (!lastUpperPoint || !beforeLastUpperPoint) {
        return null;
      }

      // d is last point of line above current one;
      // c is the second before last point of line above current
      const xc = beforeLastUpperPoint.xValue;
      const yc = beforeLastUpperPoint.yValue;
      const xd = lastUpperPoint.xValue;
      const yd = lastUpperPoint.yValue;
      // angle for the text to be aligned with upper line
      theta = Math.atan((yd - yc) / (xd - xc));

      distanceToUpper = (yb - yd - 6) / 2;
    }

    // to move the text upward vertically
    // (the coordinate is rotated so can't do translateY directly)
    const yOffset = Math.round(distanceToUpper * Math.cos(theta));
    const xOffset = Math.round(distanceToUpper * Math.sin(theta));

    const style = {
      transform: `rotateZ(${theta * 180 / Math.PI}deg) translate(${-xOffset - 12}px, ${-yOffset}px)`,
      transformOrigin: `${lastPoint.xValue}px ${lastPoint.yValue}px`
    };

    return (
      <g className="project-scale-graph__plot-name" style={style}>
        <text x={lastPoint.xValue} y={lastPoint.yValue} textAnchor="end" alignmentBaseline="baseline" fill={data.nameColor}>
          {data.name}
        </text>
      </g>
    );
  }

  renderPlotAreaUnderLine(data, mappedData) {
    if (data.values.length > 1) {
      const { grid, margin } = this.state;
      const surfaces = [];

      for (let i = 0; i < data.values.length - 1; i++) {
        const ax = mappedData[i].xValue;
        const ay = mappedData[i].yValue;
        const bx = mappedData[i + 1].xValue;
        const by = mappedData[i + 1].yValue;

        surfaces.push(
          <polyline
            key={i}
            fill={data.areaColor}
            points={`${ax},${ay} ${ax},${grid.height + margin.top} ${bx},${grid.height + margin.top} ${bx},${by}`}
            strokeWidth="3"
            stroke={data.areaColor}
            strokeOpacity="1"
          />
        );
      }

      return <g className="project-scale-graph__plot-area">{surfaces}</g>;
    }
  }

  renderGrid() {
    return (
      <>
        {this.props.showVerticalGridLines && this.renderVerticalLines()}
        {this.renderHorizontalLines()}
      </>
    );
  }

  renderPlots() {
    if (!this.state.processing) {
      const { mappedSets } = this.state;

      return this.props.dataSets.map((dataSet, index) => {
        return (
          <g className="project-scale-graph__plot" key={dataSet.id}>
            {this.renderPlotAreaUnderLine(dataSet, mappedSets[index])}
            {this.renderPlotLine(dataSet, mappedSets[index])}
            {this.renderPlotName(dataSet, mappedSets[index], mappedSets[index - 1])}
          </g>
        );
      });
    }
  }

  getSvgViewBox() {
    const { grid, margin } = this.state;

    return `0 0 ${grid.width + margin.left + margin.right} ${grid.height + margin.top + margin.bottom}`;
  }

  renderMark() {
    const { mark, markColor } = this.props;
    if (mark) {
      const cx = this.mapRealXToGraphX(this.props.mark.xValue);
      const cy = this.mapRealYToGraphY(this.props.mark.yValue);

      return (
        <g className="project-scale-graph__mark">
          {this.renderTooltip(cx, cy)}
          <circle cx={cx} cy={cy} r="15" fill={markColor ? markColor : '#ff9e3c'} />
          <circle cx={cx} cy={cy} r="5" fill="#ffffff" />
        </g>
      );
    }
  }

  renderTooltip(cx, cy) {
    const { dataSets, mark } = this.props;

    const marginTop = 40;
    const marginLeft = 30;
    const tooltipWidth = 200;
    const tooltipHeight = 350;
    const tooltipX = cx + (mark.xValue < 4 ? 50 : -tooltipWidth - 50);
    const tooltipY = Math.max(cy - 240, 0);
    const polygonPoints =
      mark.xValue < 4
        ? `${cx + 25},${cy} ${cx + 50},${cy} ${cx + 50},${cy - 15}`
        : `${cx - 25},${cy} ${cx - 50},${cy} ${cx - 50},${cy - 15}`;

    let projectScale = '';
    const costValues = [];
    for (let i = 1; i < 6; i++) {
      const dataSet = dataSets[i];
      const found = dataSet.values.find(item => item.xValue === mark.xValue);
      const cost = found ? found.yValue : 0;
      costValues.push({
        label: dataSet.name,
        min: getMinimum(cost),
        max: getMaximum(cost)
      });
      projectScale = found.xLabel;
    }

    return (
      <g className="project-scale-graph__tooltip">
        <line
          x1={cx}
          y1={this.state.margin.top}
          x2={cx}
          y2={this.state.margin.top + this.state.grid.height}
          stroke="#ff9e3c"
          strokeWidth="1"
        />
        <polygon points={polygonPoints} fill="rgba(0,0,0,0.5)" />
        <rect x={tooltipX} y={tooltipY} width={tooltipWidth} height={tooltipHeight} rx="10" ry="10" fill="rgba(0,0,0,0.5)" />
        <text x={tooltipX + marginLeft} y={tooltipY + marginTop} fill="#ffffff">
          {projectScale}
        </text>
        <g className="project-scale-graph__tooltip-costs">
          {costValues.map((value, index) => (
            <Fragment key={index}>
              <text x={tooltipX + marginLeft} y={tooltipY + marginTop + 30 + 56 * index} fill="#ffffff">
                • {value.label}
              </text>
              <text x={tooltipX + marginLeft + 10} y={tooltipY + marginTop + 54 + 56 * index} fill="#ffffff">
                {`$${value.min.toLocaleString()} - $${value.max.toLocaleString()}`}
              </text>
            </Fragment>
          ))}
        </g>
      </g>
    );
  }

  render() {
    return (
      <div className={cx('project-scale-graph', this.props.className)}>
        {this.props.dataSets.length > 0 ? (
          <svg className="project-scale-graph__svg" viewBox={this.getSvgViewBox()}>
            {this.renderGrid()}
            {this.props.showYAxis && this.renderYAxis()}
            {this.props.showXAxis && this.renderXAxis()}
            {this.renderPlots()}
            {this.renderXLabels()}
            {this.renderYLabels()}
            {this.renderMark()}
          </svg>
        ) : (
          <div>There are no data sets to make a plot</div>
        )}
      </div>
    );
  }
}

export default ProjectScaleGraph;
