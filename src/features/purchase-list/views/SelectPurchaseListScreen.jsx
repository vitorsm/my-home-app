import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SelectScreenComponent from '../../../components/select-screen-component';
import strings from '../../../configs/strings';
import * as purchaseListActions from '../../../redux/actions/purchaseListActions';
import { getLastRouteToSetParamsFromRoutesToReturn } from '../../../utils/routeUtils';

const SelectPurchaseListScreen = ({
  navigation, route, allPurchaseLists, getAllPurchaseLists,
}) => {
  const [purchaseLists, setPurchaseLists] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const prevPurchaseListsRef = useRef(allPurchaseLists);
  const prevPurchaseLists = prevPurchaseListsRef.current;

  useEffect(() => {
    prevPurchaseListsRef.current = allPurchaseLists;
  });

  useEffect(() => {
    getAllPurchaseLists();
    setIsLoading(true);
  }, []);

  useEffect(() => {
    if (allPurchaseLists !== prevPurchaseLists && !allPurchaseLists.error) {
      setPurchaseLists(allPurchaseLists);
    }
    setIsLoading(false);
  }, [allPurchaseLists]);

  const onItemSelected = (item) => {
    const currentRoutes = route.params.routesToReturn;
    const lastRoute = getLastRouteToSetParamsFromRoutesToReturn(currentRoutes);
    lastRoute.params.newSelectedPurchaseList = item;

    navigation.reset({
      index: 0,
      routes: currentRoutes,
    });
  };

  return (
    <SelectScreenComponent
      items={purchaseLists}
      onPressItem={onItemSelected}
      noDataFoundMessage={strings('noPurchaseListFound')}
      selectedItem={route.params.selectedPurchaseList}
      isLoading={isLoading}
      searchLabel={strings('purchaseList')}
    />
  );
};

SelectPurchaseListScreen.propTypes = {
  navigation: PropTypes.shape({
    reset: PropTypes.func.isRequired,
  }).isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      selectedPurchaseList: PropTypes.shape({
        id: PropTypes.number,
      }),
      initialProduct: PropTypes.shape(Object),
      routesToReturn: PropTypes.arrayOf(PropTypes.shape(Object)),
    }),
  }).isRequired,
  allPurchaseLists: PropTypes.arrayOf(PropTypes.shape(Object)),
  getAllPurchaseLists: PropTypes.func.isRequired,
};

SelectPurchaseListScreen.defaultProps = {
  allPurchaseLists: [],
};

function mapStateToProps({ allPurchaseLists }) {
  return { allPurchaseLists };
}

const mapDispatchToProps = {
  getAllPurchaseLists: purchaseListActions.getAllPurchaseLists,
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectPurchaseListScreen);
