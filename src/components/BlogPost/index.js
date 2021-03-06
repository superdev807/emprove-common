'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import { decodeSpecialCharacters } from '../../utils/pureFunctions';
import './style.scss';

class BlogPost extends Component {
  static propTypes = {
    ids: PropTypes.object,
    post: PropTypes.any,
    postType: PropTypes.oneOf(['blog', 'press-and-media']),
    fromContractor: PropTypes.bool,
    imageSize: PropTypes.string
  };

  static defaultProps = {
    ids: {},
    postType: 'blog'
  };

  getURL() {
    const { post, postType } = this.props;

    if (post && post.URL) {
      if (this.props.fromContractor) {
        return `${process.env.CONSUMER_DOMAIN}/${postType}/${post.ID}/${post.slug}`;
      }
      return `/${postType}/${post.ID}/${post.slug}`;
    }
  }

  getFeaturedImage() {
    const { imageSize } = this.props;
    return this.props.post.featured_image + (imageSize ? imageSize : '');
  }

  render() {
    const { ids, post } = this.props;

    return (
      <div className="post-item">
        <a id={ids.blogTitle} className="post-item__link-wrapper" href={this.getURL()}>
          <img className="post-item__image" src={this.getFeaturedImage()} />
          <div className="post-item__title">
            <b>{decodeSpecialCharacters(post.title)}</b>
          </div>
        </a>
        <div className="post-item__date">{moment(post.date).format('MMMM DD, YYYY')}</div>
        <div className="post-item__excerpt" dangerouslySetInnerHTML={{ __html: post.excerpt }} />
        <a id={ids.readFull} className="post-item__read-story" href={this.getURL()}>
          <b>READ THE FULL STORY</b>
        </a>
      </div>
    );
  }
}

export default BlogPost;
