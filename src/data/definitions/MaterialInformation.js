'use strict';

const MATERIAL_GRADE = {
  title: 'Material Grade',
  body: [
    'Identifies the quality and cost of a specific item relative to its full range available in the market.',
    "Emprove has defined the following material grades that allow homeowners to precisely tune where they'd like to focus their budget:"
  ],
  terms: [
    {
      id: 1,
      name: 'Economy',
      definition: null
    },
    {
      id: 2,
      name: 'Economy+',
      definition: null
    },
    {
      id: 3,
      name: 'Standard',
      definition: null
    },
    {
      id: 4,
      name: 'Premium',
      definition: null
    },
    {
      id: 5,
      name: 'Premium+',
      definition: null
    },
    {
      id: 6,
      name: 'Luxury',
      definition: null
    }
  ],
  images: [
    {
      id: 1,
      filename: 'material_grade_definition.png',
      description: null,
      width: 2164,
      height: 988
    }
  ]
};

const MATERIAL_LABOR_COSTS = {
  title: 'Material & Labor Costs',
  hasMarkdown: true,
  hasLink: true,
  body: [
    'The actual costs incurred by the installing contractor to purchase the material needed for a project plus the actual costs of expended labor to complete the project.',
    "Emprove's proprietary data engine includes [Subcontractor](/info-center/definitions/subcontractor) [Overhead & Profit](/info-center/definitions/overhead-profit) in its provision for material & labor costs.  [General Contractor](/info-center/definitions/general-contractor) Overhead & Profit are not included and are provided for separately in the [Project Cost Estimate](/info-center/definitions/project-cost-estimate)."
  ],
  images: [],
  terms: []
};

const MaterialInformation = {
  MATERIAL_GRADE,
  MATERIAL_LABOR_COSTS
};

export default MaterialInformation;
