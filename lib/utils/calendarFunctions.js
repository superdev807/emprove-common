'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateiCalendar = exports.generateYahooCalendarUrl = exports.generateGoogleCalendarUrl = exports.downloadiCalendar = exports.formatEventText = exports.formatEventDate = void 0;

var formatEventDate = function formatEventDate(date) {
  // Remove punctuation from a date string like 2018-09-28T18:44:38.000Z
  return date.replace(/-|:|\.\d\d\d/g, '');
};

exports.formatEventDate = formatEventDate;

var formatEventText = function formatEventText(text) {
  return encodeURIComponent(text);
};

exports.formatEventText = formatEventText;

var downloadiCalendar = function downloadiCalendar(event) {
  var fileData = generateiCalendar(event);
  var blob = new Blob([fileData], {
    type: 'text/calendar'
  });
  var filename = 'emproveSiteVisit.ics';

  if (window.navigator && window.navigator.msSaveOrOpenBlob) {
    window.navigator.msSaveOrOpenBlob(blob, filename);
  } else {
    var anchor = document.createElement('a');
    anchor.href = window.URL.createObjectURL(blob);
    anchor.download = filename;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
    window.URL.revokeObjectURL(anchor.href);
  }
};

exports.downloadiCalendar = downloadiCalendar;

var generateGoogleCalendarUrl = function generateGoogleCalendarUrl(event) {
  var url = process.env.GOOGLE_CALENDAR_URL || 'https://calendar.google.com/calendar/r/eventedit';
  url += "?text=".concat(formatEventText(event.title));
  url += "&dates=".concat(formatEventDate(event.start), "/").concat(formatEventDate(event.end));
  url += "&details=".concat(formatEventText(event.details));
  url += "&location=".concat(formatEventText(event.location));
  return url;
};

exports.generateGoogleCalendarUrl = generateGoogleCalendarUrl;

var generateYahooCalendarUrl = function generateYahooCalendarUrl(event) {
  var url = process.env.YAHOO_CALENDAR_URL || 'https://calendar.yahoo.com/';
  url += '?v=60&view=d&type=20';
  url += "&title=".concat(formatEventText(event.title));
  url += "&st=".concat(formatEventDate(event.start));
  url += "&dur=".concat(event.duration || '0100');
  url += "&desc=".concat(formatEventText(event.details));
  url += "&in_loc=".concat(formatEventText(event.location));
  url += '&uid=&guccounter=1';
  return url;
};

exports.generateYahooCalendarUrl = generateYahooCalendarUrl;

var generateiCalendar = function generateiCalendar(event) {
  var rightNow = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date().toISOString();
  return 'BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:https://www.emproveit.com\n' + 'BEGIN:VEVENT\n' + "UID:http://www.emproveit.com/event/".concat(rightNow, "\n") + "DTSTAMP:".concat(formatEventDate(rightNow), "\n") + "DTSTART:".concat(formatEventDate(event.start), "\n") + "DTEND:".concat(formatEventDate(event.end), "\n") + "SUMMARY:".concat(event.title, "\n") + "LOCATION:".concat(event.location, "\n") + "DESCRIPTION:".concat(event.details.replace(/\n/g, '\\n'), "\n") + 'END:VEVENT\n' + 'END:VCALENDAR\n';
};

exports.generateiCalendar = generateiCalendar;