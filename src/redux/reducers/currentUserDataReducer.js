import { FETCH_ACCOUNT_DATA } from '../actions/userActions';

export default (state = null, action) => {
  switch (action.type) {
    case FETCH_ACCOUNT_DATA:
      return action.payload || false;
    default:
      return state;
  }
};
