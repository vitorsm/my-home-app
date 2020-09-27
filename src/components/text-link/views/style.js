import styled from 'styled-components';
import { colors } from '../../../configs/colors';

const TextLink = styled.Text`
    text-decoration: underline ${colors.primary.main};
    color: ${colors.primary.main};
    font-size: 17px;
    width: 100%;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
`;

export default TextLink;
