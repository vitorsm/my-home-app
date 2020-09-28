import {
  httpPost, httpGet, httpPut, httpDelete,
} from './index';

export const GET_ALL_BRANDS = 'get_all_brands';
export const GET_BRAND_BY_ID = 'get_brand_by_id';
export const CREATE_BRAND = 'create_brand';
export const UPDATE_BRAND = 'update_brand';
export const DELETE_BRAND = 'delete_brand';

export const createBrand = (brand) => async (dispatch) => {
  httpPost('brand/', brand, CREATE_BRAND, dispatch);
};

export const updateBrand = (brand) => async (dispatch) => {
  httpPut('brand/', brand, UPDATE_BRAND, dispatch);
};

export const deleteBrand = (brandId) => async (dispatch) => {
  httpDelete(`brand/${brandId}`, DELETE_BRAND, dispatch);
};

export const getAllBrands = () => async (dispatch) => {
  httpGet('brand/', GET_ALL_BRANDS, dispatch);
};

export const getBrandById = (brandId) => async (dispatch) => {
  httpGet(`brand/${brandId}`, GET_BRAND_BY_ID, dispatch);
};
