import React from 'react';
import PropTypes from 'prop-types';
import { Container, ButtonText } from './style';
import { colors } from '../../configs/colors';

const RoundedButton = ({
  backgroundColor, textColor, children, onPress, fontSize, style, disabled,
}) => (
  <Container
    backgroundColor={backgroundColor}
    onPress={onPress}
    style={{ ...style }}
    disabled={disabled}
  >
    <ButtonText textColor={textColor} fontSize={fontSize}>{children}</ButtonText>
  </Container>
);

RoundedButton.propTypes = {
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  children: PropTypes.elementType.isRequired,
  onPress: PropTypes.func,
  fontSize: PropTypes.number,
  style: PropTypes.shape(),
  disabled: PropTypes.bool,
};

RoundedButton.defaultProps = {
  backgroundColor: colors.primary.main,
  textColor: 'white',
  onPress: null,
  fontSize: 16,
  style: null,
  disabled: false,
};

export default RoundedButton;
