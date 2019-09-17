'use strict';

import React, { Component, Fragment } from 'react';
import cx from 'classnames';
import get from 'lodash/get';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import PlacesAutocomplete, { geocodeByPlaceId } from 'react-places-autocomplete';
import PropTypes from 'prop-types';

import loadScript from '../../utils/loadScript';
import { makeCancelable } from '../../utils/promiseFunctions';
import { parseGeocodeApiResult } from '../../utils/geolocationFunctions';

import './styles.scss';

class AutoCompleteAddressField extends Component {
  static propTypes = {
    variant: PropTypes.oneOf(['outlined', 'underlined', 'standard']),
    type: PropTypes.oneOf(['text', 'button'])
  };

  static defaultProps = {
    variant: 'underlined',
    type: 'text'
  };

  constructor(props) {
    super(props);

    this.state = {
      address: '',
      googleReady: Boolean(window.google)
    };
    this.cancelableLoadScript = null;
    this.outlinedFieldLabelRef = React.createRef();
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
    const { input } = this.props;
    input ? input.onChange(address) : this.setState({ address });
  };

  handleSelect = (address, placeId) => {
    const { input, onClear, onSelect } = this.props;
    !input && this.setState({ address });

    geocodeByPlaceId(placeId)
      .then(results => {
        if (results.length > 0) {
          const result = parseGeocodeApiResult(results[0]);
          if (result) {
            return onSelect ? onSelect(result) : input && input.onBlur(result);
          }
        }
        input ? input.onBlur(address) : onClear();
      })
      .catch(error => {
        console.error(error);
        input ? input.onBlur(address) : onClear();
      });
  };

  render() {
    const { className, errorMessageClass, hideErrorText, input, label, meta, type, variant } = this.props;
    const touched = get(meta, 'touched', false);
    const error = get(meta, 'error', null);

    const errorEl = !hideErrorText && touched && error ? <FormHelperText className={errorMessageClass}>{error}</FormHelperText> : null;

    if (type === 'text') {
      return this.state.googleReady ? (
        <PlacesAutocomplete
          value={input ? get(input, 'value.name', input.value) : this.state.address}
          onChange={this.handleChange}
          onSelect={this.handleSelect}
          searchOptions={{
            types: ['address'],
            componentRestrictions: { country: 'us' }
          }}>
          {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
            <FormControl className={cx('auto-complete-address-field', className, variant)} error={touched && !!error}>
              <div className="auto-complete-address-field__formControl">
                {variant === 'outlined' ? (
                  <Fragment>
                    {label && (
                      <InputLabel {...this.props.inputLabelProps} ref={this.outlinedFieldLabelRef}>
                        {label}
                      </InputLabel>
                    )}
                    <OutlinedInput
                      {...getInputProps({
                        placeholder: 'enter home address',
                        className: 'auto-complete-address-field__input',
                        labelWidth: get(this.outlinedFieldLabelRef, 'offsetWidth', 0),
                        inputProps: this.props.inputProps
                      })}
                    />
                  </Fragment>
                ) : (
                  <input
                    {...getInputProps({
                      placeholder: 'enter home address',
                      className: 'auto-complete-address-field__input'
                    })}
                  />
                )}
              </div>
              {suggestions.length > 0 && (
                <div className="auto-complete-address-field__dropdown">
                  {/*loading && <div>Loading...</div>*/}
                  {suggestions.map(suggestion => (
                    <div
                      key={suggestion.id}
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
