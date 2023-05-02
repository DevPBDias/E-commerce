/* eslint-disable react/require-default-props */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import propTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';
import '../../css/DetailProduct.css';

function CounterProduct({ name, price, image }) {
  const { id } = useParams();
  const [counter, setCounter] = useState(0);
  const formatCart = {
    id,
    name,
    price,
    image,
    qty: counter,
  };

  const handleSubract = () => {
    if (counter > 0) {
      const value = counter - 1;
      setCounter(value);
      formatCart.qty = setCounter(value);
    } else {
      setCounter(0);
    }
  };

  const handleAdd = () => {
    if (counter >= 0) {
      const value = counter + 1;
      setCounter(value);
      formatCart.qty = setCounter(value);
    }
  };

  const readCarItems = () => JSON.parse(localStorage.getItem('cartItems'));
  const saveCartItem = (items) => localStorage.setItem('cartItems', JSON.stringify(items));

  const handleAddToCart = async (item) => {
    const items = await readCarItems();
    const findItem = await items.find((product) => product.id === item.id);
    if (item && !findItem) {
      saveCartItem([...items, item]);
    } else if (item && findItem) {
      const filterItems = await items.filter((product) => product.id !== item.id);
      saveCartItem([...filterItems, item]);
    }
  };

  return (
    <div className="btnProductContainer">
      <div className="counterContainer">
        <p>Quantidade</p>
        <button
          type="button"
          className="btnCounter"
          onClick={handleSubract}
        >
          -
        </button>
        <p className="numberCounter">{counter}</p>
        <button
          type="button"
          className="btnCounter"
          onClick={handleAdd}
        >
          +
        </button>
      </div>
      <div className="btnCartContainer">
        <button
          type="button"
          className="addCartBtn"
          onClick={async () => handleAddToCart(formatCart)}
        >
          Adicionar ao carrinho
        </button>
        <Link to="/buyer">
          <button
            type="button"
            className="goToBuyBtn"
            onClick={async () => handleAddToCart(formatCart)}
          >
            Comprar agora
          </button>
        </Link>
      </div>
    </div>
  );
}

CounterProduct.propTypes = {
  name: propTypes.string,
  image: propTypes.string,
  price: propTypes.number,
};

export default CounterProduct;
