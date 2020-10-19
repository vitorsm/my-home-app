import { MONTHLY_SPENT } from '../../actions/purchaseActions';

export default (state = null, action) => {
  switch (action.type) {
    case MONTHLY_SPENT:
      return action.payload || false;
    default:
      return state;
  }
};
