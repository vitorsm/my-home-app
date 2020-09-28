import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Animated, Easing } from 'react-native';
import {
  Container, LabelText, TextInput, DescriptionText,
} from './style';
import strings from '../../../configs/strings';

const PlainTextFormItem = ({
  labelText, onChangeText, defaultValue, isRequired, fieldRequiredErrorMessage, descriptionField, fieldValue,
}) => {
  const textLabelAnimatedValue = useRef(new Animated.Value(0)).current;
  const [textValue, setTextValue] = useState(defaultValue);
  const [isError, setIsError] = useState();

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

  useEffect(() => {
    setTextValue(fieldValue);
  }, [fieldValue]);

  useEffect(() => {
    setIsError(!!(isRequired && !defaultValue));
    if (!textValue) {
      setTextValue(defaultValue);
    }

    if (textValue || defaultValue) {
      startAnimationOnFocus();
    } else {
      startAnimationOnBlur();
    }
  }, [defaultValue]);

  const onChangeTextInternal = (value) => {
    setTextValue(value);
    setIsError(!!(isRequired && !value));
    if (onChangeText) {
      onChangeText(value);
    }
  };

  const renderDescriptionText = () => {
    if (isError) {
      return (
        <DescriptionText isError={isError}>{fieldRequiredErrorMessage}</DescriptionText>
      );
    }

    if (descriptionField) {
      return (
        <DescriptionText>{descriptionField}</DescriptionText>
      );
    }

    return null;
  };

  return (
    <Container>
      <LabelText
        style={{ top: positionTextLabelValue, fontSize: sizeTextLabelValue }}
        isError={isError}
      >
        {labelText}

      </LabelText>
      <TextInput
        onFocus={startAnimationOnFocus}
        onBlur={startAnimationOnBlur}
        onChangeText={onChangeTextInternal}
        defaultValue={defaultValue}
        isError={isError}
      />

      {renderDescriptionText()}
    </Container>
  );
};

PlainTextFormItem.propTypes = {
  labelText: PropTypes.string.isRequired,
  onChangeText: PropTypes.func,
  defaultValue: PropTypes.string,
  isRequired: PropTypes.bool,
  fieldRequiredErrorMessage: PropTypes.string,
  descriptionField: PropTypes.string,
  fieldValue: PropTypes.string,
};

PlainTextFormItem.defaultProps = {
  onChangeText: null,
  defaultValue: null,
  isRequired: false,
  fieldRequiredErrorMessage: strings('fieldRequiredErrorDefault'),
  descriptionField: null,
  fieldValue: null,
};

export default PlainTextFormItem;
