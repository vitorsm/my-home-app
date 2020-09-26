import styled from 'styled-components';

export const Container = styled.TouchableOpacity`
    width: 100%;
    background-color: ${(props) => props.backgroundColor};
    opacity: ${(props) => (props.disabled ? 0.5 : 1)};
    padding: 20px;
    align-items: center;
    justify-content: center;
`;

export const TextButton = styled.Text`
    color: ${(props) => props.color};
    font-size: ${(props) => props.fontSize}px;
`;
