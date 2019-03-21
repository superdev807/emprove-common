'use strict';

import { createSelector } from 'reselect';

import { postsSelector } from '../selectors';

const filterPosts = (posts, categoryName, limit) => {
  const filteredPosts = [];

  const postsLength = posts.length;
  for (let i = 0; i < postsLength; i++) {
    const post = posts[i];
    if (post.categories && post.categories[categoryName] != null) {
      filteredPosts.push(post);

      if (limit != null && filteredPosts.length === limit) {
        break;
      }
    }
  }

  return filteredPosts;
};

export const featuredOnSitePostsSelector = createSelector(postsSelector, posts => {
  return filterPosts(posts, 'Featured On Site', 3);
});
export const pressAndMediaPostsSelector = createSelector(postsSelector, posts => {
  return filterPosts(posts, 'Press and Media', 3);
});
