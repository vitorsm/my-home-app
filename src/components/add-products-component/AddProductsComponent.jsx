import React from 'react';
import PropTypes from 'prop-types';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {
  Container, ProductListContainer, TitleContainer, Title, AddButton, NoDataContainer, NoDataText,
} from './style';
import strings from '../../configs/strings';
import ProductComponent from '../product-component';
import colors from '../../configs/colors';

const AddProductsComponent = ({
  products, onPressAddProductButton, onChangeProductQuantity, onChangeProductValue,
  onPressRemoveButton,
}) => {
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

  const renderProducts = () => {
    if (!products || products.lenght) {
      return (
        <NoDataContainer>
          <AwesomeIcon name="inbox" color={colors.primary.light} size={100} />
          <NoDataText>{strings('noProductFound')}</NoDataText>
        </NoDataContainer>
      );
    }

    return products.map((product) => (
      <ProductComponent
        key={`prouduct-component-${product.id}`}
        productName={product.name}
        quantity={product.quantity}
        value={product.value}
        productTypeName={product.product_type ? product.product_type.name : null}
        onChangeQuantity={(quantity) => onChangeProductQuantityInternal(product, quantity)}
        onChangeValue={(value) => onChangeProductValueInternal(product, value)}
        onPressRemoveButton={() => onPressRemoveButtonInternal(product)}
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

      <ProductListContainer nestedScrollEnabled>
        {renderProducts()}
      </ProductListContainer>
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
};

AddProductsComponent.defaultProps = {
  products: null,
  onPressAddProductButton: null,
  onChangeProductQuantity: null,
  onChangeProductValue: null,
  onPressRemoveButton: null,
};

export default AddProductsComponent;
