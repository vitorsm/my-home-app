import styled from 'styled-components';

export const Container = styled.View`
    align-content: center;
    align-items: center;
`;

export const Circular = styled.View`
    background: transparent;
    border-width: ${(props) => props.borderSize}px;
    border-color: ${(props) => props.borderColor};
    border-top-width: ${(props) => props.borderSize}px;
    border-top-color: ${(props) => props.color};
    border-radius: ${(props) => props.size / 2}px;
    width: ${(props) => props.size}px;
    height: ${(props) => props.size}px;
`;
