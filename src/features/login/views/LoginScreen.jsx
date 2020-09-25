import React from 'react';
import {
  Container, Form, FormItem, Label, TextInput,
} from './style';

const LoginScreen = () => {
  const a = 1;

  return (
    <Container>
      <Form>
        <FormItem>
          <Label>Login</Label>
          <TextInput />
        </FormItem>
        <FormItem>
          <Label>Senha</Label>
          <TextInput />
        </FormItem>
      </Form>
    </Container>
  );
};

export default LoginScreen;
