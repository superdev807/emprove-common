'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HomeArea = exports.RfpStatus = exports.ScopeAction = exports.UserAction = void 0;
var UserAction = Object.freeze({
  KEEP_EXISTING: 1,
  REMOVE: 2,
  REPAINT_ONLY: 3,
  REPLACE: 4,
  NEW: 5,
  NEW_AND_RELOCATE: 6,
  NOT_APPLICABLE: 7
});
exports.UserAction = UserAction;
var ScopeAction = {
  NEW: 1,
  REPAINT: 2,
  REMOVE: 3
};
exports.ScopeAction = ScopeAction;
var RfpStatus = {
  RFP_BEING_PREPARED: 1,
  RFP_SENT: 2,
  CONTRACTORS_CONFIRM_INTEREST: 3,
  CONTRACTORS_SUBMIT_INIT_BIDS: 4,
  CONSUMER_REVIEWS_BIDS: 5,
  CONTRACTORS_SITE_VISIT: 6,
  CONTRACTORS_SUBMIT_FINAL_BIDS: 7,
  CONSUMER_REVIEWS_FINAL_BIDS: 8,
  CONTRACTOR_GETS_AWARD: 9,
  CONSUMER_SIGNS_CONTRACT: 10,
  CONTRACTOR_SIGNS_CONTRACT: 11,
  PROJECT_STARTS: 12,
  CONSUMER_DID_NOT_RECEIVE_INIT_BIDS: 13,
  CONSUMER_DID_NOT_RECEIVE_FINAL_BIDS: 14,
  CONSUMER_DID_NOT_AWARD_CONTRACTOR: 15
};
exports.RfpStatus = RfpStatus;
var HomeArea = {
  ALL: -1,
  BACKYARD: 3,
  GUEST_BATHROOM: 6,
  MASTER_BATHROOM: 8,
  POWDER_ROOM: 9,
  GUEST_BEDROOM: 10,
  MASTER_BEDROOM: 11,
  DECK: 15,
  DEN: 16,
  FOYER: 21,
  KITCHEN: 27,
  KITCHENETTE: 28,
  LIVING_ROOM: 31,
  LOFT: 32,
  OFFICE: 35,
  PATIO: 37,
  GENERAL_LIVING: 43
};
exports.HomeArea = HomeArea;