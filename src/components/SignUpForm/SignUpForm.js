import React from 'react';
import { Link } from 'react-router-dom';
import {
  INPUT_NAME_EMAIL,
  INPUT_NAME_NAME,
  INPUT_NAME_NICK_NAME,
  INPUT_NAME_PHONE_NUMBER,
  INPUT_NAME_PASSWORD,
  INPUT_NAME_AGREEMENT,
  SIGN_IN_PAGE,
} from '../../utils/constant';
import NameAuthInput from '../Inputs/NameAuthInput';
import NickNameAuthInput from '../Inputs/NickNameAuthInput';
import EmailAuthInput from '../Inputs/EmailAuthInput';
import PhoneAuthInput from '../Inputs/PhoneAuthInput';
import PasswordAuthInput from '../Inputs/PasswordAuthInput';
import AgreementCheckBox from '../Inputs/AgreementCheckBox';
import FormSubmitButton from '../FormSubmitButton';
import styles from './SignUpForm.module.scss';

const SignUpForm = ({ data, onInputChange, onSubmit }) => {
  console.log('signup form');
  const isFormValid = data[INPUT_NAME_NAME].isValid
    && data[INPUT_NAME_NICK_NAME].isValid
    && data[INPUT_NAME_EMAIL].isValid
    && data[INPUT_NAME_PHONE_NUMBER].isValid
    && data[INPUT_NAME_PASSWORD].isValid
    && data[INPUT_NAME_AGREEMENT];
  return (
    <form className={styles.form} name="signUpForm" action="signup.php">
      <p className={styles.title}>Регистрация</p>
      <p className={styles.msg}>Введите свои данные</p>
      <fieldset className={styles.inputFieldset}>
        <NameAuthInput
          value={data[INPUT_NAME_NAME].value}
          isValid={data[INPUT_NAME_NAME].isValid}
          onInputChange={onInputChange}
        />
        <NickNameAuthInput
          value={data[INPUT_NAME_NICK_NAME].value}
          isValid={data[INPUT_NAME_NICK_NAME].isValid}
          onInputChange={onInputChange}
        />
        <EmailAuthInput
          value={data[INPUT_NAME_EMAIL].value}
          isValid={data[INPUT_NAME_EMAIL].isValid}
          onInputChange={onInputChange}
        />
        <PhoneAuthInput
          value={data[INPUT_NAME_PHONE_NUMBER].value}
          isValid={data[INPUT_NAME_PHONE_NUMBER].isValid}
          onInputChange={onInputChange}
        />
        <PasswordAuthInput
          value={data[INPUT_NAME_PASSWORD].value}
          isValid={data[INPUT_NAME_PASSWORD].isValid}
          onInputChange={onInputChange}
        />
        <AgreementCheckBox checked={data[INPUT_NAME_AGREEMENT]} onChange={onInputChange} />
      </fieldset>
      <fieldset className={styles.controlFieldset}>
        <FormSubmitButton
          text="Зарегистрироваться"
          name="signUpSubmit"
          onButtonClick={onSubmit}
          disabled={isFormValid}
        />
        <div className={styles.linkContainer}>
          <span className={styles.linkText}>Есть аккаунт?</span>
          <Link className={styles.link} to={SIGN_IN_PAGE}>
            Войти
          </Link>
        </div>
      </fieldset>
    </form>
  );
};

export default SignUpForm;
