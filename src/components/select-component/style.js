import styled from 'styled-components';
import { colors } from '../../configs/colors';

export const Container = styled.TouchableOpacity`
  
`;

export const Content = styled.View`
  flex-direction: row;
  justify-content: space-between;shadow-radius: 2px;
  border-radius: 20px;
  elevation: 1;
  padding: 20px;
  background-color: ${(prop) => prop.backgroundColor};
`;

export const LabelText = styled.Text`
    position: relative;
    color: ${(prop) => (prop.isError ? colors.error.main : colors.text.main)};
    margin: 0px;
    margin-left: 2px;
`;
export const SelectComponentText = styled.Text`
  font-size: 16px;
  color: ${(prop) => prop.textColor};
`;

export const DescriptionText = styled.Text`
    position: relative;
    color: ${(prop) => (prop.isError ? colors.error.main : colors.text.main)};
    margin: 2px;
    font-size: 14px;
`;
