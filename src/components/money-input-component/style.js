import styled from 'styled-components';
import fonts from '../../configs/fonts';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: white;
  border-radius: 5px;
  elevation: 5;
  padding-left: 20px;
  padding-right: 20px;
`;

export const SymbolText = styled.Text`
  font-size: ${fonts.content.size}px;
`;

export const MoneyInput = styled.TextInput`
  font-size: ${fonts.content.size}px;
  width: 80px;
  text-align: center;
  background-color: white;
  border-radius: 5px;
`;
