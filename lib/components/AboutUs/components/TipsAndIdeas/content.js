'use strict';

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PostsSectionLayout from '../PostsSectionLayout';

var TipsAndIdeasContent =
/*#__PURE__*/
function (_Component) {
  _inherits(TipsAndIdeasContent, _Component);

  function TipsAndIdeasContent() {
    _classCallCheck(this, TipsAndIdeasContent);

    return _possibleConstructorReturn(this, _getPrototypeOf(TipsAndIdeasContent).apply(this, arguments));
  }

  _createClass(TipsAndIdeasContent, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          linkText = _this$props.linkText,
          posts = _this$props.posts,
          fromContractor = _this$props.fromContractor,
          imageSize = _this$props.imageSize;
      var title = React.createElement("div", null, "TIPS\xA0", React.createElement("span", null, "&"), "\xA0", React.createElement("b", null, "IDEAS"));
      return React.createElement(PostsSectionLayout, {
        ids: this.props.ids,
        className: this.props.className,
        description: "Get Ideas and Advice for Your Home Improvement Projects",
        title: title,
        posts: posts,
        postsLoading: this.props.postsLoading,
        fromContractor: fromContractor,
        isLink: true,
        linkRoute: "/blog",
        postType: "blog",
        linkText: linkText || 'view all tips and ideas',
        imageSize: imageSize
      });
    }
  }]);

  return TipsAndIdeasContent;
}(Component);

_defineProperty(TipsAndIdeasContent, "propTypes", {
  ids: PropTypes.object,
  imageSize: PropTypes.string
});

_defineProperty(TipsAndIdeasContent, "defaultProps", {
  ids: {}
});

export default TipsAndIdeasContent;