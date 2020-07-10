import React from 'react';
import PropTypes from 'prop-types';
import styles from './AuthInput.module.scss';

const AuthInput = ({
  value, onInputChange, label, name, id, type, placeholder, isValid,
}) => {
  console.log(isValid);

  return (
    <label htmlFor={id} className={`${styles.label}`}>
      <span className={styles.text}>{label}</span>
      <input
        value={value}
        id={id}
        className={`${styles.input}`}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onInputChange}
      />
    </label>
  );
};

AuthInput.defaultProps = {
  placeholder: '',
};

AuthInput.propTypes = {
  value: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  isValid: PropTypes.bool.isRequired,
  placeholder: PropTypes.string,
};

export default AuthInput;
