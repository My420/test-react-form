// constant

export const moduleName = 'status';
export const USER_SIGN_UP = `${moduleName}/USER_SIGN_UP`;
export const USER_SIGN_IN = `${moduleName}/USER_SIGN_IN`;

// action creator

export const signUpUser = () => ({
  type: USER_SIGN_UP,
});

export const signInUser = () => ({
  type: USER_SIGN_IN,
});

// selector

export const getSignUpStatus = (store) => store[moduleName].isUserSignUp;
export const getSignInStatus = (store) => store[moduleName].isUserSignIn;

// reducer

export const initialState = {
  isUserSignUp: false,
  isUserSignIn: false,
};

const reducer = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case USER_SIGN_UP:
      return { ...state, isUserSignUp: true };

    case USER_SIGN_IN:
      return { ...state, isUserSignIn: true };

    default:
      return state;
  }
};

export default reducer;
