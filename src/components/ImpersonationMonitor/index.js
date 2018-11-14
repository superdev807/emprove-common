'use strict';

import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import moment from 'moment';
import PropTypes from 'prop-types';
import Snackbar from '@material-ui/core/Snackbar';
import Typography from '@material-ui/core/Typography';

moment.relativeTimeThreshold('s', 59);
moment.relativeTimeThreshold('ss', 0);
moment.relativeTimeThreshold('m', 40);

const getTimeLeft = exp => moment.duration(moment(exp ? exp * 1000 : undefined).diff(moment()));

class ImpersonationMonitor extends Component {
  static propTypes = {
    impersonator: PropTypes.object,
    onExit: PropTypes.func,
    tokenExp: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  };

  constructor(props) {
    super(props);
    this.state = {
      timeLeft: getTimeLeft(props.tokenExp).humanize()
    };
  }

  static getDerivedStateFromProps(props, state) {
    return {
      timeLeft: getTimeLeft(props.tokenExp).humanize()
    };
  }

  componentDidMount() {
    const { impersonator } = this.props;
    if (impersonator) {
      this.timer = setInterval(this.handleTimer, 1000);
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.impersonator && !this.timer) {
      this.timer = setInterval(this.handleTimer, 1000);
    }
  }

  componentWillUnmount() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  handleTimer = () => {
    const { onExit } = this.props;
    const timeLeft = getTimeLeft(this.props.tokenExp);
    if (timeLeft.asSeconds() <= 0) {
      clearInterval(this.timer);
      onExit && onExit();
    } else {
      this.setState({ timeLeft: timeLeft.humanize() });
    }
  };

  render() {
    const { impersonator, onExit } = this.props;
    const { timeLeft } = this.state;

    return impersonator ? (
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        open
        message={
          <span className="impersonation-monitor-text">
            Admin Mode ({impersonator.email}) Expires in {timeLeft}
          </span>
        }
        action={[
          <Button key="close" color="inherit" onClick={onExit}>
            Exit
          </Button>
        ]}
      />
    ) : null;
  }
}

export default ImpersonationMonitor;
