import { CREATE_PURCHASE } from '../../actions/purchaseActions';

export default (state = null, action) => {
  switch (action.type) {
    case CREATE_PURCHASE:
      return action.payload || false;
    default:
      return state;
  }
};
