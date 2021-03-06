'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var FLOOR_AREA = {
  title: 'Floor Area',
  body: ['The size of the room floor space measured in square feet, calculated for this purpose by:'],
  terms: [{
    id: 1,
    name: 'For a generally rectangular space',
    definition: 'Measure the longest wall-to-wall length of the space (in feet) and multiply that dimension by the longest wall-to-wall width of the space (in feet).'
  }, {
    id: 2,
    name: 'For an irregular or “L-shaped” space',
    definition: 'Divide the space into separate, generally rectangular, shapes. Then calculate the floor area of each separate rectangle per above and add them together.'
  }, {
    id: 3,
    name: 'Hint',
    definition: 'If you don’t have a tape measure, then just pace it off! Although less accurate, you can get a rough idea of size if you ‘pace-off’ each dimension and multiply the number of paces by 2.5 to get the total length (in feet).'
  }]
};
var WALL_PERIMETER = {
  title: 'Wall Perimeter Length',
  body: ['The total length (in feet) of all walls in the room including wall bump-outs, returns, doorways, and cased-openings. Do not subtract the length of windows, doors, fireplaces, mirrors, or wall-mounted cabinetry.'],
  terms: []
};
var MAXIMUM_CEILING_HEIGHT = {
  title: 'Maximum Ceiling Height',
  body: ['The dimension between the floor and the highest point of your ceiling.'],
  terms: []
};
var WALL_PERIMETER_LENGTH = {
  title: 'Wall Perimeter Length',
  body: ['The total length (in feet) of all walls in the room including wall bump-outs, returns, doorways, and cased-openings.  Do not subtract the length of windows, doors, fireplaces, mirrors, or wall-mounted cabinetry.'],
  terms: [],
  images: []
};
var RoomInformation = {
  FLOOR_AREA: FLOOR_AREA,
  WALL_PERIMETER: WALL_PERIMETER,
  MAXIMUM_CEILING_HEIGHT: MAXIMUM_CEILING_HEIGHT,
  WALL_PERIMETER_LENGTH: WALL_PERIMETER_LENGTH
};
var _default = RoomInformation;
exports["default"] = _default;