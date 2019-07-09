'use strict';

var Colors = null;

if (process.env.IS_REDFIN) {
  Colors = {
    PRIMARY: '#C82021',
    BODY: '#444',
    ICON: '#888',
    REDFIN_PRIMARY: '#C82021',
    ZILLOW_PRIMARY: '#3c6afb',
    KW_PRIMARY: '#b40101'
  };
} else {
  Colors = {
    PRIMARY: '#ff9e3c',
    BODY: '#444',
    ICON: '#888',
    REDFIN_PRIMARY: '#C82021',
    ZILLOW_PRIMARY: '#3c6afb',
    KW_PRIMARY: '#b40101'
  };
}

module.exports = Colors;