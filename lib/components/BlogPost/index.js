'use strict';

import _concatInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/concat";
import _classCallCheck from "@babel/runtime-corejs3/helpers/classCallCheck";
import _createClass from "@babel/runtime-corejs3/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime-corejs3/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime-corejs3/helpers/getPrototypeOf";
import _inherits from "@babel/runtime-corejs3/helpers/inherits";
import _defineProperty from "@babel/runtime-corejs3/helpers/defineProperty";
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { decodeSpecialCharacters } from '../../utils/pureFunctions';
import './style.scss';

var BlogPost =
/*#__PURE__*/
function (_Component) {
  _inherits(BlogPost, _Component);

  function BlogPost() {
    _classCallCheck(this, BlogPost);

    return _possibleConstructorReturn(this, _getPrototypeOf(BlogPost).apply(this, arguments));
  }

  _createClass(BlogPost, [{
    key: "getURL",
    value: function getURL() {
      var _this$props = this.props,
          post = _this$props.post,
          postType = _this$props.postType;

      if (post && post.URL) {
        var _context4, _context5;

        if (this.props.fromContractor) {
          var _context, _context2, _context3;

          return _concatInstanceProperty(_context = _concatInstanceProperty(_context2 = _concatInstanceProperty(_context3 = "".concat(process.env.CONSUMER_DOMAIN, "/")).call(_context3, postType, "/")).call(_context2, post.ID, "/")).call(_context, post.slug);
        }

        return _concatInstanceProperty(_context4 = _concatInstanceProperty(_context5 = "/".concat(postType, "/")).call(_context5, post.ID, "/")).call(_context4, post.slug);
      }
    }
  }, {
    key: "getFeaturedImage",
    value: function getFeaturedImage() {
      var imageSize = this.props.imageSize;
      return this.props.post.featured_image + (imageSize ? imageSize : '');
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          ids = _this$props2.ids,
          post = _this$props2.post;
      return React.createElement("div", {
        className: "post-item"
      }, React.createElement("a", {
        id: ids.blogTitle,
        className: "post-item__link-wrapper",
        href: this.getURL()
      }, React.createElement("img", {
        className: "post-item__image",
        src: this.getFeaturedImage()
      }), React.createElement("div", {
        className: "post-item__title"
      }, React.createElement("b", null, decodeSpecialCharacters(post.title)))), React.createElement("div", {
        className: "post-item__date"
      }, moment(post.date).format('MMMM DD, YYYY')), React.createElement("div", {
        className: "post-item__excerpt",
        dangerouslySetInnerHTML: {
          __html: post.excerpt
        }
      }), React.createElement("a", {
        id: ids.readFull,
        className: "post-item__read-story",
        href: this.getURL()
      }, React.createElement("b", null, "READ THE FULL STORY")));
    }
  }]);

  return BlogPost;
}(Component);

_defineProperty(BlogPost, "propTypes", {
  ids: PropTypes.object,
  post: PropTypes.any,
  postType: PropTypes.oneOf(['blog', 'press-and-media']),
  fromContractor: PropTypes.bool,
  imageSize: PropTypes.string
});

_defineProperty(BlogPost, "defaultProps", {
  ids: {},
  postType: 'blog'
});

export default BlogPost;