import styled from 'styled-components';
import fonts from '../../configs/fonts';
import colors from '../../configs/colors';

export const Container = styled.View`
  background-color: ${(prop) => (prop.backgroundColor ? prop.backgroundColor : 'white')};
  elevation: 2;
  padding: 20px;
`;

export const TextView = styled.View`
  width: 100%;
`;

export const Title = styled.Text`
  color: ${(prop) => (prop.color ? prop.color : colors.primary.main)};
  font-size: ${fonts.content.size}px;
  text-align: center;
`;

export const Description = styled.Text`
  color: ${(prop) => (prop.color ? prop.color : colors.text.light)};
  font-size: ${fonts.content.size}px;
  text-align: center;
`;

export const CardContainer = styled.View`
  width: 100%;
  justify-content: center;
  padding-bottom: 10px;
`;
