/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { INPUT_NAME_PASSWORD, SIGN_UP_PAGE, INPUT_NAME_LOGIN } from '../../utils/constant';
import LoginAuthInput from '../Inputs/LoginAuthInput';
import PasswordAuthInput from '../Inputs/PasswordAuthInput';
import FormSubmitButton from '../FormSubmitButton';
import styles from './SignInForm.module.scss';

const SignInForm = ({ data, onInputChange, onSubmit }) => {
  console.log('signin form');
  const isFormValid = data[INPUT_NAME_LOGIN].isValid && data[INPUT_NAME_PASSWORD].isValid;

  return (
    <form className={styles.form} name="signInForm" action="signup.php">
      <p className={styles.title}>Вход</p>
      <p className={styles.msg}>Введите свои данные</p>
      <fieldset className={styles.inputFieldset}>
        <LoginAuthInput
          value={data[INPUT_NAME_LOGIN].value}
          isValid={data[INPUT_NAME_LOGIN].isValid}
          onInputChange={onInputChange}
        />

        <PasswordAuthInput
          value={data[INPUT_NAME_PASSWORD].value}
          isValid={data[INPUT_NAME_PASSWORD].isValid}
          onInputChange={onInputChange}
        />
      </fieldset>
      <fieldset className={styles.controlFieldset}>
        <FormSubmitButton
          text="Войти"
          name="signUpSubmit"
          onButtonClick={onSubmit}
          disabled={!isFormValid}
        />
        <div className={styles.linkContainer}>
          <span className={styles.linkText}>Нет аккаунта?</span>
          <Link className={styles.link} to={SIGN_UP_PAGE}>
            Зарегистрироваться
          </Link>
        </div>
      </fieldset>
    </form>
  );
};

SignInForm.propTypes = {
  data: PropTypes.object.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default SignInForm;
