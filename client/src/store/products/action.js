import { productTypes, basketTypes } from '../types';

export const changeQuantity = (basket) => ({ type: basketTypes.CHANGE_QUANTITY, payload: { basket } });
export const getAllProduct = (product) => ({type: productTypes.GET_ALL_PRODUCT, payload: product });
export const getOneProduct = (id) => ({type: productTypes.GET_ONE_PRODUCT, payload: { id } });
export const addProductAction = (obj) => ({type: productTypes.ADD_PRODUCT, payload: {obj}});
export const delProductAction = (id) => ({type: productTypes.DELETE_PRODUCT, payload: { id } });


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
