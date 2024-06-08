import React from 'react';
import './Quiz.css';
import { useNavigate } from 'react-router-dom';
import Papir from '../../../assets/papir.png';

export const Quiz = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/quiz.html');
  };
  return (
    <>
      <section className="test">
        <div className="container-test">
          <h2>Udělej si test, jaký záchod je přímo pro tebe</h2>

          <button onClick={handleClick} className="test-btn">
            Vyplnit test
          </button>
          <div className="img-paper">
            <img className="img-paper" src={Papir} alt="papir" />
          </div>
        </div>
      </section>
    </>
  );
};
