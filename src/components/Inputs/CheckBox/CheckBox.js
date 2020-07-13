import React from 'react';
import PropTypes from 'prop-types';
import styles from './CheckBox.module.scss';

const CheckBox = ({
  checked, onChange, label, name, id,
}) => (
  <label htmlFor={id} className={`${styles.label} ${checked ? styles.checked : ''}`}>
    <input
      checked={checked}
      id={id}
      className={`${styles.input}`}
      name={name}
      type="checkbox"
      onChange={onChange}
    />
    <span className={styles.text}>{label}</span>
  </label>
);

CheckBox.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default CheckBox;
