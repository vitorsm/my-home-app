import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Login from '../features/login';
import Splash from '../features/splash';
import CreateUserSreen from '../features/create-user';

import MenuButton from './style';
import { colors } from '../configs/colors';

const Stack = createStackNavigator();

export const screens = {
  HOME: {
    name: 'Home',
    hiddenMenu: false,
    component: Login,
    title: null,
    isFeatureMainScreen: true,
  },
  LOGIN: {
    name: 'Login',
    hiddenMenu: true,
    component: Login,
    title: 'Login',
    isFeatureMainScreen: true,
  },
  CREATE_USER: {
    name: 'CreateUser',
    hiddenMenu: true,
    component: CreateUserSreen,
    title: 'Criar conta',
    isFeatureMainScreen: false,
  },
};

const getHeaderOptions = (hiddenMenu, title, showMenuButton) => {
  const headerLeftMenu = () => (
    <MenuButton>
      <Icon name="menu" color="#FFF" size={20} />
    </MenuButton>
  );

  const options = {
    headerLeft: showMenuButton ? headerLeftMenu : undefined,
    headerStyle: { backgroundColor: colors.primary },
    headerTintColor: '#FFF',
    headerShown: !hiddenMenu,
    headerTitleStyle: {
      fontWeight: '100',
    },
    title,
  };

  return options;
};

const Navigator = () => {
  const getScreensComponents = () => Object.entries(screens).map(([name, screen]) => (
    <Stack.Screen
      key={name}
      name={screen.name}
      component={screen.component}
      options={getHeaderOptions(screen.hiddenMenu, screen.title, screen.isFeatureMainScreen)}
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
