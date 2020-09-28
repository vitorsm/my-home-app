import React from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';
import PlainTextFormItem from '../plain-text-form-item';
import { colors } from '../../configs/colors';
import {
  SelectContainer, SelectNoDataContainer, NoDataText, SelectListItem, SelectListItemContent,
  SelectListItemName, SelectListItemDescription, SelectListContainer, LoadingContainer, LoadingText,
} from './style';
import strings from '../../configs/strings';
import CircularProgress from '../circular-progress';

const SelectScreenComponent = ({
  items, noDataFoundMessage, onPressItem, selectedItem, isLoading,
}) => {
  const renderItems = () => {
    if (isLoading) {
      return (
        <LoadingContainer>
          <CircularProgress
            size={100}
            color={colors.primary.main}
            borderColor={colors.text.light}
          />
          <LoadingText>Buscando tipos de produto</LoadingText>
        </LoadingContainer>
      );
    }

    if (!items || !items.length) {
      return (
        <SelectNoDataContainer>
          <AwesomeIcon name="inbox" color={colors.primary.light} size={100} />
          <NoDataText>{noDataFoundMessage}</NoDataText>
        </SelectNoDataContainer>
      );
    }

    return items.map((item) => (
      <SelectListItem
        key={`select-component-${item.id}-${item.name}`}
        onPress={() => onPressItem(item)}
        selected={selectedItem && selectedItem.id === item.id}
      >
        <SelectListItemContent>
          <SelectListItemName>{item.name}</SelectListItemName>
          <SelectListItemDescription>{item.description}</SelectListItemDescription>
        </SelectListItemContent>
        <MaterialIcon name="keyboard-arrow-right" size={15} color={colors.primary.main} />
      </SelectListItem>
    ));
  };

  return (
    <SelectContainer>
      <PlainTextFormItem labelText="Tipo de produto" />
      <SelectListContainer>
        {renderItems()}
      </SelectListContainer>
    </SelectContainer>
  );
};

SelectScreenComponent.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
  })),
  noDataFoundMessage: PropTypes.string,
  onPressItem: PropTypes.func.isRequired,
  selectedItem: PropTypes.shape({
    id: PropTypes.number,
  }),
  isLoading: PropTypes.bool,
};

SelectScreenComponent.defaultProps = {
  items: null,
  noDataFoundMessage: strings,
  selectedItem: null,
  isLoading: false,
};

export default SelectScreenComponent;
