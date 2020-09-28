import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PlainTextFormItem from '../../../components/plain-text-form-item';
import CRUDFilter from '../../../components/crud-filter';
import strings from '../../../configs/strings';

const ProductTypeFilterScreen = ({ navigation }) => {
  const [productTypeName, setProductTypeName] = useState();

  const onFilterButtonClick = () => {
    navigation.reset({ index: 0, routes: [{ name: 'ProductTypeList', params: { filter: { productTypeName } } }] });
  };

  const onCancelButtonClick = () => {
    navigation.goBack();
  };

  const onChangeProductTypeName = (value) => {
    setProductTypeName(value);
  };

  const onResetFilterClick = () => {
    setProductTypeName(null);
  };

  const renderContent = () => (
    <>
      <PlainTextFormItem labelText={strings('name')} onChangeText={onChangeProductTypeName} value={productTypeName} />
    </>
  );

  return (
    <CRUDFilter
      content={renderContent()}
      onFilterClick={onFilterButtonClick}
      onCancelClick={onCancelButtonClick}
      onResetClick={onResetFilterClick}
    />
  );
};

ProductTypeFilterScreen.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
    reset: PropTypes.func,
  }).isRequired,
};

export default ProductTypeFilterScreen;
