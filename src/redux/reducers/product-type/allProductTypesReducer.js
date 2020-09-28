import { GET_ALL_PRODUCT_TYPES } from '../../actions/productTypeActions';

export default (state = null, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCT_TYPES:
      return action.payload || false;
    default:
      return state;
  }
};
