import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PlainTextFormItem from '../../../components/plain-text-form-item';
import strings from '../../../configs/strings';
import CRUDCreate from '../../../components/crud-create';
import * as purchaseListActions from '../../../redux/actions/purchaseListActions';
import AddProductComponent from '../../../components/add-products-component';
import { ProductListContainer } from './style';
import { removeItemFromList, getItemFromList } from '../../../utils/arrayUtils';

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

  const productsHasChange = (product) => {
    const initialProduct = getItemFromList(initialPurchaseList.products, product.id);

    return (!initialProduct)
   || initialProduct.quantity !== product.quantity || initialProduct.value !== product.value;
  };

  const hasChange = (newPurchaseList) => {
    if (!initialPurchaseList || !initialPurchaseList.id) {
      return true;
    }

    if (initialPurchaseList.products.length !== newPurchaseList.products.length) {
      return true;
    }

    if (newPurchaseList.name !== initialPurchaseList.name) {
      return true;
    }

    if (newPurchaseList.products.some(productsHasChange)) {
      return true;
    }

    return false;
  };

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
    let initPurchaseList = {
      id: null, name: null, description: null, products: [],
    };

    if (route.params.purchaseList) {
      initPurchaseList = { ...route.params.purchaseList };
    }

    if (route.params.newSelectedProduct) {
      if (!initPurchaseList.products) {
        initPurchaseList.products = [];
      }
      if (!initPurchaseList.products.some((p) => p.id === route.params.newSelectedProduct.id)) {
        initPurchaseList.products.push(route.params.newSelectedProduct);
        setSaveEnabled(isObjComplete(initPurchaseList) && hasChange(initPurchaseList));
      }
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

  const onChangeProductQuantity = (product, quantity) => {
    const selectedProduct = purchaseList.products.filter((p) => p.id === product.id)[0];
    if (selectedProduct) {
      selectedProduct.quantity = quantity;
    }

    setPurchaseList(purchaseList);
    setSaveEnabled(isObjComplete(purchaseList) && hasChange(purchaseList));
  };

  const onChangeProductValue = (product, value) => {
    const selectedProduct = purchaseList.products.filter((p) => p.id === product.id)[0];
    if (selectedProduct) {
      selectedProduct.value = value;
    }

    setPurchaseList(purchaseList);
    setSaveEnabled(isObjComplete(purchaseList) && hasChange(purchaseList));
  };

  const onPressRemoveButton = (product) => {
    removeItemFromList(purchaseList.products, product);
    setPurchaseList({ ...purchaseList });
    setSaveEnabled(isObjComplete(purchaseList) && hasChange(purchaseList));
  };

  const getRoutesToReturn = () => [{ name: 'Home' }, { name: 'PurchaseList' }, {
    name: 'PurchaseList',
    state: {
      routes: [{
        name: 'PurchaseListCreate',
        params: {
          purchaseList,
        },
      }],
    },
  }];

  const onPressAddProductButton = () => {
    navigation.navigate('Product', {
      screen: 'ProductSelect',
      params: {
        routesToReturn: getRoutesToReturn(),
        excludeProducts: purchaseList.products,
      },
    });
  };

  const renderIdComponent = () => {
    if (!isEditing) {
      return null;
    }

    return (
      <PlainTextFormItem labelText={strings('id')} onChangeText={null} defaultValue={purchaseList.id.toString()} />
    );
  };

  const renderFields = () => {
    if (!purchaseList) {
      return <></>;
    }

    return (
      <ProductListContainer nestedScrollEnabled>
        {renderIdComponent()}
        <PlainTextFormItem
          labelText={strings('name')}
          onChangeText={onNameChange}
          defaultValue={purchaseList.name}
          isRequired
          fieldRequiredErrorMessage={strings('purchaseListMissingNameFieldError')}
        />
        <AddProductComponent
          products={purchaseList.products}
          onPressAddProductButton={onPressAddProductButton}
          onChangeProductQuantity={onChangeProductQuantity}
          onChangeProductValue={onChangeProductValue}
          onPressRemoveButton={onPressRemoveButton}
        />
      </ProductListContainer>
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
      {renderFields()}
    </CRUDCreate>
  );
};

PurchaseListCreateScreen.propTypes = {
  navigation: PropTypes.shape({
    reset: PropTypes.func,
    goBack: PropTypes.func,
    navigate: PropTypes.func,
  }).isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      purchaseList: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        description: PropTypes.string,
      }),
      newSelectedProduct: PropTypes.shape(Object),
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
