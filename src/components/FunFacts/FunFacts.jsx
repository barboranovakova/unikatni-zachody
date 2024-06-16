import Fun from '../../../assets/fun.png';
import './FunFacts.css';
import Card from '../../../assets/Rectangle.svg';
import { useEffect, useState } from 'react';
import { ButtonCard } from './ButtonCard/ButtonCard';
import bgToilet from '../../../assets/toilet.png';
import funCards from '../../../api/fun-facts.json';

export const FunFacts = () => {
  return (
    <>
      <section id="Facts" className="fun-facts">
        <div className="fun_title">
          <img src={Fun}></img>
        </div>

        <div className="fun-facts_div">
          {funCards
            ? funCards.map((card) => {
                return <ButtonCard key={card.id} card={card} />;
              })
            : null}
        </div>
      </section>
    </>
  );
};
