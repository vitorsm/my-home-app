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

import allProductsReducer from './product/allProductsReducer';
import byIdProductReducer from './product/byIdProductReducer';
import createdProductReducer from './product/createdProductReducer';
import deletedProductReducer from './product/deletedProductReducer';
import updatedProductReducer from './product/updatedProductReducer';

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

  allProducts: allProductsReducer,
  byIdProduct: byIdProductReducer,
  createdProduct: createdProductReducer,
  deletedProduct: deletedProductReducer,
  updatedProduct: updatedProductReducer,
});
