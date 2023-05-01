import React from 'react';
import Header from '../components/products/Header';
import CategoriesNavbar from '../components/products/CategoriesNavbar';
import ProductsContainer from '../components/products/ProductsContainer';
import Footer from '../components/products/Footer';
import '../css/Header.css';

function Products() {
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
