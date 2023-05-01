/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/require-default-props */
import React from 'react';
import propTypes from 'prop-types';
import '../../css/Products.css';

function ProductCard({
  image, name, price, soldQty, usage,
}) {
  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  return (
    <div className="productsCard">
      <p className={usage === 'new' ? 'conditionNew' : 'conditionUsed'}>
        {usage === 'new' ? 'Novo' : 'Usado'}
      </p>
      <img className="imgProduct" src={image} alt="imgProduct" />
      <h4 className={name.length > 20 ? 'nameProductSmall' : 'nameProductBig'}>
        {name}
      </h4>
      <div className="containerPriceSold">
        <p className="priceProduct">
          {`${formatter.format(price)}`}
        </p>
        <p className="soldQtyProduct">
          {soldQty <= 1 ? `${soldQty} vendido` : `${soldQty} vendidos` }
        </p>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  name: propTypes.string,
  price: propTypes.number,
  soldQty: propTypes.number,
  image: propTypes.string,
  usage: propTypes.string,
};

export default ProductCard;
