import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PlainTextFormItem from '../../../components/plain-text-form-item';
import CRUDFilter from '../../../components/crud-filter';
import strings from '../../../configs/strings';

const BrandFilterScreen = ({ navigation }) => {
  const [brandName, setBrandName] = useState();

  const onFilterButtonClick = () => {
    navigation.reset({ index: 0, routes: [{ name: 'BrandList', params: { filter: { brandName } } }] });
  };

  const onCancelButtonClick = () => {
    navigation.goBack();
  };

  const onChangeBrandName = (value) => {
    setBrandName(value);
  };

  const onResetFilterClick = (value) => {

  };

  const renderContent = () => (
    <>
      <PlainTextFormItem labelText={strings('name')} onChangeText={onChangeBrandName} />
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

BrandFilterScreen.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
    reset: PropTypes.func,
  }).isRequired,
};

export default BrandFilterScreen;
