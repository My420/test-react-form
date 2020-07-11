const DB = class {
  #signUpData = '';

  #signInData = '';

  get signUpData() {
    return this.#signUpData;
  }

  set signUpData(value) {
    if (typeof value === 'string') {
      this.#signUpData = value;
    } else {
      throw new Error('value must be a string');
    }
  }

  get signInData() {
    return this.#signInData;
  }

  set signInData(value) {
    if (typeof value === 'string') {
      this.#signInData = value;
    } else {
      throw new Error('value must be a string');
    }
  }
};

const db = new DB();

window.db = db;

export default db;
