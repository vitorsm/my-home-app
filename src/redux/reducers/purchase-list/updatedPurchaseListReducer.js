import { UPDATE_PURCHASE_LIST } from '../../actions/purchaseListActions';

export default (state = null, action) => {
  switch (action.type) {
    case UPDATE_PURCHASE_LIST:
      return action.payload || false;
    default:
      return state;
  }
};
