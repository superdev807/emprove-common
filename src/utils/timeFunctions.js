'use strict';

import business from 'moment-business-days';
import moment from 'moment';
import momenttz from 'moment-timezone';
import timeline from '../data/rfp_timeline.json';
import { PACIFIC_TIMEZONE } from '../config/constants';

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

export const calculateTimelineFromSubmitProposalsDueDate = (submitProposalsDueDate, businessDays, timezone) => {
  const businessDaysToUse = process.env.IN_TEST_MODE === 'true' ? 'qa_business_days' : 'md_project_business_days';

  submitProposalsDueDate = business(momenttz.tz(submitProposalsDueDate, timezone)).businessAdd(
    businessDays && businessDays > 0 ? businessDays : 0
  );
  const siteVisitDueDate = submitProposalsDueDate.businessAdd(timeline[4][businessDaysToUse] + timeline[5][businessDaysToUse]);
  const finalBidDueDate = business(siteVisitDueDate).businessAdd(timeline[6][businessDaysToUse]);
  const awardDate = business(finalBidDueDate).businessAdd(timeline[7][businessDaysToUse]);

  return { submitProposalsDueDate, siteVisitDueDate, finalBidDueDate, awardDate };
};

export const calculateTimelineFromSiteVisitDueDate = (siteVisitDueDate, businessDays) => {
  const businessDaysToUse = process.env.IN_TEST_MODE === 'true' ? 'qa_business_days' : 'md_project_business_days';

  siteVisitDueDate = business(siteVisitDueDate).businessAdd(businessDays && businessDays > 0 ? businessDays : 0);

  const finalBidDueDate = business(siteVisitDueDate).businessAdd(timeline[6][businessDaysToUse]);
  const awardDate = business(finalBidDueDate).businessAdd(timeline[7][businessDaysToUse]);

  return { siteVisitDueDate, finalBidDueDate, awardDate };
};

export const calculateTimelineFromFinalBidDueDate = (finalBidDueDate, businessDays) => {
  const businessDaysToUse = process.env.IN_TEST_MODE === 'true' ? 'qa_business_days' : 'md_project_business_days';

  finalBidDueDate = business(finalBidDueDate).businessAdd(businessDays && businessDays > 0 ? businessDays : 0);
  const awardDate = business(finalBidDueDate).businessAdd(timeline[7][businessDaysToUse]);

  return { finalBidDueDate, awardDate };
};

export const correctDueDate = date =>
  // Change to Pacific timezone rather than UTC to handle daylight saving time
  momenttz.tz(date, PACIFIC_TIMEZONE).set({ hour: 17, minute: 0, second: 0, millisecond: 0 });

export const calculateProjectTimeline = rfpSentDueDate => {
  if (!rfpSentDueDate) {
    rfpSentDueDate = moment();
  }

  const businessDaysToUse = process.env.IN_TEST_MODE === 'true' ? 'qa_business_days' : 'md_project_business_days';

  const submitProposalsDueDate = correctDueDate(
    business(rfpSentDueDate).businessAdd(timeline[2][businessDaysToUse] + timeline[3][businessDaysToUse])
  );

  const siteVisitDueDate = correctDueDate(
    business(submitProposalsDueDate).businessAdd(timeline[4][businessDaysToUse] + timeline[5][businessDaysToUse])
  );

  const finalBidDueDate = correctDueDate(business(siteVisitDueDate).businessAdd(timeline[6][businessDaysToUse]));

  const awardDate = correctDueDate(business(finalBidDueDate).businessAdd(timeline[7][businessDaysToUse]));

  return {
    rfpSentDueDate,
    submitProposalsDueDate,
    siteVisitDueDate,
    finalBidDueDate,
    awardDate
  };
};

export const getAwardDateFromRfpSentDueDate = (rfpSentDueDate, timezone) => {
  let rfpSentDueDateMoment = momenttz.tz(rfpSentDueDate || undefined, timezone);
  const projectTimeline = calculateProjectTimeline(rfpSentDueDateMoment);
  const awardDate = projectTimeline.awardDate;
  return awardDate;
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

/*
 * Get local timezone from browser
 */
export const getLocalTimezone = () => {
  return momenttz.tz.guess();
};

/*
 * Converts the ISO timezone name into shorter format. e.g. from `America/Los_Angeles` to `PST`
 */
export const toShortTimezone = timezone =>
  momenttz()
    .tz(timezone || getLocalTimezone())
    .format('z');

/*
 * Converts the date string or moment date into ISO date string in 'YYYY-MM-DD' format and specified timezone
 */
export const toISODateStr = (date, timezone) => {
  if (date) {
    return timezone
      ? momenttz(date)
          .tz(timezone)
          .format(dateFormat)
      : moment(date).format(dateFormat);
  } else {
    return date;
  }
};

export const getAllTimezones = () =>
  momenttz.tz.names().filter(timezone => /^(America|Asia|Europe|Australia|Africa|Pacific|Atlantic|Indian)/.test(timezone));
