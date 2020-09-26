import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PropTypes from 'prop-types';

import { SideMenuNavigatorContainer } from './style';

const Stack = createStackNavigator();

const HomeMenuNavigator = ({ menus, getHeaderOptions }) => {
  const getScreens = () => menus.map((menu) => (
    <Stack.Screen
      key={menu.name}
      name={menu.name}
      component={menu.component}
      options={({ navigation }) => getHeaderOptions(navigation, menu)}
    />
  ));

  return (
    <SideMenuNavigatorContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={
                  {

                  }
              }
      >
        {getScreens()}
      </Stack.Navigator>
    </SideMenuNavigatorContainer>
  );
};

HomeMenuNavigator.propTypes = {
  menus: PropTypes.arrayOf(PropTypes.shape({
    HOME: PropTypes.shape({
      name: PropTypes.string.isRequired,
      hiddenMenu: PropTypes.bool,
      component: PropTypes.element.isRequired,
      title: PropTypes.string,
      isFeatureMainScreen: PropTypes.bool,
      isInternal: PropTypes.bool,
    }),
  })).isRequired,
  getHeaderOptions: PropTypes.func.isRequired,
};

export default HomeMenuNavigator;
