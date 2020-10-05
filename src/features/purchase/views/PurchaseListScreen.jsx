import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as purchaseActions from '../../../redux/actions/purchaseActions';

import CRUDList from '../../../components/crud-list';
import strings from '../../../configs/strings';

const PurchaseListScreen = ({ navigation, allPurchases, getAllPurchases }) => {
  const [purchaseList, setPurchaseList] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(() => true);
    getAllPurchases();
  }, []);

  useEffect(() => {
    if (allPurchases) {
      setIsLoading(() => false);
      if (!allPurchases.error) {
        setPurchaseList(allPurchases);
      }
    }
  }, [allPurchases]);

  const onPurchaseItemClick = (purchase) => {
    navigation.navigate({ name: 'PurchaseCreate', params: { purchase } });
  };

  const onAddClick = () => {
    navigation.navigate({ name: 'PurchaseCreate', params: { purchase: null } });
  };

  return (
    <CRUDList
      data={purchaseList}
      isLoading={isLoading}
      onItemClick={onPurchaseItemClick}
      noDataMessage={strings('noPurchaseFound')}
      onAddPress={onAddClick}
    />
  );
};

PurchaseListScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
  allPurchases: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
  })),
  getAllPurchases: PropTypes.func.isRequired,
};

PurchaseListScreen.defaultProps = {
  allPurchases: [],
};

function mapStateToProps({ allPurchases }) {
  return { allPurchases };
}

const mapDispatchToProps = {
  getAllPurchases: purchaseActions.getAllPurchases,
};

export default connect(mapStateToProps, mapDispatchToProps)(PurchaseListScreen);
