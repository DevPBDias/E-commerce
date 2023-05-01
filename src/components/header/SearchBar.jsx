/* eslint-disable import/no-extraneous-dependencies */
import React, { useContext, useState } from 'react';
import lupa from '../../assets/lupa.png';
import productContext from '../../context/Context';

function SearchBar() {
  const [product, setProduct] = useState('');
  const { categories } = useContext(productContext);
  console.log(categories);

  const handleClick = () => {
    console.log('handleClick');
  };

  return (
    <div className="divSearchBar">
      <input
        type="text"
        className="searchBar"
        value={product}
        placeholder="Digite o produto que deseja procurar"
        onChange={({ target }) => setProduct(target.value)}
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
