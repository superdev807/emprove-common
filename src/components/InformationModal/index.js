'use strict';

import React from 'react';
import ReactMarkdown from 'react-markdown';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { connectModal } from 'redux-modal';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import IconClose from '@material-ui/icons/Close';
import './styles.scss';

const InformationDefinition = props => {
  let definition = '';
  if (props.term.definition) {
    definition = `: ${props.term.definition}`;
  }

  return (
    <Typography className={cx('information-definition', { 'information-definition--undefined': definition === '' })}>
      <strong>• {props.term.name}</strong>
      {definition}
    </Typography>
  );
};

const InformationImage = props => {
  let imageDescription = '';
  if (props.image.description) {
    imageDescription = <Typography className="information-image__description">{props.image.description}</Typography>;
  }

  return (
    <div className="information-image">
      {imageDescription}
      <div className="information-image__image-container">
        <img
          className="information-image__image"
          src={props.image.url}
          alt="Information Image"
          width={props.image.displayWidth}
          height={props.image.displayHeight}
        />
      </div>
    </div>
  );
};

const InformationModal = props => {
  const images = props.images.map(image => {
    const displayHeight = image.height && image.height < 400 ? image.height : 400;
    const displayWidth = image.width / image.height * displayHeight;
    const imageWithUrl = {
      ...image,
      url: process.env.IMGIX_PUBLIC_IMAGES_HOST + image.filename + '?h=' + displayHeight,
      displayWidth,
      displayHeight
    };

    return <InformationImage key={image.id} image={imageWithUrl} />;
  });

  return (
    <Dialog classes={{ paper: 'information-modal' }} open={props.show} onClose={props.handleHide}>
      <IconButton className="information-modal-close-button" onClick={props.handleHide}>
        <IconClose />
      </IconButton>
      <DialogTitle className="information-modal__title">{props.title}</DialogTitle>
      <DialogContent className="information-modal__content">
        {props.body.map((paragraph, index) => (
          <ReactMarkdown key={index} source={paragraph} className="information-modal-body-paragraph" />
        ))}
        {props.terms.map(term => <InformationDefinition key={term.id} term={term} />)}
        {images}
      </DialogContent>
    </Dialog>
  );
};

InformationModal.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.arrayOf(PropTypes.string).isRequired,
  terms: PropTypes.arrayOf(PropTypes.object).isRequired,
  images: PropTypes.arrayOf(PropTypes.object)
};

InformationModal.defaultProps = {
  images: []
};

export default connectModal({ name: 'informationModal' })(InformationModal);
export { InformationModal }; // for testing
