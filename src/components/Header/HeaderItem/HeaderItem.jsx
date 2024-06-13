import { Link } from 'react-router-dom';
import './HeaderItem.css';

export const HeaderItem = ({ onSelect }) => {
  return (
    <>
      <Link to="/" onClick={onSelect} className="menu-item">
        Domů
      </Link>
      <Link to="/map" onClick={onSelect} className="menu-item">
        Mapa
      </Link>
      <a href="#Facts" onClick={onSelect} className="menu-item">
        FunFacts
      </a>
      <a href="#contact" onClick={onSelect} className="menu-item">
        Kontakt
      </a>
    </>
  );
};
