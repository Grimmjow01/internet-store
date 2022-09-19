import { productTypes, basketTypes } from '../types';

export const changeQuantity = (basket) => ({ type: basketTypes.CHANGE_QUANTITY, payload: { basket } });
export const getAllProduct = (product) => ({type: productTypes.GET_ALL_PRODUCT, payload: product });
export const getOneProduct = (id) => ({type: productTypes.GET_ONE_PRODUCT, payload: { id } });
export const addProductAction = (obj) => ({type: productTypes.ADD_PRODUCT, payload: {obj}});
export const delProductAction = (id) => ({type: productTypes.DELETE_PRODUCT, payload: { id } });
export const addToBasketAction = (newitem) => ({type: basketTypes.ADD_TO_BASKET, payload: {newitem}})
export const getAllSearchProduct = (prod) => ({type: productTypes.GET_ALL_SEARCHPRODUCT, payload: {prod} });
export const getUsersRAting = (rating) => ({type: productTypes.GET_ALL_RATING, payload: {rating} });
// export const changeRAting = (rating) => ({type: productTypes.CHANGE_RATING, payload: {rating} });

export const deleteProductHandler = (id) => async (dispatch) => {
  await fetch(`http://localhost:3100/api/products/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
  });
  dispatch(delProductAction(id));
};


export const addToBasketHandler = (newitem) => (dispatch) =>{
    dispatch(addToBasketAction(newitem));
    const basketItems = JSON.parse(localStorage.getItem('basketItems')) || []
    basketItems.push(newitem)
    localStorage.setItem('basketItems', JSON.stringify(basketItems))

}
export const allRatingThunk = () => async (dispatch) => {
  try {
    const res = await fetch('http://localhost:3100/api/getrating', {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const rating = await res.json();
    dispatch(getUsersRAting(rating));

  } catch (error) {
      console.log('ratingThunkError', error);
  };
}