import { Link } from 'react-router-dom';
import './HeaderItem.css';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const HeaderItem = ({ onSelect }) => {
  const location = useLocation();
  useEffect(() => {
    const sectionId = location.hash.replace('#', '');
    if (sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);
  const handleLinkClick = (sectionId) => {
    onSelect();
    scrollToSection(sectionId);
  };

  return (
    <>
      <Link to="/" onClick={onSelect} className="menu-item">
        Domů
      </Link>
      <Link to="/map" onClick={onSelect} className="menu-item">
        Mapa
      </Link>

      <a
        href="/#Facts"
        onClick={(e) => handleLinkClick('Facts')}
        className="menu-item"
      >
        FunFacts
      </a>
      <a
        href="/#contact"
        onClick={() => handleLinkClick('contact')}
        className="menu-item"
      >
        Kontakt
      </a>
    </>
  );
};
