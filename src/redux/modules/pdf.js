'use strict';

import { createAction, handleActions } from 'redux-actions';

import { API_PENDING, API_SUCCESS, API_FAIL, requestPending, requestSuccess, requestFail } from '../api/request';

import {
  EXPORT_RFP_PDF,
  DOWNLOAD_RFP_PDF,
  SEND_RFP_PDF,
  EXPORT_BID_PDF,
  DOWNLOAD_BID_PDF,
  SEND_BID_PDF,
  EXPORT_CONTRACT_PDF
} from '../constants';

/* Initial state */
const initialState = {
  status: 'INIT',
  sendStatus: 'INIT'
};

/* Action creators */
export const exportRfpPdf = createAction(EXPORT_RFP_PDF);
export const downloadRfpPdf = createAction(DOWNLOAD_RFP_PDF);
export const sendRfpPdf = createAction(SEND_RFP_PDF);

export const exportBidPdf = createAction(EXPORT_BID_PDF);
export const downloadBidPdf = createAction(DOWNLOAD_BID_PDF);
export const sendBidPdf = createAction(SEND_BID_PDF);

export const exportContractPdf = createAction(EXPORT_CONTRACT_PDF);

/* Reducer */

export default handleActions(
  {
    /* exportRfpPdf actions */

    [requestPending(EXPORT_RFP_PDF)]: (state, { payload }) => ({
      ...state,
      status: API_PENDING
    }),

    [requestSuccess(EXPORT_RFP_PDF)]: (state, { payload }) => ({
      ...state,
      status: API_SUCCESS
    }),

    [requestFail(EXPORT_RFP_PDF)]: (state, { payload }) => ({
      ...state,
      status: API_FAIL
    }),

    /* downloadRfpPdf actions */

    [requestPending(DOWNLOAD_RFP_PDF)]: (state, { payload }) => ({
      ...state,
      status: API_PENDING
    }),

    [requestSuccess(DOWNLOAD_RFP_PDF)]: (state, { payload }) => ({
      ...state,
      status: API_SUCCESS
    }),

    [requestFail(DOWNLOAD_RFP_PDF)]: (state, { payload }) => ({
      ...state,
      status: API_FAIL
    }),

    /* sendRfpPdf actions */

    [requestPending(SEND_RFP_PDF)]: (state, { payload }) => ({
      ...state,
      sendStatus: API_PENDING
    }),

    [requestSuccess(SEND_RFP_PDF)]: (state, { payload }) => ({
      ...state,
      sendStatus: API_SUCCESS
    }),

    [requestFail(SEND_RFP_PDF)]: (state, { payload }) => ({
      ...state,
      sendStatus: API_FAIL
    }),
    /* exportBidPdf actions */

    [requestPending(EXPORT_BID_PDF)]: (state, { payload }) => ({
      ...state,
      status: API_PENDING
    }),

    [requestSuccess(EXPORT_BID_PDF)]: (state, { payload }) => ({
      ...state,
      status: API_SUCCESS
    }),

    [requestFail(EXPORT_BID_PDF)]: (state, { payload }) => ({
      ...state,
      status: API_FAIL
    }),

    /* downloadBidPdf actions */

    [requestPending(DOWNLOAD_BID_PDF)]: (state, { payload }) => ({
      ...state,
      status: API_PENDING
    }),

    [requestSuccess(DOWNLOAD_BID_PDF)]: (state, { payload }) => ({
      ...state,
      status: API_SUCCESS
    }),

    [requestFail(DOWNLOAD_BID_PDF)]: (state, { payload }) => ({
      ...state,
      status: API_FAIL
    }),

    /* sendBidPdf actions */

    [requestPending(SEND_BID_PDF)]: (state, { payload }) => ({
      ...state,
      sendStatus: API_PENDING
    }),

    [requestSuccess(SEND_BID_PDF)]: (state, { payload }) => ({
      ...state,
      sendStatus: API_SUCCESS
    }),

    [requestFail(SEND_BID_PDF)]: (state, { payload }) => ({
      ...state,
      sendStatus: API_FAIL
    }),

    /* exportContractPdf actions */

    [requestPending(EXPORT_CONTRACT_PDF)]: (state, { payload }) => ({
      ...state,
      status: API_PENDING
    }),

    [requestSuccess(EXPORT_CONTRACT_PDF)]: (state, { payload }) => ({
      ...state,
      status: API_SUCCESS
    }),

    [requestFail(EXPORT_CONTRACT_PDF)]: (state, { payload }) => ({
      ...state,
      status: API_FAIL
    })
  },
  initialState
);
