'use strict';

import business from 'moment-business-days';
import moment from 'moment';
import momenttz from 'moment-timezone';
import timeline from '../data/rfp_timeline.json';

const dateFormat = 'YYYY-MM-DD';

/* 
 * moment does not like MM/DD/YYYY format because it's not RFC 2822 or ISO format
 * make sure the date passed in is in MM/DD/YYYY format
 */
export const convertDateFormat = date => {
  if (!date || date.length < 10) {
    return null;
  }
  return `${date.slice(6, 10)}-${date.slice(0, 5).replace('/', '-')}`;
};

export const strToday = () => {
  return moment().format(dateFormat);
};

/*
 * Converts the ISO date string to given format in UTC timezone
 */
export const formatUtcDate = (isoDateString, format = 'L') => moment.utc(isoDateString).format(format);

export const localDateToUTC = date => {
  if (date) {
    const now = moment().utc();
    return moment
      .utc(date)
      .set({ hour: now.hours(), minute: now.minutes(), second: now.seconds(), millisecond: 0 })
      .toISOString();
  } else {
    return null;
  }
};

export const utcDateWithZeroTime = date => {
  if (date) {
    let dateOnly = date instanceof moment ? date.format(dateFormat) : moment(convertDateFormat(date), dateFormat);
    return moment
      .utc(dateOnly)
      .set({ hour: 0, minute: 0, second: 0, millisecond: 0 })
      .toISOString();
  } else {
    return null;
  }
};

// going to drop the time and make date a moment object
// 2018-06-06 02:16:19 =>
export const strToDate = str => {
  if (str) {
    const date = moment(str, dateFormat);
    if (date.isValid()) {
      return date;
    }
  }
  return null;
};

export const calculateProjectTimeline = rfpSentDueDate => {
  if (!rfpSentDueDate) {
    rfpSentDueDate = moment();
  }

  const businessDaysToUse = process.env.IN_TEST_MODE === 'true' ? 'qa_business_days' : 'md_project_business_days';

  const submitProposalsDueDate = business(rfpSentDueDate).businessAdd(timeline[2][businessDaysToUse] + timeline[3][businessDaysToUse]);

  const siteVisitDueDate = business(submitProposalsDueDate).businessAdd(timeline[4][businessDaysToUse] + timeline[5][businessDaysToUse]);

  const finalBidDueDate = business(siteVisitDueDate).businessAdd(timeline[6][businessDaysToUse]);

  const awardDate = business(finalBidDueDate).businessAdd(timeline[7][businessDaysToUse]);

  return {
    rfpSentDueDate,
    submitProposalsDueDate,
    siteVisitDueDate,
    finalBidDueDate,
    awardDate
  };
};

export const awardDateFromRfpSentDueDate = strRfpSentDueDate => {
  const rfpSentDueDate = strRfpSentDueDate ? strToDate(strRfpSentDueDate) : moment();
  if (rfpSentDueDate) {
    const projectTimeline = calculateProjectTimeline(rfpSentDueDate);
    const awardDate = projectTimeline.awardDate;
    return awardDate.format(dateFormat);
  } else {
    return null;
  }
};

export const getMinimumWeek = (start, end) => {
  const daysDiff = moment(end).diff(moment(start), 'days');
  const weeksDiff = Math.round(daysDiff / 7) - 1;
  return weeksDiff >= 0 ? weeksDiff : 0;
};

export const getMaximumWeek = (start, end) => {
  const daysDiff = moment(end).diff(moment(start), 'days');
  const weeksDiff = Math.round(daysDiff / 7) + 1;
  return weeksDiff;
};

export const getTimezone = () => {
  return momenttz.tz.guess();
};
