import styled from 'styled-components';
import fonts from '../../configs/fonts';
import colors from '../../configs/colors';

export const Container = styled.View`
  background-color: ${(prop) => (prop.backgroundColor ? prop.backgroundColor : 'white')};
  elevation: 10;
`;

export const Title = styled.Text`
  color: ${(prop) => (prop.color ? prop.color : colors.primary.main)};
  font-size: ${fonts.content.size}px;
`;

export const Description = styled.Text`
  color: ${(prop) => (prop.color ? prop.color : colors.text.light)};
  font-size: ${fonts.content.size}px;
`;
