import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TextFormItem from '../../../components/text-form-item';
import FormScreen from '../../../components/form-screen';
import strings from '../../../configs/strings';

const PasswordCreateUserScreen = ({ route, navigation }) => {
  const [user, setUser] = useState(route.params);
  const [nextButtonEnabled, setNextButtonEnabled] = useState(false);

  const onPasswordChange = (value) => {
    setUser({ ...user, password: value });
    setNextButtonEnabled(value && value.length > 5);
  };

  const onPressOk = () => {
    navigation.navigate('ConfirmUserData', { ...user });
  };

  return (
    <FormScreen
      formItem={(
        <TextFormItem
          label={strings('enterAPassword')}
          onChange={onPasswordChange}
          description={strings('passwordChoiceRule')}
          secureTextEntry
        />
      )}
      onPressOk={onPressOk}
      okButtonDisabled={!nextButtonEnabled}
      textButton={strings('next')}
    />
  );
};

PasswordCreateUserScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      name: PropTypes.string,
      login: PropTypes.string,
    }),
  }).isRequired,
};

export default PasswordCreateUserScreen;
