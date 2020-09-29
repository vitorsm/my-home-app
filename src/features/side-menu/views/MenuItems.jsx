import React from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import colors from '../../../configs/colors';
import strings from '../../../configs/strings';

const MenuItems = [{
  id: 1,
  name: strings('home'),
  icon: (<MaterialIcon name="home" size={20} color={colors.primary.main} />),
  screenName: 'Home',
  selected: false,
}, {
  id: 2,
  name: strings('brand'),
  icon: (<MaterialIcon name="branding-watermark" size={20} color={colors.primary.main} />),
  screenName: 'Brand',
  selected: false,
}, {
  id: 3,
  name: strings('productType'),
  icon: (<MaterialIcon name="description" size={20} color={colors.primary.main} />),
  screenName: 'ProductType',
  selected: false,
}, {
  id: 4,
  name: strings('product'),
  icon: (<MaterialIcon name="phone-android" size={20} color={colors.primary.main} />),
  screenName: 'Product',
  selected: false,
}, {
  id: 5,
  name: strings('purchaseList'),
  icon: (<MaterialIcon name="shopping-cart" size={20} color={colors.primary.main} />),
  screenName: 'PurchaseList',
  selected: false,
}, {
  id: 6,
  name: strings('purchases'),
  icon: (<MaterialIcon name="add-shopping-cart" size={20} color={colors.primary.main} />),
  screenName: 'Purchase',
  selected: false,
}];

export default MenuItems;
