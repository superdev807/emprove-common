'use strict';

import { createSelector } from 'reselect';
import { postsSelector } from '../selectors';

var filterPosts = function filterPosts(posts, categoryName, limit) {
  var filteredPosts = [];
  var postsLength = posts.length;

  for (var i = 0; i < postsLength; i++) {
    var post = posts[i];

    if (post.categories && post.categories[categoryName] != null) {
      filteredPosts.push(post);

      if (limit != null && filteredPosts.length === limit) {
        break;
      }
    }
  }

  return filteredPosts;
};

export var featuredOnSitePostsSelector = createSelector(postsSelector, function (posts) {
  return filterPosts(posts, 'Featured On Site', 3);
});
export var pressAndMediaPostsSelector = createSelector(postsSelector, function (posts) {
  return filterPosts(posts, 'Press and Media', 3);
});