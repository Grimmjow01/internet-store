import { productTypes, basketTypes, commentTypes } from '../types';

export const changeQuantity = (basket) => ({ type: basketTypes.CHANGE_QUANTITY, payload: { basket } });
export const getAllProduct = (product) => ({type: productTypes.GET_ALL_PRODUCT, payload: product });
export const getOneProduct = (id) => ({type: productTypes.GET_ONE_PRODUCT, payload: { id } });
export const addProductAction = (obj) => ({type: productTypes.ADD_PRODUCT, payload: {obj}});
export const delProductAction = (id) => ({type: productTypes.DELETE_PRODUCT, payload: { id } });

export const editProductAction = (obj) => ({type: productTypes.EDIT_PRODUCT, payload: { obj } });
export const deleteImageOneProductAction = (id ) => ({type: productTypes.DELETE__ONE_IMAGE_PRODUCT, payload: {id } });
export const addImagesProductAction = (obj) => ({type: productTypes.ADD_IMAGES_PRODUCT, payload: {obj} });

export const addToBasketAction = (newitem) => ({type: basketTypes.ADD_TO_BASKET, payload: {newitem}})
export const addToBasketLocalStorage = (basketitems) => ({type: basketTypes.BASKET_FROM_LOCAL, payload: basketitems})
export const getAllSearchProduct = (prod) => ({type: productTypes.GET_ALL_SEARCHPRODUCT, payload: {prod} });
export const getUsersRating = (rating) => ({type: productTypes.GET_ALL_RATING, payload: {rating} });

export const addCommentAction = (obj) => ({type: commentTypes.ADD_ONE_COMMENT, payload: {obj} });
export const getCommentOneProductAction = (obj) => ({type: commentTypes.SET_ALL_COMMENT_ONE_PRODUCT, payload: {obj} });
export const changeRAting = (rating) => ({type: productTypes.CHANGE_RATING, payload: {rating} });


export const changeRating = (product_id, newValue) => ({type: productTypes.CHANGE_RATING, payload: {product_id, newValue} });
export const getAllTypes = (type) => ({type: basketTypes.GET_ALL_TYPES, payload: {type}});


export const deleteProductHandler = (id) => async (dispatch) => {
  console.log("ID=>>>>>>>>>>>>>>>>>>>>>>>>>>.", id)
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

export const addToBasketHandler = (newitem) => (dispatch) =>{
    dispatch(addToBasketAction(newitem));
    const basketItems = JSON.parse(localStorage.getItem('basketItems')) || []
    basketItems.push(newitem)
    localStorage.setItem('basketItems', JSON.stringify(basketItems))
}

export const addBasketFromLocal = (basketitems) => (dispatch) => {
   dispatch(addToBasketLocalStorage(basketitems))
   
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
    dispatch(getUsersRating(rating));

  } catch (error) {
      console.log('ratingThunkError', error);
  };
}

export const addCommentDatabaseAndStore = (newComment, id) => async (dispatch) => {
  try {
    const res = await fetch(`http://localhost:3100/api/addcomment/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(newComment),
    });
    const newCommentDatabase = await res.json()
    dispatch(addCommentAction(newCommentDatabase))
  } catch (error) {
    console.log('  Ошибка добавления комментария в store', error);
  }
}
export const getAllCommentsFromDatabase = (id) => async (dispatch) => {
  try {
    const res = await fetch(`http://localhost:3100/api/addcomment/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });
    const allCommentOneProductDatabase = await res.json()
    dispatch(getCommentOneProductAction(allCommentOneProductDatabase))
  } catch (error) {
    console.log('  Ошибка добавления комментария в store', error);
  }
}
