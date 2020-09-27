import React from 'react';
import PropTypes from 'prop-types';
import {
  Container, ViewItem, FieldName, FieldValue, Label, LoadingContainer,
} from './style';
import CircularProgress from '../../circular-progress';

const ViewFormScreen = ({ data, isLoading, title }) => {
  const renderFields = () => data.map((field) => (
    <ViewItem key={`view-item-view-form-screen-${field.fieldName}`}>
      <FieldName>{field.fieldName}</FieldName>
      <FieldValue>{field.fieldValue}</FieldValue>
    </ViewItem>
  ));

  const renderLoading = () => {
    if (!isLoading) {
      return null;
    }

    return (
      <LoadingContainer>
        <CircularProgress />
      </LoadingContainer>
    );
  };
  return (
    <Container>
      <Label>{title}</Label>
      {renderFields()}
      {renderLoading()}
    </Container>
  );
};

ViewFormScreen.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    fieldName: PropTypes.string.isRequired,
    fieldValue: PropTypes.string,
  })).isRequired,
  isLoading: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

ViewFormScreen.defaultProps = {
  isLoading: false,
};

export default ViewFormScreen;
