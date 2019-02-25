'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var PROJECT_FEATURES = {
  title: 'Project Features',
  body: ['These are the "big ticket" items that help shape the way your new space will look.']
};
var PROJECT_SCALE = {
  title: 'Project Scale',
  body: ['The extent of work to be undertaken for a project. Typically, the greater the Project Scope the greater the project cost.', 'Emprove defines a set of baseline Project Scope packages for homeowners to select from and customize.'],
  images: [{
    id: 1,
    filename: 'project_scope_light_renovation.png',
    description: null
  }, {
    id: 2,
    filename: 'project_scope_custom_light_renovation.png',
    description: null
  }],
  terms: []
};
var OVERALL_QUALITY = {
  title: 'Project Quality',
  body: ['Project Quality is an overall rating made up of material quality, labor quality, and fit and finish quality.', 'Initially you we ask you to select your project’s overall quality rating for the purposes of cost estimation. Once you start a project, you can fine tune the quality rating for each of the features in your project.', 'There are five project quality ratings ranging from the least expensive “Best Value” to the most expensive “Luxurious”.'],
  terms: [{
    id: 1,
    name: 'Best Value (Least Expensive)',
    definition: null
  }, {
    id: 2,
    name: 'Practical (Most Common)',
    definition: null
  }, {
    id: 3,
    name: 'Upgraded',
    definition: null
  }, {
    id: 4,
    name: 'High-End',
    definition: null
  }, {
    id: 5,
    name: 'Luxurious (Most Expensive)',
    definition: null
  }],
  images: [{
    id: 1,
    filename: 'overall_quality.png',
    description: 'Most renovation projects have a “Practical” quality rating, with more than half of all renovation projects having either “Practical” or “Best Value” Project Quality ratings.',
    width: 2392,
    height: 1070
  }]
};
var PROJECT_COST_ESTIMATE = {
  title: 'Project Cost Estimate',
  body: ['An estimation of costs given a set of scope of work, quality, and quantity assumptions for a particular project, usually comprised of the following components:'],
  terms: [{
    id: 1,
    hasMarkdown: true,
    name: '- [Material & Labor Costs](/info-center/definitions/material-labor-costs); plus',
    definition: null
  }, {
    id: 2,
    hasMarkdown: true,
    name: '- [Overhead & Profit](/info-center/definitions/overhead-profit); plus',
    definition: null
  }, {
    id: 3,
    hasMarkdown: true,
    name: '- [Contingency](/info-center/definitions/contingency)',
    definition: null
  }]
};
var GET_PRICING = {
  title: 'Competitive Pricing',
  body: [],
  terms: [{
    id: 1,
    name: '',
    definition: 'We share your detailed project plan with at least three qualified contractors'
  }, {
    id: 2,
    name: '',
    definition: "You'll receive Pricing for your project within 7 business days"
  }, {
    id: 3,
    name: '',
    definition: 'Compare and choose the best contractor for you'
  }]
};
var ProjectInformation = {
  PROJECT_FEATURES: PROJECT_FEATURES,
  PROJECT_SCALE: PROJECT_SCALE,
  OVERALL_QUALITY: OVERALL_QUALITY,
  PROJECT_COST_ESTIMATE: PROJECT_COST_ESTIMATE,
  GET_PRICING: GET_PRICING
};
var _default = ProjectInformation;
exports.default = _default;