import { productTypes } from '../types';

const initState = {};

console.log('reducers', 3);
export const productsReducer = (state = initState, action) => {
  switch (action.type) {
    case productTypes.GET_ALL_PRODUCT:
      return {...state, product: action.payload};
    
    case productTypes.DELETE_PRODUCT:
      console.log(state.product);

      return {
        ...state,
        product: state.product.filter((produc) => produc.id !== +action.payload.id),
      };

    default:
      return state;
  }
};

