import React from 'react';
import SignInFormContainer from '../../containers/SignInFormContainer';
import styles from './SignInPage.module.scss';

const SignInPage = () => {
  console.log('signInpage');
  return (
    <div className={styles.container}>
      <div className={styles.slideContainer}>
        <SignInFormContainer />
      </div>
    </div>
  );
};

export default SignInPage;
