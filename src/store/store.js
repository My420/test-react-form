import { createStore, applyMiddleware, combineReducers } from 'redux';
/* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import signUpReducer, { moduleName as signUpForm } from '../ducks/signUp';
import signInReducer, { moduleName as signInForm } from '../ducks/signIn';
import statusReducer, { moduleName as status } from '../ducks/status';

const enhancer = applyMiddleware(ReduxThunk);

const reducer = combineReducers({
  [status]: statusReducer,
  [signUpForm]: signUpReducer,
  [signInForm]: signInReducer,
});

const withReduxDevTools = composeWithDevTools(enhancer);

const store = createStore(reducer, {}, withReduxDevTools);

export default store;
