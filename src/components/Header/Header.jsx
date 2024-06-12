import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/logo.png';
import { HeaderItem } from './HeaderItem/HeaderItem';
import { useState } from 'react';

export const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const handleSelectItem = () => {
    setMenuOpened(false);
  };

  return (
    <header>
      <div className="logo">
        <Link to="/">
          <img className="toillet-logo" src={Logo} alt="logo" />
        </Link>
      </div>
      <div className={menuOpened ? 'navigation' : 'navigation nav-closed'}>
        {/* <button
          className="menu__btn"
          onClick={() => setMenuOpened(!menuOpened)}
        ></button> */}
        <HeaderItem onSelect={handleSelectItem} />
      </div>
    </header>
  );
};
