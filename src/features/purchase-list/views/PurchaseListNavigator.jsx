import React from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import TopToDownCardStyleInterpolator from '../../../components/top-to-down-card-style-interpolator';
import PurchaseListFilterScreen from './PurchaseListFilterScreen';
import PurchaseListListScreen from './PurchaseListListScreen';
import PurchaseListCreateScreen from './PurchaseListCreateScreen';

const Stack = createStackNavigator();

const PurchaseListNavigator = () => (
  <Stack.Navigator
    initialRouteName="PurchaseListList"
  >
    <Stack.Screen
      name="PurchaseListFilter"
      component={PurchaseListFilterScreen}
      options={{ headerShown: false, cardStyleInterpolator: TopToDownCardStyleInterpolator }}
    />
    <Stack.Screen
      name="PurchaseListList"
      component={PurchaseListListScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="PurchaseListCreate"
      component={PurchaseListCreateScreen}
      options={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forRevealFromBottomAndroid,
      }}
    />
  </Stack.Navigator>
);

export default PurchaseListNavigator;
