'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var COST_ESTIMATE = {
  title: 'Cost Estimate',
  body: ['An estimate of costs produced by Emprove’s proprietary data engine which is informed by deep construction experience and is adjusted for local market conditions. While the cost estimate is well-informed and an accurate depiction of what the project should generally cost, the homeowner’s actual cost will be what they agree with their selected contractors on upon the conclusion of their comprehensive and transparent RFP bid process.', 'A cost estimate is usually comprised of the following components:'],
  terms: [{
    id: 1,
    name: 'Material & Labor Costs',
    definition: 'The actual costs incurred by the contractor to purchase the material needed for a project plus the actual costs of expended labor to complete the project'
  }, {
    id: 2,
    name: 'Overhead & Profit',
    definition: 'Often abbreviated as OH&P and usually calculated by applying a percentage to the total material and labor cost of the work'
  }, {
    id: 3,
    name: 'Contingency',
    definition: 'A budgeted allowance calculated to cover the cost of items or work which are not known at the time of the cost estimate but which, statistically, might occur. In the case of a Lump Sum Agreement, contingency is generally not included in the contractor’s price, rather is held aside by the homeowner in addition to the contractor’s price.'
  }]
};

var MATERIAL_AND_LABOR = {
  title: 'Material & Labor Estimates',
  body: ['The actual costs incurred by the installing contractor to purchase the material needed for a project plus the actual costs of expended labor to complete the project.', "Emprove's proprietary data engine includes [Subcontractor](/info-center/definitions/subcontractor) [Overhead & Profit](/info-center/definitions/overhead-profit) in its provision for material & labor costs.  [General Contractor](/info-center/definitions/general-contractor) Overhead & Profit are not included and are provided for separately in the [Project Cost Estimate](/info-center/definitions/project-cost-estimate)."],
  terms: []
};

var OVERHEAD_AND_PROFIT = {
  title: 'Overhead & Profit',
  hasMarkdown: true,
  body: ['Often abbreviated as OH&P and usually calculated by applying a percentage to the total material and labor cost of the work, the total Overhead & Profit amount is the sum of its two components:'],
  terms: [{
    id: 1,
    name: 'Overhead',
    definition: "A company's general operating expenses necessary for it to conduct business, such as their facilities, equipment, and administration costs."
  }, {
    id: 2,
    name: 'Profit',
    definition: "A company's financial gain associated with the project."
  }],
  extraParagraph: ["Emprove's proprietary data engine includes [Subcontractor](/info-center/definitions/subcontractor) Overhead & Profit in its provision for [Material & Labor Costs](info-center/definitions/material-labor-costs).  [General Contractor](/info-center/definitions/general-contractor) Overhead & Profit are provided for separately in the [Project Cost Estimate](/info-center/definitions/project-cost-estimate)."]
};

var CONTINGENCY = {
  title: 'Contingency',
  hasMarkdown: true,
  hasLink: true,
  body: ['A budgeted allowance calculated to cover the cost of items or work which are not known at the time of the cost estimate but which, statistically, might occur.', 'In the case of a [Lump Sum Agreement](/info-center/definitions/lump-sum-agreement), contingency is generally not included in the contractor’s price, rather is held aside by the homeowner in addition to it.'],
  terms: []
};

var PROFIT = {
  title: 'Profit',
  body: ["A company's financial gain associated with the project."],
  images: [],
  terms: []
};

var OVERHEAD = {
  title: 'Overhead',
  body: ["A company's general operating expenses necessary for it to conduct business, such as their facilities, equipment, and administration costs."],
  images: [],
  terms: []
};

var OVERHEAD_PROFIT = {
  title: 'Overhead & Profit',
  hasMarkdown: true,
  body: ['Often abbreviated as OH&P and usually calculated by applying a percentage to the total material and labor cost of the work, the total Overhead & Profit amount is the sum of its two components:'],
  terms: [{
    id: 1,
    name: "Overhead: A company's general operating expenses necessary for it to conduct business, such as their facilities, equipment, and administration costs.",
    definition: null
  }, {
    id: 2,
    name: "Profit: A company's financial gain associated with the project.",
    definition: null
  }],
  extraParagraph: ["Emprove's proprietary data engine includes [Subcontractor](/info-center/definitions/subcontractor) [Overhead & Profit](/info-center/definitions/overhead-profit) in its provision for [Material & Labor Costs](/info-center/definitions/material-labor-costs).  [General Contractor](/info-center/definitions/general-contractor) Overhead & Profit are provided for separately in the [Project Cost Estimate](/info-center/definitions/project-cost-estimate)."]
};

var CostEstimateInformation = {
  COST_ESTIMATE: COST_ESTIMATE,
  MATERIAL_AND_LABOR: MATERIAL_AND_LABOR,
  OVERHEAD_AND_PROFIT: OVERHEAD_AND_PROFIT,
  CONTINGENCY: CONTINGENCY,
  PROFIT: PROFIT,
  OVERHEAD: OVERHEAD,
  OVERHEAD_PROFIT: OVERHEAD_PROFIT
};

exports.default = CostEstimateInformation;