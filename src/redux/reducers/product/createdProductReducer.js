import { CREATE_PRODUCT } from '../../actions/productActions';

export default (state = null, action) => {
  switch (action.type) {
    case CREATE_PRODUCT:
      return action.payload || false;
    default:
      return state;
  }
};
