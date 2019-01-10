'use strict';

import { createAction, handleActions } from 'redux-actions';

import { API_PENDING, API_SUCCESS, API_FAIL, requestPending, requestSuccess, requestFail } from '../api/request';
import { LIST_TRANSLATIONS, RESET_SNACKBAR, SET_SNACKBAR, TOGGLE_DRAWER } from '../constants';

const initialState = {
  drawerOpen: false,
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
    })
  },
  initialState
);
