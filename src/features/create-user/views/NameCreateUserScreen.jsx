import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TextFormItem from '../../../components/text-form-item';
import FormScreen from '../../../components/form-screen';

const NameCreateUserScreen = ({ navigation }) => {
  const [userName, setUserName] = useState();
  const [nextButtonEnabled, setNextButtonEnabled] = useState(false);

  const onNameChange = (value) => {
    setUserName(value);
    setNextButtonEnabled(!!value);
  };

  const onPressOk = () => {
    navigation.navigate('LoginCreateUser', { userName });
  };

  return (
    <FormScreen
      formItem={<TextFormItem label="Qual seu nome ?" onChange={onNameChange} />}
      onPressOk={onPressOk}
      okButtonDisabled={!nextButtonEnabled}
      textButton="Próximo"
    />
  );
};

NameCreateUserScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default NameCreateUserScreen;
