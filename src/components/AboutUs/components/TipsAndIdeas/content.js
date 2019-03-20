'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PostsSectionLayout from '../PostsSectionLayout';

class TipsAndIdeas extends Component {
  static propTypes = {
    ids: PropTypes.object,
    imageSize: PropTypes.string
  };

  static defaultProps = {
    ids: {}
  };

  render() {
    const { linkText, posts, fromContractor, imageSize } = this.props;
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
        postsLoading={this.props.postsLoading}
        fromContractor={fromContractor}
        isLink
        linkRoute="/blog"
        postType="blog"
        linkText={linkText || 'view all tips and ideas'}
        imageSize={imageSize}
      />
    );
  }
}

export default TipsAndIdeas;
