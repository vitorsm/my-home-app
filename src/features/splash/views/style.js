import styled from 'styled-components';
import { colors } from '../../../configs/colors';

export const Container = styled.View`
    background-color: ${colors.primary};
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const TitleText = styled.Text`
    font-size: 20px;
    color: white;
`;

export const DescriptionText = styled.Text`
    font-size: 15px;
    color: white;
    margin-top: 20px;
`;

export const LoadingContainer = styled.View`
    margin-top: 40px;
`;
