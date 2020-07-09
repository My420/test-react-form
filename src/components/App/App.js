import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

const App = () => (
  <Switch>
    <Route exact path="/signin">
      <div>signin</div>
    </Route>
    <Route exact path="/signup">
      <div>signup</div>
    </Route>
    <Redirect to="/signup" />
  </Switch>
);

export default App;
