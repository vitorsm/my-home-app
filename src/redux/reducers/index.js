import { combineReducers } from 'redux';

import authenticatedUserReducer from './user/authenticatedUserReducer';
import currentUserDataReducer from './user/currentUserDataReducer';
import createdUserReducer from './user/createdUserReducer';
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

import allPurchaseListsReducer from './purchase-list/allPurchaseListsReducer';
import byIdPurchaseListReducer from './purchase-list/byIdPurchaseListReducer';
import createdPurchaseListReducer from './purchase-list/createdPurchaseListReducer';
import deletedPurchaseListReducer from './purchase-list/deletedPurchaseListReducer';
import updatedPurchaseListReducer from './purchase-list/updatedPurchaseListReducer';

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

  allPurchaseLists: allPurchaseListsReducer,
  byIdPurchaseList: byIdPurchaseListReducer,
  createdPurchaseList: createdPurchaseListReducer,
  deletedPurchaseList: deletedPurchaseListReducer,
  updatedPurchaseList: updatedPurchaseListReducer,
});
