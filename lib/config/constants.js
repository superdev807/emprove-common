'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.COUPON_VALUE_TYPE = exports.COUPON_TYPE = exports.PARTNER = exports.FIND_NEAR_CITY_START_RADIUS = exports.VIEW_PDF_KIND = exports.PACIFIC_TIMEZONE = void 0;
var PACIFIC_TIMEZONE = 'America/Los_Angeles';
exports.PACIFIC_TIMEZONE = PACIFIC_TIMEZONE;
var VIEW_PDF_KIND = {
  FULL_RFP: 'full_rfp',
  SAMPLE_RFP: 'sample_rfp',
  SAMPLE_CONTRACT: 'sample_contract',
  SAMPLE_FLYER: 'sample_flyer',
  RFP_SUMMARY: 'rfp_summary'
};
exports.VIEW_PDF_KIND = VIEW_PDF_KIND;
var FIND_NEAR_CITY_START_RADIUS = 500; // miles

exports.FIND_NEAR_CITY_START_RADIUS = FIND_NEAR_CITY_START_RADIUS;
var PARTNER = {
  REDFIN: 'redfin',
  ZILLOW: 'zillow',
  REALTOR_DOT_COM: 'realtor-dot-com',
  COMPASS: 'compass',
  COLDWELL: 'coldwell',
  KELLER_WILLIAMS: 'kw',
  EMPROVE: 'emprove'
};
exports.PARTNER = PARTNER;
var COUPON_TYPE = {
  SINGLE: 'single',
  MULTI: 'multi'
};
exports.COUPON_TYPE = COUPON_TYPE;
var COUPON_VALUE_TYPE = {
  FREE: 'free',
  DISCOUNT: 'discount',
  VALUE_DISCOUNT: 'value_discount'
};
exports.COUPON_VALUE_TYPE = COUPON_VALUE_TYPE;