// Redux
import { createStore, applyMiddleware } from 'redux';

// Middlewares
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';

// reducers
import reducers from '../reducers';

// Create middleware
let middlewares = applyMiddleware(thunkMiddleware, promiseMiddleware());

//const componseEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


function configureStore(initialState = {}) {
   const store = createStore(reducers, initialState, middlewares);
   return store;
};

export const store = configureStore();
  