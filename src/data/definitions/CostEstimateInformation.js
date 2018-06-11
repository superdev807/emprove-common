'use strict';

const COST_ESTIMATE = {
  title: 'COST ESTIMATE',
  body: ['An estimate of costs produced by Emprove’s proprietary data engine which is informed by deep construction experience and is adjusted for local market conditions. While the cost estimate is well-informed and an accurate depiction of what the project should generally cost, the homeowner’s actual cost will be what they agree with their selected contractors on upon the conclusion of their comprehensive and transparent RFP bid process.'],
  terms: [
    {
      id: 1,
      name: 'Material & Labor Costs',
      definition:
        'The actual costs incurred by the contractor to purchase the material needed for a project plus the actual costs of expended labor to complete the project'
    },
    {
      id: 2,
      name: 'Overhead & Profit',
      definition:
        'Often abbreviated as OH&P and usually calculated by applying a percentage to the total material and labor cost of the work'
    },
    {
      id: 3,
      name: 'Contingency',
      definition:
        'A budgeted allowance calculated to cover the cost of items or work which are not known at the time of the cost estimate but which, statistically, might occur.In the case of a Lump Sum Agreement, contingency is generally not included in the contractors price, rather is held aside by the homeowner in addition to the contractors price.'
    }
  ]
};

const CostEstimateInformation = {
  COST_ESTIMATE,
};

export default CostEstimateInformation;
