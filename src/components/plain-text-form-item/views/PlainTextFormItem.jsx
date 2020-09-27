import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Animated, Easing } from 'react-native';
import { Container, LabelText, TextInput } from './style';

const PlainTextFormItem = ({ labelText, onChangeText, defaultValue }) => {
  const textLabelAnimatedValue = useRef(new Animated.Value(0)).current;
  const [textValue, setTextValue] = useState(defaultValue);

  const sizeTextLabelValue = textLabelAnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [18, 15],
  });
  const positionTextLabelValue = textLabelAnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [36, 10],
  });

  const startAnimation = (start, end) => {
    textLabelAnimatedValue.setValue(start);
    Animated.timing(textLabelAnimatedValue, {
      toValue: end,
      duration: 100,
      useNativeDriver: false,
      easing: Easing.linear,
    }).start();
  };

  const startAnimationOnBlur = () => {
    const end = textValue ? 1 : 0;
    startAnimation(1, end);
  };

  const startAnimationOnFocus = () => {
    const start = textValue ? 1 : 0;
    startAnimation(start, 1);
  };

  const onChangeTextInternal = (value) => {
    setTextValue(value);
    if (onChangeText) {
      onChangeText(value);
    }
  };

  return (
    <Container>
      <LabelText
        style={{ top: positionTextLabelValue, fontSize: sizeTextLabelValue }}
      >
        {labelText}

      </LabelText>
      <TextInput
        onFocus={startAnimationOnFocus}
        onBlur={startAnimationOnBlur}
        onChangeText={onChangeTextInternal}
        defaultValue={defaultValue}
      />
    </Container>
  );
};

PlainTextFormItem.propTypes = {
  labelText: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  defaultValue: PropTypes.string,
};

PlainTextFormItem.defaultProps = {
  defaultValue: null,
};

export default PlainTextFormItem;
