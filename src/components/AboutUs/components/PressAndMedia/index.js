'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import IconButton from '@material-ui/core/IconButton';
import IconScrollDown from '@material-ui/icons/KeyboardArrowDown';
import IconScrollUp from '@material-ui/icons/KeyboardArrowUp';

import PostsSectionLayout from '../PostsSectionLayout';
import withPosts from '../../../../hocs/withPosts';
import './style.scss';

const INITIAL_POSTS_TO_SHOW = 3;

class PressAndMedia extends Component {
  static propTypes = {
    className: PropTypes.string,
    posts: PropTypes.array
  };

  constructor(props) {
    super(props);
    this.state = {
      postsToShow: 3
    };
  }

  getPosts() {
    const { posts } = this.props;
    const { postsToShow } = this.state;

    if (postsToShow) {
      return posts.slice(0, postsToShow);
    }
    return posts;
  }

  render() {
    const { postsToShow } = this.state;
    const { posts, fromContractor } = this.props;

    const title = (
      <div>
        PRESS&nbsp;
        <span>&</span>
        &nbsp;
        <b>MEDIA</b>
      </div>
    );

    return (
      <PostsSectionLayout
        className={this.props.className}
        linkRoute="/press-and-media"
        fromContractor={fromContractor}
        description=""
        linkText="view all press and media"
        title={title}
        isLink
        posts={this.getPosts()}
        postType="press-and-media"
        postsToShow={postsToShow}
      />
    );
  }
}

export default withPosts({
  params: {
    category: 'press-and-media',
    fields: 'ID,slug,title,URL,author,featured_image,excerpt,date'
  }
})(PressAndMedia);
