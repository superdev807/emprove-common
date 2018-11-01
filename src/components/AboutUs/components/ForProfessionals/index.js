'use strict';

import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import './style.scss';
import styles from './styles';

class ForProfessionals extends Component {
  constructor() {
    super();
  }
  render() {
    const { onStep, className, classes, id } = this.props;
    return (
      <div id={id} className={cx('forProfessionalsContainer', className)}>
        <div
          id="forProfessionals"
          className="forProfessionalsContent"
          title="A free platform for contractors to efficiently bid for projects that are well-defined and vetted!">
          <div id="contractorBox" className={cx({ on: onStep }, 'contractorBox')}>
            <div className="forProfessionalsContentTitle">
              FOR <b>PROFESSIONALS</b>
            </div>
            <div className="orangeLine" />
            <div id="contractorText" className="contractorTextStyle">
              A new place to <b>grow your business</b>
            </div>
            <div>
              <div id="contractorButton" className="contractorButtonContainer">
                <Button variant="contained" color="primary" onClick={this.props.onClick} fullWidth className={classes.contractorButtonStyle}>
                  LEARN MORE
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div style={{ maxWidth: '85vw', margin: 'auto' }}>
          <div id="forProfessionalsTextsBox" className={onStep ? 'on' : undefined} style={{ position: 'relative' }}>
            <div className="forProfessionalsHeaderContainer">
              <p className="forProfessionalsHeader">
                <b>PRICE</b> TO THE <b>MOST QUALIFIED</b> CONSUMER IN THE MARKET <b>FOR FREE</b>
              </p>
            </div>
            <div className="forProfessionalsFirstTitleBoxStyle">
              <div className="forProfessionalsTitleBox" style={{ flex: 1, textAlign: 'right' }}>
                <p className="forProfessionalsTitle">Project pricing briefs emailed directly to your inbox </p>
              </div>
              <div style={{ margin: 'auto 2vw' }}>
                <img src="./images/arrows-right.png" />
              </div>
              <div className="forProfessionalsTitleBox" style={{ flex: 1, textAlign: 'left' }}>
                <p className="forProfessionalsTitle">No more wasted time and money cold calling!</p>
              </div>
            </div>
            <div className="forProfessionalsTitleBoxStyle">
              <div className="forProfessionalsTitleBox" style={{ flex: 1, textAlign: 'right' }}>
                <p className="forProfessionalsTitle">Scope of work is comprehensive and listed by trade</p>
              </div>
              <div style={{ margin: 'auto 2vw' }}>
                <img src="./images/arrows-right.png" />
              </div>
              <div className="forProfessionalsTitleBox" style={{ flex: 1, textAlign: 'left' }}>
                <p className="forProfessionalsTitle">The scope to price is clear and straightforward!</p>
              </div>
            </div>

            <div className="forProfessionalsTitleBoxStyle">
              <div className="forProfessionalsTitleBox" style={{ flex: 1, textAlign: 'right' }}>
                <p className="forProfessionalsTitle">Consumer cost expectations set to local market rates</p>
              </div>
              <div style={{ margin: 'auto 2vw' }}>
                <img src="./images/arrows-right.png" />
              </div>
              <div className="forProfessionalsTitleBox" style={{ flex: 1, textAlign: 'left' }}>
                <p className="forProfessionalsTitle">Sticker-shock is removed from the equation!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ForProfessionals.propTypes = {
  onStep: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

export default withStyles(styles)(ForProfessionals);
