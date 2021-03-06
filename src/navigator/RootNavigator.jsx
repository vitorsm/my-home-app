import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import Login from '../features/login';
import Splash from '../features/splash';
import CreateUserSreen from '../features/create-user';
import HomeScreen from '../features/home';
import SideMenuScreen from '../features/side-menu';
import ErrorDialog from '../features/error-dialog';
import BrandScreen from '../features/brand';
import ProductTypeScreen from '../features/product-type';
import ProductScreen from '../features/product';
import PurchaseListScreen from '../features/purchase-list';
import PurchaseScreen from '../features/purchase';

import LeftToRightCardStyleInterpolator from '../components/left-to-right-card-style-interpolator';

import { Container } from './style';
import headerOptions from './headerOptions';

import strings from '../configs/strings';

const Stack = createStackNavigator();

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
    title: strings('login'),
    isFeatureMainScreen: true,
    cardStyleInterpolator: undefined,
  },
  CREATE_USER: {
    name: 'CreateUser',
    hiddenMenu: true,
    component: CreateUserSreen,
    title: strings('createAccount'),
    isFeatureMainScreen: false,
    cardStyleInterpolator: undefined,
  },
  SIDE_MENU: {
    name: 'SideMenu',
    hiddenMenu: true,
    component: SideMenuScreen,
    title: null,
    isFeatureMainScreen: false,
    cardStyleInterpolator: LeftToRightCardStyleInterpolator,
  },
  BRAND: {
    name: 'Brand',
    hiddenMenu: true,
    component: BrandScreen,
    title: strings('brands'),
    isFeatureMainScreen: true,
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    filterScreenName: 'BrandFilter',
  },
  PRODUCT_TYPE: {
    name: 'ProductType',
    hiddenMenu: true,
    component: ProductTypeScreen,
    title: strings('productTypes'),
    isFeatureMainScreen: true,
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    filterScreenName: 'ProductTypeFilter',
  },
  PRODUCT: {
    name: 'Product',
    hiddenMenu: true,
    component: ProductScreen,
    title: strings('products'),
    isFeatureMainScreen: true,
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    filterScreenName: 'ProductFilter',
  },
  PURCHASE_LIST: {
    name: 'PurchaseList',
    hiddenMenu: true,
    component: PurchaseListScreen,
    title: strings('purchaseList'),
    isFeatureMainScreen: true,
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    filterScreenName: null,
  },
  PURCHASE: {
    name: 'Purchase',
    hiddenMenu: true,
    component: PurchaseScreen,
    title: strings('purchases'),
    isFeatureMainScreen: true,
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    filterScreenName: null,
  },
};

const getHeaderOptions = (navigation, menu) => headerOptions(navigation, menu);

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
