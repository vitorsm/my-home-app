import React from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import TopToDownCardStyleInterpolator from '../../../components/top-to-down-card-style-interpolator';
import PurchaseFilterScreen from './PurchaseFilterScreen';
import PurchaseListScreen from './PurchaseListScreen';
import PurchaseCreateScreen from './PurchaseCreateScreen';

const Stack = createStackNavigator();

const PurchaseNavigator = () => (
  <Stack.Navigator
    initialRouteName="PurchaseListScreen"
  >
    <Stack.Screen
      name="PurchaseFilter"
      component={PurchaseFilterScreen}
      options={{ headerShown: false, cardStyleInterpolator: TopToDownCardStyleInterpolator }}
    />
    <Stack.Screen
      name="PurchaseListScreen"
      component={PurchaseListScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="PurchaseCreate"
      component={PurchaseCreateScreen}
      options={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forRevealFromBottomAndroid,
      }}
    />
  </Stack.Navigator>
);

export default PurchaseNavigator;
