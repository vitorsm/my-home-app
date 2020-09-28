import React, { useRef, useEffect, useState } from 'react';
import {
  Animated, Easing, Dimensions, StyleSheet,
} from 'react-native';
import { BlurView } from '@react-native-community/blur';
import PropTypes from 'prop-types';
import { Container, Paper } from './style';
import MessageContainer from './MessageContainer';
import strings from '../../configs/strings';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    zIndex: 5,
  },
  blurView: {
    position: 'absolute', top: 0, left: 0, bottom: 0, right: 0,
  },
  content: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    zIndex: 10,
  },
});

const MessageDialog = ({
  messageData, elementIcon, contentElement, onPressOk, onPressCancel, okText, cancelText, show,
  onClose,
}) => {
  const [showScreen, setShowScreen] = useState(false);

  const paperMarginLeft = 30;
  const paperMarginTop = 50;
  const paperWidth = Dimensions.get('window').width - 2 * paperMarginLeft;

  const darkenAnimateValue = useRef(new Animated.Value(0)).current;
  const positionAnimateValue = useRef(new Animated.Value(0)).current;
  const opacityValue = darkenAnimateValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });
  const positionValue = positionAnimateValue.interpolate({
    inputRange: [0, 1],
    outputRange: [Dimensions.get('window').width, paperMarginTop],
  });

  const startAnimation = (startValue, endValue) => {
    darkenAnimateValue.setValue(startValue);
    positionAnimateValue.setValue(startValue);

    Animated.timing(darkenAnimateValue, {
      toValue: endValue,
      duration: 1000,
      useNativeDriver: false,
      easing: Easing.linear,
    }).start();
    Animated.timing(positionAnimateValue, {
      toValue: endValue,
      duration: 100,
      useNativeDriver: false,
      easing: Easing.elastic(1.2),
    }).start(() => {
      if (endValue < startValue) {
        setShowScreen(false);
      }
    });
  };

  const startAnimationUp = () => {
    startAnimation(0, 1);
  };

  const startAnimationDown = () => {
    startAnimation(1, 0);
  };

  useEffect(() => {
    if (messageData) {
      setShowScreen(show);
      startAnimationUp();
    }
  }, [messageData, show]);

  const onPressOkInternal = () => {
    startAnimationDown();
    if (onPressOk) {
      onPressOk();
    }
    if (onClose) {
      onClose();
    }
  };

  const onPressCancelInternal = () => {
    startAnimationDown();
    if (onPressCancel) {
      onPressCancel();
    }
    if (onClose) {
      onClose();
    }
  };

  if (!showScreen) {
    return null;
  }

  return (
    <Container>
      <Animated.View style={{ ...styles.container, opacity: opacityValue }}>
        <BlurView style={styles.blurView} reducedTransparencyFallbackColor="gray" blurType="light" blurAmount={3} />
      </Animated.View>

      <Animated.View style={{ ...styles.content, top: positionValue }}>
        <Paper top={paperMarginTop} left={paperMarginLeft} width={paperWidth}>
          <MessageContainer
            messageData={messageData}
            onPressOk={onPressOkInternal}
            elementIcon={elementIcon}
            contentElement={contentElement}
            onPressCancel={onPressCancelInternal}
            showCancel={!!onPressCancel}
            okText={okText}
            cancelText={cancelText}
          />
        </Paper>
      </Animated.View>
    </Container>
  );
};

MessageDialog.propTypes = {
  messageData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    message: PropTypes.string,
  }).isRequired,
  elementIcon: PropTypes.element,
  contentElement: PropTypes.element,
  onPressOk: PropTypes.func,
  onPressCancel: PropTypes.func,
  okText: PropTypes.string,
  cancelText: PropTypes.string,
  show: PropTypes.bool,
  onClose: PropTypes.func,
};

MessageDialog.defaultProps = {
  elementIcon: null,
  contentElement: null,
  onPressOk: null,
  onPressCancel: null,
  okText: strings('ok'),
  cancelText: strings('cancel'),
  show: true,
  onClose: null,
};

export default MessageDialog;
