import { AUTHENTICATION_CREDENTIALS } from '../../actions/userActions';

export default (state = null, action) => {
  switch (action.type) {
    case AUTHENTICATION_CREDENTIALS:
      return action.payload || false;
    default:
      return state;
  }
};
