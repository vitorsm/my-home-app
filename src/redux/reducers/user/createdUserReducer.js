import { CREATE_USER } from '../../actions/userActions';

export default (state = null, action) => {
  switch (action.type) {
    case CREATE_USER:
      return action.payload || false;
    default:
      return state;
  }
};
