import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
      <div className="header__content container">
        <div className="toillet-logo"></div>

        <div className="navigation">
          <nav className="rollout-nav nav-closed">
            <Link to="/">Domů</Link>
            <Link to="/map">Mapa</Link>
            <a href="#Facts">Fun Facts</a>
            <a href="#contact">Kontakt</a>
          </nav>
        </div>
      </div>
    </header>
  );
};
