'use strict';

import _filterInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/filter";
import _sliceInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/slice";
import _concatInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/concat";
import business from 'moment-business-days';
import moment from 'moment';
import momenttz from 'moment-timezone';
import timeline from '../data/rfp_timeline.json';
import { PACIFIC_TIMEZONE } from '../config/constants';
var dateFormat = 'YYYY-MM-DD';
/*
 * moment does not like MM/DD/YYYY format because it's not RFC 2822 or ISO format
 * make sure the date passed in is in MM/DD/YYYY format
 */

export var convertDateFormat = function convertDateFormat(date) {
  var _context;

  if (!date || date.length < 10) {
    return null;
  }

  return _concatInstanceProperty(_context = "".concat(_sliceInstanceProperty(date).call(date, 6, 10), "-")).call(_context, _sliceInstanceProperty(date).call(date, 0, 5).replace('/', '-'));
};
export var strToday = function strToday() {
  return moment().format(dateFormat);
};
/*
 * Converts the ISO date string to given format in UTC timezone
 */

export var formatUtcDate = function formatUtcDate(isoDateString) {
  var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'L';
  return moment.utc(isoDateString).format(format);
};
export var localDateToUTC = function localDateToUTC(date) {
  if (date) {
    var now = moment().utc();
    return moment.utc(date).set({
      hour: now.hours(),
      minute: now.minutes(),
      second: now.seconds(),
      millisecond: 0
    }).toISOString();
  } else {
    return null;
  }
}; // going to drop the time and make date a moment object
// 2018-06-06 02:16:19 =>

