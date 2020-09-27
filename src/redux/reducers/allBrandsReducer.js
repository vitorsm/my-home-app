import { GET_ALL_BRANDS } from '../actions/brandActions';

export default (state = null, action) => {
  switch (action.type) {
    case GET_ALL_BRANDS:
      return action.payload || false;
    default:
      return state;
  }
};
