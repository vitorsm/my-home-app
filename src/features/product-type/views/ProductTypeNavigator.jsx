import React from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import TopToDownCardStyleInterpolator from '../../../components/top-to-down-card-style-interpolator';
import ProductTypeFilterScreen from './ProductTypeFilterScreen';
import ProductTypeListScreen from './ProductTypeListScreen';
import ProductTypeCreateScreen from './ProductTypeCreateScreen';

const Stack = createStackNavigator();

const ProductTypeNavigator = () => (
  <Stack.Navigator
    initialRouteName="ProductTypeList"
  >
    <Stack.Screen
      name="ProductTypeFilter"
      component={ProductTypeFilterScreen}
      options={{ headerShown: false, cardStyleInterpolator: TopToDownCardStyleInterpolator }}
    />
    <Stack.Screen
      name="ProductTypeList"
      component={ProductTypeListScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="ProductTypeCreate"
      component={ProductTypeCreateScreen}
      options={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forRevealFromBottomAndroid,
      }}
    />
  </Stack.Navigator>
);

export default ProductTypeNavigator;
