/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import ProductContext from './Context';
import { getCategories } from '../services/productsApi';

function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState('');

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
    categoryId,
    setCategoryId,
    cart,
    setCart,
  }), [cart, products, categories, categoryId]);

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
