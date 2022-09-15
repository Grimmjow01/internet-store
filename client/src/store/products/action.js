import { productTypes } from '../types';
export const getAllProduct = (product) => ({type: productTypes.GET_ALL_PRODUCT, payload: product });
export const delProductAction = (id) => ({type: productTypes.DELETE_PRODUCT, payload: { id } });


export const deleteProductHandler = (id) => async (dispatch) => {
  await fetch(`http://localhost:3100/api/products/${id}`, {
    method: 'DELETE',
  });
  dispatch(delProductAction(id));
};