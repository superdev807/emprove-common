'use strict';

import {
  formatEventDate,
  formatEventText,
  generateGoogleCalendarUrl,
  generateYahooCalendarUrl,
  generateiCalendar
} from '~/utils/calendarFunctions';

describe('calendarFunctions module', () => {
  describe('formatEventDate', () => {
    test('should remove all punctuation (-, :, .), and the last 3 digits before the Z, from an ISO-formatted date', () => {
      expect(formatEventDate('1998-03-17T18:30:00.000Z')).toBe('19980317T183000Z');
      expect(formatEventDate('2018-12-21T21:31:23.456Z')).toBe('20181221T213123Z');
      expect(formatEventDate('2013-05-07T08:20:41.123Z')).toBe('20130507T082041Z');
    });
  });

  describe('formatEventText', () => {
    test('should encode characters like whitespace into %20 format', () => {
      expect(formatEventText('This is a sentence')).toBe('This%20is%20a%20sentence');
    });
    test('should encode characters from a url included in the text', () => {
      expect(formatEventText('Check out our website at https://www.some.where/path/?flag=true')).toBe(
        'Check%20out%20our%20website%20at%20https%3A%2F%2Fwww.some.where%2Fpath%2F%3Fflag%3Dtrue'
      );
    });
  });

  describe('generateGoogleCalendarUrl', () => {
    const event = {
      title: 'Site Visit (Builders Co.)',
      details: 'We will be making a visit to evaluate your project.\nOur contact is 123-456-7898',
      location: '123 Some Where, Some City, ST 12345',
      start: '2018-12-21T08:30:00.000Z',
      end: '2018-12-21T09:00:00.000Z'
    };
    let url;

    beforeAll(() => {
      url = generateGoogleCalendarUrl(event);
    });

    test('should include the correct base url for the google calendar service', () => {
      expect(url).toMatch(/^https:\/\/calendar\.google\.com\/calendar\/r\/eventedit/);
    });

    test('should generate a url including the `text` query parameter with the event title, with any characters like whitespace encoded to %XX format', () => {
      expect(url).toMatch('?text=Site%20Visit%20(Builders%20Co.)');
    });

    test('should generate a url including the `dates` query parameter with the event start and end date, formatted like YYYYMMDDTHHMMSSZ/YYYYMMDDTHHMMSSZ', () => {
      expect(url).toMatch('&dates=20181221T083000Z/20181221T090000Z');
    });

    test('should generate a url including the `details` query parameter with the event details, with any characters like whitespace encoded to %XX format', () => {
      expect(url).toMatch(
        '&details=We%20will%20be%20making%20a%20visit%20to%20evaluate%20your%20project.%0AOur%20contact%20is%20123-456-7898'
      );
    });

    test('should generate a url including the `location` query parameter with the event location, with any characters like whitespace encoded to %XX format', () => {
      expect(url).toMatch('&location=123%20Some%20Where%2C%20Some%20City%2C%20ST%2012345');
    });
  });

  describe('generateYahooCalendarUrl', () => {
    const event = {
      title: 'Site Visit (Builders Co.)',
      details: 'We will be making a visit to evaluate your project.\nOur contact is 123-456-7898',
      location: '123 Some Where, Some City, ST 12345',
      start: '2018-12-21T08:30:00.000Z',
      end: '2018-12-21T09:00:00.000Z'
    };
    let url;

    beforeAll(() => {
      url = generateYahooCalendarUrl(event);
    });

    test('should include the correct base url for the yahoo calendar service', () => {
      expect(url).toMatch(/^https:\/\/calendar.yahoo.com\/\?v=60&view=d&type=20/);
    });

    test('should generate a url including the `title` query parameter with the event title, with any characters like whitespace encoded to %XX format', () => {
      expect(url).toMatch('&title=Site%20Visit%20(Builders%20Co.)');
    });

    test('should generate a url including the `st` query parameter with the event start date, formatted like YYYYMMDDTHHMMSSZ', () => {
      expect(url).toMatch('&st=20181221T083000Z');
    });

    test('should generate a url including the `dur` query parameter with the event duration, formatted like HHMM, defaulting to 0100, one hour', () => {
      expect(url).toMatch('&dur=0100');
    });

    test('should allow the `dur` query parameter in the url to be changed by the event `duration` property that is formatted like HHMM', () => {
      url = generateYahooCalendarUrl({
        ...event,
        duration: '0030' // 30 min
      });
      expect(url).toMatch('&dur=0030');
    });

    test('should generate a url including the `desc` query parameter with the event details, with any characters like whitespace encoded to %XX format', () => {
      expect(url).toMatch(
        '&desc=We%20will%20be%20making%20a%20visit%20to%20evaluate%20your%20project.%0AOur%20contact%20is%20123-456-7898'
      );
    });

    test('should generate a url including the `in_loc` query parameter with the event location, with any characters like whitespace encoded to %XX format', () => {
      expect(url).toMatch('&in_loc=123%20Some%20Where%2C%20Some%20City%2C%20ST%2012345');
    });

    test('should generate a url including the `uid` and `guccounter` query parameters', () => {
      expect(url).toMatch('&uid=&guccounter=1');
    });
  });

  describe('generateiCalendar', () => {
    test('should generate a multiline string with text for a iCalendar .ics file', () => {
      const event = {
        title: 'Site Visit (Builders Co.)',
        details: 'We will be making a visit to evaluate your project.\nOur contact is 123-456-7898\nLooking forward to assessing your project!',
        location: '123 Some Where, Some City, ST 12345',
        start: '2018-12-21T08:30:00.000Z',
        end: '2018-12-21T09:00:00.000Z'
      };
      const rightNow = '2018-10-22T21:16:11.290Z';
      const text = generateiCalendar(event, rightNow).split('\n');

      expect(text[0]).toBe('BEGIN:VCALENDAR');
      expect(text[1]).toBe('VERSION:2.0');
      expect(text[2]).toBe('PRODID:https://www.emproveit.com');
      expect(text[3]).toBe('BEGIN:VEVENT');
      expect(text[4]).toBe(`UID:http://www.emproveit.com/event/${rightNow}`);
      expect(text[5]).toBe('DTSTAMP:20181022T211611Z');
      expect(text[6]).toBe('DTSTART:20181221T083000Z');
      expect(text[7]).toBe('DTEND:20181221T090000Z');
      expect(text[8]).toBe(`SUMMARY:${event.title}`);
      expect(text[9]).toBe(`LOCATION:${event.location}`);
      // newline characters \n in description should appear literally (\\n) so
      // multiline text works when importing into calendar software:
      expect(text[10]).toBe('DESCRIPTION:We will be making a visit to evaluate your project.\\nOur contact is 123-456-7898\\nLooking forward to assessing your project!');
      expect(text[11]).toBe('END:VEVENT');
      expect(text[12]).toBe('END:VCALENDAR');
      expect(text[13]).toBe('');
    });
  });
});
