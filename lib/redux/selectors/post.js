'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pressAndMediaPostsSelector = exports.featuredOnSitePostsSelector = void 0;

var _reselect = require("reselect");

var _selectors = require("../selectors");

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

var featuredOnSitePostsSelector = (0, _reselect.createSelector)(_selectors.postsSelector, function (posts) {
  return filterPosts(posts, 'Featured On Site', 3);
});
exports.featuredOnSitePostsSelector = featuredOnSitePostsSelector;
var pressAndMediaPostsSelector = (0, _reselect.createSelector)(_selectors.postsSelector, function (posts) {
  return filterPosts(posts, 'Press and Media', 3);
});
exports.pressAndMediaPostsSelector = pressAndMediaPostsSelector;