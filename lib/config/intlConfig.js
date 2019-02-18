'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
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
    'CP.LANDING.COST.PRETEXT': 'Only pay a Success Fee after you are awarded the project!',
    'CP.LANDING.COST.CLICK': 'Click here',
    'CP.LANDING.COST.POSTTEXT': ' to view our Contractor Success Fee Schedule.',
    'HOP.BROWSE_MODAL.SNAPPRICE.INPUT_SECTION.SUBHEADER': 'Adjust the estimate inputs to fit your budget',
    'HOP.BROWSE_MODAL.SNAPPRICE.PANEL_FOOTER.TEXT': '<strong>Start a project inspired by this design</strong>',
    'HOP.INSTANT_ESTIMATE.INPUT_SECTION.HEADER.TITLE': 'CUSTOMIZE YOUR INSTANT ESTIMATE',
    'HOP.INSTANT_ESTIMATE.INPUT_SECTION.HEADER.SUBTITLE': 'Adjust the estimate inputs to fit your budget',
    'HOP.BROWSE_MODAL.SNAPPRICE.REGISTRATION_PROMPT.CANCEL': 'No, show me my Estimate',
    'HOP.BROWSE_MODAL.SNAPPRICE.REGISTRATION_PROMPT.CONFIRM': "Yes, I'll sign up before seeing my Estimate",
    'HOP.INSTANT_ESTIMATE.INPUT_SECTION_FOOTER.BUTTON.TEXT': 'CUSTOMIZE THIS PROJECT',
    'HOP.INSTANT_ESTIMATE.INPUT_SECTION_FOOTER.HEADER.TITLE': 'WANT TO <strong>FINE TUNE</strong> EVERY DETAIL?',
    'HOP.INSTANT_ESTIMATE.INPUT_SECTION_FOOTER.HEADER.SUBTITLE': 'Turn this estimate into a detailed project plan that you can completely customize before sending it out for contractor quotes.',
    'HOP.INSTANT_ESTIMATE.RESULT_SECTION_FOOTER.BUTTON.TEXT': 'GET QUOTES',
    'HOP.INSTANT_ESTIMATE.RESULT_SECTION_FOOTER.HEADER.TITLE': 'READY TO <strong>GET QUOTES</strong> FROM CONTRACTORS?',
    'HOP.INSTANT_ESTIMATE.RESULT_SECTION_FOOTER.HEADER.SUBTITLE': 'If this estimate fits your budget and roughly what you want included, then you are ready! You can always make tweaks later.',
    'HOP.INSTANT_ESTIMATE.ACTION_FOOTER.TITLE': 'BUILD YOUR DREAM <strong>{homeArea}</strong> TODAY',
    'HOP.INSTANT_ESTIMATE.ACTION_FOOTER.SUBTITLE': 'If this estimate fits your budget and roughly what you want included, then you are ready! You can always make tweaks later.',
    'HOP.INSTANT_ESTIMATE.ACTION_FOOTER.CUSTOMIZE_BUTTON.TEXT': 'CUSTOMIZE PROJECT',
    'HOP.INSTANT_ESTIMATE.ACTION_FOOTER.QUOTES_BUTTON.TEXT': 'GET QUOTES NOW',
    'HOP.LANDING.BANNER.TEXT1': '<strong>Renovations</strong> Go Better<br />When You Have A <strong>Plan</strong>',
    'HOP.LANDING.BANNER.TEXT1_DESKTOP': '<strong>Renovations</strong> Go Better when You Have A <strong>Plan</strong>',
    'HOP.LANDING.BANNER.TEXT2': 'WE TURN INSPIRING IMAGES INTO YOUR <strong>AFFORDABLE PROJECT PLAN.</strong>',
    'HOP.LANDING.BANNER.TEXT2_DESKTOP': 'WE TURN INSPIRING IMAGES INTO<br />YOUR <strong>AFFORDABLE PROJECT PLAN.</strong>',
    'HOP.LANDING.BANNER.ACTION_BUTTON.TEXT': 'GET STARTED',
    'HOP.LANDING.BANNER.VARIANT1.TEXT1': '<strong>Renovations</strong> go better when you have a <strong>PLAN</strong>',
    'HOP.LANDING.BANNER.VARIANT1.TEXT2': 'Let us help you create one!',
    'HOP.LANDING.BANNER.VARIANT1.TEXT3': 'start by telling us what do you want to renovate?',
    'HOP.LANDING.BANNER.VARIANT1.ACTION_LABEL': 'GO',
    'HOP.LANDING.BANNER.VARIANT2.TEXT1': 'We turn inspiring images into your <br /><strong>affordable project plan</strong>',
    'HOP.LANDING.BANNER.VARIANT2.TEXT2': 'start by telling us what do you want to renovate?',
    'HOP.LANDING.BANNER.VARIANT2.ACTION_LABEL': 'GO',
    'HOP.LANDING.HOW_IT_WORKS.STEP1.TITLE': 'STYLE IT',
    'HOP.LANDING.HOW_IT_WORKS.STEP1.BODY': 'Our smart photos show you renovation costs and how you can afford the look you want',
    'HOP.LANDING.HOW_IT_WORKS.STEP2.TITLE': 'ESTIMATE IT',
    'HOP.LANDING.HOW_IT_WORKS.STEP2.BODY': 'Our real-time, location-based pricing estimates provide the perfect mix of project materials and scope.',
    'HOP.LANDING.HOW_IT_WORKS.STEP3.TITLE': 'GET IT DONE',
    'HOP.LANDING.HOW_IT_WORKS.STEP3.BODY': 'We send your project details to our pre-vetted network of contractors in your area. After an on-site visit, you and your contractor can finalize a price!',
    'HOP.MATERIAL_OPTIONS.SIDE_BAR.ACTION.TITLE': '<small>+ Add more styles</small>',
    'HOP.LANDING.WHAT_WE_DO.HEADING': 'As your <strong>Home Renovation Partner</strong>, we guide you through these <strong>3 easy steps:</strong>',
    'HOP.RFP.CTA.GET_PRICING.BODY': 'Get pricing for your project from qualified licensed contractors.',
    'HOP.LANDING_PRICING.START_YOUR_PROJECT': 'Start Your Project',
    'HOP.LANDING_PRICING.HEADER.HOW_IT_WORKS': 'How It Works',
    'HOP.LANDING_PRICING.HEADER.PRICING': 'Pricing',
    'HOP.LANDING_PRICING.HEADER.EXAMPLE': 'Example',
    'HOP.LANDING_PRICING.HERO.TITLE': '<strong>Home Renovation</strong><br /><span class="text-primary">MADE SIMPLE</span>',
    'HOP.LANDING_PRICING.HERO.SUBTITLE': 'Achieve the renovation of your dreams.',
    'HOP.LANDING_PRICING.HERO.DESCRIPTION': 'See how much your project should cost based on a line item specific plan that is built for your location and budget in <strong>under 24 hours</strong>.',
    'HOP.LANDING_PRICING.HERO.TIP': 'ALL YOU NEED TO DO IS UPLOAD A PICTURE!',
    'HOP.LANDING_PRICING.HOW_IT_WORKS.HEADING': 'HOW IT <strong>WORKS</strong>',
    'HOP.LANDING_PRICING.HOW_IT_WORKS.ITEM1.HEADING': 'Share With Us<br />What You Want',
    'HOP.LANDING_PRICING.HOW_IT_WORKS.ITEM1.DESCRIPTION': 'Upload a picture of your dream renovation and share your rough budget',
    'HOP.LANDING_PRICING.HOW_IT_WORKS.ITEM2.HEADING': 'We Build Your<br />Plan & Estimate',
    'HOP.LANDING_PRICING.HOW_IT_WORKS.ITEM2.DESCRIPTION': 'We itemize your pictures and build a bottoms up estimate for your project based on your location and budget',
    'HOP.LANDING_PRICING.HOW_IT_WORKS.ITEM3.HEADING': 'Proceed with<br />Confidence',
    'HOP.LANDING_PRICING.HOW_IT_WORKS.ITEM3.DESCRIPTION': "In <strong>24 hours</strong>, you'll receive your plan and estimate to ensure you have the tools to achieve the renovation of your dreams. We can even help you get bids from qualified contractors.",
    'HOP.LANDING_PRICING.WHY_EMPROVE.HEADING': 'WHY <strong class="text-primary">EMPROVE</strong>',
    'HOP.LANDING_PRICING.WHY_EMPROVE.SECTION1.HEADING': 'Learn about The <strong>Potential Costs</strong><br />of your dream renovation',
    'HOP.LANDING_PRICING.WHY_EMPROVE.SECTION1.QUESTION': 'EVER WONDER HOW MUCH<br />RENOVATIONS ACTUALLY COST',
    'HOP.LANDING_PRICING.WHY_EMPROVE.SECTION1.DESCRIPTION': 'Us too. This is why we built the most sophisticated costing engine in the industry to help you not only understand the total bill, but the items that go into a successful renovation project.',
    'HOP.LANDING_PRICING.WHY_EMPROVE.SECTION2.HEADING': 'Adjust your plan to <strong>fit your budget</strong><br /> and still achieve the <strong>look you want</strong>',
    'HOP.LANDING_PRICING.WHY_EMPROVE.SECTION2.QUESTION': "THINK YOU CAN'T AFFORD<br />YOUR DREAM RENOVATION",
    'HOP.LANDING_PRICING.WHY_EMPROVE.SECTION2.DESCRIPTION': "Now you can. We built our tools to help show you multiple ways to achieve the look you want at different price points so you can weigh the tradeoffs, but don't have to compromise your budget.",
    'HOP.LANDING_PRICING.WHY_EMPROVE.SECTION3.HEADING': 'Gain leverage as you start <strong>Pricing</strong><br />your project with <strong>Contractors</strong>',
    'HOP.LANDING_PRICING.WHY_EMPROVE.SECTION3.QUESTION': 'HESITANT ABOUT WORKING<br />WITH CONTRACTORS',
    'HOP.LANDING_PRICING.WHY_EMPROVE.SECTION3.DESCRIPTION': 'We exist to be your advocate and help you go into pricing conversations well informed. When you know what you want and how much it should cost, you have the leverage.',
    'HOP.LANDING_PRICING.EXAMPLE_PROJECT.HEADING': 'EXAMPLE <strong class="text-primary">EMPROVE PROJECT</strong>',
    'HOP.LANDING_PRICING.EXAMPLE_PROJECT.LEFT_TEXT': 'Our team of renovation experts tags your<br /> image with relevant features, materials and <br />quality levels.',
    'HOP.LANDING_PRICING.EXAMPLE_PROJECT.RIGHT_TEXT': 'We then Build Your Comprehensive Project <br />Estimate And Plan',
    'HOP.LANDING_PRICING.EXAMPLE_PROJECT.SEE_SAMPLE': 'See Sample Project Plan',
    'HOP.LANDING_PRICING.EXAMPLE_PROJECT.STEPS.TITLE': '3 SIMPLE STEPS TO GET YOUR PROJECT ESTIMATE',
    'HOP.LANDING_PRICING.EXAMPLE_PROJECT.STEPS.STEP1': 'Upload your image',
    'HOP.LANDING_PRICING.EXAMPLE_PROJECT.STEPS.STEP2': 'We build your plan',
    'HOP.LANDING_PRICING.EXAMPLE_PROJECT.STEPS.STEP3': 'You receive the Project Plan',
    'HOP.LANDING_PRICING.PRICING.HEADING': 'PRICING',
    'HOP.LANDING_PRICING.GUARANTEE.TEXT': 'Emprove guarantees your satisfaction <br />or get your money back',
    'HOP.PRICING_PACKAGES.RECOMMENDED': 'RECOMMENDED',
    'HOP.PRICING_PACKAGES.ACTION_LABEL': 'SELECT',
    'HOP.PRICING_PACKAGES.PACKAGE1.TITLE': 'INSTANT ESTIMATE',
    'HOP.PRICING_PACKAGES.PACKAGE1.PRICE': '$29.99',
    'HOP.PRICING_PACKAGES.PACKAGE1.DESCRIPTION': 'Our team will generate a <strong>Single Estimate</strong> and <strong>Plan</strong> for you based off your dream renovation image',
    'HOP.PRICING_PACKAGES.PACKAGE1.ITEMS': 'Emprove builds a comprehensive line item detail plan for your project\nEmprove estimates your project cost based on the details\n<strong>Unlimited Use of Emprove Project Planning Tool</strong> (to customize your project) and make revisions)\nEstimate and plan delivered in <strong>24 hours</strong>',
    'HOP.PRICING_PACKAGES.PACKAGE2.TITLE': 'BUDGET OPTIMIZER',
    'HOP.PRICING_PACKAGES.PACKAGE2.PRICE': '$59.99',
    'HOP.PRICING_PACKAGES.PACKAGE2.DESCRIPTION': 'Our team will generate <strong>5 Different Estimates and Plans</strong> for your project based on tradeoffs around your budget',
    'HOP.PRICING_PACKAGES.PACKAGE2.ITEMS': 'Everything included in the Instant Estimate Package\nEmprove builds <strong>5 different plans and estimates</strong> that provide you with tradeoffs around project features, quality and materials\nOngoing support from the Emprove team to help you with your project\n<strong>A $15 credit</strong> that can be applied to future renovation projects on Emprove',
    'HOP.PRICING_PACKAGES.PACKAGE3.TITLE': 'FULL SERVICE',
    'HOP.PRICING_PACKAGES.PACKAGE3.PRICE': '$99.99',
    'HOP.PRICING_PACKAGES.PACKAGE3.DESCRIPTION': 'Not only will our team generate <strong>5 Different Estimates and Plans</strong> for your project, but we will also match your project to <strong>Qualified Contractors and run a Pricing Process</strong> to get your fair price.',
    'HOP.PRICING_PACKAGES.PACKAGE3.ITEMS': 'Everything included in the Instant Estimate Package\nWe match your project with <strong>vetted qualified contractors\nWe contact contractors on your behalf and solicit their competitive price for your project\nWe share with you <strong>side by side</strong> contractor price comparison\nWe provide you with <strong>a Standard Contact Form</strong> for you to use with your contractor',
    'HOP.SIGNUP.TITLE': 'SIGN UP',
    'HOP.SIGNUP.HEADLINE': 'TO SAVE YOUR PROJECT AND TRACK<br />YOUR COMPREHENSIVE PLAN ON EMPROVE',
    'HOP.SIGNUP.SAVE_PROJECT.TITLE.BEFORE': 'Want to save your project? Join ',
    'HOP.SIGNUP.SAVE_PROJECT.TITLE.AFTER': ' for Free',
    'HOP.SUBSCRIBERS_LISTING_FULL_MODAL.TITLE': "OUR SUBSCRIBER'S LIST IS FULL",
    'HOP.SUBSCRIBERS_LISTING_FULL_MODAL.DESCRIPTION': "so you've been added to the waiting list.<br />We'll be in touch with you soon!",
    'HOP.SUBSCRIBERS_LISTING_FULL_MODAL.CHOOSE_PRICING.TIP': "Check our Image Catalog where you can see cost estimates for others' images",
    'HOP.SUBSCRIBERS_LISTING_FULL_MODAL.CHOOSE_PRICING.ACTION_LABEL': 'Browse Image Catalog',
    'HOP.SUBSCRIBERS_LISTING_FULL_MODAL.CONCIERGE_PACKAGE.TIP': 'You can save and customize this project for FREE',
    'HOP.SUBSCRIBERS_LISTING_FULL_MODAL.CONCIERGE_PACKAGE.ACTION_LABEL': 'Customize It',
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
exports.default = _default;