'use strict';

import "core-js/modules/es.symbol";
import "core-js/modules/es.symbol.description";
import "core-js/modules/es.symbol.iterator";
import "core-js/modules/es.array.concat";
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

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
        if (this.props.fromContractor) {
          return "".concat(process.env.CONSUMER_DOMAIN, "/").concat(postType, "/").concat(post.ID, "/").concat(post.slug);
        }

        return "/".concat(postType, "/").concat(post.ID, "/").concat(post.slug);
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