'use strict';

import React, { Component } from 'react';
import AlgoliaPlaces from 'algolia-places-react';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { propsChanged } from '../../utils/pureFunctions';

import './styles.scss';

class AutoCompleteAddressField extends Component {
  static propTypes = {
    searchType: PropTypes.string,
    type: PropTypes.oneOf(['text', 'button'])
  };

  static defaultPropTypes = {
    searchType: 'address',
    type: 'text'
  };

  constructor(props) {
    super(props);

    this.algoliaPlaces = React.createRef();
  }

  componentDidMount() {
    this.setAddress();
  }

  componentDidUpdate(prevProps) {
    if (propsChanged(['input.value', 'type'], prevProps, this.props)) {
      this.setAddress();
    }
  }

  setAddress() {
    const { input } = this.props;

    if (typeof input.value === 'string' && this.algoliaPlaces.current) {
      this.algoliaPlaces.current.autocomplete.setVal(input.value);
    }
  }

  handleChange = payload => {
    this.props.input.onChange(payload.suggestion);
  };

  handleClear = () => {
    this.props.input.onChange(null);
  };

  render() {
    const {
      className,
      classes,
      errorMessageClass,
      hideErrorText,
      input,
      placeholder,
      meta: { touched, error },
      searchType,
      type
    } = this.props;

    return (
      <FormControl className={cx('auto-complete-address-field', className)} error={touched && !!error}>
        {type === 'text' ? (
          <AlgoliaPlaces
            ref={this.algoliaPlaces}
            placeholder={placeholder}
            options={{
              appId: process.env.ALGOLIA_PLACES_APP_ID,
              apiKey: process.env.ALGOLIA_PLACES_API_KEY,
              type: searchType,
              countries: ['us']
            }}
            onChange={this.handleChange}
            onClear={this.handleClear}
          />
        ) : (
          <div className="button">{typeof input.value === 'string' ? input.value : ''}</div>
        )}
        {!hideErrorText && touched && error && <FormHelperText className={errorMessageClass}>{error}</FormHelperText>}
      </FormControl>
    );
  }
}

export default AutoCompleteAddressField;
