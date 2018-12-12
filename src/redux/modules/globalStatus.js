'use strict';

import { createAction, handleActions } from 'redux-actions';

import { RESET_SNACKBAR, SET_SNACKBAR, TOGGLE_DRAWER } from '../constants';

const initialState = {
  drawerOpen: false,
  snackbar: null,
  variant: 'success'
};

/* Action creators */
export const resetSnackbar = createAction(RESET_SNACKBAR);
export const setSnackbar = createAction(SET_SNACKBAR);
export const toggleDrawer = createAction(TOGGLE_DRAWER);

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
    })
  },
  initialState
);
