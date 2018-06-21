'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var PROJECT_SCOPE = {
  title: 'PROJECT SCOPE',
  body: ['The extent of work to be undertaken for a project. Typically, the greater the Project Scope the greater the project cost.', 'Emprove defines a set of baseline Project Scope packages for homeowners to select from and customize.'],
  terms: []
};

var OVERALL_QUALITY = {
  title: 'OVERALL QUALITY',
  body: ["The baseline project quality rating that is used by Emprove's proprietary cost estimate engine to deliver the initial project cost estimate.  The homeowner can then change and refine the quality standards initially assigned for each specific scope item.", 'The different overall quality ratings defined by Emprove, in order of highest to lowest quality are:'],
  terms: [{
    id: 1,
    name: 'Luxurious',
    definition: null
  }, {
    id: 2,
    name: 'High-End',
    definition: null
  }, {
    id: 3,
    name: 'Upgraded',
    definition: null
  }, {
    id: 4,
    name: 'Practical',
    definition: null
  }, {
    id: 5,
    name: 'Best Value',
    definition: null
  }],
  images: [{
    id: 1,
    filename: 'overall_quality.png',
    description: 'Most homeowners will have a "Practical" quality rating, with more than half of all homeowners having either "Best Value" or "Practical" ratings.  Below is our expected distribution of homeowners by overall quality rating:',
    width: 2392,
    height: 1070
  }]
};

var ProjectInformation = {
  PROJECT_SCOPE: PROJECT_SCOPE,
  OVERALL_QUALITY: OVERALL_QUALITY
};

exports.default = ProjectInformation;