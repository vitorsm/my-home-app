import React from 'react';
import { Container, ProductListContainer } from './style';
import ProductComponent from '../../../components/product-component';

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

const PurchaseList = () => {
  const renderProducts = () => {
    if (!products || !products.length) {
      return null;
    }

    return products.map((product) => (
      <ProductComponent
        productName={product.name}
        quantity={product.quantity}
        value={product.value}
        productTypeName={product.product_type.name}
      />
    ));
  };

  return (
    <Container>
      <ProductListContainer>
        {renderProducts()}
      </ProductListContainer>
    </Container>
  );
};

export default PurchaseList;
