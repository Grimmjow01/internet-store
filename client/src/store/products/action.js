import { productTypes, basketTypes } from '../types';

export const changeQuantity = (basket) => ({ type: basketTypes.CHANGE_QUANTITY, payload: { basket } });
export const getAllProduct = (product) => ({type: productTypes.GET_ALL_PRODUCT, payload: product });
export const addProductAction = (obj) => ({type: productTypes.ADD_PRODUCT, payload: {obj}});
export const delProductAction = (id) => ({type: productTypes.DELETE_PRODUCT, payload: { id } });
export const editProductAction = (obj) => ({type: productTypes.EDIT_PRODUCT, payload: { obj } });
export const deleteImageOneProductAction = (image_id, arrayImages) => ({type: productTypes.DELETE_IMAGES_PRODUCT, payload: { image_id, arrayImages } });


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
export const deleteImagesOneProductHandler = (image_id, arrayImages) => async (dispatch) => {
   await fetch(`http://localhost:3100/loadimageforoneproduct`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://127.0.0.1:3000'
    },
    credentials: 'include',
    body: JSON.stringify({image_id})
  });
  dispatch(deleteImageOneProductAction(image_id, arrayImages));
};

export const editProductHandle = (obj) => async (dispatch) => {
console.log("editProductHandle ~ obj", obj)
const res = await fetch(`http://localhost:3100/api/products/${obj.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(obj),
  });
  const newProduct = await res.json()
  console.log("editProductHandle ~ newProduct", newProduct)
   dispatch(editProductAction(newProduct));
};
