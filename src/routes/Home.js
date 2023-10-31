import React from 'react';
import HeaderElement from '../components/HeaderElement';
import LandingPage from '../components/LandingPage';
import AllProducts from '../components/AllProducts';

export default function Home() {
  return (
    <div>
      <HeaderElement/>
      <LandingPage/>
      <AllProducts/>
    </div>
  )
}
