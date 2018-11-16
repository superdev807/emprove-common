'use strict';

const PROJECT_SCOPE = {
  title: 'Project Scope',
  body: [
    'The extent of work to be undertaken for a project. Typically, the greater the Project Scope the greater the project cost.',
    'Emprove defines a set of baseline Project Scope packages for homeowners to select from and customize.'
  ],
  images: [
    {
      id: 1,
      filename: 'project_scope_light_renovation.png',
      description: null
    },
    {
      id: 2,
      filename: 'project_scope_custom_light_renovation.png',
      description: null
    }
  ],
  terms: []
};

const OVERALL_QUALITY = {
  title: 'Overall Quality',
  body: [
    "The baseline project quality rating that is used by Emprove's proprietary cost estimate engine to deliver the initial project cost estimate.  The homeowner can then change and refine the quality standards initially assigned for each specific scope item.",
    'The different overall quality ratings defined by Emprove, in order of highest to lowest quality are:'
  ],
  terms: [
    {
      id: 1,
      name: 'Luxurious',
      definition: null
    },
    {
      id: 2,
      name: 'High-End',
      definition: null
    },
    {
      id: 3,
      name: 'Upgraded',
      definition: null
    },
    {
      id: 4,
      name: 'Practical',
      definition: null
    },
    {
      id: 5,
      name: 'Best Value',
      definition: null
    }
  ],
  images: [
    {
      id: 1,
      filename: 'overall_quality.png',
      description:
        'Most homeowners will have a "Practical" quality rating, with more than half of all homeowners having either "Best Value" or "Practical" ratings.  Below is our expected distribution of homeowners by overall quality rating:',
      width: 2392,
      height: 1070
    }
  ]
};

const PROJECT_COST_ESTIMATE = {
  title: 'Project Cost Estimate',
  body: [
    'An estimation of costs given a set of scope of work, quality, and quantity assumptions for a particular project, usually comprised of the following components:'
  ],
  terms: [
    {
      id: 1,
      hasMarkdown: true,
      name: '- [Material & Labor Costs](/info-center/definitions/material-labor-costs); plus',
      definition: null
    },
    {
      id: 2,
      hasMarkdown: true,
      name: '- [Overhead & Profit](/info-center/definitions/overhead-profit); plus',
      definition: null
    },
    {
      id: 3,
      hasMarkdown: true,
      name: '- [Contingency](/info-center/definitions/contingency)',
      definition: null
    }
  ]
};

const GET_PRICING = {
  title: 'Competitive Pricing',
  body: [],
  terms: [
    {
      id: 1,
      name: '',
      definition: 'We share your detailed project plan with at least three qualified contractors'
    },
    {
      id: 2,
      name: '',
      definition: "You'll receive Pricing for your project within 7 business days"
    },
    {
      id: 3,
      name: '',
      definition: 'Compare and choose the best contractor for you'
    }
  ]
};

const ProjectInformation = {
  PROJECT_SCOPE,
  OVERALL_QUALITY,
  PROJECT_COST_ESTIMATE,
  GET_PRICING
};

export default ProjectInformation;
