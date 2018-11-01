'use strict';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

//This is needed because we get the following:
//Warning: Material-UI: you are using the deprecated typography variants that will be removed in the next major release.
//Please read the migration guide under https://material-ui.com/style/typography#migration-to-typography-v2
if(window) {
  window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;
}
