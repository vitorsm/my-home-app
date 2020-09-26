import React from 'react';
import PropTypes from 'prop-types';
import ViewFormScreen from '../../../components/view-form-screen';
import FormScreen from '../../../components/form-screen';

const ConfirmUserDataScreen = ({ route, navigation }) => {
  const getFieldData = () => [{
    fieldName: 'Login',
    fieldValue: route.params.login,
  }, {
    fieldName: 'Nome',
    fieldValue: route.params.name,
  }];

  const onPressOk = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  };

  return (
    <FormScreen
      formItem={<ViewFormScreen data={getFieldData()} />}
      onPressOk={onPressOk}
      textButton="Finalizar"
    />
  );
};

ConfirmUserDataScreen.propTypes = {
  navigation: PropTypes.shape({
    reset: PropTypes.func.isRequired,
  }).isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      login: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      password: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default ConfirmUserDataScreen;
