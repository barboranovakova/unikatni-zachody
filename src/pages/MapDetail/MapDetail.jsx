import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './MapDetail.css';
import cafeData from '../../../api/toillets.json';

export const MapDetail = () => {
  const { id } = useParams();
  const [cafeDetail, setCafeDetail] = useState([]);

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/map/');
  };

  useEffect(() => {
    const data = cafeData.find((cafe) => cafe.id === parseInt(id));
    setCafeDetail(data);
  }, [id]);

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
              {cafeDetail.unikatnost ? (
                <p>
                  <strong>Unikátnost: </strong>
                  {cafeDetail.unikatnost}
                </p>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};
