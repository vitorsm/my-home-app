import React from 'react';
import PropTypes from 'prop-types';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {
  Container, ProductListContainer, TitleContainer, Title, AddButton,
} from './style';
import strings from '../../configs/strings';
import ProductComponent from '../product-component';

const AddProductsComponent = ({ products, onPressAddProductButton }) => {
  const onPressAdd = () => {
    if (onPressAddProductButton) {
      onPressAddProductButton();
    }
  };

  const renderProducts = () => {
    if (!products || products.lenght) {
      return null;
    }

    return products.map((product) => (
      <ProductComponent
        key={`prouduct-component-${product.id}`}
        productName={product.name}
        quantity={product.quantity}
        value={product.value}
        productTypeName={product.product_type.name}
      />
    ));
  };

  return (
    <Container>
      <TitleContainer>
        <Title>{strings('products')}</Title>
        <AddButton>
          <MaterialIcon name="add" color="#FFF" size={20} />
        </AddButton>
      </TitleContainer>

      <ProductListContainer>
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
};

AddProductsComponent.defaultProps = {
  products: null,
  onPressAddProductButton: null,
};

export default AddProductsComponent;
