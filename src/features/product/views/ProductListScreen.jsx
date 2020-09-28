import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as productActions from '../../../redux/actions/productActions';

import CRUDList from '../../../components/crud-list';
import strings from '../../../configs/strings';

const ProductListScreen = ({ navigation, allProducts, getAllProducts }) => {
  const [productList, setProductList] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(() => true);
    getAllProducts();
  }, []);

  useEffect(() => {
    if (allProducts) {
      setIsLoading(() => false);
      if (!allProducts.error) {
        setProductList(allProducts);
      }
    }
  }, [allProducts]);

  const onProductItemClick = (product) => {
    navigation.navigate({ name: 'ProductCreate', params: { product } });
  };

  const onAddClick = () => {
    navigation.navigate({ name: 'ProductCreate', params: { product: null } });
  };

  return (
    <CRUDList
      data={productList}
      isLoading={isLoading}
      onItemClick={onProductItemClick}
      noDataMessage={strings('noProductFound')}
      onAddPress={onAddClick}
    />
  );
};

ProductListScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
  allProducts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
  })),
  getAllProducts: PropTypes.func.isRequired,
};

ProductListScreen.defaultProps = {
  allProducts: [],
};

function mapStateToProps({ allProducts }) {
  return { allProducts };
}

const mapDispatchToProps = {
  getAllProducts: productActions.getAllProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductListScreen);
