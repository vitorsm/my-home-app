import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Keyboard } from 'react-native';
import { Container, FilterFieldsContainer, FilterActionsContainer } from './style';
import RoundedButton from '../../../components/rounded-button';
import TextLink from '../../../components/text-link';
import PlainTextFormItem from '../../../components/plain-text-form-item';
import CRUDFilter from '../../../components/crud-filter';

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
      <PlainTextFormItem labelText="Nome" onChangeText={onChangeBrandName} />
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
