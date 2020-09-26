import React from 'react';
import { createStackNavigator, TransitionPresets, CardStyleInterpolators } from '@react-navigation/stack';
import NameCreateUserScreen from './NameCreateUserScreen';
import LoginCreateUserScreen from './LoginCreateUserScreen';
import PasswordCreateUserScreen from './PasswordCreateUserScreen';
import ConfirmUserDataScreen from './ConfirmUserDataScreen';

const Stack = createStackNavigator();
const CreateUserScreen = () => (
  <Stack.Navigator
    initialRouteName="NameCreateUser"
    screenOptions={
    {
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      ...TransitionPresets.SlideFromRightIOS,
    }
}
  >
    <Stack.Screen name="NameCreateUser" component={NameCreateUserScreen} options={{ title: '' }} />
    <Stack.Screen name="LoginCreateUser" component={LoginCreateUserScreen} options={{ title: '' }} />
    <Stack.Screen name="PasswordCreateUser" component={PasswordCreateUserScreen} options={{ title: '' }} />
    <Stack.Screen name="ConfirmUserData" component={ConfirmUserDataScreen} options={{ title: '' }} />
  </Stack.Navigator>
);

export default CreateUserScreen;
