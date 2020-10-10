import React from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import TopToDownCardStyleInterpolator from '../../../components/top-to-down-card-style-interpolator';
import BrandFilterScreen from './BrandFilterScreen';
import BrandListScreen from './BrandListScreen';
import BrandCreateScreen from './BrandCreateScreen';
import SelectBrandScreen from './SelectBrandScreen';
import headerOptions from '../../../navigator/headerOptions';
import strings from '../../../configs/strings';
import getMenuBarConfig from '../../../configs/headerOptions';

const Stack = createStackNavigator();
const brandMenu = {
  name: 'Brand',
  hiddenMenu: false,
  title: strings('brands'),
  isFeatureMainScreen: true,
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  filterScreenName: 'BrandFilter',
};

const BrandNavigator = () => (
  <Stack.Navigator
    initialRouteName="BrandList"
  >
    <Stack.Screen
      name="BrandFilter"
      component={BrandFilterScreen}
      options={{ ...getMenuBarConfig(), cardStyleInterpolator: TopToDownCardStyleInterpolator }}
    />
    <Stack.Screen
      name="BrandList"
      component={BrandListScreen}
      options={({ navigation }) => headerOptions(navigation, brandMenu)}
    />
    <Stack.Screen
      name="BrandCreate"
      component={BrandCreateScreen}
      options={{
        ...getMenuBarConfig(),
        cardStyleInterpolator: CardStyleInterpolators.forRevealFromBottomAndroid,
      }}
    />
    <Stack.Screen
      name="SelectBrand"
      component={SelectBrandScreen}
      options={{
        ...getMenuBarConfig(),
        cardStyleInterpolator: TopToDownCardStyleInterpolator,
      }}
    />
  </Stack.Navigator>
);

export default BrandNavigator;
