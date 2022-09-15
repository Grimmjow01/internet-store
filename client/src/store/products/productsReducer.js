import { productTypes, basketTypes } from '../types';
export const addProductAction = (obj) => ({type: productTypes.ADD_PRODUCT, payload: obj});

const initState = {basket:[{id:1,quantity:5}, {id:2,quantity:5}], product: {}}

export const productsReducer = (state = initState, action) => {

  switch (action.type) {
      case productTypes.GET_ALL_PRODUCT:
      return {...state, product: action.payload}

      case basketTypes.CHANGE_QUANTITY:
        console.log(action.payload.basket, 'Reducer - basket')
        return {...state, basket: action.payload.basket};

      case productTypes.ADD_PRODUCT:
      return {...state, products: [...state.products, action.payload ]}

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


