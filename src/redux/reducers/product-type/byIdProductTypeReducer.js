import { GET_PRODUCT_TYPE_BY_ID } from '../../actions/productTypeActions';

export default (state = null, action) => {
  switch (action.type) {
    case GET_PRODUCT_TYPE_BY_ID:
      return action.payload || false;
    default:
      return state;
  }
};
