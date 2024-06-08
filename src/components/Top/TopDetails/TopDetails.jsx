import React from 'react';
import './TopDetails.css';

export const TopDetails = ({ onChangePicture, name, id }) => {
  const choosePicture = () => {
    onChangePicture(id);
  };

  return (
    <div className="container-list">
      <p onClick={choosePicture}>{name}</p>
    </div>
  );
};
