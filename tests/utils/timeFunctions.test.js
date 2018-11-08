'use strict';

import moment from 'moment';
import {
  strToday,
  formatUtcDate,
  localDateToUTC,
  utcDateWithZeroTime,
  strToDate,
  calculateProjectTimeline,
  awardDateFromRfpSentDueDate,
  convertDateFormat,
  getMinimumWeek,
  getMaximumWeek,
  toShortTimezone,
  toISODateStr
} from '~/utils/timeFunctions';

describe('timeline functions', () => {
  const utcDateTime = '2018-07-05 18:00:00';
  const utcDateTimeWithZeroTime = '2018-07-05 00:00:00';
  const onlyDate = '07/02/2018';
  const momentTime = moment('2018-06-12T18:30:00', 'YYYY-MM-DDTHH:mm:ss');
  const utcOffset = moment().utcOffset();
  const now = moment();

  describe('formatUtcDate', () => {
    it('should convert utc date with any time to MM/DD/YYYY', () => {
      expect(formatUtcDate(utcDateTimeWithZeroTime)).toBe('07/05/2018');
      expect(formatUtcDate(utcDateTime)).toBe('07/05/2018');
    });
    it('should convert utc date to a date with given format', () => {
      expect(formatUtcDate(utcDateTime, 'MM-DD-YYYY')).toBe('07-05-2018');
    });
  });

  describe('localDateToUTC', () => {
    // need different expected value for different test timezones.
    const expected =
      utcOffset < -330 ? `2018-06-13T${now.utc().format('HH:mm:ss')}.000Z` : `2018-06-12T${now.utc().format('HH:mm:ss')}.000Z`;

    it('should convert local date/time to utc date/time with current time in ISO format', () => {
      expect(localDateToUTC(momentTime)).toBe(expected);
    });
  });

  describe('utcDateWithZeroTime', () => {
    it('should return UTC date/time with 0s for time in ISO format', () => {
      expect(utcDateWithZeroTime(onlyDate)).toBe('2018-07-02T00:00:00.000Z');
      expect(utcDateWithZeroTime(momentTime)).toBe('2018-06-12T00:00:00.000Z');
    });
  });

  describe('strToDate', () => {
    it('should drop the time and return moment object with the date and 0 time', () => {
      // Beware! Two different dates might not be at the same time zone.
      // e.g. One date might be at PDT for a couple of months, then later another
      // date might be at PST, even if you are in the same place!
      // So you cannot assume the same timezone for all dates.
      const dateTime = '2018-07-05 18:00:00';
      const utcOffset = new Date('2018-07-05').getTimezoneOffset();
      // need different expected value for different test timezones.
      const utcOffsetHours = utcOffset / 60;
      const hour = utcOffsetHours < 10 ? `0${utcOffsetHours}` : `${utcOffsetHours}`;
      const expected = `2018-07-05T${hour}:00:00.000Z`;

      expect(strToDate(dateTime).toJSON()).toBe(expected);
    });
  });

  //The next two tests depend on the business days defined in rfp_timeline
  describe('calculateProjectTimeline', () => {
    it('should return 5 project timeline dates given a rfpSentDueDate', () => {
      // need different expected value for different test timezones.
      const utcDateTime = '2018-07-05 18:00:00';
      const utcOffset = new Date('2018-07-05').getTimezoneOffset();
      const utcOffsetHours = utcOffset / 60;
      const rawHour = utcOffsetHours >= 6 ? utcOffsetHours - 6 : 24 - (6 - utcOffsetHours);
      const hour = rawHour < 10 ? `0${rawHour}` : `${rawHour}`;

      const expectedSubmitProposalsDueDate = utcOffsetHours > 6 ? `2018-07-17T${hour}:00:00.000Z` : `2018-07-16T${hour}:00:00.000Z`;
      const expectedSiteVisitDueDate = utcOffsetHours > 6 ? `2018-07-27T${hour}:00:00.000Z` : `2018-07-26T${hour}:00:00.000Z`;
      const expectedFinalBidDueDate = utcOffsetHours > 6 ? `2018-08-01T${hour}:00:00.000Z` : `2018-07-31T${hour}:00:00.000Z`;
      const expectedAwardDate = utcOffsetHours > 6 ? `2018-08-04T${hour}:00:00.000Z` : `2018-08-03T${hour}:00:00.000Z`;

      const timeLine = calculateProjectTimeline(utcDateTime);

      expect(timeLine.rfpSentDueDate).toBe('2018-07-05 18:00:00');
      expect(timeLine.submitProposalsDueDate.toJSON()).toBe(expectedSubmitProposalsDueDate);
      expect(timeLine.siteVisitDueDate.toJSON()).toBe(expectedSiteVisitDueDate);
      expect(timeLine.finalBidDueDate.toJSON()).toBe(expectedFinalBidDueDate);
      expect(timeLine.awardDate.toJSON()).toBe(expectedAwardDate);
    });
  });

  describe('awardDateFromRfpSentDueDate', () => {
    it('should return date in YYYY-MM-DD format', () => {
      expect(awardDateFromRfpSentDueDate(utcDateTime)).toBe('2018-08-03');
    });
  });

  describe('convertDateFormat', () => {
    it('should convert MM/DD/YYYY format to YYYY-MM-DD format', () => {
      expect(convertDateFormat(onlyDate)).toBe('2018-07-02');
      expect(convertDateFormat('09/22/19')).toBe(null);
    });
  });

  describe('toShortTimezone', () => {
    it('should return shorter form of timezone name', () => {
      expect(toShortTimezone('America/Los_Angeles')).toBe('PST');
    });
  });

  describe('toISODateStr', () => {
    it('should return a date in `YYYY-MM-DD` format and specified timezone', () => {
      expect(toISODateStr('2018-07-05 00:00:00.000Z', 'America/Los_Angeles')).toBe('2018-07-04');
      expect(toISODateStr('2018-07-05 00:00:00.000Z', 'Asia/Tokyo')).toBe('2018-07-05');
    });
  });
});
