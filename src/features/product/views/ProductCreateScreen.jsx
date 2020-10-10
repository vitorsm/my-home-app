import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PlainTextFormItem from '../../../components/plain-text-form-item';
import strings from '../../../configs/strings';
import CRUDCreate from '../../../components/crud-create';
import * as productActions from '../../../redux/actions/productActions';
import SelectComponent from '../../../components/select-component';
import { getLastRouteToSetParamsFromRoutesToReturn } from '../../../utils/routeUtils';
import { compareObj } from '../../../utils/objectUtils';

const ProductCreateScreen = ({
  route, navigation, createdProduct, updatedProduct, createProduct, updateProduct,
  deleteProduct, deletedProduct,
}) => {
  const [product, setProduct] = useState();
  const [initialProduct, setInitialProduct] = useState();
  const [saveEnabled, setSaveEnabled] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const isObjComplete = (newProduct) => !!(newProduct && newProduct.name);

  const hasChange = (newProduct, initProduct) => {
    const selectedInitialProduct = initProduct || initialProduct;

    if (!selectedInitialProduct) {
      return true;
    }

    return selectedInitialProduct.name !== newProduct.name
    || !compareObj(newProduct.product_type, selectedInitialProduct.product_type)
    || !compareObj(newProduct.brand, selectedInitialProduct.brand);
  };

  const prevUpdatedProductRef = useRef(updatedProduct);
  const prevCreatedProductRef = useRef(createdProduct);
  const prevDeletedProductRef = useRef(deletedProduct);

  useEffect(() => {
    prevUpdatedProductRef.current = updatedProduct;
    prevCreatedProductRef.current = createdProduct;
    prevDeletedProductRef.current = createdProduct;
  });

  const prevUpdatedProduct = prevUpdatedProductRef.current;
  const prevCreatedProduct = prevCreatedProductRef.current;
  const prevDeletedProduct = prevDeletedProductRef.current;

  useEffect(() => {
    let currentProduct = { id: null, name: null, description: null };
    const initProduct = route.params.initialProduct
      ? route.params.initialProduct : route.params.product;

    if (route.params.product) {
      currentProduct = { ...route.params.product };
    }
    setInitialProduct(initProduct);
    setIsEditing(!!(route.params.product && route.params.product.id));

    if (route.params.newSelectedProductType) {
      currentProduct.product_type = route.params.newSelectedProductType;
    }
    if (route.params.newSelectedBrand) {
      currentProduct.brand = route.params.newSelectedBrand;
    }

    setSaveEnabled(isObjComplete(currentProduct) && hasChange(currentProduct, initProduct));
    setProduct(currentProduct);
  }, []);

  useEffect(() => {
    if ((prevCreatedProduct !== createdProduct && !createdProduct.error)
    || (prevUpdatedProduct !== updatedProduct && !updatedProduct.error)
    || (prevDeletedProduct !== deletedProduct && !deletedProduct.error)) {
      if (route.params.routesToReturn && createdProduct) {
        const currentRoutes = route.params.routesToReturn;

        const lastRoute = getLastRouteToSetParamsFromRoutesToReturn(currentRoutes);
        lastRoute.params.newSelectedProduct = createdProduct;

        navigation.reset({
          index: 0,
          routes: currentRoutes,
        });
      } else {
        navigation.reset({
          index: 0,
          routes: [{ name: 'ProductList' }],
        });
      }
    }
    setIsLoading(false);
  }, [createdProduct, updatedProduct, deletedProduct]);

  const onClearProductType = () => {
    const newProduct = { ...product };
    newProduct.product_type = null;
    setProduct(newProduct);
    setSaveEnabled(isObjComplete(newProduct) && hasChange(newProduct));
  };
  const onClearBrand = () => {
    const newProduct = { ...product };
    newProduct.brand = null;
    setProduct(newProduct);
    setSaveEnabled(isObjComplete(newProduct) && hasChange(newProduct));
  };

  const onCancelClick = () => {
    navigation.goBack();
  };

  const onSaveClick = () => {
    if (isEditing) {
      updateProduct(product);
    } else {
      createProduct(product);
    }
    setIsLoading(true);
  };

  const onDeleteOkClick = () => {
    deleteProduct(product.id);
    setIsLoading(true);
  };

  const onNameChange = (value) => {
    product.name = value;
    setProduct(product);
    setSaveEnabled(isObjComplete(product) && hasChange(product));
  };

  const getRoutesToReturn = () => [{ name: 'Home' }, {
    name: 'Product',
  }, {
    name: 'Product',
    state: {
      routes: [{
        name: 'ProductCreate',
        params: {
          product,
          initialProduct,
          routesToReturn: route.params.routesToReturn,
        },
      }],
    },
  }];

  const onSelectProductTypeClick = () => {
    navigation.navigate('ProductType', {
      screen: 'SelectProductType',
      params: {
        initialProduct,
        selectedProductType: product.product_type,
        routesToReturn: getRoutesToReturn(),
      },
    });
  };

  const onSelectBrandClick = () => {
    navigation.navigate('Brand', {
      screen: 'SelectBrand',
      params: {
        initialProduct,
        selectedBrand: product.brand,
        routesToReturn: getRoutesToReturn(),
      },
    });
  };

  const renderIdComponent = () => {
    if (!isEditing) {
      return null;
    }

    return (
      <PlainTextFormItem labelText={strings('id')} onChangeText={null} defaultValue={product.id.toString()} />
    );
  };

  return (
    <CRUDCreate
      isEditing={isEditing}
      saveEnabled={saveEnabled}
      onCancelClick={onCancelClick}
      onSaveClick={onSaveClick}
      onDeleteClick={onDeleteOkClick}
      isLoading={isLoading}
      deleteTitle={strings('deleteProductConfirmationTitle')}
      deleteMessage={strings('deleteProductConfirmationMessage', { productName: product ? product.name : null })}
    >
      {renderIdComponent()}
      <PlainTextFormItem
        labelText={strings('name')}
        onChangeText={onNameChange}
        defaultValue={product ? product.name : null}
        isRequired
        fieldRequiredErrorMessage={strings('productMissingNameFieldError')}
      />
      <SelectComponent
        label={strings('productType')}
        onPress={onSelectProductTypeClick}
        onPressClear={onClearProductType}
        selectedValue={product && product.product_type
          ? product.product_type.name : null}
      />
      <SelectComponent
        label={strings('brand')}
        onPress={onSelectBrandClick}
        onPressClear={onClearBrand}
        selectedValue={product && product.brand
          ? product.brand.name : null}
      />
    </CRUDCreate>
  );
};

