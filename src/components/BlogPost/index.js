'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Link } from 'react-router-dom';

import { decodeSpecialCharacters } from '../../utils/pureFunctions';
import './style.scss';

class BlogPost extends Component {
  static defaultProps = {
    postType: 'blog'
  };

  static propTypes = {
    post: PropTypes.any,
    postType: PropTypes.oneOf(['blog', 'press-and-media']),
    fromContractor: PropTypes.bool
  };
  getURL() {
    const { post, postType, fromContractor } = this.props;

    let url = '';
    if (post && post.URL) {
      if (fromContractor) {
        return (url = `${process.env.CONSUMER_DOMAIN}/${postType}/${post.ID}/${post.slug}`);
      }
      return (url = `/${postType}/${post.ID}/${post.slug}`);
    }
  }
  render() {
    const { post } = this.props;

    return (
      <div className="post-item">
        <a className="post-item__link-wrapper" href={this.getURL()}>
          <img className="post-item__image" src={post.featured_image} />
          <div className="post-item__title">
            <b>{decodeSpecialCharacters(post.title)}</b>
          </div>
        </a>
        <div className="post-item__date">{moment(post.date).format('MMMM DD, YYYY')}</div>
        <div className="post-item__excerpt" dangerouslySetInnerHTML={{ __html: post.excerpt }} />
        <a className="post-item__read-story" href={this.getURL()}>
          <b>READ THE FULL STORY</b>
        </a>
      </div>
    );
  }
}

export default BlogPost;
