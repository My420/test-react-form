import isValidEmail from './validateEmail';
import isValidPhoneNumber from './validatePhoneNumber';

const isLoginValid = (value) => isValidEmail(value) || isValidPhoneNumber(value);

export default isLoginValid;
