import { DELETE_PURCHASE } from '../../actions/purchaseActions';

export default (state = null, action) => {
  switch (action.type) {
    case DELETE_PURCHASE:
      return action.payload || false;
    default:
      return state;
  }
};
