import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PlainTextFormItem from '../../../components/plain-text-form-item';
import strings from '../../../configs/strings';
import CRUDCreate from '../../../components/crud-create';
import * as productTypeActions from '../../../redux/actions/productTypeActions';
import SelectComponent from '../../../components/select-component';

const ProductTypeCreateScreen = ({
  route, navigation, createdProductType, updatedProductType, createProductType, updateProductType,
  deleteProductType, deletedProductType,
}) => {
  const [productType, setProductType] = useState();
  const [initialProductType, setInitialProductType] = useState();
  const [saveEnabled, setSaveEnabled] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const isObjComplete = (newProductType) => !!(newProductType && newProductType.name);

  const hasChange = (newProductType, initProductType) => {
    const initProductTypeSelected = initProductType || initialProductType;

    const newParent = newProductType.parent_product_type;
    const initParet = initProductTypeSelected ? initProductTypeSelected.parent_product_type : null;

    if ((initParet && !newParent) || (!initParet && newParent)
       || (initParet && newParent && initParet.id !== newParent.id)) {
      return true;
    }

    return (!initProductTypeSelected) || newProductType.name !== initProductTypeSelected.name;
  };

  const prevUpdatedProductTypeRef = useRef(updatedProductType);
  const prevCreatedProductTypeRef = useRef(createdProductType);
  const prevDeletedProductTypeRef = useRef(deletedProductType);

  useEffect(() => {
    prevUpdatedProductTypeRef.current = updatedProductType;
    prevCreatedProductTypeRef.current = createdProductType;
    prevDeletedProductTypeRef.current = createdProductType;
  });

  const prevUpdatedProductType = prevUpdatedProductTypeRef.current;
  const prevCreatedProductType = prevCreatedProductTypeRef.current;
  const prevDeletedProductType = prevDeletedProductTypeRef.current;

  useEffect(() => {
    let currentProductType = { id: null, name: null, description: null };
    const initProductType = route.params.initialProductType
      ? route.params.initialProductType : route.params.productType;

    if (route.params.productType) {
      currentProductType = { ...route.params.productType };
    }

    setInitialProductType(initProductType);
    setIsEditing(!!(route.params.productType && route.params.productType.id));

    if (route.params.newSelectedProductType) {
      currentProductType.parent_product_type = route.params.newSelectedProductType;
    }
    setSaveEnabled(isObjComplete(currentProductType)
    && hasChange(currentProductType, initProductType));
    setProductType(currentProductType);
  }, []);

  useEffect(() => {
    if ((prevCreatedProductType !== createdProductType && !createdProductType.error)
    || (prevUpdatedProductType !== updatedProductType && !updatedProductType.error)
    || (prevDeletedProductType !== deletedProductType && !deletedProductType.error)) {
      navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }, { name: 'ProductType' }],
      });
    }
    setIsLoading(false);
  }, [createdProductType, updatedProductType, deletedProductType]);

  const onClearParentProductType = () => {
    const newProductType = { ...productType };
    newProductType.parent_product_type = null;
    setProductType(newProductType);

    setSaveEnabled(isObjComplete(newProductType)
    && hasChange(newProductType));
  };

  const onCancelClick = () => {
    navigation.goBack();
  };

  const onSaveClick = () => {
    if (isEditing) {
      updateProductType(productType);
    } else {
      createProductType(productType);
    }
    setIsLoading(true);
  };

  const onDeleteOkClick = () => {
    deleteProductType(productType.id);
    setIsLoading(true);
  };

  const onNameChange = (value) => {
    productType.name = value;
    setProductType(productType);
    setSaveEnabled(isObjComplete(productType) && hasChange(productType));
  };

  const getRoutesToReturn = () => [{ name: 'Home' }, { name: 'ProductType' }, {
    name: 'ProductType',
    state: {
      routes: [{
        name: 'ProductTypeCreate',
        params: {
          productType,
          initialProductType,
        },
      }],
    },
  }];

  const onSelectProductTypeClick = () => {
    navigation.navigate({
      name: 'SelectProductType',
      params: {
        selectedProductType: productType.parent_product_type,
        routesToReturn: getRoutesToReturn(),
      },
    });
  };

  const renderIdComponent = () => {
    if (!isEditing) {
      return null;
    }

    return (
      <PlainTextFormItem
        labelText={strings('id')}
        onChangeText={null}
        defaultValue={productType.id.toString()}
        editable={false}
      />
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
      deleteTitle={strings('deleteProductTypeConfirmationTitle')}
      deleteMessage={strings('deleteProductTypeConfirmationMessage', { productTypeName: productType ? productType.name : null })}
    >
      {renderIdComponent()}
      <PlainTextFormItem
        labelText={strings('name')}
        onChangeText={onNameChange}
        defaultValue={productType ? productType.name : null}
        isRequired
        fieldRequiredErrorMessage={strings('productTypeMissingNameFieldError')}
      />
      <SelectComponent
        label={strings('parentProductType')}
        onPress={onSelectProductTypeClick}
        onPressClear={onClearParentProductType}
        selectedValue={productType && productType.parent_product_type
          ? productType.parent_product_type.name : null}
      />
    </CRUDCreate>
  );
};

ProductTypeCreateScreen.propTypes = {
  navigation: PropTypes.shape({
    reset: PropTypes.func,
    goBack: PropTypes.func,
    navigate: PropTypes.func,
  }).isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      productType: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        description: PropTypes.string,
      }),
      newSelectedProductType: PropTypes.shape(Object),
      initialProductType: PropTypes.shape(Object),
      routesToReturn: PropTypes.arrayOf(Object),
    }),
  }).isRequired,
  createProductType: PropTypes.func.isRequired,
  updateProductType: PropTypes.func.isRequired,
  deleteProductType: PropTypes.func.isRequired,
  createdProductType: PropTypes.shape({
    id: PropTypes.number,
    error: PropTypes.bool,
  }),
  updatedProductType: PropTypes.shape({
    id: PropTypes.number,
    error: PropTypes.bool,
  }),
  deletedProductType: PropTypes.shape(Object),
};

ProductTypeCreateScreen.defaultProps = {
  createdProductType: null,
  updatedProductType: null,
  deletedProductType: null,
};

function mapStateToProps({ createdProductType, updatedProductType, deletedProductType }) {
  return { createdProductType, updatedProductType, deletedProductType };
}

const mapDispatchToProps = {
  createProductType: productTypeActions.createProductType,
  updateProductType: productTypeActions.updateProductType,
  deleteProductType: productTypeActions.deleteProductType,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductTypeCreateScreen);
