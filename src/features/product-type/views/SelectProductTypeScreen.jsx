import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SelectScreenComponent from '../../../components/select-screen-component';
import strings from '../../../configs/strings';
import * as productTypeActions from '../../../redux/actions/productTypeActions';
import { getLastRouteToSetParamsFromRoutesToReturn } from '../../../utils/routeUtils';

const SelectProductTypeScreen = ({
  navigation, route, allProductTypes, getAllProductTypes,
}) => {
  const [productTypes, setProductTypes] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const prevProductTypesRef = useRef(allProductTypes);
  const prevProductTypes = prevProductTypesRef.current;

  useEffect(() => {
    prevProductTypesRef.current = allProductTypes;
  });

  useEffect(() => {
    getAllProductTypes();
    setIsLoading(true);
  }, []);

  useEffect(() => {
    if (allProductTypes !== prevProductTypes && !allProductTypes.error) {
      setProductTypes(allProductTypes);
    }
    setIsLoading(false);
  }, [allProductTypes]);

  const onItemSelected = (item) => {
    const currentRoutes = route.params.routesToReturn;
    const lastRoute = getLastRouteToSetParamsFromRoutesToReturn(currentRoutes);
    lastRoute.params.newSelectedProductType = item;

    navigation.reset({
      index: 0,
      routes: currentRoutes,
    });
  };

  return (
    <SelectScreenComponent
      items={productTypes}
      onPressItem={onItemSelected}
      noDataFoundMessage={strings('noProductTypeFound')}
      selectedItem={route.params.selectedProductType}
      isLoading={isLoading}
      searchLabel={strings('productType')}
    />
  );
};

SelectProductTypeScreen.propTypes = {
  navigation: PropTypes.shape({
    reset: PropTypes.func.isRequired,
  }).isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      selectedProductType: PropTypes.shape({
        id: PropTypes.number,
      }),
      initialProduct: PropTypes.shape(Object),
      routesToReturn: PropTypes.arrayOf(PropTypes.shape(Object)),
    }),
  }).isRequired,
  allProductTypes: PropTypes.arrayOf(PropTypes.shape(Object)),
  getAllProductTypes: PropTypes.func.isRequired,
};

SelectProductTypeScreen.defaultProps = {
  allProductTypes: [],
};

function mapStateToProps({ allProductTypes }) {
  return { allProductTypes };
}

const mapDispatchToProps = {
  getAllProductTypes: productTypeActions.getAllProductTypes,
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectProductTypeScreen);
