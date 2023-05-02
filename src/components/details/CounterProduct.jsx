/* eslint-disable react/require-default-props */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useContext, useState } from 'react';
import propTypes from 'prop-types';
import productContext from '../../context/Context';

function CounterProduct({ name, price, image }) {
  const [counter, setCounter] = useState(0);
  const { cart, setCart } = useContext(productContext);

  const handleSubract = () => {
    if (counter > 0) {
      const value = counter - 1;
      setCounter(value);
    } else {
      setCounter(0);
    }
  };

  const handleAdd = () => {
    if (counter >= 0) {
      const value = counter + 1;
      setCounter(value);
    }
  };

  const handleAddToCart = async () => {
    const formatCart = {
      name,
      price,
      image,
      qty: counter,
    };
    await setCart([...cart, formatCart]);
    await console.log(cart);
  };

  return (
    <div className="counterContainer">
      <button
        type="button"
        onClick={handleSubract}
      >
        -
      </button>
      <p>{counter}</p>
      <button
        type="button"
        onClick={handleAdd}
      >
        +
      </button>
      <button
        type="button"
        className="addCartBtn"
        onClick={handleAddToCart}
      >
        Adicionar no carrinho
      </button>
    </div>
  );
}

CounterProduct.propTypes = {
  name: propTypes.string,
  image: propTypes.string,
  price: propTypes.number,
};

export default CounterProduct;
