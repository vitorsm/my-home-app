import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Container, Form, FormItem, Label, TextInput,
} from './style';
import PlainButton from '../../../components/plain-button';
import { colors } from '../../../configs/colors';
import * as userActions from '../../../redux/actions/userActions';
import TextLink from '../../../components/text-link';

const LoginScreen = ({ navigation, authenticateUser, authenticatedUser }) => {
  const [login, setLogin] = useState(null);
  const [password, setPassword] = useState(null);

  const [loginBorder, setLoginBorder] = useState({ borderSize: null, borderColor: null });
  const [passwordBorder, setPasswordBorder] = useState({ borderSize: null, borderColor: null });

  const selectedBorderSize = 2;
  const selectedBorderColor = colors.primary.main;

  useEffect(() => {
    if (authenticatedUser && !authenticatedUser.error && login && password) {
      navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      });
    }
  }, [authenticatedUser]);
  const onFocus = (setValueFunc) => {
    setValueFunc({ borderSize: selectedBorderSize, borderColor: selectedBorderColor });
  };

  const onBlur = (setValueFunc) => {
    setTimeout(() => setValueFunc({ borderSize: null, borderColor: null }), 100);
  };

  const onLoginButtonPress = () => {
    authenticateUser(login, password);
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
            onChangeText={setLogin}
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
            onChangeText={setPassword}
          />
        </FormItem>
        <TextLink
          onPress={() => navigation.navigate('CreateUser')}
        >
          Criar conta
        </TextLink>
      </Form>
      <PlainButton onPress={onLoginButtonPress}>Entrar</PlainButton>
    </Container>
  );
};

LoginScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
  }).isRequired,
  authenticateUser: PropTypes.func.isRequired,
  authenticatedUser: PropTypes.shape({
    error: PropTypes.bool,
  }),
};

LoginScreen.defaultProps = {
  authenticatedUser: null,
};

const mapDispatchToProps = {
  authenticateUser: userActions.authenticate,
};

function mapStateToProps({ authenticatedUser }) {
  return { authenticatedUser };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
