import React from 'react';
import '../styles/navigation.scss';
import Logo from '../images/logo.png';
import SearchIcon from '../images/search.png';
import Menu from './Menu';

const Navigation = () => {
  return (
    <div className="nav">
      <div className="nav__container">
        <img src={Logo} alt="instagram logo" className="nav__logo" />
        <div className="nav__search">
          <img
            src={SearchIcon}
            alt="search icon"
            className="nav__search-icon"
          />
          <span className="nav__search-text">Search</span>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default Navigation;
