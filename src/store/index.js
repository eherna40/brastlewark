// Redux
import { createStore, applyMiddleware } from 'redux';

// Middlewares
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';

// reducers
import reducers from '../reducers';

// Create middleware
let middlewares = applyMiddleware(thunkMiddleware, promiseMiddleware());

// If in DEV mode


function configureStore(initialState = {}) {
   const store = createStore(reducers, initialState, middlewares);
   return store;
};

export const store = configureStore();
  