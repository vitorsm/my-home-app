import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Login from '../features/login';
import Splash from '../features/splash';
import CreateUserSreen from '../features/create-user';
import HomeScreen from '../features/home';
import SideMenuScreen from '../features/side-menu';
import ErrorDialog from '../features/error-dialog';
import { MenuButton, Container } from './style';
import { colors } from '../configs/colors';

const Stack = createStackNavigator();

const InvertedHorizontal = ({
  current, next, index, closing, swiping, layouts, insets,
}) => CardStyleInterpolators.forHorizontalIOS({
  current, next, index, closing, swiping, inverted: -1, layouts, insets,
});

export const screens = {
  HOME: {
    name: 'Home',
    hiddenMenu: false,
    component: HomeScreen,
    title: null,
    isFeatureMainScreen: true,
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  },
  LOGIN: {
    name: 'Login',
    hiddenMenu: true,
    component: Login,
    title: 'Login',
    isFeatureMainScreen: true,
    cardStyleInterpolator: undefined,
  },
  CREATE_USER: {
    name: 'CreateUser',
    hiddenMenu: true,
    component: CreateUserSreen,
    title: 'Criar conta',
    isFeatureMainScreen: false,
    cardStyleInterpolator: undefined,
  },
  SIDE_MENU: {
    name: 'SideMenu',
    hiddenMenu: true,
    component: SideMenuScreen,
    title: 'Criar conta',
    isFeatureMainScreen: false,
    cardStyleInterpolator: InvertedHorizontal,
  },
};

const getHeaderOptions = (navigation, menu) => {
  const headerLeftMenu = () => (
    <MenuButton onPress={() => navigation.navigate('SideMenu')}>
      <Icon name="menu" color="#FFF" size={20} />
    </MenuButton>
  );

  const options = {
    headerLeft: menu.isFeatureMainScreen ? headerLeftMenu : undefined,
    headerStyle: { backgroundColor: colors.primary.main },
    headerTintColor: '#FFF',
    headerShown: !menu.hiddenMenu,
    headerTitleStyle: {
      fontWeight: '100',
    },
    title: menu.title,
    animationTypeForReplace: 'pop',
    cardStyleInterpolator: menu.cardStyleInterpolator,
  };

  return options;
};

const RootNavigator = () => {
  const getScreensComponents = () => Object.entries(screens)
    .map(([name, screen]) => (
      <Stack.Screen
        key={name}
        name={screen.name}
        component={screen.component}
        options={({ navigation }) => getHeaderOptions(navigation, screen)}
      />
    ));

  return (
    <Container>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen options={{ headerShown: false }} name="Splash" component={Splash} />
          {getScreensComponents()}
        </Stack.Navigator>
      </NavigationContainer>
      <ErrorDialog />
    </Container>

  );
};

export default RootNavigator;
