import React from 'react';
import PropTypes from 'prop-types';
import {
  Container, ProductText, ProductTypeText, TextContainer,
} from './styled';
import QuantityComponent from '../quantity-component';

const ProductComponent = ({
  productName, quantity, value, productTypeName,
}) => {
  const a = 1;

  return (
    <Container>
      <TextContainer>
        <ProductText>{productName}</ProductText>
        <ProductTypeText>{productTypeName}</ProductTypeText>
      </TextContainer>
      <QuantityComponent />
    </Container>
  );
};

ProductComponent.propTypes = {
  productName: PropTypes.string.isRequired,
  value: PropTypes.number,
  quantity: PropTypes.number,
  productTypeName: PropTypes.string,
};

ProductComponent.defaultProps = {
  value: 0,
  quantity: 0,
  productTypeName: null,
};

export default ProductComponent;
