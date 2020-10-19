import { PRODUCT_TYPE_SPENT } from '../../actions/purchaseActions';

export default (state = null, action) => {
  switch (action.type) {
    case PRODUCT_TYPE_SPENT:
      return action.payload || false;
    default:
      return state;
  }
};
