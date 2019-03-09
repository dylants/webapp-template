/* istanbul ignore file */
import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducerRegistry from './reducerRegistry';

const isProd = process.env.NODE_ENV === 'production';
const isTest = process.env.NODE_ENV === 'test';

const middleware =
  isProd || isTest
    ? applyMiddleware(thunk)
    : composeWithDevTools(applyMiddleware(thunk, logger));

function configureStore(initialState = {}, initialReducer = () => {}) {
  const store = createStore(initialReducer, initialState, middleware);

  reducerRegistry.setChangeListener(reducers => {
    store.replaceReducer(combineReducers(reducers));
  });

  if (!isProd && module.hot) {
    module.hot.accept([], () => {
      store.replaceReducer(() =>
        combineReducers(reducerRegistry.getReducers()),
      );
    });
  }

  return store;
}

export default configureStore();
