'use strict';

import { createAction, handleActions } from 'redux-actions';

import { API_PENDING, API_SUCCESS, API_FAIL, requestPending, requestSuccess, requestFail } from '../api/request';
import { LIST_TRANSLATIONS, RESET_SNACKBAR, SET_SNACKBAR, SET_LANDING_VISITED, SET_GLOBAL_PROPERTY, TOGGLE_DRAWER } from '../constants';

const initialState = {
  drawerOpen: false,
  landingVisited: false,
  snackbar: null,
  variant: 'success',
  translations: [],
  translationsStatus: 'INIT'
};

/* Action creators */
export const resetSnackbar = createAction(RESET_SNACKBAR);
export const setSnackbar = createAction(SET_SNACKBAR);
export const toggleDrawer = createAction(TOGGLE_DRAWER);
export const listTranslations = createAction(LIST_TRANSLATIONS);
export const setLandingVisited = createAction(SET_LANDING_VISITED);
export const setGlobalProperty = createAction(SET_GLOBAL_PROPERTY);

/* Reducer */

export default handleActions(
  {
    [SET_SNACKBAR]: (state, { payload }) => ({
      ...state,
      snackbar: payload.message, // snackbar message
      variant: payload.variant, // snackbar variant
      anchor: payload.anchor
    }),

    [RESET_SNACKBAR]: (state, { payload }) => ({
      ...state,
      snackbar: null,
      variant: 'success'
    }),

    [TOGGLE_DRAWER]: (state, { payload }) => ({
      ...state,
      drawerOpen: typeof payload === 'boolean' ? payload : !state.drawerOpen
    }),

    [SET_LANDING_VISITED]: (state, { payload }) => ({
      ...state,
      landingVisited: true
    }),

    /* listTranslations actions */

    [requestPending(LIST_TRANSLATIONS)]: (state, { payload }) => ({
      ...state,
      translationsStatus: API_PENDING
    }),

    [requestSuccess(LIST_TRANSLATIONS)]: (state, { payload }) => ({
      ...state,
      translations: payload,
      translationsStatus: API_SUCCESS
    }),

    [requestFail(LIST_TRANSLATIONS)]: (state, { payload }) => ({
      ...state,
      translationsStatus: API_FAIL
    }),

    [SET_GLOBAL_PROPERTY]: (state, action) => ({
      ...state,
      ...action.payload
    })
  },
  initialState
);
