import React, { useEffect, useState } from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';
import PlainTextFormItem from '../plain-text-form-item';
import colors from '../../configs/colors';
import {
  SelectContainer, SelectNoDataContainer, NoDataText, SelectListItem, SelectListItemContent,
  SelectListItemName, SelectListItemDescription, SelectListContainer, LoadingContainer, LoadingText,
  SearchComponent, AddButton,
} from './style';
import strings from '../../configs/strings';
import CircularProgress from '../circular-progress';

const SelectScreenComponent = ({
  items, noDataFoundMessage, onPressItem, selectedItem, isLoading, searchLabel, loadingMessage,
  onPressAddButton,
}) => {
  const [filteredItems, setFilteredItems] = useState(items);
  const [searchText, setSearchText] = useState();

  const onChangeSearchTextHandle = (value) => {
    if (!items) {
      setFilteredItems([]);
    } else {
      setFilteredItems(items.filter((item) => !value
       || (item.name && item.name.toLowerCase().includes(value.toLowerCase()))));
    }
  };

  useEffect(() => {
    onChangeSearchTextHandle(searchText);
  }, [items]);

  const onChangeSearchText = (value) => {
    setSearchText(value);
    onChangeSearchTextHandle(value);
  };

  const renderAddButton = () => {
    if (!onPressAddButton) {
      return null;
    }

    return (
      <AddButton onPress={onPressAddButton}>
        <MaterialIcon name="add" size={20} color="#FFF" />
      </AddButton>
    );
  };

  const renderItems = () => {
    if (isLoading) {
      return (
        <LoadingContainer>
          <CircularProgress
            size={100}
            color={colors.primary.main}
            borderColor={colors.text.light}
          />
          <LoadingText>{loadingMessage}</LoadingText>
        </LoadingContainer>
      );
    }

    if (!filteredItems || !filteredItems.length) {
      return (
        <SelectNoDataContainer>
          <AwesomeIcon name="inbox" color={colors.primary.light} size={100} />
          <NoDataText>{noDataFoundMessage}</NoDataText>
        </SelectNoDataContainer>
      );
    }

    return filteredItems.map((item) => (
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
      <SearchComponent>
        <PlainTextFormItem labelText={searchLabel} onChangeText={onChangeSearchText} />
        {renderAddButton()}
      </SearchComponent>

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
  searchLabel: PropTypes.string.isRequired,
  loadingMessage: PropTypes.string,
  onPressAddButton: PropTypes.func,
};

SelectScreenComponent.defaultProps = {
  items: null,
  noDataFoundMessage: strings,
  selectedItem: null,
  isLoading: false,
  loadingMessage: null,
  onPressAddButton: null,
};

export default SelectScreenComponent;
