import React from 'react';
import './Quiz.css';
import { useNavigate } from 'react-router-dom';

export const Quiz = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/quiz');
  };
  return (
    <>
      <section className="test">
        <div className="container-test">
          <h2>Udělej si test, jaký záchod je přímo pro tebe</h2>

          <button onClick={handleClick} className="test-btn">
            Vyplnit test
          </button>
        </div>
      </section>
    </>
  );
};
