const isValidPassword = (value) => {
  const tester = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/;
  const valid = tester.test(value.trim());

  return valid;
};

export default isValidPassword;
