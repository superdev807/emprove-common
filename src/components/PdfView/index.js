'use strict';

import React, { Component } from 'react';
import cx from 'classnames';
import IconButton from '@material-ui/core/IconButton';
import IconNext from '@material-ui/icons/ChevronRight';
import IconPrev from '@material-ui/icons/ChevronLeft';
import IconFirst from '@material-ui/icons/FirstPage';
import IconLast from '@material-ui/icons/LastPage';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Document, Page } from 'react-pdf';
import { isMobileSelector } from '../../redux/selectors';
import { withStyles } from '@material-ui/core/styles';

import styles from './styles';

class PdfView extends Component {
  static propTypes = {
    className: PropTypes.string,
    source: PropTypes.string,
    showPageButtons: PropTypes.bool
  };

  constructor(props) {
    super(props);
    this.state = {
      numPages: 0,
      width: 0,
      currentPage: 1
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

  handlePrevPage = () => {
    this.setState({ currentPage: Math.max(this.state.currentPage - 1, 1) });
  };

  handleNextPage = () => {
    this.setState({ currentPage: Math.min(this.state.currentPage + 1, this.state.numPages) });
  };

  handleFirstPage = () => {
    this.setState({ currentPage: 1 });
  };

  handleLastPage = () => {
    this.setState({ currentPage: this.state.numPages });
  };

  render() {
    const { classes, source, show, showPageButtons, handleHide, isMobile } = this.props;
    const { currentPage, numPages, width } = this.state;
    const hasButtons = showPageButtons && isMobile;

    return (
      <div ref={this.handleWrapperRef} className={cx(classes.root, this.props.className, { [classes.mobileRoot]: hasButtons })}>
        <div className={cx({ [classes.mobileDocument]: hasButtons })}>
          <Document file={source} onLoadSuccess={this.handleDocumentLoad}>
            {hasButtons ? (
              <Paper className={classes.paper} component={Page} key={`page_${currentPage}`} pageNumber={currentPage} width={width} />
            ) : (
              Array.from(new Array(numPages), (el, index) => (
                <Paper className={classes.paper} component={Page} key={`page_${index + 1}`} pageNumber={index + 1} width={width} />
              ))
            )}
          </Document>
        </div>
        {hasButtons && (
          <div className={classes.buttonContainer}>
            <IconButton onClick={this.handleFirstPage}>
              <IconFirst />
            </IconButton>
            <IconButton onClick={this.handlePrevPage}>
              <IconPrev />
            </IconButton>
            <IconButton onClick={this.handleNextPage}>
              <IconNext />
            </IconButton>
            <IconButton onClick={this.handleLastPage}>
              <IconLast />
            </IconButton>
          </div>
        )}
      </div>
    );
  }
}

const selector = createStructuredSelector({
  isMobile: isMobileSelector
});

export default compose(withStyles(styles), connect(selector))(PdfView);
