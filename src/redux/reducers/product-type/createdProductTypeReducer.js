import { CREATE_PRODUCT_TYPE } from '../../actions/productTypeActions';

export default (state = null, action) => {
  switch (action.type) {
    case CREATE_PRODUCT_TYPE:
      return action.payload || false;
    default:
      return state;
  }
};
