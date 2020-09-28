import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as productTypeActions from '../../../redux/actions/productTypeActions';

import CRUDList from '../../../components/crud-list';
import strings from '../../../configs/strings';

const ProductTypeListScreen = ({ navigation, allProductTypes, getAllProductTypes }) => {
  const [productTypeList, setProductTypeList] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(() => true);
    getAllProductTypes();
  }, []);

  useEffect(() => {
    if (allProductTypes) {
      setIsLoading(() => false);
      if (!allProductTypes.error) {
        setProductTypeList(allProductTypes);
      }
    }
  }, [allProductTypes]);

  const onProductTypeItemClick = (productType) => {
    navigation.navigate({ name: 'ProductTypeCreate', params: { productType } });
  };

  const onAddClick = () => {
    navigation.navigate({ name: 'ProductTypeCreate', params: { productType: null } });
  };

  return (
    <CRUDList
      data={productTypeList}
      isLoading={isLoading}
      onItemClick={onProductTypeItemClick}
      noDataMessage={strings('noProductTypeFound')}
      onAddPress={onAddClick}
    />
  );
};

ProductTypeListScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
  allProductTypes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
  })),
  getAllProductTypes: PropTypes.func.isRequired,
};

ProductTypeListScreen.defaultProps = {
  allProductTypes: [],
};

function mapStateToProps({ allProductTypes }) {
  return { allProductTypes };
}

const mapDispatchToProps = {
  getAllProductTypes: productTypeActions.getAllProductTypes,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductTypeListScreen);
