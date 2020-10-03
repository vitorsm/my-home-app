import React from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import TopToDownCardStyleInterpolator from '../../../components/top-to-down-card-style-interpolator';
import BrandFilterScreen from './BrandFilterScreen';
import BrandListScreen from './BrandListScreen';
import BrandCreateScreen from './BrandCreateScreen';
import SelectBrandScreen from './SelectBrandScreen';

const Stack = createStackNavigator();

const BrandNavigator = () => (
  <Stack.Navigator
    initialRouteName="BrandList"
  >
    <Stack.Screen
      name="BrandFilter"
      component={BrandFilterScreen}
      options={{ headerShown: false, cardStyleInterpolator: TopToDownCardStyleInterpolator }}
    />
    <Stack.Screen
      name="BrandList"
      component={BrandListScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="BrandCreate"
      component={BrandCreateScreen}
      options={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forRevealFromBottomAndroid,
      }}
    />
    <Stack.Screen
      name="SelectBrand"
      component={SelectBrandScreen}
      options={{
        headerShown: false,
        cardStyleInterpolator: TopToDownCardStyleInterpolator,
      }}
    />
  </Stack.Navigator>
);

export default BrandNavigator;
