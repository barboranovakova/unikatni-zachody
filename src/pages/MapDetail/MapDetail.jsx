import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './MapDetail.css';

export const MapDetail = () => {
  const { id } = useParams();
  const [cafeDetail, setCafeDetail] = useState([]);

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/map');
  };

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
          <button onClick={handleClick} className="zpet">
            zpět
          </button>
          <div className="detail_obsah">
            <img src={`../../../img/${cafeDetail.img}`} />
            <div className="text_container">
              <h1>{cafeDetail.place}</h1>
              <p>
                <strong>Adresa: </strong>
                {cafeDetail.address}
              </p>
              <p>{cafeDetail.description}</p>
              <p>
                <strong>Unikatnost: </strong>
                {cafeDetail.unikatnost}
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};
