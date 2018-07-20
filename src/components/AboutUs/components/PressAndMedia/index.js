'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import IconButton from '@material-ui/core/IconButton';
import IconScrollDown from '@material-ui/icons/KeyboardArrowDown';
import IconScrollUp from '@material-ui/icons/KeyboardArrowUp';

import PostsSectionLayout from '../PostsSectionLayout';
import withPosts from '~/hocs/withPosts';
import './style.scss';

const INITIAL_POSTS_TO_SHOW = 3;

class PressAndMedia extends Component {
  static propTypes = {
    posts: PropTypes.array
  };

  constructor(props) {
    super(props);
    this.state = {
      postsToShow: 3,
      scrollOpened: false
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

  handleScrollDownClick = event => {
    this.setState({ scrollOpened: !this.state.scrollOpened }, () => {
      if (this.state.scrollOpened) {
        this.setState({ postsToShow: null });
      } else {
        this.setState({ postsToShow: INITIAL_POSTS_TO_SHOW });
      }
    });
  };

  render() {
    const { postsToShow, scrollOpened } = this.state;
    const { posts } = this.props;
    const linkText = (
      <div className="press-media__link-box">
        View all press & media{' '}
        <IconButton className="press-media__down-icon-button" onClick={this.handleScrollDownClick}>
          {scrollOpened ? <IconScrollUp /> : <IconScrollDown />}
        </IconButton>
      </div>
    );
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
        linkRoute="/blog"
        description=""
        linkText={linkText}
        title={title}
        posts={this.getPosts()}
        postsToShow={postsToShow}
      />
    );
  }
}

export default withPosts({
  params: {
    category: 'press-and-media',
    fields: 'ID,title,URL,author,featured_image,excerpt,date'
  }
})(PressAndMedia);
