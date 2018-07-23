'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';

import Container from '../Container';
import './styles.scss';

class StaticLayout extends Component {
  constructor(props) {
    super(props);

    this.originalBodyStyle = document.body.style;
  }

  componentDidMount() {
    // needed for (smooth) scrolling
    document.body.style.overflow = 'visible';
  }

  componentWillUnmount() {
    document.body.style = this.originalBodyStyle;
  }

  render() {
    return (
      <div className="static-layout">
        {this.props.header}
        {this.props.children}
        {this.props.withoutFooterDivider ? null : <Divider className="static-layout__footer-divider" />}
        <Container>
          {this.props.footer}
        </Container>
      </div>
    );
  }
}

StaticLayout.propTypes = {
  children: PropTypes.node,
  footer: PropTypes.element,
  header: PropTypes.element,
  withoutFooterDivider: PropTypes.bool
};

StaticLayout.defaultProps = {
  withoutFooterDivider: false
};

export default StaticLayout;
