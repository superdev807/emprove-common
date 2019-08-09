'use strict';

import _classCallCheck from "@babel/runtime-corejs3/helpers/classCallCheck";
import _createClass from "@babel/runtime-corejs3/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime-corejs3/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime-corejs3/helpers/getPrototypeOf";
import _inherits from "@babel/runtime-corejs3/helpers/inherits";
import _defineProperty from "@babel/runtime-corejs3/helpers/defineProperty";
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