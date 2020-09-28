import { GET_PRODUCT_BY_ID } from '../../actions/productActions';

export default (state = null, action) => {
  switch (action.type) {
    case GET_PRODUCT_BY_ID:
      return action.payload || false;
    default:
      return state;
  }
};
