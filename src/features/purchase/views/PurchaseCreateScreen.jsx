import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PlainTextFormItem from '../../../components/plain-text-form-item';
import strings from '../../../configs/strings';
import CRUDCreate from '../../../components/crud-create';
import * as purchaseActions from '../../../redux/actions/purchaseActions';
import AddProductComponent from '../../../components/add-products-component';
import SelectComponent from '../../../components/select-component';
import { ProductListContainer } from './style';
import { removeItemFromList, getItemFromList } from '../../../utils/arrayUtils';

const PurchaseCreateScreen = ({
  route, navigation, createdPurchase, updatedPurchase, createPurchase,
  updatePurchase, deletePurchase, deletedPurchase,
}) => {
  const [purchase, setPurchase] = useState();
  const [initialPurchase, setInitialPurchase] = useState();
  const [saveEnabled, setSaveEnabled] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const isObjComplete = (newPurchase) => !!(newPurchase && newPurchase.name);

  const productsHasChange = (product, selectedInitialPurchase) => {
    const initialProduct = getItemFromList(selectedInitialPurchase.products, product.id);

    return (!initialProduct)
   || initialProduct.quantity !== product.quantity || initialProduct.value !== product.value;
  };

  const hasChange = (newPurchase, initPurchase) => {
    const selectedInitialPurchase = initPurchase || initialPurchase;

    if (!selectedInitialPurchase || !selectedInitialPurchase.id) {
      return true;
    }

    if (selectedInitialPurchase.products.length !== newPurchase.products.length) {
      return true;
    }

    if (newPurchase.name !== selectedInitialPurchase.name) {
      return true;
    }

    if (newPurchase.products.some(productsHasChange, selectedInitialPurchase)) {
      return true;
    }

    return false;
  };

  const prevUpdatedPurchaseRef = useRef(updatedPurchase);
  const prevCreatedPurchaseRef = useRef(createdPurchase);
  const prevDeletedPurchaseRef = useRef(deletedPurchase);

  useEffect(() => {
    prevUpdatedPurchaseRef.current = updatedPurchase;
    prevCreatedPurchaseRef.current = createdPurchase;
    prevDeletedPurchaseRef.current = createdPurchase;
  });

  const prevUpdatedPurchase = prevUpdatedPurchaseRef.current;
  const prevCreatedPurchase = prevCreatedPurchaseRef.current;
  const prevDeletedPurchase = prevDeletedPurchaseRef.current;

  const mergeProductsWithPurchaseList = (alreadyProducts, newProducts, onlyPlannedProduct) => {
    const newProductIds = newProducts ? newProducts.map((p) => p.id) : [];
    let responseProducts = [];

    if (alreadyProducts) {
      responseProducts = alreadyProducts
        .filter((product) => !onlyPlannedProduct
         || (newProductIds.includes(product.id) || product.quantity));
    }

    if (newProducts) {
      newProducts.forEach((product) => {
        let newProduct = getItemFromList(responseProducts, product.id);

        if (!newProduct) {
          newProduct = { ...product };
          newProduct.quantity = 0;
          newProduct.value = 0;
          responseProducts.push(newProduct);
        }

        newProduct.isPlanned = true;
        newProduct.plannedQuantity = product.quantity;
        newProduct.plannedValue = product.value;
      });
    }

    return responseProducts;
  };

  useEffect(() => {
    let purchaseToSet = {
      id: null, name: null, description: null, products: [],
    };
    const initPurchase = route.params.initPurchase
      ? route.params.initPurchase : route.params.purchase;

    if (route.params.purchase) {
      purchaseToSet = { ...route.params.purchase };
    }

    if (route.params.newSelectedProduct) {
      if (!purchaseToSet.products) {
        purchaseToSet.products = [];
      }
      if (!purchaseToSet.products.some((p) => p.id === route.params.newSelectedProduct.id)) {
        purchaseToSet.products.push({ ...route.params.newSelectedProduct, quantity: 0, value: 0 });
        setSaveEnabled(isObjComplete(purchaseToSet)
         && hasChange(purchaseToSet, initPurchase));
      }
    }

    if (route.params.newSelectedPurchaseList) {
      purchaseToSet.purchase_list = route.params.newSelectedPurchaseList;
      purchaseToSet.products = mergeProductsWithPurchaseList(purchaseToSet.products,
        route.params.newSelectedPurchaseList.products, true);
    } else if (purchaseToSet.purchase_list) {
      purchaseToSet.products = mergeProductsWithPurchaseList(purchaseToSet.products,
        purchaseToSet.purchase_list.products, false);
    }

    setInitialPurchase(initPurchase);
    setIsEditing(!!(route.params.purchase && route.params.purchase.id));
    setPurchase(purchaseToSet);
  }, []);

  useEffect(() => {
    if ((prevCreatedPurchase !== createdPurchase && !createdPurchase.error)
    || (prevUpdatedPurchase !== updatedPurchase && !updatedPurchase.error)
    || (prevDeletedPurchase !== deletedPurchase && !deletedPurchase.error)) {
      navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }, { name: 'Purchase' }],
      });
    }
    setIsLoading(false);
  }, [createdPurchase, updatedPurchase, deletedPurchase]);

  const onCancelClick = () => {
    navigation.goBack();
  };

  const onSaveClick = () => {
    if (isEditing) {
      updatePurchase(purchase);
    } else {
      createPurchase(purchase);
    }
    setIsLoading(true);
  };

  const onDeleteOkClick = () => {
    deletePurchase(purchase.id);
    setIsLoading(true);
  };

  const onNameChange = (value) => {
    purchase.name = value;
    setPurchase(purchase);
    setSaveEnabled(isObjComplete(purchase) && hasChange(purchase));
  };

  const onOpenProduct = (product) => {
    const selectedProduct = getItemFromList(purchase.products, product.id);
    if (selectedProduct) {
      selectedProduct.isEditing = true;
    }

    setPurchase({ ...purchase });
  };

  const onCloseProduct = (product) => {
    const selectedProduct = getItemFromList(purchase.products, product.id);
    if (selectedProduct) {
      selectedProduct.isEditing = false;
    }

    setPurchase({ ...purchase });
  };

  const onChangeProductQuantity = (product, quantity) => {
    const selectedProduct = getItemFromList(purchase.products, product.id);
    if (selectedProduct) {
      selectedProduct.quantity = quantity;
    }

    setPurchase({ ...purchase });
    setSaveEnabled(isObjComplete(purchase) && hasChange(purchase));
  };

  const onChangeProductValue = (product, value) => {
    const selectedProduct = getItemFromList(purchase.products, product.id);
    if (selectedProduct) {
      selectedProduct.value = value;
    }

    setPurchase(purchase);
    setSaveEnabled(isObjComplete(purchase) && hasChange(purchase));
  };

  const getRoutesToReturn = () => [{ name: 'Home' }, { name: 'Purchase' }, {
    name: 'Purchase',
    state: {
      routes: [{
        name: 'PurchaseCreate',
        params: {
          purchase,
          initialPurchase,
        },
      }],
    },
  }];

  const onPressRemoveButton = (product) => {
    removeItemFromList(purchase.products, product);
    setPurchase({ ...purchase });
    setSaveEnabled(isObjComplete(purchase) && hasChange(purchase));
  };

  const onSelectPurchaseListClick = () => {
    navigation.navigate('PurchaseList', {
      screen: 'SelectPurchaseList',
      params: {
        routesToReturn: getRoutesToReturn(),
        selectedPurchaseList: purchase.purchase_list,
      },
    });
  };

  const onClearPurchaseList = () => {
    purchase.purchase_list = null;
    setPurchase({ ...purchase });
  };

  const onPressAddProductButton = () => {
    navigation.navigate('Product', {
      screen: 'ProductSelect',
      params: {
        routesToReturn: getRoutesToReturn(),
        excludeProducts: purchase.products,
      },
    });
  };

  const renderIdComponent = () => {
    if (!isEditing) {
      return null;
    }

    return (
      <PlainTextFormItem labelText={strings('id')} onChangeText={null} defaultValue={purchase.id.toString()} />
    );
  };

  const renderFields = () => {
    if (!purchase) {
      return <></>;
    }

    return (
      <ProductListContainer nestedScrollEnabled>
        {renderIdComponent()}
        <PlainTextFormItem
          labelText={strings('name')}
          onChangeText={onNameChange}
          defaultValue={purchase.name}
          fieldRequiredErrorMessage={strings('purchaseMissingNameFieldError')}
        />
        <SelectComponent
          style={{ paddingLeft: 20, paddingRight: 20 }}
          label={strings('purchaseList')}
          onPress={onSelectPurchaseListClick}
          onPressClear={onClearPurchaseList}
          selectedValue={purchase && purchase.purchase_list
            ? purchase.purchase_list.name : null}
        />
        <AddProductComponent
          products={purchase.products}
          onPressAddProductButton={onPressAddProductButton}
          onChangeProductQuantity={onChangeProductQuantity}
          onChangeProductValue={onChangeProductValue}
          onPressRemoveButton={onPressRemoveButton}
          onOpenProduct={onOpenProduct}
          onCloseProduct={onCloseProduct}
          showFilter
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
      deleteTitle={strings('deletePurchaseConfirmationTitle')}
      deleteMessage={strings('deletePurchaseConfirmationMessage', { purchaseName: purchase ? purchase.name : null })}
    >
      {renderFields()}
    </CRUDCreate>
  );
};

