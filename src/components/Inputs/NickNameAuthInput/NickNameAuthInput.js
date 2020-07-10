import React from 'react';
import PropTypes from 'prop-types';
import { INPUT_NAME_NICK_NAME } from '../../../utils/constant';
import AuthInput from '../AuthInput';

const NickNameAuthInput = ({ value, isValid, onInputChange }) => (
  <AuthInput
    id="NickName"
    name={`${INPUT_NAME_NICK_NAME}`}
    type="text"
    placeholder=""
    label="Никнейм"
    value={value}
    isValid={isValid}
    onInputChange={onInputChange}
  />
);

NickNameAuthInput.propTypes = {
  value: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  isValid: PropTypes.bool.isRequired,
};

export default NickNameAuthInput;
