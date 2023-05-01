/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import ProductContext from './Context';
import { getCategories } from '../services/productsApi';

function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState({});
  const [categories, setCategories] = useState([]);
  const [cartBulls, setCartBulls] = useState([]);

  useEffect(() => {
    const readCategories = async () => {
      const data = await getCategories();
      setCategories(data);
    };
    readCategories();
  }, []);

  const value = useMemo(() => ({
    products,
    setProducts,
    categories,
    setCategories,
    cartBulls,
    setCartBulls,
    user,
    setUser,
  }), [user, products, categories, cartBulls]);

  return (
    <ProductContext.Provider value={value}>
      { children }
    </ProductContext.Provider>
  );
}

ProductProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProductProvider;
