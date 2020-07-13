import React from 'react';
import SignUpFormContainer from '../../containers/SignUpFormContainer';
import styles from './SignUpPage.module.scss';

const SignUpPage = () => (
  <div className={styles.container}>
    <div className={styles.slideContainer}>
      <SignUpFormContainer />
    </div>
  </div>
);

export default SignUpPage;
