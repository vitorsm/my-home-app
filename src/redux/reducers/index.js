import { combineReducers } from 'redux';

import authenticatedUserReducer from './authenticatedUserReducer';
import currentUserDataReducer from './currentUserDataReducer';
import createdUserReducer from './createdUserReducer';
import defaultErrorReducer from './defaultErrorReducer';

export default combineReducers({
  authenticatedUser: authenticatedUserReducer,
  currentUserData: currentUserDataReducer,
  createdUser: createdUserReducer,
  defaultError: defaultErrorReducer,
});
