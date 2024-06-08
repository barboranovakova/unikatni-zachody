import Fun from '../../../assets/fun.png';
import './FunFacts.css';
import Card from '../../../assets/Rectangle.svg';
import { useEffect, useState } from 'react';

export const FunFacts = () => {
  const [funCards, setFunCards] = useState(null);
  useEffect(() => {
    const fetchCards = async () => {
      const response = await fetch('http://localhost:4000/api/fun-facts');
      const data = await response.json();
      setFunCards(data.data);
    };

    fetchCards();
  }, []);

  return (
    <>
      <section className="fun-facts">
        <div className="fun_title">
          <img src={Fun}></img>
        </div>
        <div className="fun-facts_div">
          {funCards
            ? funCards.map((card) => {
                return (
                  <div key={card.id} className="fun-facts_cards">
                    <div className="fun__facts-fact">{card.funfact}</div>
                  </div>
                );
              })
            : null}
        </div>
      </section>
    </>
  );
};
