'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Link } from 'react-router-dom';

import { decodeSpecialCharacters } from '../../utils/pureFunctions';
import './style.scss';

class BlogPost extends Component {
  static propTypes = {
    post: PropTypes.any,
    postType: PropTypes.oneOf(['blog', 'press-and-media'])
  };
  getURL() {
    const { post } = this.props;

    let url = '';
    if (post && post.URL) {
      url = `${post.ID}/${post.slug}`;
    }
    return url;
  }
  render() {
    const { post, postType } = this.props;

    return (
      <div className="post-item">
        <Link className="post-item__link-wrapper" to={{ pathname: `/${postType}/${this.getURL()}`, state: { reload: false } }}>
          <img className="post-item__image" src={post.featured_image} />
          <div className="post-item__title">
            <b>{decodeSpecialCharacters(post.title)}</b>
          </div>
        </Link>
        <div className="post-item__date">{moment(post.date).format('MMMM DD, YYYY')}</div>
        <div className="post-item__excerpt" dangerouslySetInnerHTML={{ __html: post.excerpt }} />
        <Link className="post-item__read-story" to={{ pathname: `/${postType}/${this.getURL()}`, state: { reload: false } }}>
          <b>READ THE FULL STORY</b>
        </Link>
      </div>
    );
  }
}

export default BlogPost;
