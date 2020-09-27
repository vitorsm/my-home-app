import React, { useEffect, useRef } from 'react';
import { Animated, Easing } from 'react-native';
import PropTypes from 'prop-types';
import { Container, Circular } from './style';

const CircularProgress = ({
  size, borderSize, color, borderColor,
}) => {
  const processedBorderSize = borderSize || size * 0.05;

  const rotateAnimateValue = useRef(new Animated.Value(0)).current;
  const spin = rotateAnimateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  useEffect(() => {
    Animated.loop(Animated.timing(rotateAnimateValue, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
      easing: Easing.linear,
    })).start();
  }, [rotateAnimateValue]);

  return (
    <Container>
      <Animated.View style={{ transform: [{ rotate: spin }] }}>
        <Circular
          size={size}
          borderSize={processedBorderSize}
          color={color}
          borderColor={borderColor}
        />
      </Animated.View>
    </Container>
  );
};

CircularProgress.propTypes = {
  size: PropTypes.number,
  borderSize: PropTypes.number,
  color: PropTypes.string,
  borderColor: PropTypes.string,
};

CircularProgress.defaultProps = {
  size: 50,
  color: 'white',
  borderColor: 'transparent',
  borderSize: null,
};

export default CircularProgress;
