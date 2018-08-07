'use strict';

import React, { Component } from 'react';
import { timingSafeEqual } from 'crypto';

class FallbackView extends Component {
  render() {
    console.log('error', this.props.error, 'error info', this.props.errorInfo);
    return <div className="error__fallback">this is error fallback</div>;
  }
}

export default FallbackView;
