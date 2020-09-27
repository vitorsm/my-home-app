import { DELETE_BRAND } from '../actions/brandActions';

export default (state = null, action) => {
  switch (action.type) {
    case DELETE_BRAND:
      return action.payload || false;
    default:
      return state;
  }
};
