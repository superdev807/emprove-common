'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import withPosts from '../../../../hocs/withPosts';
import PostsSectionLayout from '../PostsSectionLayout';

class TipsAndIdeas extends Component {
  static propTypes = {
    ids: PropTypes.object
  };

  static defaultProps = {
    ids: {}
  };

  render() {
    const { linkText, posts, fromContractor } = this.props;
    let title = (
      <div>
        TIPS&nbsp;
        <span>&</span>&nbsp;
        <b>IDEAS</b>
      </div>
    );

    return (
      <PostsSectionLayout
        ids={this.props.ids}
        className={this.props.className}
        description="Get Ideas and Advice for Your Home Improvement Projects"
        title={title}
        posts={posts}
        fromContractor={fromContractor}
        isLink
        linkRoute="/blog"
        postType="blog"
        linkText={linkText || 'view all tips and ideas'}
      />
    );
  }
}

export default withPosts({
  params: {
    number: 3,
    category: 'featured-on-site',
    fields: 'ID,slug,title,URL,author,featured_image,excerpt,date'
  }
})(TipsAndIdeas);
