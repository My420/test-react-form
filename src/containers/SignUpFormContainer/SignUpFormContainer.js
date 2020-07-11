import React, { useCallback } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { INPUT_NAME_AGREEMENT } from '../../utils/constant';
import { getSignUpFormData, changeSignUpForm, changeSignUpAgreement } from '../../ducks/signUp';
import { getSignUpStatus, signUpUser } from '../../ducks/status';
import SignUpForm from '../../components/SignUpForm';
import SuccessScreen from '../../components/SuccessScreen/SuccessScreen';

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
    },
    [dispatch],
  );

  console.log('signup form container');

  return (
    <>
      {isUserSignUp ? (
        <SuccessScreen msg="Вы зарегистрированы" />
      ) : (
        <SignUpForm data={data} onInputChange={handleInputChange} onSubmit={handleFormSubmit} />
      )}
    </>
  );
};

export default SignUpFormContainer;
