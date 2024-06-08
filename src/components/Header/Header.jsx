import React from 'react';
import './Header.css';

export const Header = () => {
  return (
    <header>
      <div class="header__content container">
        <div class="toillet-logo"></div>

        <div class="navigation">
          <nav class="rollout-nav nav-closed">
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
