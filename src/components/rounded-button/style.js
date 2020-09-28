import styled from 'styled-components';

export const Container = styled.TouchableOpacity`
    border-radius: 20px;
    padding: 20px;
    background-color: ${(props) => props.backgroundColor};
    opacity: ${(props) => (props.disabled ? 0.5 : 1)};
    elevation: 5
    justify-content: center;
    align-items: center;
`;

export const ButtonText = styled.Text`
    font-size: ${(props) => props.fontSize}px;
    color: ${(props) => props.textColor};
`;
