import styled from 'styled-components';
import { StyleSheet } from 'react-native';
import { colors } from '../../configs/colors';
import fonts from '../../configs/fonts';

export const SelectContainer = styled.View`
flex: 1;
`;

export const SelectListContainer = styled.ScrollView`
flex: 1;
`;

export const SelectListItem = styled.TouchableOpacity`
flex-direction: row;
padding: 10px;
padding-left: 20px;
padding-right: 20px;
border-bottom-width: ${StyleSheet.hairlineWidth}px;
border-bottom-color: ${colors.text.main};
margin-top: 20px;
margin-left: 10px;
margin-right: 10px;
align-items: center;
background-color: ${(prop) => (prop.selected ? colors.text.light : 'white')}
`;

export const SelectListItemContent = styled.View`
flex: 1;
`;

export const SelectListItemName = styled.Text`
font-size: ${fonts.mainContent.size}px;
font-weight: bold;
`;

export const SelectListItemDescription = styled.Text`
font-size: ${fonts.content.size}px;
`;

export const SelectNoDataContainer = styled.View`
flex: 1;
width: 100%;
margin-top: 150px;
align-items: center;
`;
export const NoDataText = styled.Text`
font-size: ${fonts.content.size}px;
color: ${colors.text.main};
`;

export const LoadingContainer = styled.View`
  width: 100%;
  margin-top: 150px;
  align-items: center;
`;

export const LoadingText = styled.Text`
  font-size: ${fonts.content.size}px;
  color: ${colors.text.main}
`;
