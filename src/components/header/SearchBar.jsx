/* eslint-disable import/no-extraneous-dependencies */
import React, { useContext, useState } from 'react';
import lupa from '../../assets/lupa.png';
import productContext from '../../context/Context';
import { getProductsFromCategoryAndQuery, getProductsFromQuery } from '../../services/productsApi';

function SearchBar() {
  const [productName, setProductName] = useState('');
  const { setProducts, categoryId } = useContext(productContext);

  const readProductsWithCategory = async (id, query) => {
    const data = await getProductsFromCategoryAndQuery(id, query);
    setProducts(data.results);
  };

  const readProductsWithoutCategory = async (query) => {
    const data = await getProductsFromQuery(query);
    setProducts(data.results);
  };

  const handleClick = async () => {
    if (categoryId) {
      await readProductsWithCategory(categoryId, productName);
    } else {
      await readProductsWithoutCategory(productName);
    }
  };

  return (
    <div className="divSearchBar">
      <input
        type="text"
        className="searchBar"
        value={productName}
        placeholder="Digite o produto que deseja procurar"
        onChange={({ target }) => setProductName(target.value)}
      />
      <button
        type="button"
        className="btnSearch"
        onClick={handleClick}
      >
        <img className="icon" src={lupa} alt="iconBtn" />
      </button>
    </div>
  );
}

export default SearchBar;
