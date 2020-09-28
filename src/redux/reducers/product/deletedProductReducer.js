import { DELETE_PRODUCT } from '../../actions/productActions';

export default (state = null, action) => {
  switch (action.type) {
    case DELETE_PRODUCT:
      return action.payload || false;
    default:
      return state;
  }
};
