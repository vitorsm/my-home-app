import { DEFAULT_ERROR_TYPE } from '../actions';

export default (state = null, action) => {
  switch (action.type) {
    case DEFAULT_ERROR_TYPE:
      return action.payload || false;
    default:
      return state;
  }
};
