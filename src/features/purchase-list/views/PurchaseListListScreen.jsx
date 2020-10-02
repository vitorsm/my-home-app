import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as purchaseListActions from '../../../redux/actions/purchaseListActions';

import CRUDList from '../../../components/crud-list';
import strings from '../../../configs/strings';

const PurchaseListListScreen = ({ navigation, allPurchaseLists, getAllPurchaseLists }) => {
  const [purchaseListList, setPurchaseListList] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(() => true);
    getAllPurchaseLists();
  }, []);

  useEffect(() => {
    if (allPurchaseLists) {
      setIsLoading(() => false);
      if (!allPurchaseLists.error) {
        setPurchaseListList(allPurchaseLists);
      }
    }
  }, [allPurchaseLists]);

  const onPurchaseListItemClick = (purchaseList) => {
    navigation.navigate({ name: 'PurchaseListCreate', params: { purchaseList } });
  };

  const onAddClick = () => {
    navigation.navigate({ name: 'PurchaseListCreate', params: { purchaseList: null } });
  };

  return (
    <CRUDList
      data={purchaseListList}
      isLoading={isLoading}
      onItemClick={onPurchaseListItemClick}
      noDataMessage={strings('noPurchaseListFound')}
      onAddPress={onAddClick}
    />
  );
};

PurchaseListListScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
  allPurchaseLists: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
  })),
  getAllPurchaseLists: PropTypes.func.isRequired,
};

PurchaseListListScreen.defaultProps = {
  allPurchaseLists: [],
};

function mapStateToProps({ allPurchaseLists }) {
  return { allPurchaseLists };
}

const mapDispatchToProps = {
  getAllPurchaseLists: purchaseListActions.getAllPurchaseLists,
};

export default connect(mapStateToProps, mapDispatchToProps)(PurchaseListListScreen);
