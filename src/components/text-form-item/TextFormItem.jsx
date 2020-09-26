import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Container, DefaultTextInput, Label, TextContainer, Description,
} from './style';

const TextFormItem = ({ label, description, onChange }) => {
  const inputRef = useRef();

  // the timeout function was used because when the current.focus is called for the first time,
  // the screen animation has not ended and the focus doesn't works
  useEffect(() => {
    setTimeout(() => {
      inputRef.current.focus();
    }, 100);
  }, []);

  return (
    <Container>
      <Label>{label}</Label>
      <Description>{description}</Description>
      <TextContainer>
        <DefaultTextInput onChangeText={onChange} ref={inputRef} />
      </TextContainer>
    </Container>
  );
};

TextFormItem.propTypes = {
  label: PropTypes.string.isRequired,
  description: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

TextFormItem.defaultProps = {
  description: null,
};

export default TextFormItem;
