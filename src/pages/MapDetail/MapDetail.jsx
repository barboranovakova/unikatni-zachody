import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './MapDetail.css';

export const MapDetail = () => {
  const { id } = useParams();
  const [cafeDetail, setCafeDetail] = useState([]);

  useEffect(() => {
    const fetchCafe = async () => {
      const response = await fetch(`http://localhost:4000/api/toillets/${id}`);
      const data = await response.json();
      setCafeDetail(data.data);
    };

    fetchCafe();
  }, []);

  return (
    <>
      {cafeDetail ? (
        <div className="detail_container">
          <h1>{cafeDetail.place}</h1>
          <img src={`../../../img/${cafeDetail.img}`} />
        </div>
      ) : null}
    </>
  );
};
