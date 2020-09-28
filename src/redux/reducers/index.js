import { combineReducers } from 'redux';

import authenticatedUserReducer from './authenticatedUserReducer';
import currentUserDataReducer from './currentUserDataReducer';
import createdUserReducer from './createdUserReducer';
import defaultErrorReducer from './defaultErrorReducer';

import allBrandsReducer from './brand/allBrandsReducer';
import byIdBrandReducer from './brand/byIdBrandReducer';
import createdBrandReducer from './brand/createdBrandReducer';
import deletedBrandReducer from './brand/deletedBrandReducer';
import updatedBrandReducer from './brand/updatedBrandReducer';

import allProductTypesReducer from './product-type/allProductTypesReducer';
import byIdProductTypeReducer from './product-type/byIdProductTypeReducer';
import createdProductTypeReducer from './product-type/createdProductTypeReducer';
import deletedProductTypeReducer from './product-type/deletedProductTypeReducer';
import updatedProductTypeReducer from './product-type/updatedProductTypeReducer';

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

  allProductTypes: allProductTypesReducer,
  byIdProductType: byIdProductTypeReducer,
  createdProductType: createdProductTypeReducer,
  deletedProductType: deletedProductTypeReducer,
  updatedProductType: updatedProductTypeReducer,
});
