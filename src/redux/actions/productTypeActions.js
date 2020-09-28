import {
  httpPost, httpGet, httpPut, httpDelete,
} from './index';

export const GET_ALL_PRODUCT_TYPES = 'get_all_product_types';
export const GET_PRODUCT_TYPE_BY_ID = 'get_product_type_by_id';
export const CREATE_PRODUCT_TYPE = 'create_product_type';
export const UPDATE_PRODUCT_TYPE = 'update_product_type';
export const DELETE_PRODUCT_TYPE = 'delete_product_type';

export const createProductType = (productType) => async (dispatch) => {
  httpPost('product-type/', productType, CREATE_PRODUCT_TYPE, dispatch);
};

export const updateProductType = (productType) => async (dispatch) => {
  httpPut('product-type/', productType, UPDATE_PRODUCT_TYPE, dispatch);
};

export const deleteProductType = (productTypeId) => async (dispatch) => {
  httpDelete(`product-type/${productTypeId}`, DELETE_PRODUCT_TYPE, dispatch);
};

export const getAllProductTypes = () => async (dispatch) => {
  httpGet('product-type/', GET_ALL_PRODUCT_TYPES, dispatch);
};

export const getProductTypeById = (productTypeId) => async (dispatch) => {
  httpGet(`product-type/${productTypeId}`, GET_PRODUCT_TYPE_BY_ID, dispatch);
};
