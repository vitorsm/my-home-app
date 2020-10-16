import React from 'react';
import PropTypes from 'prop-types';
import { Container, Title, Description } from './style';

const Card = ({ title, description, children }) => {
  const renderTitle = () => {
    if (!title) {
      return null;
    }

    return (
      <Title>
        {title}
      </Title>
    );
  };

  const renderDescription = () => {
    if (!description) {
      return null;
    }

    return (
      <Description>
        {description}
      </Description>
    );
  };

  return (
    <Container>
      {renderTitle()}
      {children}
      {renderDescription()}
    </Container>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  children: PropTypes.element.isRequired,
};

Card.defaultProps = {
  description: null,
};

export default Card;