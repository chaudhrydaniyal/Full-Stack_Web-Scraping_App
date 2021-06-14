import React from 'react';


import './card.styles.css';

export const Card = props => (
  <div className='card-container'>
    <img
      alt='player'
      src={`${props.player.img}`}
    />
    <h2> {props.player.name} </h2>
    <p> {props.player.email} </p>
  </div>
);
