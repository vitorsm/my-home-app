import React from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import TopToDownCardStyleInterpolator from '../../../components/top-to-down-card-style-interpolator';
import ProductFilterScreen from './ProductFilterScreen';
import ProductListScreen from './ProductListScreen';
import ProductCreateScreen from './ProductCreateScreen';
import SelectProductTypeScreen from './SelectProductTypeScreen';
import SelectBrandScreen from './SelectBrandScreen';

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
      name="ProductProductTypeSelect"
      component={SelectProductTypeScreen}
      options={{
        headerShown: false,
        cardStyleInterpolator: TopToDownCardStyleInterpolator,
      }}
    />
    <Stack.Screen
      name="ProductBrandSelect"
      component={SelectBrandScreen}
      options={{
        headerShown: false,
        cardStyleInterpolator: TopToDownCardStyleInterpolator,
      }}
    />
  </Stack.Navigator>
);

export default ProductNavigator;
