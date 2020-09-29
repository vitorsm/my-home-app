import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SelectScreenComponent from '../../../components/select-screen-component';
import strings from '../../../configs/strings';
import * as brandActions from '../../../redux/actions/brandActions';

const SelectBrandScreen = ({
  navigation, route, allBrands, getAllBrands,
}) => {
  const [brands, setBrands] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const prevBrandsRef = useRef(allBrands);
  const prevBrands = prevBrandsRef.current;

  useEffect(() => {
    prevBrandsRef.current = allBrands;
  });

  useEffect(() => {
    getAllBrands();
    setIsLoading(true);
  }, []);

  useEffect(() => {
    if (allBrands !== prevBrands && !allBrands.error) {
      setBrands(allBrands.filter((p) => p.id !== route.params.product.id));
    }
    setIsLoading(false);
  }, [allBrands]);

  const onItemSelected = (item) => {
    navigation.reset({
      index: 0,
      routes: [{
        name: 'ProductList',
      }, {
        name: 'ProductCreate',
        params: {
          product: route.params.product,
          selectedNewBrand: item,
          initialProduct: route.params.initialProduct,
        },
      }],
    });
  };

  return (
    <SelectScreenComponent
      items={brands}
      onPressItem={onItemSelected}
      noDataFoundMessage={strings('noBrandFound')}
      selectedItem={route.params.selectedBrand}
      isLoading={isLoading}
      searchLabel={strings('brand')}
    />
  );
};

SelectBrandScreen.propTypes = {
  navigation: PropTypes.shape({
    reset: PropTypes.func.isRequired,
  }).isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      selectedBrand: PropTypes.shape({
        id: PropTypes.number,
      }),
      product: PropTypes.shape(Object),
      initialProduct: PropTypes.shape(Object),
    }),
  }).isRequired,
  allBrands: PropTypes.arrayOf(PropTypes.shape(Object)),
  getAllBrands: PropTypes.func.isRequired,
};

SelectBrandScreen.defaultProps = {
  allBrands: [],
};

function mapStateToProps({ allBrands }) {
  return { allBrands };
}

const mapDispatchToProps = {
  getAllBrands: brandActions.getAllBrands,
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectBrandScreen);
