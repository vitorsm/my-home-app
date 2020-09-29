import styled from 'styled-components';
import { colors } from '../../../configs/colors';
import fonts from '../../../configs/fonts';

const TextLink = styled.Text`
    text-decoration: underline ${colors.primary.main};
    color: ${colors.primary.main};
    font-size: ${fonts.content.size}px;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
`;

export default TextLink;