export var strToDate = function strToDate(str) {
  if (str) {
    var date = moment(str, dateFormat);

    if (date.isValid()) {
      return date;
    }
  }

  return null;
};
export var calculateTimelineFromSubmitProposalsDueDate = function calculateTimelineFromSubmitProposalsDueDate(submitProposalsDueDate, businessDays, timezone) {
  var businessDaysToUse = process.env.IN_TEST_MODE === 'true' ? 'qa_business_days' : 'md_project_business_days';
  submitProposalsDueDate = business(momenttz.tz(submitProposalsDueDate, timezone)).businessAdd(businessDays && businessDays > 0 ? businessDays : 0);
  var siteVisitDueDate = submitProposalsDueDate.businessAdd(timeline[4][businessDaysToUse] + timeline[5][businessDaysToUse]);
  var finalBidDueDate = business(siteVisitDueDate).businessAdd(timeline[6][businessDaysToUse]);
  var awardDate = business(finalBidDueDate).businessAdd(timeline[7][businessDaysToUse]);
  return {
    submitProposalsDueDate: submitProposalsDueDate,
    siteVisitDueDate: siteVisitDueDate,
    finalBidDueDate: finalBidDueDate,
    awardDate: awardDate
  };
};
export var calculateTimelineFromSiteVisitDueDate = function calculateTimelineFromSiteVisitDueDate(siteVisitDueDate, businessDays) {
  var businessDaysToUse = process.env.IN_TEST_MODE === 'true' ? 'qa_business_days' : 'md_project_business_days';
  siteVisitDueDate = business(siteVisitDueDate).businessAdd(businessDays && businessDays > 0 ? businessDays : 0);
  var finalBidDueDate = business(siteVisitDueDate).businessAdd(timeline[6][businessDaysToUse]);
  var awardDate = business(finalBidDueDate).businessAdd(timeline[7][businessDaysToUse]);
  return {
    siteVisitDueDate: siteVisitDueDate,
    finalBidDueDate: finalBidDueDate,
    awardDate: awardDate
  };
};
export var calculateTimelineFromFinalBidDueDate = function calculateTimelineFromFinalBidDueDate(finalBidDueDate, businessDays) {
  var businessDaysToUse = process.env.IN_TEST_MODE === 'true' ? 'qa_business_days' : 'md_project_business_days';
  finalBidDueDate = business(finalBidDueDate).businessAdd(businessDays && businessDays > 0 ? businessDays : 0);
  var awardDate = business(finalBidDueDate).businessAdd(timeline[7][businessDaysToUse]);
  return {
    finalBidDueDate: finalBidDueDate,
    awardDate: awardDate
  };
};
export var correctDueDate = function correctDueDate(date) {
  return (// Change to Pacific timezone rather than UTC to handle daylight saving time
    momenttz.tz(date, PACIFIC_TIMEZONE).set({
      hour: 17,
      minute: 0,
      second: 0,
      millisecond: 0
    })
  );
};
export var calculateProjectTimeline = function calculateProjectTimeline(rfpSentDueDate) {
  if (!rfpSentDueDate) {
    rfpSentDueDate = moment();
  }

  var businessDaysToUse = process.env.IN_TEST_MODE === 'true' ? 'qa_business_days' : 'md_project_business_days';
  var submitProposalsDueDate = correctDueDate(business(rfpSentDueDate).businessAdd(timeline[2][businessDaysToUse] + timeline[3][businessDaysToUse]));
  var siteVisitDueDate = correctDueDate(business(submitProposalsDueDate).businessAdd(timeline[4][businessDaysToUse] + timeline[5][businessDaysToUse]));
  var finalBidDueDate = correctDueDate(business(siteVisitDueDate).businessAdd(timeline[6][businessDaysToUse]));
  var awardDate = correctDueDate(business(finalBidDueDate).businessAdd(timeline[7][businessDaysToUse]));
  return {
    rfpSentDueDate: rfpSentDueDate,
    submitProposalsDueDate: submitProposalsDueDate,
    siteVisitDueDate: siteVisitDueDate,
    finalBidDueDate: finalBidDueDate,
    awardDate: awardDate
  };
};
export var getAwardDateFromRfpSentDueDate = function getAwardDateFromRfpSentDueDate(rfpSentDueDate, timezone) {
  var rfpSentDueDateMoment = momenttz.tz(rfpSentDueDate || undefined, timezone);
  var projectTimeline = calculateProjectTimeline(rfpSentDueDateMoment);
  var awardDate = projectTimeline.awardDate;
  return awardDate;
};
export var getMinimumWeek = function getMinimumWeek(start, end) {
  var daysDiff = moment(end).diff(moment(start), 'days');
  var weeksDiff = Math.round(daysDiff / 7) - 1;
  return weeksDiff >= 0 ? weeksDiff : 0;
};
export var getMaximumWeek = function getMaximumWeek(start, end) {
  var daysDiff = moment(end).diff(moment(start), 'days');
  var weeksDiff = Math.round(daysDiff / 7) + 1;
  return weeksDiff;
};
/*
 * Get local timezone from browser
 */

export var getLocalTimezone = function getLocalTimezone() {
  return momenttz.tz.guess();
};
/*
 * Converts the ISO timezone name into shorter format. e.g. from `America/Los_Angeles` to `PST`
 */

export var toShortTimezone = function toShortTimezone(timezone) {
  return momenttz().tz(timezone || getLocalTimezone()).format('z');
};
/*
 * Converts the date string or moment date into ISO date string in 'YYYY-MM-DD' format and specified timezone
 */

export var toISODateStr = function toISODateStr(date, timezone) {
  if (date) {
    return timezone ? momenttz(date).tz(timezone).format(dateFormat) : moment(date).format(dateFormat);
  } else {
    return date;
  }
};
/*
 * Gets all timezone strings that are accepted by react-intl
 */

export var getAllTimezones = function getAllTimezones() {
  var _context2;

  return _filterInstanceProperty(_context2 = momenttz.tz.names()).call(_context2, function (timezone) {
    return /^(America|Asia|Europe|Australia|Africa|Pacific|Atlantic|Indian)/.test(timezone);
  });
};