import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { INPUT_NAME_PASSWORD } from '../../../utils/constant';
import EyeIcon from '../../Icons/EyeIcon/EyeIcon';
import styles from './PasswordAuthInput.module.scss';

const PasswordAuthInput = ({ value, isValid, onInputChange }) => {
  console.log(isValid);

  const [isVisible, changeVisibility] = useState(false);

  const handleClick = () => changeVisibility(!isVisible);

  return (
    <label htmlFor="password" className={`${styles.label}`}>
      <span className={styles.text}>Пароль</span>
      <input
        value={value}
        id="password"
        className={`${styles.input}`}
        name={`${INPUT_NAME_PASSWORD}`}
        type={`${isVisible ? 'text' : 'password'}`}
        placeholder=""
        onChange={onInputChange}
      />
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
