import React from 'react';
import './Banner.css';
import Bubble from '../../../assets/bubble.png';
import Typek from '../../../assets/typek.png';
import Plunger from '../../../assets/plunger.png';
import { useNavigate } from 'react-router-dom';

export const Banner = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/map.html');
  };

  return (
    <>
      <div className="sliding-element">
        <img className="bubble" src={Bubble} />
      </div>
      <div className="toilet_stuff1">
        <img className="toilet_stuff1" src={Plunger} />
      </div>
      <div className="toilet_stuff2">
        <img className="toilet_stuff2" src={Typek} />
      </div>
      <section className="opening">
        <h1>Unikátní záchody po celé Praze</h1>

        <div className="banner_content">
          <p className="main_text">
            Pokud během tvojí návštěvy gastropodniku nezazní: "jdu na wc, musím
            se podívat, jaký tady mají záchod" nebo "musíš jít na záchod, mají
            to tam fakt cool", tak tohle nebude místo pro tebe.
          </p>
          <p className="second_text">
            Jo, počkej. Ty ale určitě patříš do skupiny lidí, kteří si podnik
            vybírají podle toho, jaký tam je záchod. Super! Tak kam to bude
            dneska?
          </p>

          <button onClick={handleClick} className="find-btn">
            Najít záchod
          </button>
        </div>
      </section>
    </>
  );
};
