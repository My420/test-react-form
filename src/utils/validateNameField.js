const isValidNameField = (value) => {
  const tester = /^[A-Za-z0-9А-Яа-я]{3,20}$/i;
  const valid = tester.test(value);

  return valid;
};

export default isValidNameField;
