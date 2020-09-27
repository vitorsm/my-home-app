import React from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../../../configs/colors';

const MenuItems = [{
  id: 1,
  name: 'Home',
  icon: (<MaterialIcon name="home" size={20} color={colors.primary.main} />),
  page: 'Home',
  selected: false,
}, {
  id: 2,
  name: 'Marca',
  icon: (<MaterialIcon name="branding-watermark" size={20} color={colors.primary.main} />),
  page: 'Brand',
  selected: false,
}, {
  id: 3,
  name: 'Tipo de produto',
  icon: (<MaterialIcon name="restaurant" size={20} color={colors.primary.main} />),
  page: 'ProductType',
  selected: false,
}, {
  id: 4,
  name: 'Produto',
  icon: (<MaterialIcon name="restaurant" size={20} color={colors.primary.main} />),
  page: 'Product',
  selected: false,
}, {
  id: 5,
  name: 'Lista de compras',
  icon: (<MaterialIcon name="restaurant" size={20} color={colors.primary.main} />),
  page: 'PurchaseList',
  selected: false,
}, {
  id: 6,
  name: 'Compras',
  icon: (<MaterialIcon name="restaurant" size={20} color={colors.primary.main} />),
  page: 'Purchase',
  selected: false,
}];

export default MenuItems;
