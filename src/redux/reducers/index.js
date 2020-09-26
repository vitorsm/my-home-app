import { combineReducers } from 'redux';

import authenticatedUserReducer from './authenticatedUserReducer';
import currentUserDataReducer from './currentUserDataReducer';
import createdUserReducer from './createdUserReducer';

export default combineReducers({
  authenticatedUser: authenticatedUserReducer,
  currentUserData: currentUserDataReducer,
  createdUser: createdUserReducer,
});
