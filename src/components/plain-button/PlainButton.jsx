import React from 'react';
import PropTypes from 'prop-types';
import { colors } from '../../configs/colors';

import { Container, TextButton } from './style';

const PlainButton = ({
  backgroundColor, textColor, fontSize, children, onPress, disabled,
}) => (
  <Container backgroundColor={backgroundColor} onPress={onPress} disabled={disabled}>
    <TextButton color={textColor} fontSize={fontSize}>{children}</TextButton>
  </Container>
);

PlainButton.propTypes = {
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  fontSize: PropTypes.number,
  children: PropTypes.elementType.isRequired,
  onPress: PropTypes.func,
  disabled: PropTypes.bool,
};

PlainButton.defaultProps = {
  backgroundColor: colors.primary.main,
  textColor: 'white',
  fontSize: 20,
  onPress: null,
  disabled: false,
};

export default PlainButton;
