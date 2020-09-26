import React from 'react';
import PropTypes from 'prop-types';
import Container from './style';
import PlainButton from '../../plain-button';

const FormScreen = ({
  formItem, textButton, onPressOk, okButtonDisabled,
}) => (
  <Container>
    {formItem}
    <PlainButton onPress={onPressOk} disabled={okButtonDisabled}>{textButton}</PlainButton>
  </Container>
);

FormScreen.propTypes = {
  formItem: PropTypes.element.isRequired,
  textButton: PropTypes.string.isRequired,
  onPressOk: PropTypes.func.isRequired,
  okButtonDisabled: PropTypes.bool,
};

FormScreen.defaultProps = {
  okButtonDisabled: false,
};

export default FormScreen;
