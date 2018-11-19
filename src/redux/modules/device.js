'use strict';

import { createAction, handleActions } from 'redux-actions';
import { DETECT_DEVICE } from '../constants';

/* Initial state */

const initialState = {
  isMobile: null,
  isPhone: null,
  isTablet: null
};

/* Action creators */
export const detectDevice = createAction(DETECT_DEVICE);

/* Reducer */
export default handleActions(
  {
    /* detectDevice actions */
    [DETECT_DEVICE]: (state, { payload }) => {
      return ({
        ...state,
        isMobile: payload.isMobile,
        isPhone: payload.isPhone,
        isTablet: payload.isTablet
      });
    }
  },
  initialState
);
