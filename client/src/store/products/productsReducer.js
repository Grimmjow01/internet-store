import { productTypes, basketTypes } from '../types';

const initState = {basket: [], product: [], searchProduct: '', allRating: [], productImages: [] }

export const productsReducer = (state = initState, action) => {

  switch (action.type) {
      case productTypes.GET_ALL_PRODUCT:
        return {...state, product: action.payload}

      case basketTypes.CHANGE_QUANTITY:
        return {...state, basket: action.payload.basket};
       
       case productTypes.ADD_PRODUCT:
       return {...state, productImages: [...state.productImages, ...action.payload.obj]  }

       case productTypes.ADD_IMAGES_PRODUCT:
         console.log("productsReducer ~ action.payload.obj============", action.payload.obj)
       return {...state, productImages: [...state.productImages, ...action.payload.obj] }
       
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

      case productTypes.GET_ALL_SEARCHPRODUCT:
        return {...state, searchProduct: action.payload.prod};

      case productTypes.GET_ALL_RATING:
        return {...state, allRating: action.payload.rating};
          
      case productTypes.CHANGE_RATING:
        const numUsersRating = state.allRating.filter((prod) => prod.product_id === +action.payload.product_id);
        let sumUsersRating = numUsersRating.reduce((acc, val) => acc + Number(val.rating), 0);
        sumUsersRating += action.payload.newValue 

        const sumAllProducts = state.product.reduce((acc, val) => acc + Number(val.rating), 0);
        let sum = ((numUsersRating.length + 1)/ (1 + (numUsersRating.length + 1))) * (Number(sumUsersRating) / (numUsersRating.length + 1)) + (1 / (1 + (numUsersRating.length + 1))) * (Number(sumAllProducts) / state.product.length);        
        sum = parseFloat(sum.toFixed(2));

        const AddProductRating = state.product.map((prod) => {
          if (prod.id === action.payload.product_id) {
          prod.rating = sum;
          return prod;
          } else {
          return prod;
        }});

          return { ...state, product:  AddProductRating }
      case basketTypes.BASKET_FROM_LOCAL:
        return {...state, basket:  action.payload}
    
      case basketTypes.ADD_TO_BASKET:
        return {...state, basket: [...state.basket, action.payload.newitem]}
 
    default:
      return state;
  }
};


