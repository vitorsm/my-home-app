import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PlainTextFormItem from '../../../components/plain-text-form-item';
import strings from '../../../configs/strings';
import CRUDCreate from '../../../components/crud-create';
import * as productTypeActions from '../../../redux/actions/productTypeActions';

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
    let initProductType = { id: null, name: null, description: null };
    if (route.params.productType) {
      initProductType = { ...route.params.productType };
    }
    setInitialProductType(route.params.productType);
    setIsEditing(!!(route.params.productType && route.params.productType.id));
    setProductType(initProductType);
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
        defaultValue={isEditing ? productType.name : null}
        isRequired
        fieldRequiredErrorMessage={strings('productTypeMissingNameFieldError')}
      />
    </CRUDCreate>
  );
};

ProductTypeCreateScreen.propTypes = {
  navigation: PropTypes.shape({
    reset: PropTypes.func,
    goBack: PropTypes.func,
  }).isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      productType: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string,
      }),
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
