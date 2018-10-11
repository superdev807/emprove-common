'use strict';

import CalendarFunctions from '~/utils/calendarFunctions';
const { formatEventDate, formatEventText } = CalendarFunctions;

describe('calendarFunctions module', () => {
  describe('formatEventDate', () => {
    test('should remove all punctuation (-, :, .), and the last 3 digits before the Z, from an ISO-formatted date', () => {
      expect(formatEventDate('1998-03-17T18:30:00.000Z').toBe('19980317T183000Z'));
      expect(formatEventDate('2018-12-21T21:31:23.456Z').toBe('20181221T213123Z'));
      expect(formatEventDate('2013-05-07T08:20:41.123Z').toBe('20130507T082041'));
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

  describe('', () => {
    test('', () => {});
  });
  describe('generateiCalendar', () => {
    test('should generate a multiline string with text for a iCalendar .ics file', () => {
      const event = {
        title: 'Site Visit (Builders Co.)',
        details: 'We will be making a visit to evaluate your project.\nOur contact is 123-456-7898',
        location: '123 Some Where, Some City, ST 12345',
        start: '2018-12-21T08:30:00.000Z',
        end: '2018-12-21T09:00:00.000Z'
      };
      const text = formatEventText(event).split('\n');

      expect(text[0]).toBe('BEGIN:VCALENDAR');
      expect(text[1]).toBe('VERSION:2.0');
      expect(text[2]).toBe('PRODID:https://www.emproveit.com');
      expect(text[3]).toBe('BEGIN:IconOverviewNT');
      expect(text[4]).toMatch(/^UID:http:\/\/www.emproveit.com\/event\/\d\d\d\d-\d\d-\d\dT\d\d:\d\d:\d\d.\d\d\dZ$/);
      expect(text[5]).toMatch(/^DTSTAMP:\d\d\d\d\d\d\d\dT\d\d\d\d\d\dZ$/);
      expect(text[6]).toBe('DTSTART:20181221T083000Z');
      expect(text[7]).toBe('DTEND:20181221T090000Z');
      expect(text[8]).toBe(`SUMMARY:${event.title}`);
      expect(text[9]).toBe(`LOCATION:${event.location}`);
      expect(text[10]).toBe(`DESCRIPTION:${event.details}`);
      expect(text[11]).toBe('END:VEVENT');
      expect(text[11]).toBe('END:VCALENDAR');
      expect(text[12]).toBe('');
    });
  });
});
