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

  const hasChange = (newProductType) => (!initialProductType)
  || newProductType.name !== initialProductType.name;

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

    if (route.params.selectedParent) {
      currentProductType.parent_product_type = route.params.selectedParent;
    }
    setSaveEnabled(isObjComplete(currentProductType) && hasChange(currentProductType));
    setProductType(currentProductType);
  }, []);

  useEffect(() => {
    if ((prevCreatedProductType !== createdProductType && !createdProductType.error)
    || (prevUpdatedProductType !== updatedProductType && !updatedProductType.error)
    || (prevDeletedProductType !== deletedProductType && !deletedProductType.error)) {
      navigation.reset({
        index: 0,
        routes: [{ name: 'ProductTypeList' }],
      });
    }
    setIsLoading(false);
  }, [createdProductType, updatedProductType, deletedProductType]);

  const onClearParentProductType = () => {
    const newProductType = { ...productType };
    newProductType.parent_product_type = null;
    setProductType(newProductType);
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

  const onSelectProductTypeClick = () => {
    navigation.navigate({
      name: 'ProductTypeSelect',
      params: {
        productType,
        initialProductType,
        selectedProductType: productType.parent_product_type,
      },
    });
  };

  const renderIdComponent = () => {
    if (!isEditing) {
      return null;
    }

    return (
      <PlainTextFormItem labelText={strings('id')} onChangeText={null} defaultValue={productType.id.toString()} />
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
        style={{ padding: 20 }}
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
      selectedParent: PropTypes.shape(Object),
      initialProductType: PropTypes.shape(Object),
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
