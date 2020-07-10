import React from 'react';
import PropTypes from 'prop-types';
import styles from './FormSubmitButton.module.scss';

const FormSubmitButton = ({
  text, name, onButtonClick, disabled,
}) => (
  <button
    className={styles.button}
    type="submit"
    name={name}
    onClick={onButtonClick}
    disabled={disabled}
  >
    {text}
  </button>
);

FormSubmitButton.defaultProps = {
  text: 'Submit',
  name: 'submit',
  disabled: false,
};

FormSubmitButton.propTypes = {
  text: PropTypes.string,
  name: PropTypes.string,
  onButtonClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};
export default FormSubmitButton;
