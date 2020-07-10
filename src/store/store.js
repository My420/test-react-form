import { createStore, applyMiddleware, combineReducers } from 'redux';
/* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import signInReducer, { moduleName as signInForm } from '../ducks/signUp';

const enhancer = applyMiddleware(ReduxThunk);

const reducer = combineReducers({
  [signInForm]: signInReducer,
});

const withReduxDevTools = composeWithDevTools(enhancer);

const store = createStore(reducer, {}, withReduxDevTools);

export default store;
