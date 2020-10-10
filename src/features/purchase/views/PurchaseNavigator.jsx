import React from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import TopToDownCardStyleInterpolator from '../../../components/top-to-down-card-style-interpolator';
import PurchaseFilterScreen from './PurchaseFilterScreen';
import PurchaseListScreen from './PurchaseListScreen';
import PurchaseCreateScreen from './PurchaseCreateScreen';
import headerOptions from '../../../navigator/headerOptions';
import strings from '../../../configs/strings';
import getMenuBarConfig from '../../../configs/headerOptions';

const Stack = createStackNavigator();
const purchaseListMenu = {
  name: 'Purchase',
  hiddenMenu: false,
  title: strings('purchases'),
  isFeatureMainScreen: true,
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  filterScreenName: 'PurchaseFilter',
};

const PurchaseNavigator = () => (
  <Stack.Navigator
    initialRouteName="PurchaseListScreen"
  >
    <Stack.Screen
      name="PurchaseFilter"
      component={PurchaseFilterScreen}
      options={{ ...getMenuBarConfig(), cardStyleInterpolator: TopToDownCardStyleInterpolator }}
    />
    <Stack.Screen
      name="PurchaseListScreen"
      component={PurchaseListScreen}
      options={({ navigation }) => headerOptions(navigation, purchaseListMenu)}
    />
    <Stack.Screen
      name="PurchaseCreate"
      component={PurchaseCreateScreen}
      options={{
        ...getMenuBarConfig(),
        cardStyleInterpolator: CardStyleInterpolators.forRevealFromBottomAndroid,
      }}
    />
  </Stack.Navigator>
);

export default PurchaseNavigator;
