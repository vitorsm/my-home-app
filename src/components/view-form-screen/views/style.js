import styled from 'styled-components';
import colors from '../../../configs/colors';
import fonts from '../../../configs/fonts';

export const Container = styled.View`
    flex: 1;
`;

export const Label = styled.Text`
    font-size: ${fonts.screenInputTitle.size}px;
    padding: 20px;
    margin-bottom: 20px;
`;

export const ViewItem = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
`;

export const FieldName = styled.Text`
    font-size: ${fonts.content.size}px;
    color: ${colors.text.main};
    padding: 20px;
`;
export const FieldValue = styled.Text`
    font-size: ${fonts.screenInputText.size}px;
    color: black
`;

export const LoadingContainer = styled.View`
    width: 100%;
    margin-top: 30px;
`;
