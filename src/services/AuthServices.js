import db from './db';

export const sendSignUpData = async (data) => {
  db.signUpData = JSON.stringify(data);
};

export const sendSignInData = async (data) => {
  db.signInData = JSON.stringify(data);
};
