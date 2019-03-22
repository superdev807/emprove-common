'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import IconButton from '@material-ui/core/IconButton';

import HomeAreaIcon from '../../../HomeAreaIcon';
import IconLinkedIn from '../../../../icons/IconLinkedIn';
import TeamMemberPhoto from './TeamMemberPhoto';
import './team-member-styles.scss';

class TeamMember extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showOverlay: false
    };
  }

  handlePhotoMouseOver = () => {
    this.setState({ showOverlay: true });
  };

  handlePhotoMouseOut = () => {
    this.setState({ showOverlay: false });
  };

  render() {
    const { member } = this.props;
    return (
      <div className="team-member" onMouseLeave={this.handlePhotoMouseOut}>
        <div className="team-member__photo">
          <TeamMemberPhoto photoUrl={member.photoUrl} photoAlt={member.name} onMouseOver={this.handlePhotoMouseOver} />
        </div>
        <div>{member.name}</div>
        <div className="team-member__position">{member.position}</div>
        <div>My dream space:</div>
        {/* <div className="team-member__dream-space">{member.dreamSpace}</div> */}
        <div className="team-member__home-area-icon-container">
          <IconButton onClick={this.props.onHomeAreaClick}>
            <HomeAreaIcon
              className="team-member__home-area-icon"
              homeAreaId={member.dreamSpace.homeAreaId}
              titleAccess={`${member.dreamSpace.style} ${member.dreamSpace.homeArea}`}
            />
          </IconButton>
        </div>
        {member.description && (
          <div className={cx('team-member__overlay', { 'team-member__overlay--shown': this.state.showOverlay })}>
            <div className="team-member__overlay-content">
              <div className="team-member__description">{member.description}</div>
              <div className="team-member__bar" />
              {member.linkedIn && (
                <a href={member.linkedIn} target="_blank" rel="noopener noreferrer">
                  <IconLinkedIn className="team-member__linked-in" />
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    );
  }
}

TeamMember.propTypes = {
  member: PropTypes.object.isRequired,
  onHomeAreaClick: PropTypes.func.isRequired
};

export default TeamMember;
