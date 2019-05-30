'use strict';

import React, { Component } from 'react';
import cx from 'classnames';
import get from 'lodash/get';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import PlacesAutocomplete, { geocodeByPlaceId } from 'react-places-autocomplete';

import loadScript from '../../utils/loadScript';
import { makeCancelable } from '../../utils/promiseFunctions';

import './styles.scss';

class AutoCompleteAddressField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      googleReady: Boolean(window.google)
    };
    this.cancelableLoadScript = null;
  }

  componentDidMount() {
    if (!window.google) {
      this.cancelableLoadScript = makeCancelable(
        loadScript(`https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_MAP_API_KEY}&libraries=places`)
      );
      this.cancelableLoadScript.promise.then(() => {
        this.setState({
          googleReady: true
        });
      });
    }
  }

  componentWillUnmount() {
    this.cancelableLoadScript && this.cancelableLoadScript.cancel();
  }

  handleChange = address => {
    this.props.input.onChange(address);
  };

  handleSelect = (address, placeId) => {
    geocodeByPlaceId(placeId)
      .then(results => {
        const found = results[0].address_components.find(item => item.types[0] === 'postal_code');
        if (found) {
          this.props.input.onBlur({ name: address, postcode: found.long_name });
        } else {
          this.props.input.onBlur(address);
        }
      })
      .catch(error => {
        this.props.input.onBlur(address);
      });
  };

  render() {
    const {
      className,
      errorMessageClass,
      hideErrorText,
      input,
      type,
      meta: { touched, error }
    } = this.props;

    const errorEl = !hideErrorText && touched && error ? <FormHelperText className={errorMessageClass}>{error}</FormHelperText> : null;

    if (type === 'text') {
      return this.state.googleReady ? (
        <PlacesAutocomplete value={get(input, 'value.name', input.value)} onChange={this.handleChange} onSelect={this.handleSelect}>
          {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
            <FormControl className={cx('auto-complete-address-field', className)} error={touched && !!error}>
              <div className="auto-complete-address-field__formControl">
                <input
                  {...getInputProps({
                    className: 'auto-complete-address-field__input'
                  })}
                />
              </div>
              {suggestions.length > 0 && (
                <div className="auto-complete-address-field__dropdown">
                  {/*loading && <div>Loading...</div>*/}
                  {suggestions.map(suggestion => (
                    <div
                      {...getSuggestionItemProps(suggestion, {
                        className: cx('auto-complete-address-field__dropdown-item', {
                          'auto-complete-address-field__dropdown-item--active': suggestion.active
                        })
                      })}>
                      <span>{suggestion.description}</span>
                    </div>
                  ))}
                </div>
              )}
              {errorEl}
            </FormControl>
          )}
        </PlacesAutocomplete>
      ) : null;
    } else {
      return (
        <FormControl className={cx('auto-complete-address-field', className)} error={touched && !!error}>
          <div className="auto-complete-address-field__formControl">
            <div className="auto-complete-address-field__input">{input.value}</div>
          </div>
          {errorEl}
        </FormControl>
      );
    }
  }
}

export default AutoCompleteAddressField;
