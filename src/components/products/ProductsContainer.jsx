import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import productContext from '../../context/Context';
import '../../css/Products.css';
import ProductCard from './ProductCard';

function ProductsContainer() {
  const { products } = useContext(productContext);

  return (
    <div className="divProductsContainer">
      {
        products?.map((item) => (
          <Link key={item.id} to={`/product/${item.id}`}>
            <ProductCard
              soldQty={item.sold_quantity}
              key={item.id}
              usage={item.condition}
              image={item.thumbnail}
              name={item.title}
              price={item.price}
            />
          </Link>
        ))
      }
    </div>
  );
}

export default ProductsContainer;
