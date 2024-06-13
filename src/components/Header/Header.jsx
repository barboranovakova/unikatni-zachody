import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/logo.png';
import { HeaderItem } from './HeaderItem/HeaderItem';
import { useState } from 'react';

export const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const handleSelectItem = () => {
    setMenuOpened(!menuOpened);
  };

  return (
    <header>
      <div className="logo">
        <Link to="/">
          <img className="toillet-logo" src={Logo} alt="logo" />
        </Link>
      </div>
      <div className="hamburger-menu">
        <button className="menu-icon" onClick={handleSelectItem}></button>
        <nav className={`navigation ${menuOpened ? 'open' : ' '}`}>
          <HeaderItem onSelect={handleSelectItem} />
        </nav>
      </div>
      <div className="desktop-menu">
        <nav className="navigation">
          <HeaderItem onSelect={handleSelectItem} />
        </nav>
      </div>
    </header>
  );
};
