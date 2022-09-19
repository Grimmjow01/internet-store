import { productTypes, basketTypes } from '../types';

const initState = {basket:[{id:1,quantity:5}, {id:2,quantity:5}], product: [], searchProduct: '', allRating: [] }

export const productsReducer = (state = initState, action) => {

  switch (action.type) {
      case productTypes.GET_ALL_PRODUCT:
      return {...state, product: action.payload}

      case basketTypes.CHANGE_QUANTITY:
        console.log(action.payload.basket, 'Reducer - basket')
        return {...state, basket: action.payload.basket};
       
      case productTypes.ADD_PRODUCT:
        return {product: action.payload.obj }

      case productTypes.DELETE_PRODUCT:
        console.log('action.payload.id==', action.payload.id);
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

    default:
      return state;
  }
};


