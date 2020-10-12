import styled from 'styled-components';
import { Dimensions, StyleSheet } from 'react-native';
import fonts from '../../configs/fonts';
import colors from '../../configs/colors';

export const Container = styled.TouchableOpacity`
  padding: 20px;
  justify-content: center;
  align-items: center;
  elevation: 1;
  border-width: ${StyleSheet.hairlineWidth}px;
  border-color: ${colors.text.light};
  width: ${(Dimensions.get('screen').width - 60) / 2}px;
  margin-right: 10px;
`;

export const Title = styled.Text`
  font-size: ${fonts.content.size}px;
  color: ${colors.primary.main};
`;

export const Description = styled.Text`
  font-size: ${fonts.title.size}px;
  color: ${colors.text.light};
`;
