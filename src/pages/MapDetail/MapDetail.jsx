import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

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

  return <>{cafeDetail.name}</>;
};
