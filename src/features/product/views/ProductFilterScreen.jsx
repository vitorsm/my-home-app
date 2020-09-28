import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PlainTextFormItem from '../../../components/plain-text-form-item';
import CRUDFilter from '../../../components/crud-filter';
import strings from '../../../configs/strings';

const ProductFilterScreen = ({ navigation }) => {
  const [productName, setProductName] = useState();

  const onFilterButtonClick = () => {
    navigation.reset({ index: 0, routes: [{ name: 'ProductList', params: { filter: { productName } } }] });
  };

  const onCancelButtonClick = () => {
    navigation.goBack();
  };

  const onChangeProductName = (value) => {
    setProductName(value);
  };

  const onResetFilterClick = () => {
    setProductName(null);
  };

  const renderContent = () => (
    <>
      <PlainTextFormItem labelText={strings('name')} onChangeText={onChangeProductName} value={productName} />
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

ProductFilterScreen.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
    reset: PropTypes.func,
  }).isRequired,
};

export default ProductFilterScreen;
