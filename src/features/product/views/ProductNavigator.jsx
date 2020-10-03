import React from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import TopToDownCardStyleInterpolator from '../../../components/top-to-down-card-style-interpolator';
import ProductFilterScreen from './ProductFilterScreen';
import ProductListScreen from './ProductListScreen';
import ProductCreateScreen from './ProductCreateScreen';
import SelectProductScreen from './SelectProductScreen';

const Stack = createStackNavigator();

const ProductNavigator = () => (
  <Stack.Navigator
    initialRouteName="ProductList"
  >
    <Stack.Screen
      name="ProductFilter"
      component={ProductFilterScreen}
      options={{ headerShown: false, cardStyleInterpolator: TopToDownCardStyleInterpolator }}
    />
    <Stack.Screen
      name="ProductList"
      component={ProductListScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="ProductCreate"
      component={ProductCreateScreen}
      options={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forRevealFromBottomAndroid,
      }}
    />
    <Stack.Screen
      name="ProductSelect"
      component={SelectProductScreen}
      options={{
        headerShown: false,
        cardStyleInterpolator: TopToDownCardStyleInterpolator,
      }}
    />
  </Stack.Navigator>
);

export default ProductNavigator;
