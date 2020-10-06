import React from 'react';
import PropTypes from 'prop-types';
import { Container, TextButton, IconContainer } from './style';

const FilterItem = ({
  children, icon, selected, onPress,
}) => {
  const renderIcon = () => {
    if (!icon) {
      return null;
    }

    return (
      <IconContainer>
        {icon}
      </IconContainer>
    );
  };

  return (
    <Container onPress={onPress}>
      {renderIcon()}
      <TextButton selected={selected}>{children}</TextButton>
    </Container>
  );
};

FilterItem.propTypes = {
  children: PropTypes.string.isRequired,
  icon: PropTypes.element,
  selected: PropTypes.bool,
  onPress: PropTypes.func,
};

FilterItem.defaultProps = {
  icon: null,
  selected: false,
  onPress: null,
};

export default FilterItem;
