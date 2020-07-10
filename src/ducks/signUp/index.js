import {
  INPUT_NAME_EMAIL,
  INPUT_NAME_PASSWORD,
  INPUT_NAME_PHONE_NUMBER,
  INPUT_NAME_NAME,
  INPUT_NAME_NICK_NAME,
  INPUT_NAME_AGREEMENT,
} from '../../utils/constant';
import isValidEmail from '../../utils/validateEmail';
import isValidPassword from '../../utils/validatePassword';
import isValidNameField from '../../utils/validateNameField';
import isValidPhoneNumber from '../../utils/validatePhoneNumber';
import isValidNickNameField from '../../utils/validateNickNameField';

// constant

export const moduleName = 'signUpForm';
export const CHANGE_SIGN_UP_FORM = `${moduleName}/CHANGE_SIGN_UP_FORM`;
export const CHANGE_SIGN_UP_AGREEMENT = `${moduleName}/CHANGE_SIGN_UP_AGREEMENT`;

// action creator

export const changeSignUpForm = (inputName, value) => ({
  type: CHANGE_SIGN_UP_FORM,
  payload: { inputName, value },
});

export const changeSignUpAgreement = () => ({
  type: CHANGE_SIGN_UP_AGREEMENT,
});

// selector

export const getSignUpFormData = (store) => store[moduleName];

// reducer

const validator = {
  [INPUT_NAME_EMAIL]: isValidEmail,
  [INPUT_NAME_PASSWORD]: isValidPassword,
  [INPUT_NAME_PHONE_NUMBER]: isValidPhoneNumber,
  [INPUT_NAME_NAME]: isValidNameField,
  [INPUT_NAME_NICK_NAME]: isValidNickNameField,
};

export const field = { value: '', isValid: false };
export const initialState = {
  [INPUT_NAME_AGREEMENT]: false,
  [INPUT_NAME_EMAIL]: { ...field },
  [INPUT_NAME_PASSWORD]: { ...field },
  [INPUT_NAME_PHONE_NUMBER]: { ...field },
  [INPUT_NAME_NAME]: { ...field },
  [INPUT_NAME_NICK_NAME]: { ...field },
};

const reducer = (state = initialState, action) => {
  const { type, payload: data } = action;

  switch (type) {
    case CHANGE_SIGN_UP_FORM: {
      const { inputName, value } = data;
      const isValid = validator[inputName](value);
      return {
        ...state,
        [inputName]: {
          value,
          isValid,
        },
      };
    }
    case CHANGE_SIGN_UP_AGREEMENT: {
      return {
        ...state,
        [INPUT_NAME_AGREEMENT]: !state[INPUT_NAME_AGREEMENT],
      };
    }
    default:
      return state;
  }
};

export default reducer;
