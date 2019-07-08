'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPartnerFromHost = void 0;

var _constants = require("../config/constants");

var getPartnerFromHost = function getPartnerFromHost() {
  if (process.env.REDFIN_SUBDOMAIN && process.env.REDFIN_SUBDOMAIN.includes(window.location.host)) {
    return _constants.PARTNER.REDFIN;
  }

  return null;
};

exports.getPartnerFromHost = getPartnerFromHost;