import React from 'react';
import PropTypes from 'prop-types';
import { INPUT_NAME_LOGIN } from '../../../utils/constant';
import AuthInput from '../AuthInput';

const LoginAuthInput = ({ value, isValid, onInputChange }) => {
  console.log('Login Input');
  return (
    <AuthInput
      id="login"
      name={`${INPUT_NAME_LOGIN}`}
      type="text"
      placeholder=""
      label="Email или номер телефона"
      value={value}
      isValid={isValid}
      onInputChange={onInputChange}
    />
  );
};

LoginAuthInput.propTypes = {
  value: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  isValid: PropTypes.bool.isRequired,
};

export default LoginAuthInput;
