'use strict';

import "core-js/modules/es.symbol";
import "core-js/modules/es.symbol.description";
import "core-js/modules/es.symbol.iterator";
import "core-js/modules/es.array.from";
import "core-js/modules/es.array.iterator";
import "core-js/modules/es.object.create";
import "core-js/modules/es.object.define-property";
import "core-js/modules/es.object.get-prototype-of";
import "core-js/modules/es.object.set-prototype-of";
import "core-js/modules/es.object.to-string";
import "core-js/modules/es.string.iterator";
import "core-js/modules/web.dom-collections.iterator";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
      }) : Array.from(new Array(numPages), function (el, index) {
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