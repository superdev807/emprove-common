'use strict';

import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const IconUL2WindowTreatments = props => {
  const primary = props.primary || '#878787';
  const secondary = props.secondary || 'none';
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <path fill={secondary} d="M0 0h24v24H0z" />
      <path
        d="M22.583 2.347c-.567 0-1.031.38-1.194.895h-.61V1.916a.373.373 0 0 0-.578-.315l-1.349.87-1.348-.871c-.004-.003-.01-.002-.014-.004s-.006-.007-.01-.009c-.025-.013-.053-.011-.08-.019-.033-.009-.065-.023-.099-.023-.035 0-.066.014-.099.023-.027.007-.055.005-.081.019-.004.002-.006.007-.01.01-.004.002-.01.001-.014.004l-1.349.87-1.347-.871a.373.373 0 1 0-.578.315v1.326h-3.549V1.916a.373.373 0 0 0-.195-.329.38.38 0 0 0-.383.013l-1.349.87-1.349-.87c-.004-.003-.01-.002-.014-.004s-.006-.007-.01-.009c-.024-.014-.052-.012-.079-.019-.034-.009-.065-.023-.099-.023-.035 0-.066.014-.099.023-.028.007-.056.005-.082.019-.004.002-.006.007-.01.01-.004.001-.009 0-.013.003l-1.349.87-1.348-.87a.38.38 0 0 0-.383-.013.373.373 0 0 0-.195.329v1.326H2.61a1.256 1.256 0 0 0-1.194-.895 1.27 1.27 0 0 0 0 2.539c.567 0 1.031-.38 1.194-.894h.707v17.091c0 .127.064.246.172.315l1.552 1.001c.004.003.009.001.013.004.004.002.006.007.01.01.057.03.118.046.18.046s.123-.016.18-.046c.004-.002.006-.007.01-.01.004-.002.009-.001.013-.004l1.349-.87 1.349.87c.004.003.009.001.013.004.004.002.006.007.01.01.057.03.118.046.18.046s.123-.016.18-.046c.004-.002.006-.007.01-.01.004-.002.009-.001.013-.004l1.552-1.001a.376.376 0 0 0 .172-.315V3.992h3.549v17.091c0 .127.064.246.172.315l1.552 1.001c.004.003.009.001.013.004.004.002.006.007.01.01.057.03.118.046.18.046s.123-.016.18-.046c.004-.002.006-.007.01-.01.004-.002.009-.001.013-.004l1.349-.87 1.349.87c.004.003.009.001.013.004.004.002.006.007.01.01.057.03.118.046.18.046s.123-.016.18-.046c.004-.002.006-.007.01-.01.004-.002.009-.001.013-.004l1.552-1.001a.376.376 0 0 0 .172-.315V3.992h.61c.163.513.626.894 1.194.894.7 0 1.27-.569 1.27-1.269a1.276 1.276 0 0 0-1.273-1.27zM1.416 4.135a.52.52 0 1 1 0-1.038.52.52 0 0 1 0 1.038zm2.651-1.531l.802.517v18.274l-.802-.517V2.604zm1.551.517l.802-.517v18.274l-.802.517V3.121zm1.552-.517l.802.517v18.274l-.802-.517V2.604zm2.354 18.274l-.802.517V3.121l.802-.517v18.274zm5.049-18.274l.802.517v18.274l-.802-.517V2.604zm1.551.517l.802-.517v18.274l-.802.517V3.121zm1.552-.517l.802.517v18.274l-.802-.517V2.604zm2.354 18.274l-.802.517V3.121l.802-.517v18.274zm2.553-16.743a.52.52 0 1 1 0-1.04.52.52 0 0 1 0 1.04z"
        fill={primary}
      />
    </SvgIcon>
  );
};

export default IconUL2WindowTreatments;