import React, { useCallback } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { INPUT_NAME_AGREEMENT, SIGN_IN_PAGE } from '../../utils/constant';
import {
  getSignUpFormData,
  changeSignUpForm,
  changeSignUpAgreement,
  sendData,
} from '../../ducks/signUp';
import { getSignUpStatus, signUpUser } from '../../ducks/status';
import SignUpForm from '../../components/SignUpForm';
import SuccessScreen from '../../components/SuccessScreen/SuccessScreen';
import SwitchAnimation from '../../components/Animation/Switch/Switch';

const SignUpFormContainer = () => {
  const data = useSelector(getSignUpFormData, shallowEqual);
  const isUserSignUp = useSelector(getSignUpStatus);
  const dispatch = useDispatch();

  const handleInputChange = useCallback(
    (evt) => {
      const { name, value } = evt.currentTarget;
      if (name !== INPUT_NAME_AGREEMENT) {
        dispatch(changeSignUpForm(name, value));
      } else {
        dispatch(changeSignUpAgreement());
      }
    },
    [dispatch],
  );

  const handleFormSubmit = useCallback(
    (evt) => {
      evt.preventDefault();
      dispatch(signUpUser());
      dispatch(sendData());
    },
    [dispatch],
  );

  console.log('signup form container', isUserSignUp);

  return (
    <>
      <SwitchAnimation isPlay={isUserSignUp}>
        {isUserSignUp ? (
          <SuccessScreen msg="Вы зарегистрированы" redirectAddress={SIGN_IN_PAGE} />
        ) : (
          <SignUpForm data={data} onInputChange={handleInputChange} onSubmit={handleFormSubmit} />
        )}
      </SwitchAnimation>
    </>
  );
};

export default SignUpFormContainer;
