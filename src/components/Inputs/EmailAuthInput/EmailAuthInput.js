import React from 'react';
import PropTypes from 'prop-types';
import { INPUT_NAME_EMAIL } from '../../../utils/constant';
import AuthInput from '../AuthInput';

const EmailAuthInput = ({ value, isValid, onInputChange }) => {
  console.log('Email Input');
  return (
    <AuthInput
      id="email"
      name={`${INPUT_NAME_EMAIL}`}
      type="email"
      placeholder=""
      label="Email"
      value={value}
      isValid={isValid}
      onInputChange={onInputChange}
    />
  );
};

EmailAuthInput.propTypes = {
  value: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  isValid: PropTypes.bool.isRequired,
};

export default EmailAuthInput;
