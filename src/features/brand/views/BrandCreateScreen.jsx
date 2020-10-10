import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PlainTextFormItem from '../../../components/plain-text-form-item';
import strings from '../../../configs/strings';
import CRUDCreate from '../../../components/crud-create';
import * as brandActions from '../../../redux/actions/brandActions';

const BrandCreateScreen = ({
  route, navigation, createdBrand, updatedBrand, createBrand, updateBrand, deleteBrand,
  deletedBrand,
}) => {
  const [brand, setBrand] = useState();
  const [initialBrand, setInitialBrand] = useState();
  const [saveEnabled, setSaveEnabled] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const isObjComplete = (newBrand) => !!(newBrand && newBrand.name);

  const hasChange = (newBrand) => (!initialBrand) || newBrand.name !== initialBrand.name;

  const prevUpdatedBrandRef = useRef(updatedBrand);
  const prevCreatedBrandRef = useRef(createdBrand);
  const prevDeletedBrandRef = useRef(deletedBrand);

  useEffect(() => {
    prevUpdatedBrandRef.current = updatedBrand;
    prevCreatedBrandRef.current = createdBrand;
    prevDeletedBrandRef.current = createdBrand;
  });

  const prevUpdatedBrand = prevUpdatedBrandRef.current;
  const prevCreatedBrand = prevCreatedBrandRef.current;
  const prevDeletedBrand = prevDeletedBrandRef.current;

  useEffect(() => {
    let initBrand = { id: null, name: null, description: null };
    if (route.params.brand) {
      initBrand = { ...route.params.brand };
    }
    setInitialBrand(route.params.brand);
    setIsEditing(!!(route.params.brand && route.params.brand.id));
    setBrand(initBrand);
  }, []);

  useEffect(() => {
    if ((prevCreatedBrand !== createdBrand && !createdBrand.error)
    || (prevUpdatedBrand !== updatedBrand && !updatedBrand.error)
    || (prevDeletedBrand !== deletedBrand && !deletedBrand.error)) {
      navigation.reset({
        index: 0,
        routes: [{ name: 'BrandList' }],
      });
    }
    setIsLoading(false);
  }, [createdBrand, updatedBrand, deletedBrand]);

  const onCancelClick = () => {
    navigation.goBack();
  };

  const onSaveClick = () => {
    if (isEditing) {
      updateBrand(brand);
    } else {
      createBrand(brand);
    }
    setIsLoading(true);
  };

  const onDeleteOkClick = () => {
    deleteBrand(brand.id);
    setIsLoading(true);
  };

  const onNameChange = (value) => {
    brand.name = value;
    setBrand(brand);
    setSaveEnabled(isObjComplete(brand) && hasChange(brand));
  };

  const renderIdComponent = () => {
    if (!isEditing) {
      return null;
    }

    return (
      <PlainTextFormItem
        labelText={strings('id')}
        onChangeText={null}
        defaultValue={brand.id.toString()}
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
      deleteTitle={strings('deleteBrandConfirmationTitle')}
      deleteMessage={strings('deleteBrandConfirmationMessage', { brandName: brand ? brand.name : null })}
    >
      {renderIdComponent()}
      <PlainTextFormItem
        labelText={strings('name')}
        onChangeText={onNameChange}
        defaultValue={isEditing ? brand.name : null}
        isRequired
        fieldRequiredErrorMessage={strings('brandMissingNameFieldError')}
      />
    </CRUDCreate>
  );
};

BrandCreateScreen.propTypes = {
  navigation: PropTypes.shape({
    reset: PropTypes.func,
    goBack: PropTypes.func,
  }).isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      brand: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string,
      }),
    }),
  }).isRequired,
  createBrand: PropTypes.func.isRequired,
  updateBrand: PropTypes.func.isRequired,
  deleteBrand: PropTypes.func.isRequired,
  createdBrand: PropTypes.shape({
    id: PropTypes.number,
    error: PropTypes.bool,
  }),
  updatedBrand: PropTypes.shape({
    id: PropTypes.number,
    error: PropTypes.bool,
  }),
  deletedBrand: PropTypes.shape(Object),
};

BrandCreateScreen.defaultProps = {
  createdBrand: null,
  updatedBrand: null,
  deletedBrand: null,
};

function mapStateToProps({ createdBrand, updatedBrand, deletedBrand }) {
  return { createdBrand, updatedBrand, deletedBrand };
}

const mapDispatchToProps = {
  createBrand: brandActions.createBrand,
  updateBrand: brandActions.updateBrand,
  deleteBrand: brandActions.deleteBrand,
};

export default connect(mapStateToProps, mapDispatchToProps)(BrandCreateScreen);
