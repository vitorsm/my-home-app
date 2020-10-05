import React from 'react';
import PropTypes from 'prop-types';
import { Container, TextButton, IconContainer } from './style';

const FilterItem = ({ children, icon, selected }) => {
  console.log('selected', selected);
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
    <Container>
      {renderIcon()}
      <TextButton selected={selected}>{children}</TextButton>
    </Container>
  );
};

FilterItem.propTypes = {
  children: PropTypes.string.isRequired,
  icon: PropTypes.element,
  selected: PropTypes.bool,
};

FilterItem.defaultProps = {
  icon: null,
  selected: false,
};

export default FilterItem;
