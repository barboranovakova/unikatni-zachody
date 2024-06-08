import React from 'react';

export const TopDetails = ({ name, img }) => {
  return (
    <div class="container-list">
      <p>{name}</p>
      <div class="container-img">
        <img src={img} alt={name} />
      </div>
    </div>
  );
};
