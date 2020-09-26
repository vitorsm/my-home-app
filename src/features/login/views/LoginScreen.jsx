import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Container, Form, FormItem, Label, TextInput, TextAction,
} from './style';
import PlainButton from '../../../components/plain-button';
import { colors } from '../../../configs/colors';

const LoginScreen = ({ navigation }) => {
  const [loginBorder, setLoginBorder] = useState({ borderSize: null, borderColor: null });
  const [passwordBorder, setPasswordBorder] = useState({ borderSize: null, borderColor: null });

  const selectedBorderSize = 2;
  const selectedBorderColor = colors.primary;

  const onFocus = (setValueFunc) => {
    setValueFunc({ borderSize: selectedBorderSize, borderColor: selectedBorderColor });
  };

  const onBlur = (setValueFunc) => {
    setTimeout(() => setValueFunc({ borderSize: null, borderColor: null }), 100);
  };

  return (
    <Container>
      <Form>
        <FormItem>
          <Label>Login</Label>
          <TextInput
            borderSize={loginBorder.borderSize}
            borderColor={loginBorder.borderColor}
            onFocus={() => onFocus(setLoginBorder)}
            onBlur={() => onBlur(setLoginBorder)}
          />
        </FormItem>
        <FormItem>
          <Label>Senha</Label>
          <TextInput
            secureTextEntry
            borderSize={passwordBorder.borderSize}
            borderColor={passwordBorder.borderColor}
            onFocus={() => onFocus(setPasswordBorder)}
            onBlur={() => onBlur(setPasswordBorder)}
          />
        </FormItem>
        <TextAction
          onPress={() => navigation.navigate('CreateUser')}
        >
          Criar conta
        </TextAction>
      </Form>
      <PlainButton>Entrar</PlainButton>
    </Container>
  );
};

LoginScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default LoginScreen;
