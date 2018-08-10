'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var contractType = {
  title: 'Contract Type',
  body: ['The two most commonly used contract types in the industry are:'],
  terms: [{
    id: 1,
    name: 'Lump-Sum Agreement',
    definition: 'In this form of agreement, the contractor agrees to perform the work for an agreed fixed price. Exceptions to that fixed price include costs of Owner Selected Items (OSI) in excess of the agreed OSI allowance, and the cost of work performed beyond the extent of the original scope. The value of these exceptions would be added to the initial fixed price via Change Order.'
  }, {
    id: 2,
    name: 'Time and Material (T&M) Agreement',
    definition: 'In this form of agreement, the contractor charges the Homeowner for the cost of materials it purchases and the labor cost (based on agreed hourly rates) it expends to perform the work. In addition, this form allows the contractor and Homeowner to opt for a not-to-exceed (“NTE”), which would be the maximum amount the contractor could charge the Homeowner for the work.'
  }]
};

var paymentType = {
  title: 'Payment Type',
  body: ['The different payment types are:'],
  terms: [{
    id: 1,
    name: 'A Bi-Weekly payment type',
    definition: 'Where the contractor submits an invoice for the work it performed during each 2-week time period. Homeowner then makes payment per the Payment Term.'
  }, {
    id: 2,
    name: 'A Monthly payment type',
    definition: 'Where the contractor submits a monthly invoice for the work it performed during each month. Homeowner then makes payment per the Payment Term.'
  }, {
    id: 3,
    name: 'A Milestone-Based payment',
    definition: 'Sets out various work completion milestones, that once reached, entitles the contractor to payment of an associated pre-determined amount. Homeowner then makes payment per the Payment Term.'
  }]
};

var paymentTerm = {
  title: 'Payment Term',
  body: ['The amount of time the Homeowner has to pay the contractor’s invoice after receipt.'],
  terms: []
};

var retention = {
  title: 'Retention',
  body: ['The amount of money that is retained by the Homeowner from the total amount otherwise due to the contractor for work performed. Retention serves as security for the Homeowner, to ensure there are funds available at the end of the project that can be used to complete or correct the work, if necessary. When the contractor achieves full satisfactory completion of the project, the retention is then released to the contractor.', 'The maximum amount of retention permitted varies from state to state, with most states permitting a maximum of 10% or 5%. Check your state legislative website for further details.'],
  terms: []
};

var disputeResolution = {
  title: 'Dispute Resolution',
  body: ['The method in which the Homeowner and Contractor agree to resolve any disputes that may arise during the project, per the following:'],
  terms: [{
    id: 1,
    name: 'Litigation',
    definition: 'To go to court (i.e. file a lawsuit in the county or other court), where the case would ultimately be decided by a judge or jury.'
  }, {
    id: 2,
    name: 'Binding Arbitration',
    definition: 'A somewhat less formal method where the dispute is presented to a paid third party arbitrator, who makes a binding decision on the matter (i.e. enters an order determining the winner). The order can be enforced in court.'
  }]
};

var generalContractor = {
  title: 'General Contractor',
  hasMarkdown: true,
  hasLink: true,
  body: ['The contractor ultimately responsible to the homeowner for the successful completion of larger projects.  They are typically responsible to provide all material, tools, equipment, labor, site activity coordination, and supervision necessary to complete the project.', 'General Contractors often hire [Subcontractors](/info-center/definitions/subcontractor) to perform specific components of the work.'],
  terms: []
};

var BINDING_ARBITRATION = {
  title: 'Binding Arbitration',
  body: ['A somewhat less formal method where the dispute is presented to a paid third party arbitrator, who makes a binding decision on the matter (i.e. enters an order determining the winner).  The order can be enforced in court.'],
  terms: [],
  images: []
};

var LITIGATION = {
  title: 'Litigation',
  body: ['To go to court (i.e. file a lawsuit in the county or other court), where the case would ultimately be decided by a judge or jury.'],
  terms: [],
  images: []
};

var MILESTONE_BASED_PAYMENT = {
  title: 'Milestone-Based Payment',
  hasMarkdown: true,
  body: ['Sets out various work completion milestones, that once reached, entitles the contractor to payment of an associated pre-determined amount.  Homeowner then makes payment per the [Payment Term](/info-center/definitions/payment-term).'],
  terms: [],
  images: []
};

