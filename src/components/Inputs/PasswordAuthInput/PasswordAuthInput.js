import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { INPUT_NAME_PASSWORD } from '../../../utils/constant';
import EyeIcon from '../../Icons/EyeIcon/EyeIcon';
import styles from './PasswordAuthInput.module.scss';

const PasswordAuthInput = ({ value, isValid, onInputChange }) => {
  const [isVisible, changeVisibility] = useState(false);
  const [isTouched, toggleTouchedValue] = useState(false);

  const handleChange = (evt) => {
    if (!isTouched) toggleTouchedValue(true);
    onInputChange(evt);
  };

  const handleClick = () => changeVisibility(!isVisible);

  return (
    <label htmlFor="password" className={`${styles.label}`}>
      <input
        value={value}
        id="password"
        className={`${styles.input}`}
        name={`${INPUT_NAME_PASSWORD}`}
        type={`${isVisible ? 'text' : 'password'}`}
        placeholder=""
        onChange={handleChange}
        data-valid={isValid}
        data-touched={isTouched}
        data-filled={value.length > 0}
      />
      <span className={styles.text}>Пароль</span>
      <div className={styles.line} />
      <button className={styles.switch} type="button" onClick={handleClick}>
        <EyeIcon />
      </button>
    </label>
  );
};

PasswordAuthInput.propTypes = {
  value: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  isValid: PropTypes.bool.isRequired,
};

export default PasswordAuthInput;
