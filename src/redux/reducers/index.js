import { combineReducers } from 'redux';

import authenticatedUserReducer from './authenticatedUserReducer';
import currentUserDataReducer from './currentUserDataReducer';
import createdUserReducer from './createdUserReducer';
import defaultErrorReducer from './defaultErrorReducer';
import allBrandsReducer from './allBrandsReducer';
import byIdBrandReducer from './byIdBrandReducer';
import createdBrandReducer from './createdBrandReducer';
import deletedBrandReducer from './deletedBrandReducer';
import updatedBrandReducer from './updatedBrandReducer';

export default combineReducers({
  authenticatedUser: authenticatedUserReducer,
  currentUserData: currentUserDataReducer,
  createdUser: createdUserReducer,
  defaultError: defaultErrorReducer,
  allBrands: allBrandsReducer,
  byIdBrand: byIdBrandReducer,
  createdBrand: createdBrandReducer,
  deletedBrand: deletedBrandReducer,
  updatedBrand: updatedBrandReducer,
});
