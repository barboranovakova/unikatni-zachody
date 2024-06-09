import React, { useEffect, useState } from 'react';
import { TopDetails } from './TopDetails/TopDetails';
import { TopImage } from './TopImage/TopImage';
import './Top.css';
import Bubble from '../../../assets/bubble.png';
import Seznam from '../../../assets/seznam.png';
import RectangleTop from '../../../assets/Rectangle_top.png';

export const Top = () => {
  const [cafes, setCafes] = useState([]);

  const [cafeName, setCafeName] = useState(1);

  useEffect(() => {
    const fetchCafes = async () => {
      const response = await fetch('http://localhost:4000/api/toillets');
      const data = await response.json();
      setCafes(data.data);
    };

    fetchCafes();
  }, []);
  const changePicture = () => {
    return cafes ? cafes.find((obrazek) => obrazek.id === cafeName) : null;
  };
  const chosenPicture = changePicture();
  console.log(chosenPicture ? chosenPicture.img : null);

  return (
    <section className="cafe-top10">
      <div className="top-headline">
        <h2>TOP 10 unikátních záchodů v Praze</h2>
      </div>

      <div className="container-top">
        <div className="cafe-list">
          <ol>
            {cafes &&
              cafes
                .filter((topky) => topky.reviews > 0)
                .sort((a, b) => b.reviews - a.reviews)
                .map((kavarny) => (
                  <li key={kavarny.id}>
                    <TopDetails
                      name={kavarny.place}
                      id={kavarny.id}
                      onChangePicture={setCafeName}
                    />
                  </li>
                ))}
          </ol>
          <div className="seznam_img">
            <img className="seznam_img" src={Seznam}></img>
          </div>
        </div>

        {chosenPicture ? (
          <TopImage
            key={cafeName}
            img={`/img/${chosenPicture.img}`}
            name={chosenPicture.place}
          />
        ) : null}
      </div>

      <img className="list-sliding_element list-bubble" src={Bubble}></img>
    </section>
  );
};
