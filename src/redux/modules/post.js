'use strict';

import { createAction, handleActions } from 'redux-actions';

import { API_PENDING, API_SUCCESS, API_FAIL, requestPending, requestSuccess, requestFail } from '../api/request';

import { GET_BLOG_POSTS, GET_POST_BY_SLUG } from '../constants';

/* Initial state */
const initialState = {
  posts: [],
  post: null,
  postsStatus: 'INIT'
};

/* Action creators */
export const getBlogPosts = createAction(GET_BLOG_POSTS);
export const getPostBySlug = createAction(GET_POST_BY_SLUG);

/* Reducer */

export default handleActions(
  {
    /* getBlogPosts actions */

    [requestPending(GET_BLOG_POSTS)]: (state, { payload }) => ({
      ...state,
      postsStatus: API_PENDING
    }),

    [requestSuccess(GET_BLOG_POSTS)]: (state, { payload }) => ({
      ...state,
      posts: payload,
      postsStatus: API_SUCCESS
    }),

    [requestFail(GET_BLOG_POSTS)]: (state, { payload }) => ({
      ...state,
      posts: [],
      postsStatus: API_FAIL
    }),
    /* getPostBySlug actions*/

    [requestPending(GET_POST_BY_SLUG)]: (state, { payload }) => ({
      ...state,
      postsStatus: API_PENDING
    }),

    [requestSuccess(GET_POST_BY_SLUG)]: (state, { payload }) => ({
      ...state,
      post: payload,
      postsStatus: API_SUCCESS
    }),

    [requestFail(GET_POST_BY_SLUG)]: (state, { payload }) => ({
      ...state,
      post: [],
      postsStatus: API_FAIL
    })
  },
  initialState
);
