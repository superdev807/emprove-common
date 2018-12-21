'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllTimezones = exports.toISODateStr = exports.toShortTimezone = exports.getLocalTimezone = exports.getMaximumWeek = exports.getMinimumWeek = exports.getAwardDateFromRfpSentDueDate = exports.calculateProjectTimeline = exports.correctDueDate = exports.calculateTimelineFromFinalBidDueDate = exports.calculateTimelineFromSiteVisitDueDate = exports.calculateTimelineFromSubmitProposalsDueDate = exports.strToDate = exports.localDateToUTC = exports.formatUtcDate = exports.strToday = exports.convertDateFormat = undefined;

var _momentBusinessDays = require('moment-business-days');

var _momentBusinessDays2 = _interopRequireDefault(_momentBusinessDays);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _momentTimezone = require('moment-timezone');

var _momentTimezone2 = _interopRequireDefault(_momentTimezone);

var _rfp_timeline = require('../data/rfp_timeline.json');

var _rfp_timeline2 = _interopRequireDefault(_rfp_timeline);

var _constants = require('../config/constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dateFormat = 'YYYY-MM-DD';

/*
 * moment does not like MM/DD/YYYY format because it's not RFC 2822 or ISO format
 * make sure the date passed in is in MM/DD/YYYY format
 */
var convertDateFormat = exports.convertDateFormat = function convertDateFormat(date) {
  if (!date || date.length < 10) {
    return null;
  }
  return date.slice(6, 10) + '-' + date.slice(0, 5).replace('/', '-');
};

var strToday = exports.strToday = function strToday() {
  return (0, _moment2.default)().format(dateFormat);
};

/*
 * Converts the ISO date string to given format in UTC timezone
 */
var formatUtcDate = exports.formatUtcDate = function formatUtcDate(isoDateString) {
  var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'L';
  return _moment2.default.utc(isoDateString).format(format);
};

var localDateToUTC = exports.localDateToUTC = function localDateToUTC(date) {
  if (date) {
    var now = (0, _moment2.default)().utc();
    return _moment2.default.utc(date).set({ hour: now.hours(), minute: now.minutes(), second: now.seconds(), millisecond: 0 }).toISOString();
  } else {
    return null;
  }
};

// going to drop the time and make date a moment object
// 2018-06-06 02:16:19 =>
var strToDate = exports.strToDate = function strToDate(str) {
  if (str) {
    var date = (0, _moment2.default)(str, dateFormat);
    if (date.isValid()) {
      return date;
    }
  }
  return null;
};

var calculateTimelineFromSubmitProposalsDueDate = exports.calculateTimelineFromSubmitProposalsDueDate = function calculateTimelineFromSubmitProposalsDueDate(submitProposalsDueDate, businessDays, timezone) {
  var businessDaysToUse = process.env.IN_TEST_MODE === 'true' ? 'qa_business_days' : 'md_project_business_days';

  submitProposalsDueDate = (0, _momentBusinessDays2.default)(_momentTimezone2.default.tz(submitProposalsDueDate, timezone)).businessAdd(businessDays && businessDays > 0 ? businessDays : 0);
  var siteVisitDueDate = submitProposalsDueDate.businessAdd(_rfp_timeline2.default[4][businessDaysToUse] + _rfp_timeline2.default[5][businessDaysToUse]);
  var finalBidDueDate = (0, _momentBusinessDays2.default)(siteVisitDueDate).businessAdd(_rfp_timeline2.default[6][businessDaysToUse]);
  var awardDate = (0, _momentBusinessDays2.default)(finalBidDueDate).businessAdd(_rfp_timeline2.default[7][businessDaysToUse]);

  return { submitProposalsDueDate: submitProposalsDueDate, siteVisitDueDate: siteVisitDueDate, finalBidDueDate: finalBidDueDate, awardDate: awardDate };
};

var calculateTimelineFromSiteVisitDueDate = exports.calculateTimelineFromSiteVisitDueDate = function calculateTimelineFromSiteVisitDueDate(siteVisitDueDate, businessDays) {
  var businessDaysToUse = process.env.IN_TEST_MODE === 'true' ? 'qa_business_days' : 'md_project_business_days';

  siteVisitDueDate = (0, _momentBusinessDays2.default)(siteVisitDueDate).businessAdd(businessDays && businessDays > 0 ? businessDays : 0);

  var finalBidDueDate = (0, _momentBusinessDays2.default)(siteVisitDueDate).businessAdd(_rfp_timeline2.default[6][businessDaysToUse]);
  var awardDate = (0, _momentBusinessDays2.default)(finalBidDueDate).businessAdd(_rfp_timeline2.default[7][businessDaysToUse]);

  return { siteVisitDueDate: siteVisitDueDate, finalBidDueDate: finalBidDueDate, awardDate: awardDate };
};

var calculateTimelineFromFinalBidDueDate = exports.calculateTimelineFromFinalBidDueDate = function calculateTimelineFromFinalBidDueDate(finalBidDueDate, businessDays) {
  var businessDaysToUse = process.env.IN_TEST_MODE === 'true' ? 'qa_business_days' : 'md_project_business_days';

  finalBidDueDate = (0, _momentBusinessDays2.default)(finalBidDueDate).businessAdd(businessDays && businessDays > 0 ? businessDays : 0);
  var awardDate = (0, _momentBusinessDays2.default)(finalBidDueDate).businessAdd(_rfp_timeline2.default[7][businessDaysToUse]);

  return { finalBidDueDate: finalBidDueDate, awardDate: awardDate };
};

var correctDueDate = exports.correctDueDate = function correctDueDate(date) {
  return (
    // Change to Pacific timezone rather than UTC to handle daylight saving time
    _momentTimezone2.default.tz(date, _constants.PACIFIC_TIMEZONE).set({ hour: 17, minute: 0, second: 0, millisecond: 0 })
  );
};

var calculateProjectTimeline = exports.calculateProjectTimeline = function calculateProjectTimeline(rfpSentDueDate) {
  if (!rfpSentDueDate) {
    rfpSentDueDate = (0, _moment2.default)();
  }

  var businessDaysToUse = process.env.IN_TEST_MODE === 'true' ? 'qa_business_days' : 'md_project_business_days';

  var submitProposalsDueDate = correctDueDate((0, _momentBusinessDays2.default)(rfpSentDueDate).businessAdd(_rfp_timeline2.default[2][businessDaysToUse] + _rfp_timeline2.default[3][businessDaysToUse]));

  var siteVisitDueDate = correctDueDate((0, _momentBusinessDays2.default)(submitProposalsDueDate).businessAdd(_rfp_timeline2.default[4][businessDaysToUse] + _rfp_timeline2.default[5][businessDaysToUse]));

  var finalBidDueDate = correctDueDate((0, _momentBusinessDays2.default)(siteVisitDueDate).businessAdd(_rfp_timeline2.default[6][businessDaysToUse]));

  var awardDate = correctDueDate((0, _momentBusinessDays2.default)(finalBidDueDate).businessAdd(_rfp_timeline2.default[7][businessDaysToUse]));

  return {
    rfpSentDueDate: rfpSentDueDate,
    submitProposalsDueDate: submitProposalsDueDate,
    siteVisitDueDate: siteVisitDueDate,
    finalBidDueDate: finalBidDueDate,
    awardDate: awardDate
  };
};

var getAwardDateFromRfpSentDueDate = exports.getAwardDateFromRfpSentDueDate = function getAwardDateFromRfpSentDueDate(rfpSentDueDate, timezone) {
  var rfpSentDueDateMoment = _momentTimezone2.default.tz(rfpSentDueDate || undefined, timezone);
  var projectTimeline = calculateProjectTimeline(rfpSentDueDateMoment);
  var awardDate = projectTimeline.awardDate;
  return awardDate;
};

var getMinimumWeek = exports.getMinimumWeek = function getMinimumWeek(start, end) {
  var daysDiff = (0, _moment2.default)(end).diff((0, _moment2.default)(start), 'days');
  var weeksDiff = Math.round(daysDiff / 7) - 1;
  return weeksDiff >= 0 ? weeksDiff : 0;
};

var getMaximumWeek = exports.getMaximumWeek = function getMaximumWeek(start, end) {
  var daysDiff = (0, _moment2.default)(end).diff((0, _moment2.default)(start), 'days');
  var weeksDiff = Math.round(daysDiff / 7) + 1;
  return weeksDiff;
};

/*
 * Get local timezone from browser
 */
var getLocalTimezone = exports.getLocalTimezone = function getLocalTimezone() {
  return _momentTimezone2.default.tz.guess();
};

/*
 * Converts the ISO timezone name into shorter format. e.g. from `America/Los_Angeles` to `PST`
 */
var toShortTimezone = exports.toShortTimezone = function toShortTimezone(timezone) {
  return (0, _momentTimezone2.default)().tz(timezone || getLocalTimezone()).format('z');
};

/*
 * Converts the date string or moment date into ISO date string in 'YYYY-MM-DD' format and specified timezone
 */
var toISODateStr = exports.toISODateStr = function toISODateStr(date, timezone) {
  if (date) {
    return timezone ? (0, _momentTimezone2.default)(date).tz(timezone).format(dateFormat) : (0, _moment2.default)(date).format(dateFormat);
  } else {
    return date;
  }
};

var getAllTimezones = exports.getAllTimezones = function getAllTimezones() {
  return _momentTimezone2.default.tz.names().filter(function (timezone) {
    return (/^(America|Asia|Europe|Australia|Africa|Pacific|Atlantic|Indian)/.test(timezone)
    );
  });
};