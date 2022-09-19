import { productTypes, basketTypes } from '../types';

export const changeQuantity = (basket) => ({ type: basketTypes.CHANGE_QUANTITY, payload: { basket } });
export const getAllProduct = (product) => ({type: productTypes.GET_ALL_PRODUCT, payload: product });
export const addProductAction = (obj) => ({type: productTypes.ADD_PRODUCT, payload: {obj}});
export const delProductAction = (id) => ({type: productTypes.DELETE_PRODUCT, payload: { id } });
export const editProductAction = (obj) => ({type: productTypes.EDIT_PRODUCT, payload: { obj } });
export const deleteImageOneProductAction = (id ) => ({type: productTypes.DELETE__ONE_IMAGE_PRODUCT, payload: {id } });
export const addImagesProductAction = (obj) => ({type: productTypes.ADD_IMAGES_PRODUCT, payload: {obj} });

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
export const deleteImagesOneProductHandler = (id) => async (dispatch) => {
   await fetch(`http://localhost:3100/loadimageforoneproduct`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://127.0.0.1:3000'
    },
    credentials: 'include',
    body: JSON.stringify({id})
  });
  dispatch(deleteImageOneProductAction(id));
};

export const editProductHandle = (obj) => async (dispatch) => {
const res = await fetch(`http://localhost:3100/api/products/${obj.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(obj),
  });
  const newProduct = await res.json()
   dispatch(editProductAction(newProduct));
};
