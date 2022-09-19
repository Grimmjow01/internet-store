import { productTypes, basketTypes } from '../types';

const initState = {basket:[], product: [], searchProduct: '', allRating: [] }

export const productsReducer = (state = initState, action) => {

  switch (action.type) {
      case productTypes.GET_ALL_PRODUCT:
      return {...state, product: action.payload}

      case basketTypes.CHANGE_QUANTITY:
        return {...state, basket: action.payload.basket};
       
       case productTypes.ADD_PRODUCT:
       return {...state, product: [...state.product, action.payload.obj] }

      case productTypes.DELETE_PRODUCT:

      return {
        ...state,
        product: state.product.filter((produc) => produc.id !== action.payload.id),
      };

      case productTypes.GET_ALL_SEARCHPRODUCT:
        return {...state, searchProduct: action.payload.prod};

      case productTypes.GET_ALL_RATING:
          return {...state, allRating: action.payload.rating};
          
      // case productTypes.CHANGE_RATING:
      //     return {...state, allRating: action.payload.rating};

      
      case basketTypes.ADD_TO_BASKET:
        return {...state, basket: [...state.basket, action.payload.newitem]}
 
    default:
      return state;
  }
};


