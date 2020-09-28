import { Dimensions } from 'react-native';
import styled from 'styled-components';

export const Container = styled.View`
    position: absolute;
    top: 0px;
    left: 0px;
    width: ${Dimensions.get('window').width}px;
    height: ${Dimensions.get('window').height}px;
`;

export const Paper = styled.View`
    top: ${(props) => props.top}px;
    left: ${(props) => props.left}px;
    width: ${(props) => props.width}px;
    padding: 20px;
    zIndex: 10;
    background-color: white;
    border-width: 1px;
    border-radius: 20px;
    border-color: #ddd;
    border-bottom-width: 0px;
    shadow-color: black;
    shadow-opacity: 0.8;
    shadow-radius: 2px;
    elevation: 20;
`;

export const MessageContentContainer = styled.View`
    width: 100%;
`;

export const TitleContainer = styled.View`
    width: 100%;
    text-align: center;
    margin-bottom: 40px;
`;

export const MessageTitle = styled.Text`
    font-weight: bold;
    font-size: 20px;
    text-align: center;
`;

export const TextContainer = styled.View`
    width: 100%;
    text-align: center;
    margin-bottom: 50px;
`;

export const ActionsContainer = styled.View`
    width: 100%;
    flex-direction: row;
`;

export const MessageText = styled.Text`
    width: 100%;
    font-size: 17px;
    text-align: center;
`;

export const ImageContainer = styled.View`
    width: 100%;
    align-items: center;
    margin-bottom: 40px;
`;
