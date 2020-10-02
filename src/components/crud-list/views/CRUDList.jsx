import React from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';

import PropTypes from 'prop-types';
import {
  Container, Scroll, AddButton, ListItem, ListItemContent, ListItemTitle, ListItemDescription,
  ListItemMenuIcon, CompensationHeight, NoDataContainer, NoDataText, LoadingContainer, LoadingText,
  DescriptionResultText,
} from './style';

import CircularProgress from '../../circular-progress';
import colors from '../../../configs/colors';
import strings from '../../../configs/strings';

const CRUDList = ({
  data, isLoading, onItemClick, noDataMessage, onAddPress,
}) => {
  const renderListItems = () => data.map((item) => (
    <ListItem key={`crud-list-item-${item.id}-${item.name}`}>
      <ListItemContent onPress={() => onItemClick(item)}>
        <ListItemTitle>{item.name}</ListItemTitle>
        <ListItemDescription>{item.description}</ListItemDescription>
      </ListItemContent>
      <ListItemMenuIcon onPress={() => onItemClick(item)}>
        <MaterialIcon name="more-vert" size={25} />
      </ListItemMenuIcon>
    </ListItem>
  ));

  const renderItems = () => {
    if (isLoading) {
      return (
        <LoadingContainer>
          <CircularProgress
            size={100}
            color={colors.primary.main}
            borderColor={colors.text.light}
          />
          <LoadingText>Buscando marcas</LoadingText>
        </LoadingContainer>
      );
    }

    if (!data.length) {
      return (
        <NoDataContainer>
          <AwesomeIcon name="inbox" color={colors.primary.light} size={100} />
          <NoDataText>{noDataMessage}</NoDataText>
        </NoDataContainer>
      );
    }

    return (
      <>
        <DescriptionResultText>
          {data.length}
          {' '}
          {strings('items')}
        </DescriptionResultText>
        <Scroll>
          {renderListItems()}
          <CompensationHeight />
        </Scroll>
      </>
    );
  };
  return (
    <Container>
      {renderItems()}
      <AddButton onPress={onAddPress}>
        <MaterialIcon name="add" size={30} color="#FFF" />
      </AddButton>
    </Container>
  );
};

CRUDList.propTypes = {
  isLoading: PropTypes.bool,
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
  })),
  onItemClick: PropTypes.func,
  noDataMessage: PropTypes.string,
  onAddPress: PropTypes.func,
};

CRUDList.defaultProps = {
  isLoading: false,
  data: [],
  onItemClick: null,
  noDataMessage: null,
  onAddPress: null,
};

export default CRUDList;
