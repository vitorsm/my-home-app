import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as brandActions from '../../../redux/actions/brandActions';

import CRUDList from '../../../components/crud-list';

const NO_BRAND_MESSAGE = 'Nenhuma marca cadastrada';

const BrandListScreen = ({ navigation, allBrands, getAllBrands }) => {
  const [brandList, setBrandList] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(() => true);
    getAllBrands();
  }, []);

  useEffect(() => {
    if (allBrands) {
      setIsLoading(() => false);
      if (!allBrands.error) {
        setBrandList(allBrands);
      }
    }
  }, [allBrands]);

  const onBrandItemClick = (brand) => {
    navigation.navigate({ name: 'BrandCreate', params: { brand } });
  };

  const onAddClick = () => {
    navigation.navigate({ name: 'BrandCreate', params: { brand: null } });
  };

  return (
    <CRUDList
      data={brandList}
      isLoading={isLoading}
      onItemClick={onBrandItemClick}
      noDataMessage={NO_BRAND_MESSAGE}
      onAddPress={onAddClick}
    />
  );
};

BrandListScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
  allBrands: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
  })),
  getAllBrands: PropTypes.func.isRequired,
};

BrandListScreen.defaultProps = {
  allBrands: [],
};

function mapStateToProps({ allBrands }) {
  return { allBrands };
}

const mapDispatchToProps = {
  getAllBrands: brandActions.getAllBrands,
};

export default connect(mapStateToProps, mapDispatchToProps)(BrandListScreen);
