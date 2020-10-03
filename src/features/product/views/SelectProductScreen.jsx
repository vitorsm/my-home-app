import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BackHandler } from 'react-native';
import SelectScreenComponent from '../../../components/select-screen-component';
import strings from '../../../configs/strings';
import * as productActions from '../../../redux/actions/productActions';
import { getLastRouteToSetParamsFromRoutesToReturn } from '../../../utils/routeUtils';

const SelectProductScreen = ({
  navigation, route, allProducts, getAllProducts,
}) => {
  const [products, setProducts] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const prevProductsRef = useRef(allProducts);
  const prevProducts = prevProductsRef.current;

  useEffect(() => {
    prevProductsRef.current = allProducts;
  });

  const onBack = () => {
    navigation.reset({
      index: 0,
      routes: route.params.routesToReturn,
    });
    return true;
  };

  useEffect(() => {
    getAllProducts();
    setIsLoading(true);
    BackHandler.addEventListener('hardwareBackPress', onBack);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', onBack);
    };
  }, []);

  useEffect(() => {
    if (allProducts !== prevProducts && !allProducts.error) {
      const excludeProductsIds = route.params.excludeProducts && route.params.excludeProducts.length
        ? route.params.excludeProducts.map((p) => p.id) : null;

      const filteredProducts = allProducts.filter((p) => !excludeProductsIds
       || !excludeProductsIds.includes(p.id));

      setProducts(filteredProducts);
    }
    setIsLoading(false);
  }, [allProducts]);

  const onPressAddButton = () => {
    navigation.navigate({
      name: 'ProductCreate',
      params: {
        routesToReturn: route.params.routesToReturn,
      },
    });
  };

  const onItemSelected = (item) => {
    const currentRoutes = route.params.routesToReturn;

    const lastRoute = getLastRouteToSetParamsFromRoutesToReturn(currentRoutes);
    lastRoute.params.newSelectedProduct = item;

    navigation.reset({
      index: 0,
      routes: currentRoutes,
    });
  };

  return (
    <SelectScreenComponent
      items={products}
      onPressItem={onItemSelected}
      noDataFoundMessage={strings('noProductFound')}
      isLoading={isLoading}
      searchLabel={strings('product')}
      onPressAddButton={onPressAddButton}
    />
  );
};

SelectProductScreen.propTypes = {
  navigation: PropTypes.shape({
    reset: PropTypes.func.isRequired,
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      routesToReturn: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        params: PropTypes.shape(Object),
        state: PropTypes.shape(Object),
      })),
      excludeProducts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
      })),
    }),
  }).isRequired,
  allProducts: PropTypes.arrayOf(PropTypes.shape(Object)),
  getAllProducts: PropTypes.func.isRequired,
};

SelectProductScreen.defaultProps = {
  allProducts: [],
};

function mapStateToProps({ allProducts }) {
  return { allProducts };
}

const mapDispatchToProps = {
  getAllProducts: productActions.getAllProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectProductScreen);
