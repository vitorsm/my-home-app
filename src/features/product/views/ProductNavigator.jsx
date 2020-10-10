import React from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import TopToDownCardStyleInterpolator from '../../../components/top-to-down-card-style-interpolator';
import ProductFilterScreen from './ProductFilterScreen';
import ProductListScreen from './ProductListScreen';
import ProductCreateScreen from './ProductCreateScreen';
import SelectProductScreen from './SelectProductScreen';
import headerOptions from '../../../navigator/headerOptions';
import strings from '../../../configs/strings';
import getMenuBarConfig from '../../../configs/headerOptions';

const Stack = createStackNavigator();
const productMenu = {
  name: 'Product',
  hiddenMenu: false,
  title: strings('product'),
  isFeatureMainScreen: true,
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  filterScreenName: 'ProductFilter',
};

const ProductNavigator = () => (
  <Stack.Navigator
    initialRouteName="ProductList"
  >
    <Stack.Screen
      name="ProductFilter"
      component={ProductFilterScreen}
      options={{ ...getMenuBarConfig(), cardStyleInterpolator: TopToDownCardStyleInterpolator }}
    />
    <Stack.Screen
      name="ProductList"
      component={ProductListScreen}
      options={({ navigation }) => headerOptions(navigation, productMenu)}
    />
    <Stack.Screen
      name="ProductCreate"
      component={ProductCreateScreen}
      options={{
        ...getMenuBarConfig(),
        cardStyleInterpolator: CardStyleInterpolators.forRevealFromBottomAndroid,
      }}
    />
    <Stack.Screen
      name="ProductSelect"
      component={SelectProductScreen}
      options={{
        ...getMenuBarConfig(),
        cardStyleInterpolator: TopToDownCardStyleInterpolator,
      }}
    />
  </Stack.Navigator>
);

export default ProductNavigator;
