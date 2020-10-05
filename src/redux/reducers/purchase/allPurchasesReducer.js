import { GET_ALL_PURCHASES } from '../../actions/purchaseActions';

export default (state = null, action) => {
  switch (action.type) {
    case GET_ALL_PURCHASES:
      return action.payload || false;
    default:
      return state;
  }
};
