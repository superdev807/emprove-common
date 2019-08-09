'use strict';

import _sliceInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/slice";
import _classCallCheck from "@babel/runtime-corejs3/helpers/classCallCheck";
import _createClass from "@babel/runtime-corejs3/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime-corejs3/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime-corejs3/helpers/getPrototypeOf";
import _inherits from "@babel/runtime-corejs3/helpers/inherits";
import _defineProperty from "@babel/runtime-corejs3/helpers/defineProperty";
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PostsSectionLayout from '../PostsSectionLayout';
import './style.scss';

var PressAndMedia =
/*#__PURE__*/
function (_Component) {
  _inherits(PressAndMedia, _Component);

  function PressAndMedia(props) {
    var _this;

    _classCallCheck(this, PressAndMedia);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PressAndMedia).call(this, props));
    _this.state = {
      postsToShow: 3
    };
    return _this;
  }

  _createClass(PressAndMedia, [{
    key: "getPosts",
    value: function getPosts() {
      var posts = this.props.posts;
      var postsToShow = this.state.postsToShow;

      if (postsToShow) {
        return _sliceInstanceProperty(posts).call(posts, 0, postsToShow);
      }

      return posts;
    }
  }, {
    key: "render",
    value: function render() {
      var title = React.createElement("div", null, "PRESS\xA0", React.createElement("span", null, "&"), "\xA0", React.createElement("b", null, "MEDIA"));
      return React.createElement(PostsSectionLayout, {
        className: this.props.className,
        linkRoute: "/press-and-media",
        fromContractor: this.props.fromContractor,
        description: "",
        linkText: "view all press and media",
        title: title,
        isLink: true,
        posts: this.getPosts(),
        postType: "press-and-media",
        postsToShow: this.state.postsToShow
      });
    }
  }]);

  return PressAndMedia;
}(Component);

_defineProperty(PressAndMedia, "propTypes", {
  className: PropTypes.string,
  posts: PropTypes.array
});

export default PressAndMedia;