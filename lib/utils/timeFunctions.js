'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMaximumWeek = exports.getMinimumWeek = exports.awardDateFromRfpSentDueDate = exports.calculateProjectTimeline = exports.strToDate = exports.utcDateWithZeroTime = exports.localDateToUTC = exports.dateToStr = exports.strToday = undefined;

var _momentBusinessDays = require('moment-business-days');

var _momentBusinessDays2 = _interopRequireDefault(_momentBusinessDays);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _rfp_timeline = require('~/data/rfp_timeline');

var _rfp_timeline2 = _interopRequireDefault(_rfp_timeline);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dateFormat = 'YYYY-MM-DD';

var strToday = exports.strToday = function strToday() {
  return (0, _moment2.default)().format(dateFormat);
};

var dateToStr = exports.dateToStr = function dateToStr(date, allowToday, preferredDateFormat) {
  if (date) {
    return _moment2.default.utc(date).format(preferredDateFormat || dateFormat);
  } else {
    return allowToday ? (0, _moment2.default)().format(dateFormat) : null;
  }
};

var localDateToUTC = exports.localDateToUTC = function localDateToUTC(date) {
  if (date) {
    var now = (0, _moment2.default)();
    return (0, _moment2.default)(date).set({ hour: now.hours(), minute: now.minutes(), second: now.seconds(), millisecond: 0 }).toISOString();
  } else {
    return null;
  }
};

var utcDateWithZeroTime = exports.utcDateWithZeroTime = function utcDateWithZeroTime(date) {
  if (date) {
    return (0, _moment2.default)(date).set({ hour: 0, minute: 0, second: 0, millisecond: 0 }).toISOString();
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

var calculateProjectTimeline = exports.calculateProjectTimeline = function calculateProjectTimeline(rfpSentDueDate) {
  if (!rfpSentDueDate) {
    rfpSentDueDate = (0, _moment2.default)();
  }

  var businessDaysToUse = process.env.IN_TEST_MODE === 'true' ? 'qa_business_days' : 'md_project_business_days';

  var submitProposalsDueDate = (0, _momentBusinessDays2.default)(rfpSentDueDate).businessAdd(_rfp_timeline2.default[2][businessDaysToUse] + _rfp_timeline2.default[3][businessDaysToUse]);

  var siteVisitDueDate = (0, _momentBusinessDays2.default)(submitProposalsDueDate).businessAdd(_rfp_timeline2.default[4][businessDaysToUse] + _rfp_timeline2.default[5][businessDaysToUse]);

  var finalBidDueDate = (0, _momentBusinessDays2.default)(siteVisitDueDate).businessAdd(_rfp_timeline2.default[6][businessDaysToUse]);

  var awardDate = (0, _momentBusinessDays2.default)(finalBidDueDate).businessAdd(_rfp_timeline2.default[7][businessDaysToUse]);

  return {
    rfpSentDueDate: rfpSentDueDate,
    submitProposalsDueDate: submitProposalsDueDate,
    siteVisitDueDate: siteVisitDueDate,
    finalBidDueDate: finalBidDueDate,
    awardDate: awardDate
  };
};

var awardDateFromRfpSentDueDate = exports.awardDateFromRfpSentDueDate = function awardDateFromRfpSentDueDate(strRfpSentDueDate) {
  var rfpSentDueDate = strRfpSentDueDate ? strToDate(strRfpSentDueDate) : (0, _moment2.default)();
  if (rfpSentDueDate) {
    var projectTimeline = calculateProjectTimeline(rfpSentDueDate);
    var awardDate = projectTimeline.awardDate;
    return awardDate.format(dateFormat);
  } else {
    return null;
  }
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