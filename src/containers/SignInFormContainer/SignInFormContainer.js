import React, { useCallback } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { getSignInFormData, changeSignInForm } from '../../ducks/signIn';
import { getSignInStatus, signInUser } from '../../ducks/status';
import SignInForm from '../../components/SignInForm';
import SuccessScreen from '../../components/SuccessScreen/SuccessScreen';
import SwitchAnimation from '../../components/Animation/Switch/Switch';

const SignInFormContainer = () => {
  const data = useSelector(getSignInFormData, shallowEqual);
  const isUserSignIn = useSelector(getSignInStatus);
  const dispatch = useDispatch();

  const handleInputChange = useCallback(
    (evt) => {
      const { name, value } = evt.currentTarget;
      dispatch(changeSignInForm(name, value));
    },
    [dispatch],
  );

  const handleFormSubmit = useCallback(
    (evt) => {
      evt.preventDefault();
      dispatch(signInUser());
    },
    [dispatch],
  );

  console.log('signin form container');

  return (
    <>
      <SwitchAnimation isPlay={isUserSignIn}>
        {isUserSignIn ? (
          <SuccessScreen msg="Вы авторизованы" />
        ) : (
          <SignInForm data={data} onInputChange={handleInputChange} onSubmit={handleFormSubmit} />
        )}
      </SwitchAnimation>
    </>
  );
};

export default SignInFormContainer;
