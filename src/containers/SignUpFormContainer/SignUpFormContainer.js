import React from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { INPUT_NAME_AGREEMENT } from '../../utils/constant';
import { getSignUpFormData, changeSignUpForm, changeSignUpAgreement } from '../../ducks/signUp';
import SignUpForm from '../../components/SignUpForm';

const SignUpFormContainer = () => {
  const data = useSelector(getSignUpFormData, shallowEqual);
  const dispatch = useDispatch();

  const handleInputChange = (evt) => {
    const { name, value } = evt.currentTarget;
    if (name !== INPUT_NAME_AGREEMENT) {
      dispatch(changeSignUpForm(name, value));
    } else {
      dispatch(changeSignUpAgreement());
    }
  };
  return <SignUpForm data={data} onInputChange={handleInputChange} />;
};

export default SignUpFormContainer;
