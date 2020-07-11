/* eslint-disable react/forbid-prop-types */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import SuccessIcon from '../Icons/SuccessIcon/SuccessIcon';
import styles from './SuccessScreen.module.scss';
import { SUCCESS_PAGE_DURATION, SIGN_IN_PAGE } from '../../utils/constant';

const SuccessScreen = ({ msg, history }) => {
  console.log('SuccessScreen');

  useEffect(() => {
    const id = setTimeout(() => {
      history.push(SIGN_IN_PAGE);
    }, SUCCESS_PAGE_DURATION);

    return () => clearTimeout(id);
  });

  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <SuccessIcon />
      </div>
      <div className={styles.text}>{msg}</div>
    </div>
  );
};

SuccessScreen.propTypes = {
  msg: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired,
};

export default withRouter(SuccessScreen);
