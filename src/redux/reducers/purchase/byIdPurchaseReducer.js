import { GET_PURCHASE_BY_ID } from '../../actions/purchaseActions';

export default (state = null, action) => {
  switch (action.type) {
    case GET_PURCHASE_BY_ID:
      return action.payload || false;
    default:
      return state;
  }
};
