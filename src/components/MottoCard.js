import React from 'react';
import '../styles/MottoCard.css';

export default function MottoCard(props) {
  return (
    <div className='motto-card-container'>
        <div className='card-img-container'>
            <img src={props.image} alt={props.name}/>
        </div>
        <div className='card-content-container'>
            <h2>{props.name}</h2>
            <p>{props.description}</p>
        </div>
    </div>
  )
}
