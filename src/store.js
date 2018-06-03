// @flow
import { createStore, compose } from 'redux';
import appReducer from './app/app.reducer';

const store = createStore(
  appReducer,
  compose(global.devToolsExtension ? global.devToolsExtension() : fct => fct)
);

export default store;
