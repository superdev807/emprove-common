'use strict';

import _Array$from from "@babel/runtime-corejs3/core-js-stable/array/from";
import _classCallCheck from "@babel/runtime-corejs3/helpers/classCallCheck";
import _createClass from "@babel/runtime-corejs3/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime-corejs3/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime-corejs3/helpers/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime-corejs3/helpers/assertThisInitialized";
import _inherits from "@babel/runtime-corejs3/helpers/inherits";
import _defineProperty from "@babel/runtime-corejs3/helpers/defineProperty";
import React, { Component } from 'react';
import cx from 'classnames';
import IconButton from '@material-ui/core/IconButton';
import IconNext from '@material-ui/icons/ChevronRight';
import IconPrev from '@material-ui/icons/ChevronLeft';
import IconFirst from '@material-ui/icons/FirstPage';
import IconLast from '@material-ui/icons/LastPage';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Document, Page } from 'react-pdf/dist/entry.webpack';
import { isMobileSelector } from '../../redux/selectors';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

var PdfView =
/*#__PURE__*/
function (_Component) {
  _inherits(PdfView, _Component);

  function PdfView(props) {
    var _this;

    _classCallCheck(this, PdfView);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PdfView).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "setWidth", function () {
      if (_this.pdfWrapper && _this.pdfWrapper.offsetWidth !== _this.state.width) {
        _this.setState({
          width: _this.pdfWrapper.offsetWidth
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleDocumentLoad", function (numPages) {
      _this.setState({
        numPages: numPages.numPages
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleWrapperRef", function (ref) {
      _this.pdfWrapper = ref;
    });

    _defineProperty(_assertThisInitialized(_this), "handlePrevPage", function () {
      _this.setState({
        currentPage: Math.max(_this.state.currentPage - 1, 1)
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleNextPage", function () {
      _this.setState({
        currentPage: Math.min(_this.state.currentPage + 1, _this.state.numPages)
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleFirstPage", function () {
      _this.setState({
        currentPage: 1
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleLastPage", function () {
      _this.setState({
        currentPage: _this.state.numPages
      });
    });

    _this.state = {
      numPages: 0,
      width: 0,
      currentPage: 1
    };
    return _this;
  }

  _createClass(PdfView, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setWidth();
      window.addEventListener('resize', this.setWidth);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.setWidth();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.setWidth);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          classes = _this$props.classes,
          source = _this$props.source,
          showPageButtons = _this$props.showPageButtons,
          isMobile = _this$props.isMobile;
      var _this$state = this.state,
          currentPage = _this$state.currentPage,
          numPages = _this$state.numPages,
          width = _this$state.width;
      var hasButtons = showPageButtons && isMobile;
      return React.createElement("div", {
        ref: this.handleWrapperRef,
        className: cx(classes.root, this.props.className, _defineProperty({}, classes.mobileRoot, hasButtons))
      }, React.createElement("div", {
        className: cx(_defineProperty({}, classes.mobileDocument, hasButtons))
      }, React.createElement(Document, {
        file: source,
        onLoadSuccess: this.handleDocumentLoad
      }, hasButtons ? React.createElement(Paper, {
        className: classes.paper,
        component: Page,
        key: "page_".concat(currentPage),
        pageNumber: currentPage,
        width: width
      }) : _Array$from(new Array(numPages), function (el, index) {
        return React.createElement(Paper, {
          className: classes.paper,
          component: Page,
          key: "page_".concat(index + 1),
          pageNumber: index + 1,
          width: width
        });
      }))), hasButtons && React.createElement("div", {
        className: classes.buttonContainer
      }, React.createElement(IconButton, {
        onClick: this.handleFirstPage
      }, React.createElement(IconFirst, null)), React.createElement(IconButton, {
        onClick: this.handlePrevPage
      }, React.createElement(IconPrev, null)), React.createElement(IconButton, {
        onClick: this.handleNextPage
      }, React.createElement(IconNext, null)), React.createElement(IconButton, {
        onClick: this.handleLastPage
      }, React.createElement(IconLast, null))));
    }
  }]);

  return PdfView;
}(Component);

_defineProperty(PdfView, "propTypes", {
  className: PropTypes.string,
  source: PropTypes.string,
  showPageButtons: PropTypes.bool
});

var selector = createStructuredSelector({
  isMobile: isMobileSelector
});
export default compose(withStyles(styles), connect(selector))(PdfView);