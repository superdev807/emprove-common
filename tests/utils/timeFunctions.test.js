'use strict';

import moment from 'moment';
import momenttz from 'moment-timezone';
import {
  calculateProjectTimeline,
  convertDateFormat,
  correctDueDate,
  formatUtcDate,
  getAllTimezones,
  getAwardDateFromRfpSentDueDate,
  getMaximumWeek,
  getMinimumWeek,
  localDateToUTC,
  strToDate,
  strToday,
  toISODateStr,
  toShortTimezone
} from '~/utils/timeFunctions';

describe('timeline functions', () => {
  jest.mock('moment', () => () => ({ format: () => '2018–11–09T12:34:56+00:00' }));

  const utcDateTime = '2018-07-05T18:00:00.000Z';
  const utcDateTimeWithZeroTime = '2018-07-05 00:00:00';
  const onlyDate = '07/02/2018';
  const momentTime = moment('2018-06-12T18:30:00', 'YYYY-MM-DDTHH:mm:ss');
  const utcOffset = moment().utcOffset();
  const now = moment();

  afterAll(() => {
    jest.resetAllMocks();
  });

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
    const expected = utcOffset < -360 ? `2018-06-13T${now.utc().format('HH:mm')}` : `2018-06-12T${now.utc().format('HH:mm')}`;

    it('should convert local date/time to utc date/time with current time in ISO format', () => {
      expect(localDateToUTC(momentTime).slice(0, -8)).toBe(expected);
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
      let utcOffsetHours = utcOffset / 60;
      const day = 5 - (utcOffsetHours >= 0 ? 0 : 1);
      utcOffsetHours = (utcOffsetHours + 24) % 24;
      const hour = utcOffsetHours < 10 ? `0${utcOffsetHours}` : `${utcOffsetHours}`;
      const expected = `2018-07-0${day}T${hour}:00:00.000Z`;

      expect(strToDate(dateTime).toJSON()).toBe(expected);
    });
  });

  describe('correctDueDate', () => {
    it('should return 17:00 PST equivalent moment object in UTC timezone', () => {
      const dateTimeTokyo = momenttz.tz('2018-07-05 18:00:00', 'Asia/Tokyo');
      expect(correctDueDate(dateTimeTokyo).toISOString()).toBe('2018-07-06T00:00:00.000Z');
      const dateTimeLA = momenttz.tz('2018-07-05 18:00:00', 'America/Los_Angeles');
      expect(correctDueDate(dateTimeLA).toISOString()).toBe('2018-07-06T00:00:00.000Z');
    });
  });

  //The next two tests depend on the business days defined in rfp_timeline
  describe('calculateProjectTimeline', () => {
    it('should return 10 project timeline dates given a rfpSentDueDate', () => {
      // need different expected value for different test timezones.
      const timeLine = calculateProjectTimeline(utcDateTime);

      expect(timeLine.rfpSentDueDate).toBe(utcDateTime);
      expect(timeLine.submitProposalsDueDate.toJSON()).toBe('2018-07-17T00:00:00.000Z');
      expect(timeLine.siteVisitDueDate.toJSON()).toBe('2018-08-03T00:00:00.000Z');
      expect(timeLine.finalBidDueDate.toJSON()).toBe('2018-08-08T00:00:00.000Z');
      expect(timeLine.awardDate.toJSON()).toBe('2018-08-11T00:00:00.000Z');
    });

    it('should return 10 project timeline dates given a rfpSentDueDate with daylight saving time considered', () => {
      // need different expected value for different test timezones.
      const utcDateTime = '2018-11-05T18:00:00.000Z';
      const timeLine = calculateProjectTimeline(utcDateTime);

      expect(timeLine.rfpSentDueDate).toBe(utcDateTime);
      expect(timeLine.submitProposalsDueDate.toJSON()).toBe('2018-11-15T01:00:00.000Z');
      expect(timeLine.siteVisitDueDate.toJSON()).toBe('2018-12-04T01:00:00.000Z');
      expect(timeLine.finalBidDueDate.toJSON()).toBe('2018-12-07T01:00:00.000Z');
      expect(timeLine.awardDate.toJSON()).toBe('2018-12-12T01:00:00.000Z');
    });
  });

  describe('getAwardDateFromRfpSentDueDate', () => {
    it('should return awardDate from rfpSentDueDate in moment type', () => {
      let awardDate;
      awardDate = getAwardDateFromRfpSentDueDate(utcDateTime, 'Asia/Tokyo');
      expect(awardDate.isValid()).toBe(true);
      expect(awardDate.toISOString()).toEqual('2018-08-11T00:00:00.000Z'); // Also checking business days here
      awardDate = getAwardDateFromRfpSentDueDate(utcDateTime, 'America/Los_Angeles');
      expect(awardDate.toISOString()).toEqual('2018-08-11T00:00:00.000Z');
    });

    it('should return awardDate from rfpSentDueDate in moment type with daylight saving time considered', () => {
      const utcDateTime = '2018-11-05T18:00:00.000Z';
      let awardDate;
      awardDate = getAwardDateFromRfpSentDueDate(utcDateTime, 'Asia/Tokyo');
      expect(awardDate.isValid()).toBe(true);
      expect(awardDate.toISOString()).toEqual('2018-12-12T01:00:00.000Z'); // Also checking business days here
      awardDate = getAwardDateFromRfpSentDueDate(utcDateTime, 'America/Los_Angeles');
      expect(awardDate.toISOString()).toEqual('2018-12-12T01:00:00.000Z');
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
      expect(['PDT', 'PST']).toContain(toShortTimezone('America/Los_Angeles'));
    });
  });

  describe('toISODateStr', () => {
    it('should return a date in `YYYY-MM-DD` format and specified timezone', () => {
      expect(toISODateStr('2018-07-05 00:00:00.000Z', 'America/Los_Angeles')).toBe('2018-07-04');
      expect(toISODateStr('2018-07-05 00:00:00.000Z', 'Asia/Tokyo')).toBe('2018-07-05');
    });
  });

  describe('getAllTimezones', () => {
    it('should return all timezones', () => {
      const allTimezones = getAllTimezones();
      expect(allTimezones).toContain('America/Los_Angeles');
      expect(allTimezones).toContain('Asia/Tokyo');
      expect(allTimezones).toContain('Asia/Calcutta');
    });
  });
});
