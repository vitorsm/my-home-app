import React from 'react';
import PropTypes from 'prop-types';
import { Container, ButtonText } from './style';
import colors from '../../configs/colors';
import fonts from '../../configs/fonts';

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
  style: PropTypes.shape(Object),
  disabled: PropTypes.bool,
};

RoundedButton.defaultProps = {
  backgroundColor: colors.primary.main,
  textColor: 'white',
  onPress: null,
  fontSize: fonts.content.size,
  style: null,
  disabled: false,
};

export default RoundedButton;
