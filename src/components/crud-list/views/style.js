import { Dimensions, StyleSheet } from 'react-native';
import styled from 'styled-components';
import { colors } from '../../../configs/colors';
import fonts from '../../../configs/fonts';

export const Container = styled.View`
    flex: 1;
`;

export const Scroll = styled.ScrollView`
    flex: 1;
`;

export const ListItem = styled.View`
    width: ${Dimensions.get('window').width - 20}px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    padding-left: 10px;
    padding-right: 10px;
    margin-left: 10px;
    margin-right: 10px;
    border-bottom-width: ${StyleSheet.hairlineWidth}px;
    border-bottom-color: ${colors.text.main};
`;

export const ListItemMenuIcon = styled.TouchableOpacity`
    padding: 10px;    
    padding-left: 20px;
    padding-right: 0px;
`;

export const ListItemContent = styled.TouchableOpacity`
    justify-content: flex-start;
    flex-direction: column;
    flex: 1
`;

export const ListItemTitle = styled.Text`
    font-size: ${fonts.mainContent.size}px;
    font-weight: ${fonts.mainContent.isBold ? 'bold' : null};
`;

export const ListItemDescription = styled.Text`
    font-size: ${fonts.content.size}px;
`;

export const AddButton = styled.TouchableOpacity`
    position: absolute;
    justify-content: center;
    align-items: center;
    background-color: ${colors.primary.dark};
    width: 80px;
    height: 80px;
    border-radius: 40px;
    top: ${Dimensions.get('window').height - 170}px;
    left: ${Dimensions.get('window').width - 100}px;
    border-width: 1px;
    border-color: #ddd;
    border-bottom-width: 0px;
    shadow-color: black;
    shadow-opacity: 0.8;
    shadow-radius: 2px;
    elevation: 5;
`;

export const CompensationHeight = styled.View`
    height: 100px;
`;

export const NoDataContainer = styled.View`
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
