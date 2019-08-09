'use strict';

import "core-js/modules/es.regexp.exec";
import "core-js/modules/es.string.match";
import _classCallCheck from "@babel/runtime-corejs3/helpers/classCallCheck";
import _createClass from "@babel/runtime-corejs3/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime-corejs3/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime-corejs3/helpers/getPrototypeOf";
import _inherits from "@babel/runtime-corejs3/helpers/inherits";
import _defineProperty from "@babel/runtime-corejs3/helpers/defineProperty";
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { getBlogPosts, getPostBySlug } from '../redux/modules/post';
import { postSelector, postsSelector, postsLoadingSelector } from '../redux/selectors';

var withPosts = function withPosts(_ref) {
  var isSinglePost = _ref.isSinglePost,
      params = _ref.params;
  return function (WrappedComponent) {
    var PostWrapper =
    /*#__PURE__*/
    function (_Component) {
      _inherits(PostWrapper, _Component);

      function PostWrapper() {
        _classCallCheck(this, PostWrapper);

        return _possibleConstructorReturn(this, _getPrototypeOf(PostWrapper).apply(this, arguments));
      }

      _createClass(PostWrapper, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          var _this$props = this.props,
              getBlogPosts = _this$props.getBlogPosts,
              getPostBySlug = _this$props.getPostBySlug,
              match = _this$props.match;
          var slug;

          if (match) {
            slug = match.params.slug;
          }

          if (isSinglePost) {
            getPostBySlug({
              slug: slug
            });
          } else {
            getBlogPosts({
              params: params
            });
          }
        }
      }, {
        key: "render",
        value: function render() {
          return React.createElement(WrappedComponent, this.props);
        }
      }]);

      return PostWrapper;
    }(Component);

    _defineProperty(PostWrapper, "propTypes", {
      post: PropTypes.object,
      params: PropTypes.object,
      isSinglePost: PropTypes.bool,
      getBlogPosts: PropTypes.func.isRequired,
      getPostBySlug: PropTypes.func.isRequired
    });

    var selector = createStructuredSelector({
      post: postSelector,
      postLoading: postsLoadingSelector,
      posts: postsSelector,
      postsLoading: postsLoadingSelector
    });
    var actions = {
      getBlogPosts: getBlogPosts,
      getPostBySlug: getPostBySlug
    };
    return connect(selector, actions)(PostWrapper);
  };
};

export default withPosts;