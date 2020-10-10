import React from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import TopToDownCardStyleInterpolator from '../../../components/top-to-down-card-style-interpolator';
import PurchaseListFilterScreen from './PurchaseListFilterScreen';
import PurchaseListListScreen from './PurchaseListListScreen';
import PurchaseListCreateScreen from './PurchaseListCreateScreen';
import SelectPurchaseListScreen from './SelectPurchaseListScreen';
import headerOptions from '../../../navigator/headerOptions';
import strings from '../../../configs/strings';
import getMenuBarConfig from '../../../configs/headerOptions';

const Stack = createStackNavigator();
const purchaseListMenu = {
  name: 'PurchaseList',
  hiddenMenu: false,
  title: strings('purchaseList'),
  isFeatureMainScreen: true,
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  filterScreenName: 'PurchaseListFilter',
};

const PurchaseListNavigator = () => (
  <Stack.Navigator
    initialRouteName="PurchaseListList"
  >
    <Stack.Screen
      name="PurchaseListFilter"
      component={PurchaseListFilterScreen}
      options={{ ...getMenuBarConfig(), cardStyleInterpolator: TopToDownCardStyleInterpolator }}
    />
    <Stack.Screen
      name="PurchaseListList"
      component={PurchaseListListScreen}
      options={({ navigation }) => headerOptions(navigation, purchaseListMenu)}
    />
    <Stack.Screen
      name="PurchaseListCreate"
      component={PurchaseListCreateScreen}
      options={{
        ...getMenuBarConfig(),
        cardStyleInterpolator: CardStyleInterpolators.forRevealFromBottomAndroid,
      }}
    />
    <Stack.Screen
      name="SelectPurchaseList"
      component={SelectPurchaseListScreen}
      options={{
        ...getMenuBarConfig(),
        cardStyleInterpolator: TopToDownCardStyleInterpolator,
      }}
    />
  </Stack.Navigator>
);

export default PurchaseListNavigator;
