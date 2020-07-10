const isValidPhoneNumber = (value) => {
  const tester = /^(\+\d ?)(\d{3} ?){2}(\d{2} ?){2}$/i;
  const valid = tester.test(value.trim());

  return valid;
};

export default isValidPhoneNumber;
