import React from 'react';
import EmailAuthInput from './EmailAuthInput';

const areEqual = (prevProps, nextProps) => {
  const { value: prevValue, isValid: prevIsValid } = prevProps;
  const { value: nextValue, isValid: nextIsValid } = nextProps;
  return prevValue === nextValue && prevIsValid === nextIsValid;
};

export default React.memo(EmailAuthInput, areEqual);
