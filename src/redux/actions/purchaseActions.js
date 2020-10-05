import {
  httpPost, httpGet, httpPut, httpDelete,
} from './index';

export const GET_ALL_PURCHASES = 'get_all_purchases';
export const GET_PURCHASE_BY_ID = 'get_purchase_by_id';
export const CREATE_PURCHASE = 'create_purchase';
export const UPDATE_PURCHASE = 'update_purchase';
export const DELETE_PURCHASE = 'delete_purchase';

export const createPurchase = (purchase) => async (dispatch) => {
  httpPost('purchase/', purchase, CREATE_PURCHASE, dispatch);
};

export const updatePurchase = (purchase) => async (dispatch) => {
  httpPut('purchase/', purchase, UPDATE_PURCHASE, dispatch);
};

export const deletePurchase = (purchaseId) => async (dispatch) => {
  httpDelete(`purchase/${purchaseId}`, DELETE_PURCHASE, dispatch);
};

export const getAllPurchases = () => async (dispatch) => {
  httpGet('purchase/', GET_ALL_PURCHASES, dispatch);
};

export const getPurchaseById = (purchaseId) => async (dispatch) => {
  httpGet(`purchase/${purchaseId}`, GET_PURCHASE_BY_ID, dispatch);
};
