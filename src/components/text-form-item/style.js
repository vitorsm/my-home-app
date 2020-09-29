import styled from 'styled-components';
import fonts from '../../configs/fonts';

export const Container = styled.View`
    width: 100%;
    padding: 10px;
    align-items: center;
`;

export const Label = styled.Text`
    font-size: ${fonts.screenInputTitle.size}px;
    padding: 20px;
`;

export const Description = styled.Text`
    font-size: ${fonts.content.size}px;
`;

export const TextContainer = styled.View`
    width: 100%;
    padding-left: 30px;
    padding-right: 30px;
    align-items: center;
`;

export const DefaultTextInput = styled.TextInput`
    font-size: ${fonts.screenInputText.size}px;
`;
