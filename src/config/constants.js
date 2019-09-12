'use strict';

export const PACIFIC_TIMEZONE = 'America/Los_Angeles';

export const VIEW_PDF_KIND = {
  FULL_RFP: 'full_rfp',
  SAMPLE_RFP: 'sample_rfp',
  SAMPLE_CONTRACT: 'sample_contract',
  SAMPLE_FLYER: 'sample_flyer',
  RFP_SUMMARY: 'rfp_summary'
};

export const FIND_NEAR_CITY_START_RADIUS = 500; // miles

export const PARTNER = {
  REDFIN: 'redfin',
  ZILLOW: 'zillow',
  REALTOR_DOT_COM: 'realtor-dot-com',
  COMPASS: 'compass',
  COLDWELL: 'coldwell',
  KELLER_WILLIAMS: 'kw',
  EMPROVE: 'emprove'
};

export const COUPON_TYPE = {
  SINGLE: 'single',
  MULTI: 'multi'
};

export const COUPON_VALUE_TYPE = {
  FREE: 'free',
  DISCOUNT: 'discount',
  VALUE_DISCOUNT: 'value_discount'
};

export const FORM = Object.freeze({
  FLYER: 'flyerForm'
});
