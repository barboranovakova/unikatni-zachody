import { useState } from 'react';
import logoToilet from '../../../assets/unicorn.png';

export const ButtonCard = ({ card }) => {
  const [otocena, setOtocena] = useState(false);
  const handleClick = () => {
    setOtocena(!otocena);
  };
  return (
    <button
      onClick={handleClick}
      key={card.id}
      className="fun-facts_cards otocena"
    >
      {otocena ? null : (
        <img className="toilet_logo_card" src={logoToilet}></img>
      )}
      {otocena && (
        <div className="fun__facts-fact">
          <p>{card.funfact}</p>
        </div>
      )}
    </button>
  );
};
