'use strict';

const BID = {
  title: 'Bid',
  hasMarkdown: true,
  hasLink: true,
  body: [
    'A contractor offer of a price to provide requested services, as described by an [RFP](/info-center/definitions/request-for-proposal).'
  ],
  terms: [],
  images: []
};

const REQUEST_FOR_PROPOSAL = {
  title: 'Request For Proposal',
  body: [
    'A document prepared for the purpose of soliciting competitive contractor bids which comprehensively specifies the work a homeowner would like to get done as part of their project. Often abbreviated as RFP.',
    'A properly drafted RFP helps to ensure that each bidding contractor considers the full extent of work required for the project.'
  ],
  terms: [],
  images: []
};

const BID_PROCESS = {
  title: 'Bid Process',
  hasMarkdown: true,
  body: [
    'An organized set of steps uniquely defined by Emprove with the objective to allow the homeowner to comprehensively convey the scope of their project, efficiently solicit competitive [Bids](/info-center/definitions/bid) from qualified contractors, and ultimately select their contractor with confidence and transparency.  The steps are generally as follows:'
  ],
  terms: [
    {
      id: 1,
      name: null,
      definition: 'Homeowner browses our Dream It! look-book for project design inspiration;'
    },
    {
      id: 2,
      hasMarkdown: true,
      name: null,
      definition: 'Homeowner creates a [Styleboard](/info-center/definitions/styleboard) for their project;'
    },
    {
      id: 3,
      name: null,
      definition: 'Homeowner leverages our Cost It! tools to refine and conclude its project scope of work;'
    },
    {
      id: 4,
      hasMarkdown: true,
      name: null,
      definition: "Emprove prepares a comprehensive [RFP](/info-center/definitions/request-for-proposal) package for the homeowner's project;"
    },
    {
      id: 5,
      name: null,
      definition: 'Emprove sends the RFP to multiple contractors and solicits their bids;'
    },
    {
      id: 6,
      name: null,
      definition: 'Contractors submit their bids to Emprove;'
    },
    {
      id: 7,
      name: null,
      definition: 'Emprove compiles the bids and prepares a side-by-side comparative summary for homeowner review;'
    },
    {
      id: 8,
      hasMarkdown: true,
      name: null,
      definition: 'Based on their review of the comparative summary the homeowner [Shortlists](/info-center/definitions/shortlist) 1 to 3 contractors to conduct a site visit of their project;'
    },
    {
      id: 9,
      name: null,
      definition: 'Shortlisted contractors conduct site visits and either revise or confirm their initial bid submissions;'
    },
    {
      id: 10,
      name: null,
      definition: 'Homeowner makes a confident and transparent decision on which contractor to hire based on final bid submissions. '
    }
  ],
  images: []
};

const BidInformation = {
  BID,
  REQUEST_FOR_PROPOSAL,
  BID_PROCESS
};

export default BidInformation;
