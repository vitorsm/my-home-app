import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Container, MoneyInput, SymbolText } from './style';

const MoneyInputComponent = ({ initialValue, onChangeValue }) => {
  const [inputValue, setInputValue] = useState(initialValue.toString());

  const onChangeInput = (value) => {
    let number = 0;
    let inputValueToSet = null;
    const processedValue = value.replace(',', '.');

    if (processedValue.charAt(processedValue.length - 1) === '.') {
      inputValueToSet = processedValue;
    }

    if (!Number.isNaN(processedValue)) {
      number = parseFloat(processedValue);
    }

    if (!inputValueToSet) {
      inputValueToSet = number.toString();
    }

    setInputValue(!processedValue ? '' : inputValueToSet);
    if (onChangeValue) {
      onChangeValue(number);
    }
  };

  return (
    <Container>
      <SymbolText>R$</SymbolText>
      <MoneyInput keyboardType="numeric" onChangeText={onChangeInput} value={inputValue} />
    </Container>
  );
};

MoneyInputComponent.propTypes = {
  initialValue: PropTypes.number,
  onChangeValue: PropTypes.func,
};

MoneyInputComponent.defaultProps = {
  initialValue: 0,
  onChangeValue: null,
};

export default MoneyInputComponent;
