import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { SIGN_IN_PAGE, SIGN_UP_PAGE } from '../../utils/constant';
import SignUpPage from '../../pages/SignUpPage/SignUpPage';

const App = () => (
  <Switch>
    <Route exact path={SIGN_IN_PAGE}>
      <div>signin</div>
    </Route>
    <Route exact path={SIGN_UP_PAGE}>
      <SignUpPage />
    </Route>
    <Redirect to="/signup" />
  </Switch>
);

export default App;
