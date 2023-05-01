import React from 'react';
import Logo from '../header/Logo';
import IconsContainer from '../header/IconsContainer';
import SearchBar from '../header/SearchBar';
import '../../css/Header.css';

function Header() {
  return (
    <div className="header">
      <Logo />
      <SearchBar />
      <IconsContainer />
    </div>
  );
}

export default Header;
