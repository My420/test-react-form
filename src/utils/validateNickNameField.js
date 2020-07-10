const isValidNickNameField = (value) => {
  const tester = /^[A-Za-z0-9_]{3,20}$/i;
  const valid = tester.test(value);

  return valid;
};

export default isValidNickNameField;
