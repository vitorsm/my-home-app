import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import NameCreateUserScreen from './NameCreateUserScreen';
import LoginCreateUserScreen from './LoginCreateUserScreen';
import PasswordCreateUserScreen from './PasswordCreateUserScreen';

const Stack = createStackNavigator();
const CreateUserScreen = () => (
  <Stack.Navigator initialRouteName="NameCreateUser">
    <Stack.Screen name="NameCreateUser" component={NameCreateUserScreen} />
    <Stack.Screen name="LoginCreateUser" component={LoginCreateUserScreen} />
    <Stack.Screen name="PasswordCreateUser" component={PasswordCreateUserScreen} />
  </Stack.Navigator>
);

export default CreateUserScreen;
