'use strict';

import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

import { decodeSpecialCharacters } from '../../utils/pureFunctions';
import './style.scss';

const BlogPost = ({ post }) => {
  let url = '';
  if (post && post.URL) {
    url = post.URL.substr(process.env.BLOG_DOMAIN.length, post.URL.length);
  }

  return (
    <div className="post-item">
      <Link className="post-item__link-wrapper" to={`/blog/${url}`}>
        <img className="post-item__image" src={post.featured_image} />
        <div className="post-item__title">
          <b>{decodeSpecialCharacters(post.title)}</b>
        </div>
      </Link>
      <div className="post-item__date">{moment(post.date).format('MMMM DD, YYYY')}</div>
      <div className="post-item__excerpt" dangerouslySetInnerHTML={{ __html: post.excerpt }} />
      <Link className="post-item__read-story" to={`/blog/${url}`}>
        <b>READ THE FULL STORY</b>
      </Link>
    </div>
  );
};

export default BlogPost;
