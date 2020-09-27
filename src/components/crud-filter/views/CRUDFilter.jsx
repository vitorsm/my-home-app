import React from 'react';
import PropTypes from 'prop-types';
import { Container, FilterActionsContainer, ScrollContainer } from './style';

import TextLink from '../../text-link';
import RoundedButton from '../../rounded-button';

const CRUDFilter = ({
  content, onFilterClick, onCancelClick, onResetClick,
}) => {
  const renderActions = () => (
    <FilterActionsContainer>
      <TextLink onPress={onCancelClick}>Cancelar</TextLink>
      <RoundedButton onPress={onFilterClick}>Filtrar</RoundedButton>
    </FilterActionsContainer>
  );

  return (
    <Container>
      <ScrollContainer>
        {content}
        <TextLink onPress={onResetClick}>Limpar filtros</TextLink>
      </ScrollContainer>
      {renderActions()}
    </Container>
  );
};

CRUDFilter.propTypes = {
  content: PropTypes.element.isRequired,
  onFilterClick: PropTypes.func.isRequired,
  onCancelClick: PropTypes.func.isRequired,
  onResetClick: PropTypes.func.isRequired,
};

export default CRUDFilter;
