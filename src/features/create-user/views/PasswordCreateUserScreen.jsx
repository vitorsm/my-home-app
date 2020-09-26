import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TextFormItem from '../../../components/text-form-item';
import FormScreen from '../../../components/form-screen';

const PasswordCreateUserScreen = ({ route, navigation }) => {
  const [user, setUser] = useState(route.params);
  const [nextButtonEnabled, setNextButtonEnabled] = useState(false);

  const onPasswordChange = (value) => {
    setUser({ ...user, password: value });
    setNextButtonEnabled(value && value.length > 5);
  };

  const onPressOk = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  };

  return (
    <FormScreen
      formItem={<TextFormItem label="Insira uma senha" onChange={onPasswordChange} description="Escolha uma senha que contenha ao menos 5 caracteres" />}
      onPressOk={onPressOk}
      okButtonDisabled={!nextButtonEnabled}
      textButton="Finalizar"
    />
  );
};

PasswordCreateUserScreen.propTypes = {
  navigation: PropTypes.shape({
    reset: PropTypes.func.isRequired,
  }).isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      name: PropTypes.string,
      login: PropTypes.string,
    }),
  }).isRequired,
};

export default PasswordCreateUserScreen;
