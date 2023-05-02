/* eslint-disable react/require-default-props */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import propTypes from 'prop-types';

function DetailsProductCard({
  name, soldQty, price, image, category, warranty,
}) {
  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  return (
    <div className="detailsCard">
      <img src={image} alt="" className="" />
      <div className="infoTextContainer">
        <p>{name}</p>
        <p>{category}</p>
        <p>{`${formatter.format(price)}`}</p>
        <p>{warranty}</p>
        <p>{soldQty <= 1 ? `${soldQty} vendido` : `${soldQty} vendidos` }</p>
      </div>
    </div>
  );
}

DetailsProductCard.propTypes = {
  name: propTypes.string,
  price: propTypes.number,
  soldQty: propTypes.number,
  image: propTypes.string,
  category: propTypes.string,
  warranty: propTypes.string,
};

export default DetailsProductCard;
