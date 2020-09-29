import React, { useState } from 'react';
import AnwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as userActions from '../../../redux/actions/userActions';
import {
  Container,
  HeaderItem, ContainerScroll, HeaderMenuItem, TextMenuItem, ProfileImageContainer,
  BackButton, MenuItem, TextMenuHeader, MenuIcon,
} from './style';
import colors from '../../../configs/colors';
import RoundedButton from '../../../components/rounded-button';
import MenuItems from './MenuItems';
import strings from '../../../configs/strings';

const SideMenuScreen = ({ navigation, logoutUser }) => {
  const [menuItems, setMenuItems] = useState();

  useState(() => {
    setMenuItems(MenuItems);
  }, []);

  const onBackButtonClick = () => {
    navigation.goBack();
  };

  const onLogoutButtonClick = () => {
    logoutUser();
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  };

  const onMenuItemClick = (menu) => {
    const menus = menuItems.map((m) => {
      const newMenu = m;
      newMenu.selected = menu && menu.id === m.id;
      return newMenu;
    });

    setMenuItems(menus);
    const routes = [];
    if (menu.screenName !== 'Home') {
      routes.push({ name: 'Home' });
    }
    routes.push({ name: menu.screenName });

    navigation.reset({ index: 0, routes });
  };

  const renderMenuItems = () => {
    if (!menuItems) {
      return null;
    }

    return menuItems.map((item) => (
      <MenuItem
        key={`menu-item-${item.id}`}
        style={{ backgroundColor: item.selected ? colors.text.light : undefined }}
        onPress={() => { onMenuItemClick(item); }}
      >
        <MenuIcon>
          {item.icon}
        </MenuIcon>

        <TextMenuItem>{item.name}</TextMenuItem>
      </MenuItem>
    ));
  };

  return (
    <Container>
      <HeaderItem>
        <ProfileImageContainer>
          <AnwesomeIcon name="user" size={60} color={colors.text.light} />
        </ProfileImageContainer>

        <HeaderMenuItem>
          <TextMenuHeader>Vítor de Sousa Moreira</TextMenuHeader>
          <TextMenuHeader>vitor.moreira</TextMenuHeader>
        </HeaderMenuItem>

        <BackButton onPress={onBackButtonClick}>
          <MaterialIcon name="navigate-before" size={30} color={colors.text.light} />
        </BackButton>
      </HeaderItem>

      <ContainerScroll>
        {renderMenuItems()}
      </ContainerScroll>

      <RoundedButton onPress={onLogoutButtonClick} style={{ margin: 20 }}>{strings('logout')}</RoundedButton>
    </Container>
  );
};

SideMenuScreen.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
    reset: PropTypes.func,
  }).isRequired,
  logoutUser: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  logoutUser: userActions.logout,
};

export default connect(null, mapDispatchToProps)(SideMenuScreen);
