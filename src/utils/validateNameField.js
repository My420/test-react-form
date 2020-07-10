const isValidNameField = (value) => {
  const tester = /[^A-Za-z0-9]{3,20}/;
  const valid = tester.test(value);

  return valid;
};

export default isValidNameField;
