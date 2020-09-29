import styled from 'styled-components';
import { StyleSheet } from 'react-native';
import colors from '../../../configs/colors';
import fonts from '../../../configs/fonts';

export const Container = styled.View`
    flex: 1
`;

export const ContainerScroll = styled.ScrollView`
    flex: 1
`;

export const HeaderItem = styled.View`
    width: 100%;
    padding: 10px;
    padding-left: 20px;
    padding-right: 20px;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    background-color: ${colors.primary.dark}
`;

export const HeaderMenuItem = styled.TouchableOpacity`
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1
`;

export const ProfileImageContainer = styled.View`
    padding: 10px;
    padding-left: 17px;
    border-radius: 40px;
    width: 80px;
    height: 80px;
    background-color: ${colors.primary.main};
`;

export const MenuItem = styled.TouchableOpacity`
    padding: 20px;
    padding-left: 10px;
    padding-right: 10px;
    flex-direction: row;
    border-bottom-width: ${StyleSheet.hairlineWidth}px;
    border-bottom-color: ${colors.text.main};
`;

export const TextMenuHeader = styled.Text`
    font-size: ${fonts.title.size}px;
    color: ${colors.text.light}
`;

export const TextMenuItem = styled.Text`
    font-size: ${fonts.content.size}px;
`;

export const BackButton = styled.TouchableOpacity`
    padding: 20px;
    padding-right: 10px;
`;

export const MenuIcon = styled.View`
    margin-left: 20px;
    margin-right: 30px;
`;
