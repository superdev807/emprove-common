'use strict';

import React, { Component } from 'react';

import withPosts from '~/hocs/withPosts';
import PostsSectionLayout from '../PostsSectionLayout';

class TipsAndIdeas extends Component {
  render() {
    const { posts } = this.props;
    let title = (
      <div>
        TIPS&nbsp;
        <span>&</span>&nbsp;
        <b>IDEAS</b>
      </div>
    );

    return (
      <PostsSectionLayout
        className={this.props.className}
        description="Get Ideas and Advice for Your Home Improvement Projects"
        title={title}
        posts={posts}
        isLink
        linkRoute="/blog"
        linkText="view all tips and ideas"
      />
    );
  }
}

export default withPosts({
  params: {
    number: 3,
    category: 'featured-on-site',
    fields: 'ID,title,URL,author,featured_image,excerpt,date'
  }
})(TipsAndIdeas);
