'use strict'

import moment from 'moment';
import { strToday, formatUtcDate, localDateToUTC, utcDateWithZeroTime, strToDate, calculateProjectTimeline, awardDateFromRfpSentDueDate, getMinimumWeek, getMaximumWeek } from '../../../src/utils/timeFunctions';

describe('timeline functions', () => {
  const utcDateTime = '2018-07-05 18:00:00';
  const utcDateTimeWithZeroTime = '2018-07-05 00:00:00';
  const onlyDate = '07/02/2018';
  const momentTime = moment('2018-06-12T18:36:49', 'YYYY-MM-DDTHH:mm:ss');
  const now = moment();

  describe('formatUtcDate', () => {
    it('should convert utc date with any time to MM/DD/YYYY', () => {
      expect(formatUtcDate(utcDateTimeWithZeroTime)).toBe('07/05/2018');
      expect(formatUtcDate(utcDateTime)).toBe('07/05/2018');
    })
    it('should convert utc date to a date with given format', () => {
      expect(formatUtcDate(utcDateTime, 'MM-DD-YYYY')).toBe('07-05-2018');
    })
  });

  describe('localDateToUTC', () => {
    it('should convert local date time to utc date/time with current time in ISO format', () => {
      expect(localDateToUTC(momentTime)).toBe(`2018-06-13T${(now.utc().format('HH:mm:ss'))}.000Z`);
    })
  });

  describe('utcDateWithZeroTime', () => {
    it('should return UTC date/time with 0s for time in ISO format', () => {
      expect(utcDateWithZeroTime(onlyDate)).toBe('2018-07-02T00:00:00.000Z')
      expect(utcDateWithZeroTime(momentTime)).toBe('2018-06-12T00:00:00.000Z')
    })
  });

  describe('strToDate', () => {
    it('should drop the time and return moment object with the date and 0 time', () => {
      expect(strToDate(utcDateTime).toJSON()).toBe('2018-07-05T07:00:00.000Z')
    })
  });

  //The next two tests depend on the business days defined in rfp_timeline
  describe('calculateProjectTimeline', () => {
    it('should return 5 project timeline dates given a rfpSentDueDate', () => {
      const timeLine = calculateProjectTimeline(utcDateTime);

      expect(timeLine.rfpSentDueDate).toBe('2018-07-05 18:00:00');
      expect(timeLine.submitProposalsDueDate.toJSON()).toBe('2018-07-20T01:00:00.000Z');
      expect(timeLine.siteVisitDueDate.toJSON()).toBe('2018-07-28T01:00:00.000Z');
      expect(timeLine.finalBidDueDate.toJSON()).toBe('2018-08-02T01:00:00.000Z');
      expect(timeLine.awardDate.toJSON()).toBe('2018-08-04T01:00:00.000Z');
    })
  });
  
  describe('awardDateFromRfpSentDueDate', () => {
    it('should return date in YYYY-MM-DD format', () => {
      expect(awardDateFromRfpSentDueDate(utcDateTime)).toBe('2018-08-03')
    })
  });
});