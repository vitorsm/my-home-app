import styled from 'styled-components';
import { colors } from '../../../configs/colors';
import fonts from '../../../configs/fonts';

export const Container = styled.View`
    background-color: ${colors.primary.main};
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const TitleText = styled.Text`
    font-size: ${fonts.content.size}px;
    color: white;
`;

export const DescriptionText = styled.Text`
    font-size: ${fonts.content.size}px;
    color: white;
    margin-top: 20px;
`;

export const LoadingContainer = styled.View`
    margin-top: 40px;
`;
