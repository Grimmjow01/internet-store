import { productTypes } from '../types';

const initState = {}
console.log('reducers', 3);
export const productsReducer = (state = initState, action) => {
  switch (action.type) {
      case productTypes.GET_ALL_PRODUCT:
      return {...state, product: action.payload}
    default:
      return state;
  }
};

