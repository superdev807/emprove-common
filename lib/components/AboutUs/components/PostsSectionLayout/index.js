'use strict';

import _concatInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/concat";
import _mapInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/map";
import _classCallCheck from "@babel/runtime-corejs3/helpers/classCallCheck";
import _createClass from "@babel/runtime-corejs3/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime-corejs3/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime-corejs3/helpers/getPrototypeOf";
import _inherits from "@babel/runtime-corejs3/helpers/inherits";
import _defineProperty from "@babel/runtime-corejs3/helpers/defineProperty";
import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import CSSTransition from 'react-transition-group/CSSTransition';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import { Link } from 'react-router-dom';
import BlogPost from '../../../BlogPost';
import LoadingIndicator from '../../../LoadingIndicator';
import './style.scss';

var PostsSectionLayout =
/*#__PURE__*/
function (_Component) {
  _inherits(PostsSectionLayout, _Component);

  function PostsSectionLayout() {
    _classCallCheck(this, PostsSectionLayout);

    return _possibleConstructorReturn(this, _getPrototypeOf(PostsSectionLayout).apply(this, arguments));
  }

  _createClass(PostsSectionLayout, [{
    key: "renderPosts",
    value: function renderPosts(posts) {
      var _this = this;

      var ids = this.props.ids;

      if (this.props.postsLoading) {
        return React.createElement(LoadingIndicator, {
          size: 48
        });
      } else {
        return React.createElement(TransitionGroup, {
          component: "div",
          className: "posts-section__transition-div"
        }, _mapInstanceProperty(posts).call(posts, function (post, index) {
          var _context, _context2;

          return React.createElement(CSSTransition, {
            key: index,
            timeout: {
              enter: 500,
              exit: 300
            }
          }, React.createElement("div", {
            key: index,
            className: "posts-section__item"
          }, React.createElement(BlogPost, {
            ids: {
              blogTitle: _concatInstanceProperty(_context = "".concat(ids.blogTitlePrefix)).call(_context, index + 1),
              readFull: _concatInstanceProperty(_context2 = "".concat(ids.readFullPrefix)).call(_context2, index + 1)
            },
            postType: _this.props.postType,
            post: post,
            fromContractor: _this.props.fromContractor,
            imageSize: _this.props.imageSize
          })));
        }));
      }
    }
  }, {
    key: "renderLink",
    value: function renderLink() {
      var _this$props = this.props,
          isLink = _this$props.isLink,
          linkRoute = _this$props.linkRoute,
          linkText = _this$props.linkText;

      if (this.props.fromContractor) {
        if (isLink) {
          return React.createElement("a", {
            href: process.env.CONSUMER_DOMAIN + linkRoute,
            className: "posts-section__link-view-all"
          }, linkText);
        }
      } else {
        if (isLink) {
          return React.createElement(Link, {
            id: this.props.ids.seeMore,
            to: linkRoute,
            className: "posts-section__link-view-all"
          }, linkText);
        }
      }

      return linkText;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement("div", {
        className: cx('posts-section', this.props.className),
        ref: function ref(container) {
          return _this2.container = container;
        }
      }, React.createElement("div", {
        className: "posts-section__title"
      }, this.props.title), React.createElement("div", {
        className: "posts-section__description"
      }, this.props.description), this.renderPosts(this.props.posts), React.createElement("div", {
        className: "posts-section__link-container"
      }, this.renderLink()));
    }
  }]);

  return PostsSectionLayout;
}(Component);

_defineProperty(PostsSectionLayout, "propTypes", {
  className: PropTypes.string,
  ids: PropTypes.object,
  posts: PropTypes.array,
  title: PropTypes.object,
  description: PropTypes.string,
  linkText: PropTypes.any,
  linkRoute: PropTypes.string,
  isLink: PropTypes.bool,
  postsToShow: PropTypes.number,
  postType: PropTypes.oneOf(['blog', 'press-and-media']),
  imageSize: PropTypes.string
});

_defineProperty(PostsSectionLayout, "defaultProps", {
  ids: {}
});

export default PostsSectionLayout;