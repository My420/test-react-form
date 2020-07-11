import React from 'react';
import PasswordAuthInput from './PasswordAuthInput';

const areEqual = (prevProps, nextProps) => {
  const { value: prevValue, isValid: prevIsValid } = prevProps;
  const { value: nextValue, isValid: nextIsValid } = nextProps;
  return prevValue === nextValue && prevIsValid === nextIsValid;
};

export default React.memo(PasswordAuthInput, areEqual);
