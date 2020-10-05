import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PlainTextFormItem from '../../../components/plain-text-form-item';
import CRUDFilter from '../../../components/crud-filter';
import strings from '../../../configs/strings';

const PurchaseFilterScreen = ({ navigation }) => {
  const [purchaseName, setPurchaseName] = useState();

  const onFilterButtonClick = () => {
    navigation.reset({ index: 0, routes: [{ name: 'PurchaseList', params: { filter: { purchaseName } } }] });
  };

  const onCancelButtonClick = () => {
    navigation.goBack();
  };

  const onChangePurchaseName = (value) => {
    setPurchaseName(value);
  };

  const onResetFilterClick = () => {
    setPurchaseName(null);
  };

  const renderContent = () => (
    <>
      <PlainTextFormItem labelText={strings('name')} onChangeText={onChangePurchaseName} value={purchaseName} />
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

PurchaseFilterScreen.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
    reset: PropTypes.func,
  }).isRequired,
};

export default PurchaseFilterScreen;
