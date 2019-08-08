'use strict';

import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import CSSTransition from 'react-transition-group/CSSTransition';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import { Link } from 'react-router-dom';

import BlogPost from '../../../BlogPost';
import LoadingIndicator from '../../../LoadingIndicator';
import './style.scss';

class PostsSectionLayout extends Component {
  static propTypes = {
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
  };

  static defaultProps = {
    ids: {}
  };

  renderPosts(posts) {
    const { ids } = this.props;

    if (this.props.postsLoading) {
      return <LoadingIndicator size={48} />;
    } else {
      return (
        <TransitionGroup component="div" className="posts-section__transition-div">
          {posts.map((post, index) => (
            <CSSTransition key={index} timeout={{ enter: 500, exit: 300 }}>
              <div key={index} className="posts-section__item">
                <BlogPost
                  ids={{ blogTitle: `${ids.blogTitlePrefix}${index + 1}`, readFull: `${ids.readFullPrefix}${index + 1}` }}
                  postType={this.props.postType}
                  post={post}
                  fromContractor={this.props.fromContractor}
                  imageSize={this.props.imageSize}
                />
              </div>
            </CSSTransition>
          ))}
        </TransitionGroup>
      );
    }
  }

  renderLink() {
    const { isLink, linkRoute, linkText } = this.props;

    if (this.props.fromContractor) {
      if (isLink) {
        return (
          <a href={process.env.CONSUMER_DOMAIN + linkRoute} className="posts-section__link-view-all">
            {linkText}
          </a>
        );
      }
    } else {
      if (isLink) {
        return (
          <Link id={this.props.ids.seeMore} to={linkRoute} className="posts-section__link-view-all">
            {linkText}
          </Link>
        );
      }
    }
    return linkText;
  }

  render() {
    return (
      <div className={cx('posts-section', this.props.className)} ref={container => (this.container = container)}>
        <div className="posts-section__title">{this.props.title}</div>

        <div className="posts-section__description">{this.props.description}</div>
        {this.renderPosts(this.props.posts)}

        <div className="posts-section__link-container">{this.renderLink()}</div>
      </div>
    );
  }
}

export default PostsSectionLayout;
