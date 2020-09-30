import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {
  Container, ProductText, ProductTypeText, TextContainer, QuantityText, ValueText, OpenActionButton,
  ContentContainer, ValuesTextContainer, ActionContent, RemoveContent, RemoveContentAction,
} from './styled';
import QuantityComponent from '../quantity-component';
import TextLink from '../text-link';
import MoneyInputComponent from '../money-input-component';

import colors from '../../configs/colors';

const ProductComponent = ({
  productName, quantity, value, productTypeName, onChangeQuantity, onChangeValue,
}) => {
  const [isActionClosed, setIsActionClosed] = useState(true);
  const [currentQuantity, setCurrentQuantity] = useState(quantity);
  const [currentValue, setCurrentValue] = useState(value);
  const [totalValue, setTotalValue] = useState(quantity * value);

  const onChangeQuantityInternal = (newQuantity) => {
    setCurrentQuantity(newQuantity);
    setTotalValue(newQuantity * currentValue);

    if (onChangeQuantity) {
      onChangeQuantity(value);
    }
  };

  const onChangeValueInternal = (newValue) => {
    setCurrentValue(newValue);
    setTotalValue(newValue * currentQuantity);

    if (onChangeValue) {
      onChangeValueInternal(newValue);
    }
  };

  const onPressContainer = () => {
    setIsActionClosed(!isActionClosed);
  };

  const renderActionComponent = () => {
    if (isActionClosed) {
      return null;
    }

    return (
      <>
        <ActionContent>
          <MoneyInputComponent initialValue={currentValue} onChangeValue={onChangeValueInternal} />
          <QuantityComponent
            initialValue={currentQuantity}
            onChangeValue={onChangeQuantityInternal}
          />
        </ActionContent>
        <RemoveContent>
          <RemoveContentAction>
            <TextLink marginBottom={0} marginTop={0}>Remover</TextLink>
          </RemoveContentAction>
        </RemoveContent>
      </>
    );
  };

  return (
    <Container onPress={onPressContainer}>
      <ContentContainer>
        <TextContainer>
          <ProductText>{productName}</ProductText>
          <ProductTypeText>{productTypeName}</ProductTypeText>
        </TextContainer>
        <ValueText>
          R$
          {' '}
          {totalValue.toFixed(2)}
        </ValueText>
        <ValuesTextContainer>
          <QuantityText>
            {currentQuantity}
          </QuantityText>
          <ProductTypeText>itens</ProductTypeText>
        </ValuesTextContainer>
      </ContentContainer>
      {renderActionComponent()}
      <OpenActionButton>
        <MaterialIcon name="keyboard-arrow-down" size={20} color={colors.text.light} />
      </OpenActionButton>
    </Container>
  );
};

ProductComponent.propTypes = {
  productName: PropTypes.string.isRequired,
  value: PropTypes.number,
  quantity: PropTypes.number,
  productTypeName: PropTypes.string,
  onChangeQuantity: PropTypes.func,
  onChangeValue: PropTypes.func,
};

ProductComponent.defaultProps = {
  value: 0,
  quantity: 0,
  productTypeName: null,
  onChangeQuantity: null,
  onChangeValue: null,
};

export default ProductComponent;