ProductCreateScreen.propTypes = {
  navigation: PropTypes.shape({
    reset: PropTypes.func,
    goBack: PropTypes.func,
    navigate: PropTypes.func,
  }).isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      product: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        description: PropTypes.string,
      }),
      newSelectedProductType: PropTypes.shape(Object),
      newSelectedBrand: PropTypes.shape(Object),
      initialProduct: PropTypes.shape(Object),
      routesToReturn: PropTypes.arrayOf(Object),
    }),
  }).isRequired,
  createProduct: PropTypes.func.isRequired,
  updateProduct: PropTypes.func.isRequired,
  deleteProduct: PropTypes.func.isRequired,
  createdProduct: PropTypes.shape({
    id: PropTypes.number,
    error: PropTypes.bool,
  }),
  updatedProduct: PropTypes.shape({
    id: PropTypes.number,
    error: PropTypes.bool,
  }),
  deletedProduct: PropTypes.shape(Object),
};

ProductCreateScreen.defaultProps = {
  createdProduct: null,
  updatedProduct: null,
  deletedProduct: null,
};

function mapStateToProps({ createdProduct, updatedProduct, deletedProduct }) {
  return { createdProduct, updatedProduct, deletedProduct };
}

const mapDispatchToProps = {
  createProduct: productActions.createProduct,
  updateProduct: productActions.updateProduct,
  deleteProduct: productActions.deleteProduct,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductCreateScreen);
