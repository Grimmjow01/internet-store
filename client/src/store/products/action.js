import { productTypes } from '../types';
export const getAllProduct = (product) => ({type: productTypes.GET_ALL_PRODUCT, payload: product });

