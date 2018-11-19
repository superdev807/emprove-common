'use strict';

import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';
import cx from 'classnames';
import fp from 'lodash/fp';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import PropTypes from 'prop-types';
import deburr from 'lodash/deburr';
import match from 'autosuggest-highlight/match';
import moment from 'moment-timezone';
import parse from 'autosuggest-highlight/parse';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import Popper from '@material-ui/core/Popper';
import { getAllTimezones } from '../../utils/timeFunctions';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const suggestions = getAllTimezones().map(timezone => ({
  value: timezone,
  label: timezone //.replace('/', ' - ').replace('_', ' ')
}));

const renderInputComponent = inputProps => {
  const { classes, inputRef = () => {}, ref, ...other } = inputProps;
  return (
    <TextField
      fullWidth
      InputProps={{
        inputRef: node => {
          ref(node);
          inputRef(node);
        },
        classes: {
          underline: classes.input
        }
      }}
      {...other}
    />
  );
};

const renderSuggestion = (suggestion, { query, isHighlighted }) => {
  const matches = match(suggestion.label, query);
  const parts = parse(suggestion.label, matches);

  return (
    <MenuItem selected={isHighlighted} component="div">
      <div>
        {parts.map((part, index) => {
          return part.highlight ? (
            <span key={String(index)} style={{ fontWeight: 500 }}>
              {part.text}
            </span>
          ) : (
            <strong key={String(index)} style={{ fontWeight: 300 }}>
              {part.text}
            </strong>
          );
        })}
      </div>
    </MenuItem>
  );
};

const getSuggestions = value => {
  const inputValue = deburr(value.trim()).toLowerCase();
  const inputLength = inputValue.length;
  let count = 0;

  return inputLength === 0
    ? []
    : suggestions.filter(suggestion => {
        const keep = count < 5 && suggestion.label.toLowerCase().includes(inputValue);

        if (keep) {
          count += 1;
        }

        return keep;
      });
};

const getSuggestionValue = fp.get('value');

export class TimezoneField extends Component {
  static propTypes = {
    className: PropTypes.string,
    classes: PropTypes.object.isRequired,
    disabled: PropTypes.bool,
    helperText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    input: PropTypes.object.isRequired,
    label: PropTypes.string,
    placeholder: PropTypes.string
  };

  constructor(props) {
    super(props);
    this.state = {
      suggestions: []
    };
  }

  handleSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  handleSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  handleChange = (event, { newValue }) => {
    const { input } = this.props;
    input.onChange(newValue);
  };

  handleBlur = () => {
    const { input } = this.props;
    input.onBlur(input.value);
  };

  render() {
    const { className, classes, disabled, helperText, input, label, placeholder, meta: { error, touched }, theme } = this.props;

    const autosuggestProps = {
      renderInputComponent,
      suggestions: this.state.suggestions,
      onSuggestionsFetchRequested: this.handleSuggestionsFetchRequested,
      onSuggestionsClearRequested: this.handleSuggestionsClearRequested,
      getSuggestionValue,
      renderSuggestion
    };

    return (
      <FormControl className={className} error={touched && !!error} fullWidth>
        {helperText && <FormHelperText className={classes.formHelperText}>{helperText}</FormHelperText>}
        <Autosuggest
          {...autosuggestProps}
          inputProps={{
            classes,
            label,
            placeholder,
            value: input.value,
            onChange: this.handleChange,
            onBlur: this.handleBlur,
            inputRef: node => {
              this.popperNode = node;
            },
            InputLabelProps: {
              shrink: true
            }
          }}
          theme={{
            suggestionsList: classes.suggestionsList,
            suggestion: classes.suggestion
          }}
          renderSuggestionsContainer={options => (
            <Popper anchorEl={this.popperNode} open={Boolean(options.children)} className={classes.suggestionsContainer}>
              <Paper square {...options.containerProps} style={{ width: this.popperNode ? this.popperNode.clientWidth : null }}>
                {options.children}
              </Paper>
            </Popper>
          )}
        />
        {touched && error && <FormHelperText>{error}</FormHelperText>}
      </FormControl>
    );
  }
}

export default withStyles(styles)(TimezoneField);
