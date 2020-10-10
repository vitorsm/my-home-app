import { Animated } from 'react-native';
import styled from 'styled-components';
import colors from '../../../configs/colors';
import fonts from '../../../configs/fonts';

export const Container = styled.View`
    justify-content: flex-start;
    flex: 1;
`;

export const LabelText = styled(Animated.Text)`
    position: relative;
    color: ${(prop) => (prop.isError ? colors.error.main : colors.text.main)};
    margin: 0px;
    margin-left: 2px;
`;

export const TextInput = styled.TextInput`
    font-size: ${fonts.fieldValue.size}px;
    width: 100%;
    margin: 0px;
    border-bottom-width: 1px;
    border-bottom-color: ${(prop) => (prop.isError ? colors.error.main : colors.text.light)};
`;

export const DescriptionText = styled.Text`
    position: relative;
    color: ${(prop) => (prop.isError ? colors.error.main : colors.text.main)};
    margin: 2px;
    font-size: ${fonts.fieldLabel.size}px;
`;
