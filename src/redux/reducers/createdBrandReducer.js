import { CREATE_BRAND } from '../actions/brandActions';

export default (state = null, action) => {
  switch (action.type) {
    case CREATE_BRAND:
      return action.payload || false;
    default:
      return state;
  }
};
