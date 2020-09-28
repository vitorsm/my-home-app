import { GET_BRAND_BY_ID } from '../../actions/brandActions';

export default (state = null, action) => {
  switch (action.type) {
    case GET_BRAND_BY_ID:
      return action.payload || false;
    default:
      return state;
  }
};
