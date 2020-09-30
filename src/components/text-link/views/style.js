import styled from 'styled-components';
import colors from '../../../configs/colors';
import fonts from '../../../configs/fonts';

const TextLink = styled.Text`
    text-decoration: underline ${colors.primary.main};
    color: ${colors.primary.main};
    font-size: ${fonts.content.size}px;
    text-align: center;
    margin-top: ${(prop) => (prop.marginTop !== undefined ? prop.marginTop : 20)}px;
    margin-bottom: ${(prop) => (prop.marginBottom !== undefined ? prop.marginBottom : 20)}px;
`;

export default TextLink;
