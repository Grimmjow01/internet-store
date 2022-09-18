import { productTypes, basketTypes } from '../types';

const initState = {basket:[{id:1,quantity:5}, {id:2,quantity:5}], product: [], productImages: []}


export const productsReducer = (state = initState, action) => {

  switch (action.type) {
      case productTypes.GET_ALL_PRODUCT:
      return {...state, product: action.payload}

      case basketTypes.CHANGE_QUANTITY:
        console.log(action.payload.basket, 'Reducer - basket')
        return {...state, basket: action.payload.basket};
       
       case productTypes.ADD_PRODUCT:
       return {product: action.payload.obj }
     
       case productTypes.EDIT_PRODUCT:
       return {product: action.payload.obj}

      case productTypes.DELETE_PRODUCT:
      return {
        ...state,
        product: state.product.filter((produc) => produc.id !== action.payload.id),
      };
      case productTypes.DELETE_IMAGES_PRODUCT:
        console.log('=========================', 1);
        const filteredImages = state.productImages.filter((img) => img.id !== action.payload.image_id)
        console.log('=========================', 3)
      return {productImages: filteredImages };

    default:
      return state;
  }
};


