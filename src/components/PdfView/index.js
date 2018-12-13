'use strict';

import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { Document, Page } from 'react-pdf';
import { withStyles } from '@material-ui/core/styles';

import styles from './styles';

class PdfView extends Component {
  static propTypes = {
    className: PropTypes.string,
    source: PropTypes.string
  };

  constructor(props) {
    super(props);
    this.state = {
      numPages: 0,
      width: 0
    };
  }

  componentDidMount() {
    this.setWidth();
    window.addEventListener('resize', this.setWidth);
  }

  componentDidUpdate() {
    this.setWidth();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setWidth);
  }

  setWidth = () => {
    if (this.pdfWrapper && this.pdfWrapper.offsetWidth !== this.state.width) {
      this.setState({
        width: this.pdfWrapper.offsetWidth
      });
    }
  };

  handleDocumentLoad = numPages => {
    this.setState({ numPages: numPages.numPages });
  };

  handleWrapperRef = ref => {
    this.pdfWrapper = ref;
  };

  render() {
    const { classes, source, show, handleHide } = this.props;
    const { width } = this.state;

    const pdfPages = Array.from(new Array(this.state.numPages), (el, index) => (
      <Paper className={classes.paper} component={Page} key={`page_${index + 1}`} pageNumber={index + 1} width={width} />
    ));

    return (
      <div ref={this.handleWrapperRef} className={cx(classes.root, this.props.className)}>
        <Document file={source} onLoadSuccess={this.handleDocumentLoad}>
          {pdfPages}
        </Document>
      </div>
    );
  }
}

export default withStyles(styles)(PdfView);
