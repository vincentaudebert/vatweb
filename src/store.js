// @flow
import { createStore, compose } from 'redux';
import appReducer from './App/app.reducer';

const store = createStore(
  appReducer,
  compose(global.devToolsExtension ? global.devToolsExtension() : fct => fct)
);

export default store;
