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
  },
  messages: {
    'CP.LANDING.COST.TITLE': 'THE COST',
    'CP.LANDING.COST.TEXT': "Success Fee is an introductory flat rate of $99 once you're hired",
    'HOP.BROWSE_MODAL.SNAPPRICE.INPUT_SECTION.SUBHEADER': 'Adjust the estimate inputs to fit your budget',
    'HOP.BROWSE_MODAL.SNAPPRICE.PANEL_FOOTER.TEXT': '<strong>Start a project inspired by this design</strong>',
    'HOP.BROWSE_MODAL.SNAPPRICE.REGISTRATION_PROMPT.CANCEL': 'Not yet, show my project first',
    'HOP.BROWSE_MODAL.SNAPPRICE.REGISTRATION_PROMPT.CONFIRM': 'Yes, Sign me up!',
    'HOP.LANDING.BANNER.TEXT1': '<strong>Renovations</strong> Go Better<br />When You Have A <strong>Plan</strong>',
    'HOP.LANDING.BANNER.TEXT1_DESKTOP': '<strong>Renovations</strong> Go Better when You Have A <strong>Plan</strong>',
    'HOP.LANDING.BANNER.TEXT2': 'WE TURN INSPIRING IMAGES INTO YOUR <strong>AFFORDABLE PROJECT PLAN.</strong>',
    'HOP.LANDING.BANNER.TEXT2_DESKTOP': 'WE TURN INSPIRING IMAGES INTO<br />YOUR <strong>AFFORDABLE PROJECT PLAN.</strong>',
    'HOP.LANDING.WHAT_WE_DO.HEADING': 'As your <strong>Home Renovation Partner</strong>, we guide you through these <strong>3 easy steps:</strong>',
    'HOP.LANDING.WHAT_WE_DO.GET_IT_DONE.BODY': 'We send your project details to our pre-vetted network of contractors in your area. After an on-site visit, you and your contractor can finalize a price!',
    'HOP.RFP.REGISTRATION.HEADER.TITLE_SUFFIX.GET_PRICING': 'with Emprove<br />to start the pricing process for your project',
    'HOP.RFP.MISSING_LOGISTICS.HEADER.TITLE': '<strong>STEP 2 - Complete your project plan</strong> before downloading it or sharing it with contractors',
    'HOP.RFP.IN_MARKET_PAYWALL.HEADER': '<strong>STEP 1 - ACTIVATE YOUR PROJECT</strong><br />to get qualified contractors to complete for your business',
    'HOP.RFP.IN_MARKET_PAYWALL.ACTIVATION.HEADER': '<strong>${amount} Refundable Activation Fee</strong>',
    'HOP.RFP.IN_MARKET_PAYWALL.ACTIVATION.BODY': 'You pay ${amount} to purchase your plan and unlock the pricing process with qualified contractors. We will refund your money when you hire a contractor through Emprove.',
    'HOP.RFP.IN_MARKET_PAYWALL.ACTIVATION.LINK': 'LEARN MORE ABOUT OUR ACTIVATION FEE',
    'HOP.RFP.IN_MARKET_PAYWALL.CREDIT_DETAILS.HEADER': '<strong>PLEASE ENTER YOUR CREDIT CARD DETAILS</strong>',
    'HOP.RFP.IN_MARKET_PAYWALL.CREDIT_DETAILS.SUB_HEADER': '<small>Upon pressing "CONFIRM" your card will be charged ${amount}</small>',
    'HOP.RFP.IN_MARKET_PAYWALL.SECURITY': '<strong>This is a secure AES-256 Encrypted payment.</strong>',
    'HOP.RFP.IN_MARKET_PAYWALL.CTA.TITLE': 'CONFIRM',
    'HOP.RFP.OUT_MARKET_PAYWALL.HEADER': '<strong>STEP 1 - ACTIVATE YOUR PROJECT</strong> to invite contractors to complete for your business',
    'HOP.RFP.OUT_MARKET_PAYWALL.ACTIVATION.HEADER': '<strong>${amount} Refundable Activation Fee</strong>',
    'HOP.RFP.OUT_MARKET_PAYWALL.ACTIVATION.BODY': 'You pay ${amount} to purchase your plan and unlock the pricing process with contractors that you invite. We will refund your money when you hire a contractor through our pricing process.',
    'HOP.RFP.OUT_MARKET_PAYWALL.ACTIVATION.LINK': 'LEARN MORE ABOUT OUR ACTIVATION FEE',
    'HOP.RFP.OUT_MARKET_PAYWALL.CREDIT_DETAILS.HEADER': '<strong>PLEASE ENTER YOUR CREDIT CARD DETAILS</strong>',
    'HOP.RFP.OUT_MARKET_PAYWALL.CREDIT_DETAILS.SUB_HEADER': '<small>Upon pressing "CONFIRM" your card will be charged ${amount}</small>',
    'HOP.RFP.OUT_MARKET_PAYWALL.SECURITY': '<strong>This is a secure AES-256 Encrypted payment.</strong>',
    'HOP.RFP.OUT_MARKET_PAYWALL.CTA.TITLE': 'CONFIRM',
    'HOP.RFP.LOGISTICS.TERMS.CTA.TITLE': 'GO TO NEXT STEP',
    'HOP.RFP.INVITE_CONTRACTOR.HEADER': 'Please add the contact information for the contractors you would like to price your project.',
    'HOP.RFP.INVITE_CONTRACTOR.SUB_HEADER': 'You can invite up to 3 contractors',
    'HOP.RFP.INVITE_CONTRACTOR.CTA.TITLE': 'SEND PLAN OUT FOR PRICING',
    'HOP.VIEW_RFP_MODAL.CTA.VIEW_PLAN.TITLE': 'VIEW PLAN',
    'HOP.VIEW_RFP_MODAL.CTA.DOWNLOAD.TITLE': 'DOWNLOAD',
    'HOP.VIEW_RFP_MODAL.IN_MARKET.DESKTOP.CONGRATS': 'Congrats! Your project was sent to our network of licensed contractors.<br />We will be in contact with you by email in the next 7 business days.',
    'HOP.VIEW_RFP_MODAL.IN_MARKET.MOBILE.CONGRATS': 'AWESOME, YOUR PROJECT WAS SENT TO OUR NETWORK OF <strong>LICENSED CONTRACTORS!</strong>',
    'HOP.VIEW_RFP_MODAL.OUT_MARKET.DESKTOP.CONGRATS': 'Congrats! Your project was sent to the contractor(s) of your choice.<br />We will be in contact with you by email in the next 7 business days.',
    'HOP.VIEW_RFP_MODAL.OUT_MARKET.MOBILE.CONGRATS': '<strong>Congrats!</strong> Your project was sent to the contractor(s) of your choice.',
    'HOP.VIEW_RFP_MODAL.OUT_MARKET.INVITED_CONTRACTORS.TITLE': 'YOUR INVITED CONTRACTORS',
    'HOP.VIEW_RFP_MODAL.MOBILE.CONTACT': 'We will be in contact with you by email in the next <strong>7 business days</strong>.',
    'HOP.VIEW_RFP_MODAL.MOBILE.PROCESS.CTA.TITLE': 'HERE',
    'HOP.VIEW_RFP_MODAL.MOBILE.PROCESS.BODY': 'is more info on the <strong>Process</strong>',
    'HOP.RFP.SEND_PLAN.IN_MARKET.PRICING.HEADER': '<strong>STEP 3 - </strong>Send your {homeArea} PROJECT out for <strong>COMPETITIVE PRICING</strong> from <strong>QUALIFIED CONTRACTORS</strong>',
    'HOP.RFP.SEND_PLAN.IN_MARKET.PRICING.BODY.CONTRACTORS': 'We share your project with at least <strong>3 qualified contractors</strong>',
    'HOP.RFP.SEND_PLAN.IN_MARKET.PRICING.BODY.PRICING_INFO': 'You will receive pricing for your project within <strong>7 business days</strong>',
    'HOP.RFP.SEND_PLAN.IN_MARKET.PRICING.BODY.PROCESS.CTA.TITLE': 'HERE',
    'HOP.RFP.SEND_PLAN.IN_MARKET.PRICING.BODY.PROCESS.BODY': 'is more info on the <strong>Process</strong>',
    'HOP.RFP.SEND_PLAN.IN_MARKET.CTA.TITLE': 'SEND PLAN OUT FOR PRICING',
    'HOP.RFP.SEND_PLAN.OUT_MARKET.PRICING.HEADER': '<strong>STEP 3 - </strong>Invite contractors <strong>of your choice</strong> to price your detailed project plan',
    'HOP.RFP.SEND_PLAN.OUT_MARKET.PRICING.BODY.CONTRACTORS': 'We will ask your contractor(s) to price your project',
    'HOP.RFP.SEND_PLAN.OUT_MARKET.PRICING.BODY.PRICING_INFO': "You'll receive and compare the project pricing information",
    'HOP.RFP.SEND_PLAN.OUT_MARKET.PRICING.BODY.PROCESS': 'Our process helps ensure you get a fair project price',
    'HOP.RFP.SEND_PLAN.OUT_MARKET.CTA.TITLE': 'INVITE CONTRACTORS',
    'HOP.RFP.SEND_PLAN.NOT_READY.HEADER': 'NOT READY?<br /><strong>REVIEW/UPDATE</strong> YOUR PROJECT PLAN',
    'HOP.RFP.SEND_PLAN.NOT_READY.BODY': 'We compiled a comprehensive plan to help contractors accurately quote your project.',
    'HOP.RFP.PRICING_PROCESS.GET_PRICING_HEADER': 'LET EMPROVE DO THE LEG WORK TO <strong>SAVE YOU TIME AND MONEY</strong>',
    'HOP.RFP.PRICING_PROCESS.DOWNLOAD.HEADER': 'ACTIVATE YOUR PROJECT TO <strong>DOWNLOAD YOUR PLAN</strong> ALONG WITH OTHER BENEFITS',
    'HOP.RFP.STYLE.IMAGE_RAIL.MATERIAL_DROPDOWN.TEXT': 'Change the material to achieve this style within your budget.'
  }
};