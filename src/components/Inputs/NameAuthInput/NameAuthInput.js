import React from 'react';
import PropTypes from 'prop-types';
import { INPUT_NAME_NAME } from '../../../utils/constant';
import AuthInput from '../AuthInput';

const NameAuthInput = ({ value, isValid, onInputChange }) => {
  console.log('name input');
  return (
    <AuthInput
      id="name"
      name={`${INPUT_NAME_NAME}`}
      type="text"
      placeholder=""
      label="Имя"
      value={value}
      isValid={isValid}
      onInputChange={onInputChange}
    />
  );
};

NameAuthInput.propTypes = {
  value: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  isValid: PropTypes.bool.isRequired,
};

export default NameAuthInput;
