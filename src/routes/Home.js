import React from 'react';
import HeaderElement from '../components/HeaderElement';
import LandingPage from '../components/LandingPage';
import AllProducts from '../components/AllProducts';
import Motto from '../components/Motto';
import Footer from '../components/Footer';
import '../styles/Home.css';

export default function Home() {
  return (
    <div className='home-container'>
      <div className="landing">
        <HeaderElement/>
        <LandingPage/>
      </div>
      <AllProducts/>
      <Motto/>
      <Footer/>
    </div>
  )
}
