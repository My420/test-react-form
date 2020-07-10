export const PASSWORD_MIN_LENGTH = 6;
export const PASSWORD_MAX_LENGTH = 20;

const isValidPassword = (value) => {
  if (value.length < PASSWORD_MIN_LENGTH) return false;
  if (value.length > PASSWORD_MAX_LENGTH) return false;
  return true;
};

export default isValidPassword;
