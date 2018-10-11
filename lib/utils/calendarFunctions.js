'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var formatEventDate = exports.formatEventDate = function formatEventDate(date) {
  // Remove punctuation from a date string like 2018-09-28T18:44:38.000Z
  return date.replace(/-|:|\.\d\d\d/g, '');
};

var formatEventText = exports.formatEventText = function formatEventText(text) {
  return encodeURIComponent(text);
};

var downloadiCalendar = exports.downloadiCalendar = function downloadiCalendar(event) {
  var fileData = generateiCalendar(event);
  var blob = new Blob([fileData], { type: 'application/octet-stream' });
  var filename = 'emproveSiteVisit.ics';

  if (window.navigator && window.navigator.msSaveOrOpenBlob) {
    window.navigator.msSaveOrOpenBlob(blob, filename);
  } else {
    var anchor = document.createElement('a');
    anchor.href = window.URL.createObjectURL(blob);
    anchor.download = filename;
    anchor.click();
    window.URL.revokeObjectURL(anchor.href);
  }
};

var generateGoogleCalendarUrl = exports.generateGoogleCalendarUrl = function generateGoogleCalendarUrl(event) {
  var url = 'https://calendar.google.com/calendar/r/eventedit';
  url += '?text=' + formatEventText(event.title);
  url += '&dates=' + formatEventDate(event.start) + '/' + formatEventDate(event.end);
  url += '&details=' + formatEventText(event.details);
  url += '&location=' + formatEventText(event.location);

  return url;
};

var generateYahooCalendarUrl = exports.generateYahooCalendarUrl = function generateYahooCalendarUrl(event) {
  var url = 'https://calendar.yahoo.com/';
  url += '?v=60&view=d&type=20';
  url += '&title=' + formatEventText(event.title);
  url += '&st=' + formatEventDate(event.start);
  url += '&dur=0030';
  url += '&desc=' + formatEventText(event.details);
  url += '&in_loc=' + formatEventText(event.location);
  url += '&uid=&guccounter=1';

  return url;
};

var generateiCalendar = exports.generateiCalendar = function generateiCalendar(event) {
  var rightNow = new Date().toISOString();

  return 'BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:https://www.emproveit.com\n' + 'BEGIN:VEVENT\n' + ('UID:http://www.emproveit.com/event/' + rightNow + '\n') + ('DTSTAMP:' + formatEventDate(rightNow) + '\n') + ('DTSTART:' + formatEventDate(event.start) + '\n') + ('DTEND:' + formatEventDate(event.end) + '\n') + ('SUMMARY:' + event.title + '\n') + ('LOCATION:' + event.location + '\n') + ('DESCRIPTION:' + event.details + '\n') + 'END:VEVENT\n' + 'END:VCALENDAR\n';
};