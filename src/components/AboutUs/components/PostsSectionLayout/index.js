'use strict';

import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import { Link } from 'react-router-dom';

import BlogPost from '~/components/BlogPost';
import './style.scss';

class PostSectionLayout extends Component {
  static propTypes = {
    className: PropTypes.string,
    posts: PropTypes.array,
    title: PropTypes.object,
    description: PropTypes.string,
    linkText: PropTypes.any,
    linkRoute: PropTypes.string,
    isLink: PropTypes.bool,
    postsToShow: PropTypes.number
  };

  renderPosts(posts) {
    const { postsToShow } = this.props;
    return (
      <CSSTransitionGroup
        component="div"
        className="posts-section__transition-div"
        transitionName="fade"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}>
        {posts.map((post, index) => (
          <div key={index} className="posts-section__item">
            <BlogPost post={post} />
          </div>
        ))}
      </CSSTransitionGroup>
    );
  }

  render() {
    const { title, posts, linkRoute, description, isLink, linkText } = this.props;

    return (
      <div className={cx('posts-section', this.props.className)} ref={container => (this.container = container)}>
        <div className="posts-section__title">{title}</div>

        <div>{description}</div>
        {this.renderPosts(posts)}

        <div className="posts-section__link-container">
          {isLink ? (
            <Link to={linkRoute} className="posts-section__link-view-all">
              {linkText}
            </Link>
          ) : (
            linkText
          )}
        </div>
      </div>
    );
  }
}

export default PostSectionLayout;
