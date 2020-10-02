import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PlainTextFormItem from '../../../components/plain-text-form-item';
import CRUDFilter from '../../../components/crud-filter';
import strings from '../../../configs/strings';

const PurchaseListFilterScreen = ({ navigation }) => {
  const [purchaseListName, setPurchaseListName] = useState();

  const onFilterButtonClick = () => {
    navigation.reset({ index: 0, routes: [{ name: 'PurchaseListList', params: { filter: { purchaseListName } } }] });
  };

  const onCancelButtonClick = () => {
    navigation.goBack();
  };

  const onChangePurchaseListName = (value) => {
    setPurchaseListName(value);
  };

  const onResetFilterClick = () => {
    setPurchaseListName(null);
  };

  const renderContent = () => (
    <>
      <PlainTextFormItem labelText={strings('name')} onChangeText={onChangePurchaseListName} value={purchaseListName} />
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

PurchaseListFilterScreen.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
    reset: PropTypes.func,
  }).isRequired,
};

export default PurchaseListFilterScreen;
