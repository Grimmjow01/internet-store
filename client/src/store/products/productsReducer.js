import { productTypes } from '../types';
export const addProductAction = (obj) => ({type: productTypes.ADD_PRODUCT, payload: obj});

const initState = {}

export const productsReducer = (state = initState, action) => {
  switch (action.type) {
      case productTypes.GET_ALL_PRODUCT:
      return {...state, product: action.payload}
      case productTypes.ADD_PRODUCT:
      return {...state, products: [...state.products, action.payload ]}
    default:
      return state;
  }
};


