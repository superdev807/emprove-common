'use strict';

export const formatEventDate = date => {
  // Remove punctuation from a date string like 2018-09-28T18:44:38.000Z
  return date.replace(/-|:|\.\d\d\d/g, '');
};

export const formatEventText = text => {
  return encodeURIComponent(text);
};

export const downloadiCalendar = event => {
  const fileData = generateiCalendar(event);
  const blob = new Blob([fileData], { type: 'text/calendar' });
  const filename = 'emproveSiteVisit.ics';

  if (window.navigator && window.navigator.msSaveOrOpenBlob) {
    window.navigator.msSaveOrOpenBlob(blob, filename);
  } else {
    const anchor = document.createElement('a');
    anchor.href = window.URL.createObjectURL(blob);
    anchor.download = filename;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
    window.URL.revokeObjectURL(anchor.href);
  }
};

export const generateGoogleCalendarUrl = event => {
  let url = process.env.GOOGLE_CALENDAR_URL || 'https://calendar.google.com/calendar/r/eventedit';
  url += `?text=${formatEventText(event.title)}`;
  url += `&dates=${formatEventDate(event.start)}/${formatEventDate(event.end)}`;
  url += `&details=${formatEventText(event.details)}`;
  url += `&location=${formatEventText(event.location)}`;

  return url;
};

export const generateYahooCalendarUrl = event => {
  let url = process.env.YAHOO_CALENDAR_URL || 'https://calendar.yahoo.com/';
  url += '?v=60&view=d&type=20';
  url += `&title=${formatEventText(event.title)}`;
  url += `&st=${formatEventDate(event.start)}`;
  url += `&dur=${event.duration || '0100'}`;
  url += `&desc=${formatEventText(event.details)}`;
  url += `&in_loc=${formatEventText(event.location)}`;
  url += '&uid=&guccounter=1';

  return url;
};

export const generateiCalendar = (event, rightNow = new Date().toISOString()) => {
  return (
    'BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:https://www.emproveit.com\n' +
    'BEGIN:VEVENT\n' +
    `UID:http://www.emproveit.com/event/${rightNow}\n` +
    `DTSTAMP:${formatEventDate(rightNow)}\n` +
    `DTSTART:${formatEventDate(event.start)}\n` +
    `DTEND:${formatEventDate(event.end)}\n` +
    `SUMMARY:${event.title}\n` +
    `LOCATION:${event.location}\n` +
    `DESCRIPTION:${event.details.replace(/\n/g, '\\n')}\n` +
    'END:VEVENT\n' +
    'END:VCALENDAR\n'
  );
};
