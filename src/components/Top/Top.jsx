import React, { useEffect, useState } from 'react';
import { TopDetails } from './TopDetails/TopDetails';
import { TopImage } from './TopImage/TopImage';

export const Top = () => {
  const [cafes, setCafes] = useState([]);
  useEffect(() => {
    const fetchCafes = async () => {
      const response = await fetch('http://localhost:4000/api/toillets');
      const data = await response.json();
      setCafes(data.data);
    };

    fetchCafes();
  }, []);

  return (
    <section className="cafe-top10">
      <div className="container">
        <h2>TOP 10 unikátních záchodů v Praze</h2>
      </div>
      <ol>
        {cafes
          .filter((topky) => topky.reviews > 0)
          .sort((a, b) => b.reviews - a.reviews)
          .map((kavarny) => (
            <li>
              <TopDetails key={kavarny.id} name={kavarny.place} />
            </li>
          ))}
      </ol>
      {cafes
        .filter((topky) => topky.reviews > 0)
        .sort((a, b) => b.reviews - a.reviews)
        .map((kavarny) => (
          <TopImage key={kavarny.id} img={`/img/${kavarny.img}`} />
        ))}
    </section>
  );
};
