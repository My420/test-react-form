import React from 'react';
import PropTypes from 'prop-types';
import { INPUT_NAME_PHONE_NUMBER } from '../../../utils/constant';
import AuthInput from '../AuthInput';

const PhoneAuthInput = ({ value, isValid, onInputChange }) => (
  <AuthInput
    id="phone"
    name={`${INPUT_NAME_PHONE_NUMBER}`}
    type="tel"
    placeholder=""
    label="Телефон"
    value={value}
    isValid={isValid}
    onInputChange={onInputChange}
  />
);

PhoneAuthInput.propTypes = {
  value: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  isValid: PropTypes.bool.isRequired,
};

export default PhoneAuthInput;
