import styled from 'styled-components';
import { StyleSheet } from 'react-native';

import colors from '../../configs/colors';
import fonts from '../../configs/fonts';

export const Container = styled.TouchableOpacity`
  padding: 10px;
  margin: 5px;
  margin-top: 10px;
  margin-bottom: 10px;
  border-width: ${StyleSheet.hairlineWidth}px;
  border-color: ${colors.text.light};
  border-radius: 15px;
  flex-direction: row;
`;

export const IconContainer = styled.View`
  margin-right: 5px;
`;
export const TextButton = styled.Text`
  color: ${(prop) => (prop.selected ? colors.primary.main : colors.text.main)};
  font-size: ${fonts.title.size}px;
`;