var MONTHLY_PAYMENT = {
  title: 'Monthly Payment',
  hasMarkdown: true,
  body: ['Where the contractor submits a monthly invoice for the work it performed during each month. Homeowner then makes payment per the [Payment Term](/info-center/definitions/payment-term). '],
  terms: [],
  images: []
};

var BI_WEEKLY_PAYMENT = {
  title: 'Bi-Weekly Payment',
  hasMarkdown: true,
  body: ['Where the contractor submits an invoice for the work it performed during each 2-week time period. Homeowner then makes payment per the [Payment Term](/info-center/definitions/payment-term).'],
  terms: [],
  images: []
};

var PAYMENT_TYPES = {
  title: 'Payment Types',
  body: [],
  terms: [{
    id: 1,
    name: 'A Bi-Weekly payment type is where the contractor submits an invoice for the work it performed during each 2-week time period. Homeowner then makes payment per the Payment Term. ',
    definition: null
  }, {
    id: 2,
    name: 'A Monthly payment type is where the contractor submits a monthly invoice for the work it performed during each month. Homeowner then makes payment per the Payment Term. ',
    definition: null
  }, {
    id: 3,
    name: 'A Milestone-Based payment sets out various work completion milestones, that once reached, entitles the contractor to payment of an associated pre-determined amount.  Homeowner then makes payment per the Payment Term.',
    definition: null
  }],
  images: []
};

var TIME_AND_MATERIAL_TM_AGREEMENT = {
  title: 'Time and Material (T&M) Agreement',
  body: ['In this form of agreement, the contractor charges the Homeowner for the cost of materials it purchases and the labor cost (based on agreed hourly rates) it expends to perform the work. In addition, this form allows the contractor and Homeowner to opt for a not-to-exceed (“NTE”), which would be the maximum amount the contractor could charge the Homeowner for the work.'],
  images: [],
  terms: []
};

var LUMP_SUM_AGREEMENT = {
  title: 'Lump-Sum Agreement',
  body: ['In this form of agreement, the contractor agrees to perform the work for an agreed fixed price. Exceptions to that fixed price include costs of Owner Selected Items (OSI) in excess of the agreed OSI allowance, and the cost of work performed beyond the extent of the original scope.  The value of these exceptions would be added to the initial fixed price via Change Order.'],
  images: [],
  terms: []
};

var CONTRACT_TYPES = {
  title: 'Contract Types',
  body: ['The two most commonly used contract types in the industry are:'],
  terms: [{
    id: 1,
    name: 'Lump-Sum Agreement:  In this form of agreement, the contractor agrees to perform the work for an agreed fixed price. Exceptions to that fixed price include costs of Owner Selected Items (OSI) in excess of the agreed OSI allowance, and the cost of work performed beyond the extent of the original scope.  The value of these exceptions would be added to the initial fixed price via Change Order.',
    definition: null
  }, {
    id: 2,
    name: 'Time and Material (T&M) Agreement:  In this form of agreement, the contractor charges the Homeowner for the cost of materials it purchases and the labor cost (based on agreed hourly rates) it expends to perform the work. In addition, this form allows the contractor and Homeowner to opt for a not-to-exceed (“NTE”), which would be the maximum amount the contractor could charge the Homeowner for the work.',
    definition: null
  }]
};

var ContractInformation = {
  CONTRACT_TYPE: contractType,
  PAYMENT_TERM: paymentTerm,
  PAYMENT_TYPE: paymentType,
  RETENTION: retention,
  DISPUTE_RESOLUTION: disputeResolution,
  GENERAL_CONTRACTOR: generalContractor,
  BINDING_ARBITRATION: BINDING_ARBITRATION,
  LITIGATION: LITIGATION,
  MILESTONE_BASED_PAYMENT: MILESTONE_BASED_PAYMENT,
  MONTHLY_PAYMENT: MONTHLY_PAYMENT,
  BI_WEEKLY_PAYMENT: BI_WEEKLY_PAYMENT,
  PAYMENT_TYPES: PAYMENT_TYPES,
  TIME_AND_MATERIAL_TM_AGREEMENT: TIME_AND_MATERIAL_TM_AGREEMENT,
  LUMP_SUM_AGREEMENT: LUMP_SUM_AGREEMENT,
  CONTRACT_TYPES: CONTRACT_TYPES
};

exports.default = ContractInformation;