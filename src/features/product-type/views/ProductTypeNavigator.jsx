import React from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import TopToDownCardStyleInterpolator from '../../../components/top-to-down-card-style-interpolator';
import ProductTypeFilterScreen from './ProductTypeFilterScreen';
import ProductTypeListScreen from './ProductTypeListScreen';
import ProductTypeCreateScreen from './ProductTypeCreateScreen';
import SelectProductTypeScreen from './SelectProductTypeScreen';
import headerOptions from '../../../navigator/headerOptions';
import strings from '../../../configs/strings';
import getMenuBarConfig from '../../../configs/headerOptions';

const Stack = createStackNavigator();
const productTypeMenu = {
  name: 'ProductType',
  hiddenMenu: false,
  title: strings('productType'),
  isFeatureMainScreen: true,
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  filterScreenName: 'ProductTypeFilter',
};

const ProductTypeNavigator = () => (
  <Stack.Navigator
    initialRouteName="ProductTypeList"
  >
    <Stack.Screen
      name="ProductTypeFilter"
      component={ProductTypeFilterScreen}
      options={{ ...getMenuBarConfig(), cardStyleInterpolator: TopToDownCardStyleInterpolator }}
    />
    <Stack.Screen
      name="ProductTypeList"
      component={ProductTypeListScreen}
      options={({ navigation }) => headerOptions(navigation, productTypeMenu)}
    />
    <Stack.Screen
      name="ProductTypeCreate"
      component={ProductTypeCreateScreen}
      options={{
        ...getMenuBarConfig(),
        cardStyleInterpolator: CardStyleInterpolators.forRevealFromBottomAndroid,
      }}
    />
    <Stack.Screen
      name="SelectProductType"
      component={SelectProductTypeScreen}
      options={{
        ...getMenuBarConfig(),
        cardStyleInterpolator: TopToDownCardStyleInterpolator,
      }}
    />
  </Stack.Navigator>
);

export default ProductTypeNavigator;
