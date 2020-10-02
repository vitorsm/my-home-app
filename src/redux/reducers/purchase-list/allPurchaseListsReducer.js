import { GET_ALL_PURCHASE_LISTS } from '../../actions/purchaseListActions';

export default (state = null, action) => {
  switch (action.type) {
    case GET_ALL_PURCHASE_LISTS:
      return action.payload || false;
    default:
      return state;
  }
};
