// @flow
import { createStore, compose } from 'redux';
import appReducer from './app/app.reducer';

const store = createStore(
  appReducer,
  compose(
    // eslint-disable-next-line no-underscore-dangle
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? // eslint-disable-next-line no-underscore-dangle
        window.__REDUX_DEVTOOLS_EXTENSION__()
      : fct => fct
  )
);

export default store;
