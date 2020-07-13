import React from 'react';
import PropTypes from 'prop-types';
import CheckBox from '../CheckBox';
import { INPUT_NAME_AGREEMENT } from '../../../utils/constant';

const AgreementCheckBox = ({ checked, onChange }) => (
  <CheckBox
    label="Я даю свое согласие на обработку персональных данных"
    name={INPUT_NAME_AGREEMENT}
    id="agreement"
    checked={checked}
    onChange={onChange}
  />
);

AgreementCheckBox.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default AgreementCheckBox;
