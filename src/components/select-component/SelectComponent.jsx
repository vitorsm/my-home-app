import React from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import PropType from 'prop-types';
import {
  Container, SelectComponentText, Content, DescriptionText, LabelText,
} from './style';
import { colors } from '../../configs/colors';

const SelectComponent = ({
  onPress, style, backgroundColor, textColor, label, selectedValue, description,
}) => (
  <Container onPress={onPress} style={{ ...style }}>
    <LabelText>{selectedValue ? label : null}</LabelText>
    <Content backgroundColor={backgroundColor}>
      <SelectComponentText
        textColor={selectedValue ? textColor : colors.text.dark}
      >
        {selectedValue || label}
      </SelectComponentText>
      <MaterialIcon name="keyboard-arrow-down" size={20} color={colors.primary.main} />
    </Content>
    <DescriptionText>{description}</DescriptionText>
  </Container>
);

SelectComponent.propTypes = {
  onPress: PropType.func,
  style: PropType.shape(Object),
  backgroundColor: PropType.string,
  textColor: PropType.string,
  label: PropType.string,
  selectedValue: PropType.string,
  description: PropType.string,
};

SelectComponent.defaultProps = {
  onPress: null,
  style: null,
  backgroundColor: colors.text.light,
  textColor: colors.primary.dark,
  label: null,
  selectedValue: null,
  description: null,
};

export default SelectComponent;
