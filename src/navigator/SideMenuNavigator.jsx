import React from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import PropTypes from 'prop-types';
import { SideMenuNavigatorContainer } from './style';
import HomeMenuNavigator from './HomeMenuNavigator';

const Stack = createStackNavigator();

const SideMenuNavigator = ({ menus, getHeaderOptions, getHomeContextScreens }) => (
  <SideMenuNavigatorContainer>
    <Stack.Navigator
      initialRouteName="HomeContext"
      screenOptions={
                  {
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                  }
              }
    >
      <Stack.Screen
        key="HomeContext"
        name="HomeContext"
        options={{ headerShown: false }}
      >
        {() => (
          <HomeMenuNavigator
            menus={getHomeContextScreens()}
            getHeaderOptions={getHeaderOptions}
          />
        )}
      </Stack.Screen>
      <Stack.Screen
        key={menus.SIDE_MENU.name}
        name={menus.SIDE_MENU.name}
        component={menus.SIDE_MENU.component}
        options={({ navigation }) => getHeaderOptions(navigation,
          menus.SIDE_MENU.hiddenMenu, menus.SIDE_MENU.title, menus.SIDE_MENU.isFeatureMainScreen)}
      />
    </Stack.Navigator>
  </SideMenuNavigatorContainer>
);

SideMenuNavigator.propTypes = {
  menus: PropTypes.shape({
    HOME: PropTypes.shape({
      name: PropTypes.string.isRequired,
      hiddenMenu: PropTypes.bool,
      component: PropTypes.func.isRequired,
      title: PropTypes.string,
      isFeatureMainScreen: PropTypes.bool,
    }),
    SIDE_MENU: PropTypes.shape({
      name: PropTypes.string.isRequired,
      hiddenMenu: PropTypes.bool,
      component: PropTypes.func.isRequired,
      title: PropTypes.string,
      isFeatureMainScreen: PropTypes.bool,
    }),
  }).isRequired,
  getHeaderOptions: PropTypes.func.isRequired,
  getHomeContextScreens: PropTypes.func.isRequired,
};

export default SideMenuNavigator;
