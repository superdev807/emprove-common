'use strict';

import { createAction, handleActions } from 'redux-actions';

import { API_PENDING, API_SUCCESS, API_FAIL, requestPending, requestSuccess, requestFail } from '../api/request';

import { SUBSCRIBE, UNSUBSCRIBE } from '../constants';

/* Initial state */
const initialState = {
  status: 'INIT'
};

/* Action creators */
export const subscribe = createAction(SUBSCRIBE);
export const unsubscribe = createAction(UNSUBSCRIBE);

/* Reducer */

export default handleActions(
  {
    /* subscribe actions */

    [requestPending(SUBSCRIBE)]: (state, { payload }) => ({
      ...state,
      status: API_PENDING
    }),

    [requestSuccess(SUBSCRIBE)]: (state, { payload }) => ({
      ...state,
      status: API_SUCCESS
    }),

    [requestFail(SUBSCRIBE)]: (state, { payload }) => ({
      ...state,
      status: API_FAIL
    }),

    /* unsubscribe actions */

    [requestPending(UNSUBSCRIBE)]: (state, { payload }) => ({
      ...state,
      status: API_PENDING
    }),

    [requestSuccess(UNSUBSCRIBE)]: (state, { payload }) => ({
      ...state,
      status: API_SUCCESS
    }),

    [requestFail(UNSUBSCRIBE)]: (state, { payload }) => ({
      ...state,
      status: API_FAIL
    })
  },
  initialState
);
