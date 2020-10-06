import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import {
  Container, ProductListContainer, TitleContainer, Title, AddButton, NoDataContainer, NoDataText,
  FilterContainer, FilterContainerScroll, ProductScrollContainer,
} from './style';
import strings from '../../configs/strings';
import ProductComponent from '../product-component';
import colors from '../../configs/colors';
import FilterItem from '../filter-item';

const AddProductsComponent = ({
  products, onPressAddProductButton, onChangeProductQuantity, onChangeProductValue,
  onPressRemoveButton, onOpenProduct, onCloseProduct, showFilter,
}) => {
  const [plannedSelected, setPlannedSelected] = useState(false);
  const [notPurchasedSelected, setNotPurchasedSelected] = useState(false);

  const onPressAdd = () => {
    if (onPressAddProductButton) {
      onPressAddProductButton();
    }
  };

  const onChangeProductQuantityInternal = (product, quantity) => {
    if (onChangeProductQuantity) {
      onChangeProductQuantity(product, quantity);
    }
  };

  const onChangeProductValueInternal = (product, value) => {
    if (onChangeProductValue) {
      onChangeProductValue(product, value);
    }
  };

  const onPressRemoveButtonInternal = (product) => {
    if (onPressRemoveButton) {
      onPressRemoveButton(product);
    }
  };

  const onPressPlannedButton = () => {
    if (plannedSelected) {
      setPlannedSelected(false);
    } else {
      setPlannedSelected(true);
      setNotPurchasedSelected(false);
    }
  };

  const onPressNotPurchased = () => {
    if (notPurchasedSelected) {
      setNotPurchasedSelected(false);
    } else {
      setPlannedSelected(false);
      setNotPurchasedSelected(true);
    }
  };

  const filterProduct = (product) => {
    if (!plannedSelected && !notPurchasedSelected) {
      return true;
    }

    return (plannedSelected && product.isPlanned)
    || (notPurchasedSelected && (!product.quantity || product.isEditing));
  };

  const onOpenProductInternal = (product) => {
    if (onOpenProduct) {
      onOpenProduct(product);
    }
  };

  const onCloseProductInternal = (product) => {
    if (onCloseProduct) {
      onCloseProduct(product);
    }
  };

  const renderFilters = () => {
    if (!showFilter) {
      return null;
    }

    return (
      <FilterContainerScroll horizontal>
        <FilterContainer>
          <FilterItem
            selected={plannedSelected}
            onPress={onPressPlannedButton}
            icon={(
              <AwesomeIcon
                name="clipboard-check"
                size={15}
                color={plannedSelected ? colors.primary.main : colors.text.main}
              />
)}
          >
            {strings('planned')}
          </FilterItem>

          <FilterItem
            selected={notPurchasedSelected}
            onPress={onPressNotPurchased}
          >
            {strings('notPurchased')}
          </FilterItem>
        </FilterContainer>
      </FilterContainerScroll>
    );
  };

  const renderProducts = () => {
    if (!products || products.lenght) {
      return (
        <NoDataContainer>
          <AwesomeIcon name="inbox" color={colors.primary.light} size={100} />
          <NoDataText>{strings('noProductFound')}</NoDataText>
        </NoDataContainer>
      );
    }

    return products.filter(filterProduct).map((product) => (
      <ProductComponent
        key={`prouduct-component-${product.id}`}
        productName={product.name}
        quantity={product.quantity}
        plannedQuantity={product.plannedQuantity}
        value={product.value}
        productTypeName={product.product_type ? product.product_type.name : null}
        onChangeQuantity={(quantity) => onChangeProductQuantityInternal(product, quantity)}
        onChangeValue={(value) => onChangeProductValueInternal(product, value)}
        onPressRemoveButton={() => onPressRemoveButtonInternal(product)}
        onOpen={() => onOpenProductInternal(product)}
        onClose={() => onCloseProductInternal(product)}
      />
    ));
  };

  return (
    <Container>
      <TitleContainer>
        <Title>{strings('products')}</Title>
        <AddButton onPress={onPressAdd}>
          <MaterialIcon name="add" color="#FFF" size={20} />
        </AddButton>
      </TitleContainer>

      {renderFilters()}

      <ProductScrollContainer>
        <ProductListContainer nestedScrollEnabled>
          {renderProducts()}
        </ProductListContainer>
      </ProductScrollContainer>
    </Container>
  );
};

AddProductsComponent.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    product_type: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
    quantity: PropTypes.number,
    value: PropTypes.number,
  })),
  onPressAddProductButton: PropTypes.func,
  onChangeProductQuantity: PropTypes.func,
  onChangeProductValue: PropTypes.func,
  onPressRemoveButton: PropTypes.func,
  onOpenProduct: PropTypes.func,
  onCloseProduct: PropTypes.func,
  showFilter: PropTypes.bool,
};

AddProductsComponent.defaultProps = {
  products: null,
  onPressAddProductButton: null,
  onChangeProductQuantity: null,
  onChangeProductValue: null,
  onPressRemoveButton: null,
  onOpenProduct: null,
  onCloseProduct: null,
  showFilter: false,
};

export default AddProductsComponent;
