import './TopImage.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const TopImage = ({ img, name }) => {
  const [adress, setAdress] = useState([]);
  useEffect(() => {
    const fetchAdress = async () => {
      const response = await fetch('http://localhost:4000/api/toillets');
      const data = await response.json();
      setAdress(data.data);
    };

    fetchAdress();
  }, []);

  return (
    <>
      <div className="container-img">
        <h4>{name}</h4>
        <img src={img} alt={name} />

        <button className="showme-btn_image">Ukaž mi více</button>
      </div>
    </>
  );
};
