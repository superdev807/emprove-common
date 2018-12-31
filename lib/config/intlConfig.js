'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  locale: 'en',
  formats: {
    date: {
      numericDate: {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric'
      },
      twoDigitDate: {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      },
      twoDigitDateTz: {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        timeZoneName: 'short'
      },
      monthAndYear: {
        month: 'long',
        year: 'numeric'
      },
      shortMonthAndYear: {
        month: 'short',
        year: 'numeric'
      },
      dayMonthAndYear: {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      },
      dayMonthYearTz: {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        timeZoneName: 'short'
      },
      weekdayDayMonthAndYear: {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        weekday: 'long'
      },
      shortWeekdayDayMonthAndYear: {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        weekday: 'short'
      },
      dayMonAndYear: {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      },
      shortDMY: {
        day: '2-digit',
        month: '2-digit',
        year: '2-digit'
      },
      shortDMYT: {
        day: '2-digit',
        month: '2-digit',
        year: '2-digit',
        timeZoneName: 'short'
      },
      year: {
        year: 'numeric'
      },
      shortWeekday: {
        weekday: 'short'
      }
    },
    time: {
      hourMinute: {
        hour: '2-digit',
        minute: '2-digit'
      },
      hourMinuteTz: {
        hour: '2-digit',
        minute: '2-digit',
        timeZoneName: 'short'
      },
      hourMinuteSecond: {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      },
      hourMinuteSecondTz: {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZoneName: 'short'
      }
    },
    number: {
      currency: {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 1
      },
      currencyWithCents: {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      },
      percent: {
        style: 'percent',
        minimumFractionDigits: 1,
        maximumFractionDigits: 2
      },
      percentRounded: {
        style: 'percent',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      },
      score: {
        style: 'decimal',
        minimumFractionDigits: 0,
        maximumFractionDigits: 1
      },
      decimal: {
        style: 'decimal',
        minimumFractionDigits: 0,
        maximumFractionDigits: 2
      }
    }
  }
};