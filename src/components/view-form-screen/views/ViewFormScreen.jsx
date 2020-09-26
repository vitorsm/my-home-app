import React from 'react';
import PropTypes from 'prop-types';
import {
  Container, ViewItem, FieldName, FieldValue, Label,
} from './style';

const ViewFormScreen = ({ data }) => {
  const renderFields = () => data.map((field) => (
    <ViewItem>
      <FieldName>{field.fieldName}</FieldName>
      <FieldValue>{field.fieldValue}</FieldValue>
    </ViewItem>
  ));

  return (
    <Container>
      <Label>Confirme seus dados para finalizar o cadastro</Label>
      {renderFields()}
    </Container>
  );
};

ViewFormScreen.propTypes = {
  data: PropTypes.arrayOf({
    fieldName: PropTypes.string.isRequired,
    fieldValue: PropTypes.string,
  }).isRequired,
};

export default ViewFormScreen;
