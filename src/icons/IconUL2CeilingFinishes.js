'use strict';

import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const IconUL2CeilingFinishes = props => {
  const primary = props.primary || '#878787';
  const secondary = props.secondary || 'none';
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <path fill={secondary} d="M0 0h24v24H0z" />
      <path
        d="M22.295 8.444c-.006-.036-.022-.068-.037-.1V5.528a.375.375 0 0 0-.75 0v1.46L10.896 8.456V6.465a.375.375 0 0 0-.75 0V8.56L1.025 9.821V7.826a.375.375 0 0 0-.75 0V11.4c0 .035.011.066.02.098.003.011.002.022.007.032a.366.366 0 0 0 .112.154c.005.004.006.011.011.016l9.021 6.808a.376.376 0 0 0 .226.075l.034-.002 13.68-1.255a.373.373 0 0 0 .336-.436l-1.427-8.446zm-.68.484l.7 4.149c-.032-.004-.063-.011-.097-.007l-8.471 1.07-2.661-3.781 10.529-1.431zm-20.59 1.65l20.482-2.833v.44L1.025 10.971v-.393zm.577 1.071l8.647-1.176 2.656 3.773-6.733.851-4.57-3.448zm8.179 6.172L7.03 15.745l6.364-.804 1.685 2.394-5.298.486zm6.157-.565l-.004-.008-1.698-2.413 8.076-1.021a.385.385 0 0 0 .121-.041l.48 2.843-6.975.64z"
        fill={primary}
      />
    </SvgIcon>
  );
};

export default IconUL2CeilingFinishes;
