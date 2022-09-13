import { legacy_createStore as createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import { authReducer } from './auth/reducers';
import { productsReducer } from './products/reducers';

const rootReducer = combineReducers({
  auth: authReducer,
  products: productsReducer,
});

const composeEnhancer = process.env.NODE_ENV === 'production'
  ? applyMiddleware(thunkMiddleware)
  : composeWithDevTools(applyMiddleware(thunkMiddleware));

const store = createStore(rootReducer, composeEnhancer);

export default store;
