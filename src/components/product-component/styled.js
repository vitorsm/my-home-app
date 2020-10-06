import { StyleSheet } from 'react-native';
import styled from 'styled-components';
import colors from '../../configs/colors';
import fonts from '../../configs/fonts';

export const Container = styled.TouchableOpacity`
  padding: 20px;
  padding-bottom: 10px;
  background-color: white;
  margin: 10px;
  margin-bottom: 5px;
  border-radius: 5px;
  elevation: 3;
  border-bottom-color: ${(prop) => (prop.isError ? colors.error.main : colors.success.main)};
  border-bottom-width: 1px;
`;

export const ContentContainer = styled.View`
  flex-direction: row;
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

export const QuantityText = styled.Text`
  font-size: ${fonts.dialogTitle.size}px;
  color: ${(prop) => (prop.isError ? colors.error.main : colors.primary.main)}
`;

export const ValueText = styled.Text`
  font-size: ${fonts.content.size}px;
`;

export const OpenActionButton = styled.TouchableOpacity`
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const ValuesTextContainer = styled.View`
  flex-direction: column;
  padding-right: 20px;
  justify-content: center;
  align-items: center;
`;

export const ActionContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-top: 20px;
  margin-top: 20px;
  border-top-width: ${StyleSheet.hairlineWidth}px;
  border-top-color: ${colors.text.light};
`;

export const RemoveContent = styled.View`
  align-items: center;
`;

export const RemoveContentAction = styled.TouchableOpacity`
  padding: 30px;
  padding-left: 50px;
  padding-right: 50px;
  padding-bottom: 15px;
  justify-content: center;
  align-items: center;
`;
