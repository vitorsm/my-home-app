import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { string } from 'prop-types';
import Login from '../features/login';
import Splash from '../features/splash';
import MenuButton from './style';
import { colors } from '../configs/colors';

const Stack = createStackNavigator();

const screens = {
  HOME: {
    name: 'Home',
    hiddenMenu: false,
    component: Login,
  },
  LOGIN: {
    name: 'Login',
    hiddenMenu: true,
    component: Login,
  },
};

const getHeaderOptions = (hiddenMenu) => {
  const options = {
    headerLeft: () => (
      <MenuButton>
        <Icon name="menu" color="#FFF" size={20} />
      </MenuButton>
    ),
    headerStyle: { backgroundColor: colors.primary },
    headerTintColor: '#FFF',
    headerShown: !hiddenMenu,
  };

  return options;
};

const Navigator = () => {
  const getScreensComponents = () => Object.entries(screens).map(([name, screen]) => (
    <Stack.Screen
      key={name}
      name={screen.name}
      component={screen.component}
      options={getHeaderOptions(screen.hiddenMenu)}
    />
  ));

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen options={{ headerShown: false }} name="Splash" component={Splash} />
        {getScreensComponents()}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
