import React from 'react';
import { TopDetails } from './TopDetails/TopDetails';

export const Top = () => {
  return (
    <section className="cafe-top10">
      <div className="container">
        <h2>TOP 10 unikátních záchodů v Praze</h2>
      </div>
      <TopDetails />
    </section>
  );
};
