import styled from 'styled-components';
import fonts from '../../configs/fonts';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: white;
  border-radius: 5px;
  elevation: 5;
`;

export const ActionButton = styled.TouchableOpacity`
background-color: white;
padding: 15px;
border-radius: 5px;
`;

export const QuantityInput = styled.TextInput`
font-size: ${fonts.content.size}px;
width: 40px;
text-align: center;
background-color: white;
border-radius: 5px;
`;
