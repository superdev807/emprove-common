'use strict';

import { createAction, handleActions } from 'redux-actions';
import { DETECT_DEVICE } from '../constants';

/* Initial state */

const initialState = {
  isMobile: false,
  isPhone: false,
  isTablet: false
};

/* Action creators */
export const detectDevice = createAction(DETECT_DEVICE);

/* Reducer */
export default handleActions(
  {
    /* detectDevice actions */
    [DETECT_DEVICE]: (state, { payload }) => ({
      ...state,
      isMobile: payload.isMobile,
      isPhone: payload.isPhone,
      isTablet: payload.isTablet
    })
  },
  initialState
);
