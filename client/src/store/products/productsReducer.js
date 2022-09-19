import { productTypes, basketTypes } from '../types';

const initState = {basket:[{id:1,quantity:5}, {id:2,quantity:5}], product: [], productImages: []}


export const productsReducer = (state = initState, action) => {

  switch (action.type) {
      case productTypes.GET_ALL_PRODUCT:
      return {...state, product: action.payload}

      case basketTypes.CHANGE_QUANTITY:
        return {...state, basket: action.payload.basket};
       
       case productTypes.ADD_PRODUCT:
       return {...state, product: action.payload.obj }

       case productTypes.ADD_IMAGES_PRODUCT:
       return {...state, productImages: action.payload.obj}
       
       case productTypes.DELETE__ONE_IMAGE_PRODUCT:
        const filteredImages = state.productImages.filter((el) => el.id !== action.payload.id)
       return {...state, productImages: filteredImages}

       case productTypes.EDIT_PRODUCT:
       return {...state, product: action.payload.obj}

      case productTypes.DELETE_PRODUCT:
      return {
        ...state,
        product: state.product.filter((produc) => produc.id !== action.payload.id),
      };

    default:
      return state;
  }
};


