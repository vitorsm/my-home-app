import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { MenuButton } from './style';
import getMenuBarConfig from '../configs/headerOptions';

const getHeaderOptions = (navigation, menu) => {
  const headerLeftMenu = () => (
    <MenuButton onPress={() => navigation.navigate('SideMenu')}>
      <Icon name="menu" color="#FFF" size={20} />
    </MenuButton>
  );

  const headerRightMenu = () => (
    <MenuButton onPress={() => {
      navigation.navigate(menu.filterScreenName);
    }}
    >
      <Icon name="search" color="#FFF" size={20} />
    </MenuButton>
  );

  const options = {
    headerLeft: menu.isFeatureMainScreen ? headerLeftMenu : undefined,
    headerRight: menu.isFeatureMainScreen && menu.filterScreenName ? headerRightMenu : undefined,
    headerShown: !menu.hiddenMenu,
    headerTitleStyle: {
      fontWeight: '100',
    },
    title: menu.title,
    cardStyleInterpolator: menu.cardStyleInterpolator,
    ...getMenuBarConfig(),
  };

  return options;
};

getHeaderOptions.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  menu: PropTypes.shape({
    filterScreenName: PropTypes.string.isRequired,
    isFeatureMainScreen: PropTypes.bool,
    hiddenMenu: PropTypes.bool,
    title: PropTypes.string.isRequired,
    cardStyleInterpolator: PropTypes.func,
  }).isRequired,
};

export default getHeaderOptions;
