import { UPDATE_PURCHASE } from '../../actions/purchaseActions';

export default (state = null, action) => {
  switch (action.type) {
    case UPDATE_PURCHASE:
      return action.payload || false;
    default:
      return state;
  }
};
