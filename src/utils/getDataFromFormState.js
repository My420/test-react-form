const getDataFromFormState = (formState) => Object.keys(formState).reduce((acc, elem) => {
  if (typeof formState[elem] === 'boolean') acc[elem] = formState[elem];
  if (typeof formState[elem] === 'object') acc[elem] = formState[elem].value;
  return acc;
}, {});

export default getDataFromFormState;
