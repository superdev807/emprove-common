'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { getBlogPosts, getPostBySlug } from '../redux/modules/post';
import { postSelector, postsSelector, postsLoadingSelector } from '../redux/selectors';

const withPosts = ({ isSinglePost, params }) => WrappedComponent => {
  class PostWrapper extends Component {
    static propTypes = {
      post: PropTypes.object,
      params: PropTypes.object,
      isSinglePost: PropTypes.bool,

      getBlogPosts: PropTypes.func.isRequired,
      getPostBySlug: PropTypes.func.isRequired
    };

    componentDidMount() {
      const { getBlogPosts, getPostBySlug, match } = this.props;
      let slug;

      if (match) {
        slug = match.params.slug;
      }

      if (isSinglePost) {
        getPostBySlug({ slug });
      } else {
        getBlogPosts({ params });
      }
    }
    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  const selector = createStructuredSelector({
    post: postSelector,
    postLoading: postsLoadingSelector,
    posts: postsSelector,
    postsLoading: postsLoadingSelector
  });

  const actions = {
    getBlogPosts,
    getPostBySlug
  };

  return connect(selector, actions)(PostWrapper);
};

export default withPosts;
