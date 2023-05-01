import React from 'react';
import { Link } from 'react-router-dom';
import user from '../../assets/user.png';
import cart from '../../assets/cart.png';

function IconsContainer() {
  return (
    <div className="divIconsMenu">
      <Link to="/cart">
        <img className="icon" src={cart} alt="iconBtn" />
      </Link>
      <Link to="/profile">
        <img className="icon" src={user} alt="iconBtn" />
      </Link>
    </div>
  );
}

export default IconsContainer;
