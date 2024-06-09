import Fun from '../../../assets/fun.png';
import './FunFacts.css';
import Card from '../../../assets/Rectangle.svg';
import { useEffect, useState } from 'react';
import { ButtonCard } from './ButtonCard/ButtonCard';
import bgToilet from '../../../assets/toilet.png';

export const FunFacts = () => {
  const [funCards, setFunCards] = useState(false);

  const handleClick = () => {
    setFunCards(true);
  };
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
      <section id="Facts" className="fun-facts">
        <div className="fun_title">
          <img src={Fun}></img>
        </div>

        <div className="fun-facts_div">
          {funCards
            ? funCards.map((card) => {
                return (
                  <>
                    <ButtonCard key={card.id} card={card} />
                  </>
                );
              })
            : null}
        </div>
      </section>
    </>
  );
};
