import React from 'react';
import PropTypes from 'prop-types';
import { Container, Title, Description } from './style';

const ActionBox = ({
  title, icon, onPress, description,
}) => {
  const onPressInternal = () => {
    if (onPress) {
      onPress();
    }
  };

  const renderDescription = () => {
    if (!description) {
      return null;
    }

    return (
      <Description>{description}</Description>
    );
  };

  return (
    <Container onPress={onPressInternal}>
      {icon}
      <Title>{title}</Title>
      {renderDescription()}
    </Container>
  );
};

ActionBox.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  onPress: PropTypes.func,
  description: PropTypes.string,
};

ActionBox.defaultProps = {
  onPress: null,
  description: null,
};

export default ActionBox;
