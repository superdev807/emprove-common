'use strict';

const OHP = {
  title: 'OH&P',
  isMayus: true,
  body: ['Overhead & Profit'],
  images: [],
  terms: []
};

const RFP = {
  title: 'RFP',
  isMayus: true,
  body: ['Request for Proposal'],
  images: [],
  terms: []
};

const OWNER_SELECTED_ITEMS = {
  title: 'OWNER SELECTED ITEMS',
  body: [
    'Items purchased by the Contractor which will require the Homeowners selection or approval.  The cost of OSI’s shall be included in the total price.'
  ],
  hasManyTerms: true,
  terms: [
    [
      {
        id: 1,
        name: 'Faucet Fixture;',
        title: "Examples of items that are typically OSI's:"
      },
      {
        id: 2,
        name: 'Stone Countertop Slab Material;',
        title: "Examples of items that are typically OSI's:"
      },
      {
        id: 3,
        name: 'Wall Cabinet Faces;',
        title: "Examples of items that are typically OSI's:"
      },
      {
        id: 4,
        name: 'Wall Cabinet Hardware;',
        title: "Examples of items that are typically OSI's:"
      },
      {
        id: 5,
        name: 'Floor Tile Material;',
        title: "Examples of items that are typically OSI's:"
      },
      {
        id: 6,
        name: 'Wall Tile Material;',
        title: "Examples of items that are typically OSI's:"
      },
      {
        id: 7,
        name: 'Downlight Fixture;',
        title: "Examples of items that are typically OSI's:"
      },
      {
        id: 8,
        name: 'Refrigerator',
        title: "Examples of items that are typically OSI's:"
      },
      {
        id: 9,
        name: 'etc.',
        title: "Examples of items that are typically OSI's:"
      }
    ],
    [
      {
        id: 1,
        name: 'Cost of All Labor',
        title: "Examples of items that are not typically OSI's"
      },
      {
        id: 2,
        name: 'Faucet Plumbing Piping;',
        title: "Examples of items that are not typically OSI's"
      },
      {
        id: 3,
        name: 'Countertop Substrate Material;',
        title: "Examples of items that are not typically OSI's"
      },
      {
        id: 4,
        name: 'Wall Cabinet Blocking Material;',
        title: "Examples of items that are not typically OSI's"
      },
      {
        id: 5,
        name: 'Floor Tile Adhesive;',
        title: "Examples of items that are not typically OSI's"
      },
      {
        id: 6,
        name: 'Wall Tile Cement Board;',
        title: "Examples of items that are not typically OSI's"
      },
      {
        id: 7,
        name: 'Downlight Wiring;',
        title: "Examples of items that are not typically OSI's"
      },
      {
        id: 8,
        name: 'Refrigerator Plumbing Tubing;',
        title: "Examples of items that are not typically OSI's"
      },
      {
        id: 9,
        name: 'etc.',
        title: "Examples of items that are not typically OSI's"
      }
    ]
  ]
};

const OSI = {
  title: 'OSI',
  isMayus: true,
  body: ['Owner Selected Items'],
  terms: [],
  images: []
};

const GeneralInformation = {
  OHP,
  RFP,
  OWNER_SELECTED_ITEMS,
  OSI
};

export default GeneralInformation;
