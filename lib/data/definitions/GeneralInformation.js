'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var OHP = {
  title: 'OH&P',
  hasMarkdown: true,
  hasLink: true,
  body: ['[Overhead & Profit](/info-center/definitions/overhead-profit)'],
  images: [],
  terms: []
};
var RFP = {
  title: 'RFP',
  hasMarkdown: true,
  hasLink: true,
  body: ['[Request for Proposal](/info-center/definitions/request-for-proposal)'],
  images: [],
  terms: []
};
var OWNER_SELECTED_ITEMS = {
  title: 'Owner Selected Items',
  body: ['Items purchased by the Contractor which will require the Homeowners selection or approval.  The cost of OSI’s shall be included in the total price.'],
  hasManyTerms: true,
  terms: [[{
    id: 1,
    name: 'Faucet Fixture;',
    title: "Examples of items that are typically OSI's:"
  }, {
    id: 2,
    name: 'Stone Countertop Slab Material;',
    title: "Examples of items that are typically OSI's:"
  }, {
    id: 3,
    name: 'Wall Cabinet Faces;',
    title: "Examples of items that are typically OSI's:"
  }, {
    id: 4,
    name: 'Wall Cabinet Hardware;',
    title: "Examples of items that are typically OSI's:"
  }, {
    id: 5,
    name: 'Floor Tile Material;',
    title: "Examples of items that are typically OSI's:"
  }, {
    id: 6,
    name: 'Wall Tile Material;',
    title: "Examples of items that are typically OSI's:"
  }, {
    id: 7,
    name: 'Downlight Fixture;',
    title: "Examples of items that are typically OSI's:"
  }, {
    id: 8,
    name: 'Refrigerator',
    title: "Examples of items that are typically OSI's:"
  }, {
    id: 9,
    name: 'etc.',
    title: "Examples of items that are typically OSI's:"
  }], [{
    id: 1,
    name: 'Cost of All Labor',
    title: "Examples of items that are not typically OSI's"
  }, {
    id: 2,
    name: 'Faucet Plumbing Piping;',
    title: "Examples of items that are not typically OSI's"
  }, {
    id: 3,
    name: 'Countertop Substrate Material;',
    title: "Examples of items that are not typically OSI's"
  }, {
    id: 4,
    name: 'Wall Cabinet Blocking Material;',
    title: "Examples of items that are not typically OSI's"
  }, {
    id: 5,
    name: 'Floor Tile Adhesive;',
    title: "Examples of items that are not typically OSI's"
  }, {
    id: 6,
    name: 'Wall Tile Cement Board;',
    title: "Examples of items that are not typically OSI's"
  }, {
    id: 7,
    name: 'Downlight Wiring;',
    title: "Examples of items that are not typically OSI's"
  }, {
    id: 8,
    name: 'Refrigerator Plumbing Tubing;',
    title: "Examples of items that are not typically OSI's"
  }, {
    id: 9,
    name: 'etc.',
    title: "Examples of items that are not typically OSI's"
  }]]
};
var OSI = {
  title: 'OSI',
  hasMarkdown: true,
  hasLink: true,
  body: ['[Owner Selected Items](/info-center/definitions/owner-selected-items)'],
  terms: [],
  images: []
};
var ACTIVATION_FEE = {
  title: "Emprove's Activation Fee",
  body: ['Emprove’s activation fee unlocks the pricing process designed to help you get the best contractor for your project at a fair price. You pay the fee which helps to show contractors you are serious about your project. (They spend a significant amount of time pricing out your project plan).']
};
var GeneralInformation = {
  OHP: OHP,
  RFP: RFP,
  OWNER_SELECTED_ITEMS: OWNER_SELECTED_ITEMS,
  OSI: OSI,
  ACTIVATION_FEE: ACTIVATION_FEE
};
var _default = GeneralInformation;
exports.default = _default;