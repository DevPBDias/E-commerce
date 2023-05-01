import React, { useContext } from 'react';
import productContext from '../../context/Context';
import { getProductsFromCategoryAndQuery } from '../../services/productsApi';
import '../../css/CategoriesNavbar.css';

function CategoriesNavbar() {
  const { categories, setProducts } = useContext(productContext);

  const readProducts = async (categoryId) => {
    const data = await getProductsFromCategoryAndQuery(categoryId);
    setProducts(data.results);
  };

  const handleCategories = async ({ target }) => {
    await readProducts(target.id);
  };

  return (
    <div className="divCategories">
      {
        categories?.map((list) => (
          <button
            type="button"
            id={list.id}
            className="btnCategories"
            key={list.id}
            name={list.name}
            onClick={handleCategories}
          >
            {list.name}
          </button>
        ))
      }
    </div>
  );
}

export default CategoriesNavbar;
