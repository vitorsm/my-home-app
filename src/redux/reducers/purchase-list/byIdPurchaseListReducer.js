import { GET_PURCHASE_LIST_BY_ID } from '../../actions/purchaseListActions';

export default (state = null, action) => {
  switch (action.type) {
    case GET_PURCHASE_LIST_BY_ID:
      return action.payload || false;
    default:
      return state;
  }
};
