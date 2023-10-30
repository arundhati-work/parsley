import React from 'react';
import '../styles/LandingPage.css';
import landingImg from '../assets/landing-img.png';

export default function LandingPage() {
  return (
    <div className='landing-container'>
        <div className='content-div'>
            <div className='text-div'>
                <div className='square'></div>
                <h1>Where style meets <span className='green'>comfort.</span></h1>
                <p>Elevate your space with timeless furniture, Discover quality, craftmanship, and elegance, all at your fingertips.</p>
                <div className='circle'></div>
            </div>
        </div>
        <div className='img-div'>
            <img src={landingImg} alt='landing-img'/>
        </div>
    </div>
  )
}
