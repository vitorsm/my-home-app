import React, { useState } from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import { Container, ActionButton, QuantityInput } from './style';
import colors from '../../configs/colors';
import { ProductTypeText } from '../product-component/styled';

const QuantityComponent = ({ initialValue, onChangeValue }) => {
  const [numericValue, setNumericValue] = useState(initialValue);
  const [inputValue, setInputValue] = useState(initialValue.toString());

  const onChangeText = (value) => {
    let number = 0;
    if (!isNaN(value)) {
      number = parseInt(value);
    }
    setNumericValue(number);
    setInputValue(!value ? '' : number.toString());
    if (onChangeValue) {
      onChangeValue(number);
    }
  };

  const onPressAddButton = () => {
    const number = numericValue + 1;
    setNumericValue(number);
    setInputValue(number.toString());
    if (onChangeValue) {
      onChangeValue(number);
    }
  };

  const onPressRemoveButton = () => {
    let number = 0;
    if (numericValue > 0) {
      number = numericValue - 1;
    }
    setNumericValue(number);
    setInputValue(number.toString());
    if (onChangeValue) {
      onChangeValue(number);
    }
  };

  return (
    <Container>
      <ActionButton>
        <MaterialIcon name="remove" color={colors.error.main} size={20} onPress={onPressRemoveButton} />
      </ActionButton>
      <QuantityInput keyboardType="numeric" onChangeText={onChangeText} value={inputValue} />
      <ActionButton>
        <MaterialIcon name="add" color={colors.primary.main} size={20} onPress={onPressAddButton} />
      </ActionButton>
    </Container>
  );
};

QuantityComponent.propTypes = {
  initialValue: PropTypes.number,
  onChangeValue: PropTypes.func,
};

QuantityComponent.defaultProps = {
  initialValue: 0,
  onChangeValue: null,
};

export default QuantityComponent;
