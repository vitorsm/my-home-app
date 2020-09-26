import styled from 'styled-components';
import { colors } from '../../../configs/colors';

export const Container = styled.View`
    flex: 1;
`;

export const Label = styled.Text`
    font-size: 30px;
    padding: 20px;
    margin-bottom: 20px;
`;

export const ViewItem = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
`;

export const FieldName = styled.Text`
    font-size: 15px;
    color: ${colors.blackOpacity};
    padding: 20px;
`;
export const FieldValue = styled.Text`
    font-size: 20px;
    color: black
`;
