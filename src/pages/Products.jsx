import React, { useEffect } from 'react';
import Header from '../components/products/Header';
import CategoriesNavbar from '../components/products/CategoriesNavbar';
import ProductsContainer from '../components/products/ProductsContainer';
import Footer from '../components/products/Footer';
import '../css/Header.css';

function Products() {
  const readCartItems = () => JSON.parse(localStorage.getItem('cartItems'));

  useEffect(() => {
    const getCartItems = readCartItems();
    if (!getCartItems) {
      localStorage.setItem('cartItems', JSON.stringify([]));
    }
  }, []);

  return (
    <div>
      <Header />
      <main className="mainContainer">
        <CategoriesNavbar />
        <ProductsContainer />
      </main>
      <Footer />
    </div>
  );
}

export default Products;
