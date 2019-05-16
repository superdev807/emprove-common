'use strict';

import React, { Component } from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import PropTypes from 'prop-types';
import Select from 'react-select';

import { propsChanged } from '~/utils/pureFunctions';

const styles = {
  menuList: provided => ({
    ...provided,
    height: 132
  })
};

class SearchableDropdownField extends Component {
  static propTypes = {
    className: PropTypes.string,
    errorMessageClass: PropTypes.string,
    fullWidth: PropTypes.bool,
    id: PropTypes.string,
    input: PropTypes.object.isRequired,
    options: PropTypes.array.isRequired,
    selectClassName: PropTypes.string,
    selectClassNamePrefix: PropTypes.string
  };

  componentDidUpdate(prevProps) {
    if (propsChanged(['options'], prevProps, this.props)) {
      const { input, options } = this.props;
      if (!options.find(option => option.value === input.value)) {
        input.onChange(null);
      }
    }
  }

  handleChange = option => {
    this.props.input.onChange(option.value);
  };

  render() {
    const {
      className,
      errorMessageClass,
      fullWidth,
      id,
      input,
      meta: { touched, error },
      options,
      selectClassName,
      selectClassNamePrefix
    } = this.props;
    const selectedOption = options.find(option => option.value === input.value) || {};

    return (
      <FormControl id={id} className={className} error={touched && !!error} fullWidth={fullWidth}>
        <Select
          className={selectClassName}
          classNamePrefix={selectClassNamePrefix}
          value={selectedOption}
          onChange={this.handleChange}
          options={options}
          styles={styles}
        />
        {touched && error && <FormHelperText className={errorMessageClass}>{error}</FormHelperText>}
      </FormControl>
    );
  }
}

export default SearchableDropdownField;
