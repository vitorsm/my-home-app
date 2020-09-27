import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TopToDownCardStyleInterpolator from '../../../components/top-to-down-card-style-interpolator';
import BrandFilterScreen from './BrandFilterScreen';
import BrandListScreen from './BrandListScreen';

const Stack = createStackNavigator();

const BrandNavigator = () => (
  <Stack.Navigator
    initialRouteName="BrandList"
    screenOptions={
      {
        cardStyleInterpolator: TopToDownCardStyleInterpolator,
      }
}
  >
    <Stack.Screen
      name="BrandFilter"
      component={BrandFilterScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="BrandList"
      component={BrandListScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default BrandNavigator;
