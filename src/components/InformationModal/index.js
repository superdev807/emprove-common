'use strict';

import React, { Component } from 'react';
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

import { LinkRenderer, RawRenderer } from './renderers';
import './styles.scss';

const InformationDefinition = props => {
  let definition = '';
  if (props.term.definition) {
    definition = `: ${props.term.definition}`;
  }

  return (
    <Typography className={cx('information-definition', { 'information-definition--undefined': definition === '' })}>
      <strong>● {props.term.name}</strong>
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

class InformationModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      renderers: this.getRenderers()
    };
  }

  getRenderers() {
    let renderers = {
      paragraph: RawRenderer
    };
    if (this.props.hasLink) {
      renderers.link = LinkRenderer;
    }

    return renderers;
  }

  renderImage(image) {
    const displayHeight = image.height && image.height < 400 ? image.height : 400;
    const displayWidth = image.width / image.height * displayHeight;
    const url = image.useUrl ? image.url : process.env.IMGIX_PUBLIC_IMAGES_HOST + image.filename + '?h=' + displayHeight;

    const imageWithUrl = {
      ...image,
      url,
      displayWidth,
      displayHeight
    };

    return <InformationImage key={image.id} image={imageWithUrl} />;
  }

  renderParagraph(paragraph) {
    return (
      <ReactMarkdown
        className="information-modal-body-paragraph"
        source={paragraph}
        renderers={this.state.renderers}
      />
    );
  }

  renderUnorderedList(items) {
    const formattedText = items.reduce((text, item) => {
      return text + '* ' + item + '\n';
    }, '');

    return (
      <ReactMarkdown
        source={formattedText}
        className="information-modal__unordered-list"
        renderers={this.state.renderers}
      />
    );
  }

  renderBody() {
    return this.props.body.map((paragraph, index) => {
      if (typeof paragraph === 'string') {
        return this.renderParagraph(paragraph);
      }
      else if (typeof paragraph === 'object') {
        if (paragraph.type === 'image') {
          return this.renderImage(paragraph);
        }
        else if (paragraph.type === 'unordered-list') {
          return paragraph.items ? this.renderUnorderedList(paragraph.items) : '';
        }
      }
    });
  }

  renderImages() {
    return this.props.images.map(image => this.renderImage(image));
  }

  render() {
    return (
      <Dialog classes={{ paper: 'information-modal' }} open={this.props.show} onClose={this.props.handleHide}>
        <IconButton className="information-modal-close-button" onClick={this.props.handleHide}>
          <IconClose />
        </IconButton>
        <DialogTitle className="information-modal__title">{this.props.title}</DialogTitle>
        <DialogContent className="information-modal__content">
          {this.renderBody()}
          {this.props.terms && this.props.terms.map(term => <InformationDefinition key={term.id} term={term} />)}
          {this.renderImages()}
        </DialogContent>
      </Dialog>
    );
  }
}

InformationModal.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.object])).isRequired,
  terms: PropTypes.arrayOf(PropTypes.object),
  images: PropTypes.arrayOf(PropTypes.object),
  hasLink: PropTypes.bool
};

InformationModal.defaultProps = {
  images: []
};

export default connectModal({ name: 'informationModal' })(InformationModal);
export { InformationModal }; // for testing
