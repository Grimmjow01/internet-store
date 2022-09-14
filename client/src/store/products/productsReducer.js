import { productTypes, basketTypes } from '../types';

const initState = {basket:[{id:1,quantity:5}, {id:2,quantity:5}]}


export const productsReducer = (state = initState, action) => {

  switch (action.type) {
      case productTypes.GET_ALL_PRODUCT:
      return {...state, product: action.payload}

      case basketTypes.CHANGE_QUANTITY:
        console.log(action.payload.basket, 'Reducer - basket')
        return {...state, basket: action.payload.basket};

    default:
      return state;
  }
};

