'use strict';

import { PARTNER } from '../config/constants';

export const getPartnerFromHost = () => {
  if (process.env.REDFIN_SUBDOMAIN && process.env.REDFIN_SUBDOMAIN.includes(window.location.host)) {
    return PARTNER.REDFIN;
  }
  return null;
};