PurchaseCreateScreen.propTypes = {
  navigation: PropTypes.shape({
    reset: PropTypes.func,
    goBack: PropTypes.func,
    navigate: PropTypes.func,
  }).isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      purchase: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        description: PropTypes.string,
      }),
      newSelectedProduct: PropTypes.shape(Object),
      newSelectedPurchaseList: PropTypes.shape(Object),
      initPurchase: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        products: PropTypes.arrayOf(Object),
      }),
    }),
  }).isRequired,
  createPurchase: PropTypes.func.isRequired,
  updatePurchase: PropTypes.func.isRequired,
  deletePurchase: PropTypes.func.isRequired,
  createdPurchase: PropTypes.shape({
    id: PropTypes.number,
    error: PropTypes.bool,
  }),
  updatedPurchase: PropTypes.shape({
    id: PropTypes.number,
    error: PropTypes.bool,
  }),
  deletedPurchase: PropTypes.shape(Object),
};

PurchaseCreateScreen.defaultProps = {
  createdPurchase: null,
  updatedPurchase: null,
  deletedPurchase: null,
};

function mapStateToProps({ createdPurchase, updatedPurchase, deletedPurchase }) {
  return { createdPurchase, updatedPurchase, deletedPurchase };
}

const mapDispatchToProps = {
  createPurchase: purchaseActions.createPurchase,
  updatePurchase: purchaseActions.updatePurchase,
  deletePurchase: purchaseActions.deletePurchase,
};

export default connect(mapStateToProps, mapDispatchToProps)(PurchaseCreateScreen);
