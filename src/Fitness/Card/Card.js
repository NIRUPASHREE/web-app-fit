import React from 'react';
import './Card.css';

function Card({ title, image, small }) {
  return (
    <div className='card-container'>
      <div className='image-container'>
        <img src={image} alt='' />
      </div>
      {small === 0 ? (
        <div className='small card-title'>
          <label>{title}</label>{' '}
        </div>
      ) : (
        <div className='card-title'>
          <label className='label-title'>{title}</label>{' '}
        </div>
      )}
    </div>
  );
}

export default Card;
