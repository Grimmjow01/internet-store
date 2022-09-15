import { legacy_createStore as createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

// import { authReducer } from './auth/reducers';
import { productsReducer } from './products/productsReducer';
import { snackBarReducer } from './snackBar/reducer';

const rootReducer = combineReducers({
  // auth: authReducer,
  products: productsReducer,
  snackbarState: snackBarReducer,
  basket : productsReducer,
});

const composeEnhancer = process.env.NODE_ENV === 'production'
  ? applyMiddleware(thunkMiddleware)
  : composeWithDevTools(applyMiddleware(thunkMiddleware));

export const store = createStore(rootReducer, composeEnhancer);
