import {
  httpPost, httpGet, httpPut, httpDelete,
} from './index';

export const GET_ALL_PRODUCTS = 'get_all_products';
export const GET_PRODUCT_BY_ID = 'get_product_by_id';
export const CREATE_PRODUCT = 'create_product';
export const UPDATE_PRODUCT = 'update_product';
export const DELETE_PRODUCT = 'delete_product';

export const createProduct = (product) => async (dispatch) => {
  httpPost('product/', product, CREATE_PRODUCT, dispatch);
};

export const updateProduct = (product) => async (dispatch) => {
  httpPut('product/', product, UPDATE_PRODUCT, dispatch);
};

export const deleteProduct = (productId) => async (dispatch) => {
  httpDelete(`product/${productId}`, DELETE_PRODUCT, dispatch);
};

export const getAllProducts = () => async (dispatch) => {
  httpGet('product/', GET_ALL_PRODUCTS, dispatch);
};

export const getProductById = (productId) => async (dispatch) => {
  httpGet(`product/${productId}`, GET_PRODUCT_BY_ID, dispatch);
};
