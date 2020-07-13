import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import styles from './AuthInput.module.scss';

const AuthInput = ({
  value, onInputChange, label, name, id, type, placeholder, isValid,
}) => {
  const [isTouched, toggleTouchedValue] = useState(false);

  const handleChange = useCallback(
    (evt) => {
      if (!isTouched) toggleTouchedValue(true);
      onInputChange(evt);
    },
    [isTouched, toggleTouchedValue, onInputChange],
  );

  return (
    <label htmlFor={id} className={`${styles.label}`}>
      <input
        value={value}
        id={id}
        className={`${styles.input}`}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
        data-valid={isValid}
        data-touched={isTouched}
        data-filled={value.length > 0}
      />
      <span className={styles.text}>{label}</span>
      <div className={styles.line} />
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
