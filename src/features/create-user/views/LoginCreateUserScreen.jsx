import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TextFormItem from '../../../components/text-form-item';
import FormScreen from '../../../components/form-screen';
import strings from '../../../configs/strings';

const LoginCreateUserScreen = ({ route, navigation }) => {
  const [user, setUser] = useState(route.params);
  const [nextButtonEnabled, setNextButtonEnabled] = useState(false);

  const onLoginChange = (value) => {
    setUser({ ...user, login: value });
    setNextButtonEnabled(!!value);
  };

  const getFirstName = () => (user.name ? user.name.split(' ')[0] : null);

  const onPressOk = () => {
    navigation.navigate('PasswordCreateUser', { ...user });
  };

  return (
    <FormScreen
      formItem={<TextFormItem label={`${getFirstName()}, ${strings('chooseALogin')}`} onChange={onLoginChange} />}
      onPressOk={onPressOk}
      okButtonDisabled={!nextButtonEnabled}
      textButton={strings('next')}
    />
  );
};

LoginCreateUserScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      name: PropTypes.string,
    }),
  }).isRequired,
};

export default LoginCreateUserScreen;
