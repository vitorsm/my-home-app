import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TextFormItem from '../../../components/text-form-item';
import FormScreen from '../../../components/form-screen';
import * as stringUtils from '../../../utils/stringUtils';

const NameCreateUserScreen = ({ navigation }) => {
  const [name, setName] = useState();
  const [nextButtonEnabled, setNextButtonEnabled] = useState(false);

  const onNameChange = (value) => {
    const parsedName = stringUtils.convertNameStr(value);

    setName(parsedName);
    setNextButtonEnabled(!!parsedName);
  };

  const onPressOk = () => {
    navigation.navigate('LoginCreateUser', { name });
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
