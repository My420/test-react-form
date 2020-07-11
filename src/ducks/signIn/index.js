import { INPUT_NAME_LOGIN, INPUT_NAME_PASSWORD } from '../../utils/constant';
import isValidLogin from '../../utils/validateLogin';
import isValidPassword from '../../utils/validatePassword';
import { sendSignInData } from '../../services/AuthServices';
import getDataFromFormState from '../../utils/getDataFromFormState';

// constant

export const moduleName = 'signInForm';
export const CHANGE_SIGN_IN_FORM = `${moduleName}/CHANGE_SIGN_IN_FORM`;

// action creator

export const changeSignInForm = (inputName, value) => ({
  type: CHANGE_SIGN_IN_FORM,
  payload: { inputName, value },
});

// async action creator

export const sendData = () => async (dispatch, getState) => {
  const formState = getState()[moduleName];
  const data = getDataFromFormState(formState);
  sendSignInData(data);
};

// selector

export const getSignInFormData = (store) => store[moduleName];

// reducer

const validator = {
  [INPUT_NAME_LOGIN]: isValidLogin,
  [INPUT_NAME_PASSWORD]: isValidPassword,
};

export const field = { value: '', isValid: false };
export const initialState = {
  [INPUT_NAME_LOGIN]: { ...field },
  [INPUT_NAME_PASSWORD]: { ...field },
};

const reducer = (state = initialState, action) => {
  const { type, payload: data } = action;

  switch (type) {
    case CHANGE_SIGN_IN_FORM: {
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
    default:
      return state;
  }
};

export default reducer;
