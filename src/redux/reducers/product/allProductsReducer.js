import { GET_ALL_PRODUCTS } from '../../actions/productActions';

export default (state = null, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return action.payload || false;
    default:
      return state;
  }
};
