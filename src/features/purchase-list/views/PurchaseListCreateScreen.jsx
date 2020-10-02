import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PlainTextFormItem from '../../../components/plain-text-form-item';
import strings from '../../../configs/strings';
import CRUDCreate from '../../../components/crud-create';
import * as purchaseListActions from '../../../redux/actions/purchaseListActions';
import AddProductComponent from '../../../components/add-products-component';

const products = [
  {
    id: 1,
    name: 'Test 1',
    product_type: {
      id: 1,
      name: 'Type 1',
    },
    quantity: 0,
    value: 0,
  }, {
    id: 2,
    name: 'Test 2',
    product_type: {
      id: 2,
      name: 'Type 2',
    },
    quantity: 0,
    value: 0,
  }, {
    id: 3,
    name: 'Test 3',
    product_type: {
      id: 1,
      name: 'Type 1',
    },
    quantity: 0,
    value: 0,
  }, {
    id: 4,
    name: 'Test 4',
    product_type: {
      id: 1,
      name: 'Type 3',
    },
    quantity: 0,
    value: 0,
  },
];

const PurchaseListCreateScreen = ({
  route, navigation, createdPurchaseList, updatedPurchaseList, createPurchaseList,
  updatePurchaseList, deletePurchaseList, deletedPurchaseList,
}) => {
  const [purchaseList, setPurchaseList] = useState();
  const [initialPurchaseList, setInitialPurchaseList] = useState();
  const [saveEnabled, setSaveEnabled] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const isObjComplete = (newPurchaseList) => !!(newPurchaseList && newPurchaseList.name);

  const hasChange = (newPurchaseList) => (!initialPurchaseList)
   || newPurchaseList.name !== initialPurchaseList.name;

  const prevUpdatedPurchaseListRef = useRef(updatedPurchaseList);
  const prevCreatedPurchaseListRef = useRef(createdPurchaseList);
  const prevDeletedPurchaseListRef = useRef(deletedPurchaseList);

  useEffect(() => {
    prevUpdatedPurchaseListRef.current = updatedPurchaseList;
    prevCreatedPurchaseListRef.current = createdPurchaseList;
    prevDeletedPurchaseListRef.current = createdPurchaseList;
  });

  const prevUpdatedPurchaseList = prevUpdatedPurchaseListRef.current;
  const prevCreatedPurchaseList = prevCreatedPurchaseListRef.current;
  const prevDeletedPurchaseList = prevDeletedPurchaseListRef.current;

  useEffect(() => {
    let initPurchaseList = { id: null, name: null, description: null };
    if (route.params.purchaseList) {
      initPurchaseList = { ...route.params.purchaseList };
    }
    setInitialPurchaseList(route.params.purchaseList);
    setIsEditing(!!(route.params.purchaseList && route.params.purchaseList.id));
    setPurchaseList(initPurchaseList);
  }, []);

  useEffect(() => {
    if ((prevCreatedPurchaseList !== createdPurchaseList && !createdPurchaseList.error)
    || (prevUpdatedPurchaseList !== updatedPurchaseList && !updatedPurchaseList.error)
    || (prevDeletedPurchaseList !== deletedPurchaseList && !deletedPurchaseList.error)) {
      navigation.reset({
        index: 0,
        routes: [{ name: 'PurchaseListList' }],
      });
    }
    setIsLoading(false);
  }, [createdPurchaseList, updatedPurchaseList, deletedPurchaseList]);

  const onCancelClick = () => {
    navigation.goBack();
  };

  const onSaveClick = () => {
    if (isEditing) {
      updatePurchaseList(purchaseList);
    } else {
      createPurchaseList(purchaseList);
    }
    setIsLoading(true);
  };

  const onDeleteOkClick = () => {
    deletePurchaseList(purchaseList.id);
    setIsLoading(true);
  };

  const onNameChange = (value) => {
    purchaseList.name = value;
    setPurchaseList(purchaseList);
    setSaveEnabled(isObjComplete(purchaseList) && hasChange(purchaseList));
  };

  const onPressAddProductButton = () => null;

  const renderIdComponent = () => {
    if (!isEditing) {
      return null;
    }

    return (
      <PlainTextFormItem labelText={strings('id')} onChangeText={null} defaultValue={purchaseList.id.toString()} />
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
      deleteTitle={strings('deletePurchaseListConfirmationTitle')}
      deleteMessage={strings('deletePurchaseListConfirmationMessage', { purchaseListName: purchaseList ? purchaseList.name : null })}
    >
      {renderIdComponent()}
      <PlainTextFormItem
        labelText={strings('name')}
        onChangeText={onNameChange}
        defaultValue={isEditing ? purchaseList.name : null}
        isRequired
        fieldRequiredErrorMessage={strings('purchaseListMissingNameFieldError')}
      />
      <AddProductComponent products={products} onPressAddProductButton={onPressAddProductButton} />
    </CRUDCreate>
  );
};

PurchaseListCreateScreen.propTypes = {
  navigation: PropTypes.shape({
    reset: PropTypes.func,
    goBack: PropTypes.func,
  }).isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      purchaseList: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string,
      }),
    }),
  }).isRequired,
  createPurchaseList: PropTypes.func.isRequired,
  updatePurchaseList: PropTypes.func.isRequired,
  deletePurchaseList: PropTypes.func.isRequired,
  createdPurchaseList: PropTypes.shape({
    id: PropTypes.number,
    error: PropTypes.bool,
  }),
  updatedPurchaseList: PropTypes.shape({
    id: PropTypes.number,
    error: PropTypes.bool,
  }),
  deletedPurchaseList: PropTypes.shape(Object),
};

PurchaseListCreateScreen.defaultProps = {
  createdPurchaseList: null,
  updatedPurchaseList: null,
  deletedPurchaseList: null,
};

function mapStateToProps({ createdPurchaseList, updatedPurchaseList, deletedPurchaseList }) {
  return { createdPurchaseList, updatedPurchaseList, deletedPurchaseList };
}

const mapDispatchToProps = {
  createPurchaseList: purchaseListActions.createPurchaseList,
  updatePurchaseList: purchaseListActions.updatePurchaseList,
  deletePurchaseList: purchaseListActions.deletePurchaseList,
};

export default connect(mapStateToProps, mapDispatchToProps)(PurchaseListCreateScreen);
