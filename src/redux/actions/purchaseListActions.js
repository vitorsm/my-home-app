import {
  httpPost, httpGet, httpPut, httpDelete,
} from './index';

export const GET_ALL_PURCHASE_LISTS = 'get_all_purchase_lists';
export const GET_PURCHASE_LIST_BY_ID = 'get_purchase_list_by_id';
export const CREATE_PURCHASE_LIST = 'create_purchase_list';
export const UPDATE_PURCHASE_LIST = 'update_purchase_list';
export const DELETE_PURCHASE_LIST = 'delete_purchase_list';

export const createPurchaseList = (purchaseList) => async (dispatch) => {
  httpPost('purchase-list/', purchaseList, CREATE_PURCHASE_LIST, dispatch);
};

export const updatePurchaseList = (purchaseList) => async (dispatch) => {
  httpPut('purchase-list/', purchaseList, UPDATE_PURCHASE_LIST, dispatch);
};

export const deletePurchaseList = (purchaseListId) => async (dispatch) => {
  httpDelete(`purchase-list/${purchaseListId}`, DELETE_PURCHASE_LIST, dispatch);
};

export const getAllPurchaseLists = () => async (dispatch) => {
  httpGet('purchase-list/', GET_ALL_PURCHASE_LISTS, dispatch);
};

export const getPurchaseListById = (purchaseListId) => async (dispatch) => {
  httpGet(`purchase-list/${purchaseListId}`, GET_PURCHASE_LIST_BY_ID, dispatch);
};
