'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllTimezones = exports.toISODateStr = exports.toShortTimezone = exports.getLocalTimezone = exports.getMaximumWeek = exports.getMinimumWeek = exports.getAwardDateFromRfpSentDueDate = exports.calculateProjectTimeline = exports.correctDueDate = exports.calculateTimelineFromFinalBidDueDate = exports.calculateTimelineFromSiteVisitDueDate = exports.calculateTimelineFromSubmitProposalsDueDate = exports.strToDate = exports.localDateToUTC = exports.formatUtcDate = exports.strToday = exports.convertDateFormat = void 0;

var _momentBusinessDays = _interopRequireDefault(require("moment-business-days"));

var _moment = _interopRequireDefault(require("moment"));

var _momentTimezone = _interopRequireDefault(require("moment-timezone"));

var _rfp_timeline = _interopRequireDefault(require("../data/rfp_timeline.json"));

var _constants = require("../config/constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dateFormat = 'YYYY-MM-DD';
/*
 * moment does not like MM/DD/YYYY format because it's not RFC 2822 or ISO format
 * make sure the date passed in is in MM/DD/YYYY format
 */

var convertDateFormat = function convertDateFormat(date) {
  if (!date || date.length < 10) {
    return null;
  }

  return "".concat(date.slice(6, 10), "-").concat(date.slice(0, 5).replace('/', '-'));
};

exports.convertDateFormat = convertDateFormat;

var strToday = function strToday() {
  return (0, _moment.default)().format(dateFormat);
};
/*
 * Converts the ISO date string to given format in UTC timezone
 */


exports.strToday = strToday;

var formatUtcDate = function formatUtcDate(isoDateString) {
  var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'L';
  return _moment.default.utc(isoDateString).format(format);
};

exports.formatUtcDate = formatUtcDate;

var localDateToUTC = function localDateToUTC(date) {
  if (date) {
    var now = (0, _moment.default)().utc();
    return _moment.default.utc(date).set({
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


exports.localDateToUTC = localDateToUTC;

var strToDate = function strToDate(str) {
  if (str) {
    var date = (0, _moment.default)(str, dateFormat);

    if (date.isValid()) {
      return date;
    }
  }

  return null;
};

exports.strToDate = strToDate;

var calculateTimelineFromSubmitProposalsDueDate = function calculateTimelineFromSubmitProposalsDueDate(submitProposalsDueDate, businessDays, timezone) {
  var businessDaysToUse = process.env.IN_TEST_MODE === 'true' ? 'qa_business_days' : 'md_project_business_days';
  submitProposalsDueDate = (0, _momentBusinessDays.default)(_momentTimezone.default.tz(submitProposalsDueDate, timezone)).businessAdd(businessDays && businessDays > 0 ? businessDays : 0);
  var siteVisitDueDate = submitProposalsDueDate.businessAdd(_rfp_timeline.default[4][businessDaysToUse] + _rfp_timeline.default[5][businessDaysToUse]);
  var finalBidDueDate = (0, _momentBusinessDays.default)(siteVisitDueDate).businessAdd(_rfp_timeline.default[6][businessDaysToUse]);
  var awardDate = (0, _momentBusinessDays.default)(finalBidDueDate).businessAdd(_rfp_timeline.default[7][businessDaysToUse]);
  return {
    submitProposalsDueDate: submitProposalsDueDate,
    siteVisitDueDate: siteVisitDueDate,
    finalBidDueDate: finalBidDueDate,
    awardDate: awardDate
  };
};

exports.calculateTimelineFromSubmitProposalsDueDate = calculateTimelineFromSubmitProposalsDueDate;

var calculateTimelineFromSiteVisitDueDate = function calculateTimelineFromSiteVisitDueDate(siteVisitDueDate, businessDays) {
  var businessDaysToUse = process.env.IN_TEST_MODE === 'true' ? 'qa_business_days' : 'md_project_business_days';
  siteVisitDueDate = (0, _momentBusinessDays.default)(siteVisitDueDate).businessAdd(businessDays && businessDays > 0 ? businessDays : 0);
  var finalBidDueDate = (0, _momentBusinessDays.default)(siteVisitDueDate).businessAdd(_rfp_timeline.default[6][businessDaysToUse]);
  var awardDate = (0, _momentBusinessDays.default)(finalBidDueDate).businessAdd(_rfp_timeline.default[7][businessDaysToUse]);
  return {
    siteVisitDueDate: siteVisitDueDate,
    finalBidDueDate: finalBidDueDate,
    awardDate: awardDate
  };
};

exports.calculateTimelineFromSiteVisitDueDate = calculateTimelineFromSiteVisitDueDate;

var calculateTimelineFromFinalBidDueDate = function calculateTimelineFromFinalBidDueDate(finalBidDueDate, businessDays) {
  var businessDaysToUse = process.env.IN_TEST_MODE === 'true' ? 'qa_business_days' : 'md_project_business_days';
  finalBidDueDate = (0, _momentBusinessDays.default)(finalBidDueDate).businessAdd(businessDays && businessDays > 0 ? businessDays : 0);
  var awardDate = (0, _momentBusinessDays.default)(finalBidDueDate).businessAdd(_rfp_timeline.default[7][businessDaysToUse]);
  return {
    finalBidDueDate: finalBidDueDate,
    awardDate: awardDate
  };
};

exports.calculateTimelineFromFinalBidDueDate = calculateTimelineFromFinalBidDueDate;

var correctDueDate = function correctDueDate(date) {
  return (// Change to Pacific timezone rather than UTC to handle daylight saving time
    _momentTimezone.default.tz(date, _constants.PACIFIC_TIMEZONE).set({
      hour: 17,
      minute: 0,
      second: 0,
      millisecond: 0
    })
  );
};

exports.correctDueDate = correctDueDate;

var calculateProjectTimeline = function calculateProjectTimeline(rfpSentDueDate) {
  if (!rfpSentDueDate) {
    rfpSentDueDate = (0, _moment.default)();
  }

  var businessDaysToUse = process.env.IN_TEST_MODE === 'true' ? 'qa_business_days' : 'md_project_business_days';
  var submitProposalsDueDate = correctDueDate((0, _momentBusinessDays.default)(rfpSentDueDate).businessAdd(_rfp_timeline.default[2][businessDaysToUse] + _rfp_timeline.default[3][businessDaysToUse]));
  var siteVisitDueDate = correctDueDate((0, _momentBusinessDays.default)(submitProposalsDueDate).businessAdd(_rfp_timeline.default[4][businessDaysToUse] + _rfp_timeline.default[5][businessDaysToUse]));
  var finalBidDueDate = correctDueDate((0, _momentBusinessDays.default)(siteVisitDueDate).businessAdd(_rfp_timeline.default[6][businessDaysToUse]));
  var awardDate = correctDueDate((0, _momentBusinessDays.default)(finalBidDueDate).businessAdd(_rfp_timeline.default[7][businessDaysToUse]));
  return {
    rfpSentDueDate: rfpSentDueDate,
    submitProposalsDueDate: submitProposalsDueDate,
    siteVisitDueDate: siteVisitDueDate,
    finalBidDueDate: finalBidDueDate,
    awardDate: awardDate
  };
};

exports.calculateProjectTimeline = calculateProjectTimeline;

var getAwardDateFromRfpSentDueDate = function getAwardDateFromRfpSentDueDate(rfpSentDueDate, timezone) {
  var rfpSentDueDateMoment = _momentTimezone.default.tz(rfpSentDueDate || undefined, timezone);

  var projectTimeline = calculateProjectTimeline(rfpSentDueDateMoment);
  var awardDate = projectTimeline.awardDate;
  return awardDate;
};

exports.getAwardDateFromRfpSentDueDate = getAwardDateFromRfpSentDueDate;

var getMinimumWeek = function getMinimumWeek(start, end) {
  var daysDiff = (0, _moment.default)(end).diff((0, _moment.default)(start), 'days');
  var weeksDiff = Math.round(daysDiff / 7) - 1;
  return weeksDiff >= 0 ? weeksDiff : 0;
};

exports.getMinimumWeek = getMinimumWeek;

var getMaximumWeek = function getMaximumWeek(start, end) {
  var daysDiff = (0, _moment.default)(end).diff((0, _moment.default)(start), 'days');
  var weeksDiff = Math.round(daysDiff / 7) + 1;
  return weeksDiff;
};
/*
 * Get local timezone from browser
 */


exports.getMaximumWeek = getMaximumWeek;

var getLocalTimezone = function getLocalTimezone() {
  return _momentTimezone.default.tz.guess();
};
/*
 * Converts the ISO timezone name into shorter format. e.g. from `America/Los_Angeles` to `PST`
 */


exports.getLocalTimezone = getLocalTimezone;

var toShortTimezone = function toShortTimezone(timezone) {
  return (0, _momentTimezone.default)().tz(timezone || getLocalTimezone()).format('z');
};
/*
 * Converts the date string or moment date into ISO date string in 'YYYY-MM-DD' format and specified timezone
 */


exports.toShortTimezone = toShortTimezone;

var toISODateStr = function toISODateStr(date, timezone) {
  if (date) {
    return timezone ? (0, _momentTimezone.default)(date).tz(timezone).format(dateFormat) : (0, _moment.default)(date).format(dateFormat);
  } else {
    return date;
  }
};
/*
 * Gets all timezone strings that are accepted by react-intl
 */


exports.toISODateStr = toISODateStr;

var getAllTimezones = function getAllTimezones() {
  return _momentTimezone.default.tz.names().filter(function (timezone) {
    return /^(America|Asia|Europe|Australia|Africa|Pacific|Atlantic|Indian)/.test(timezone);
  });
};

exports.getAllTimezones = getAllTimezones;