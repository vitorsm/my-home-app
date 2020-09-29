import styled from 'styled-components';
import colors from '../../configs/colors';
import fonts from '../../configs/fonts';

export const Container = styled.View`
  flex-direction: row;
  padding: 20px;
  justify-content: space-between;
`;

export const TextContainer = styled.View`
  flex-direction: column;
`;

export const ProductText = styled.Text`
  font-size: ${fonts.content.size}px;
  color: ${colors.text.main};
`;

export const ProductTypeText = styled.Text`
  font-size: ${fonts.content.size}px;
  color: ${colors.text.light}
`;
