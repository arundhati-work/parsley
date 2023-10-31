import React from 'react';
import HeaderElement from '../components/HeaderElement';
import AllProducts from '../components/AllProducts';
import '../styles/AllProducts.css';
import Footer from '../components/Footer';

export default function OurProducts() {
  return (
    <div>
      <HeaderElement/>
      <AllProducts/>
      <Footer/>
    </div>
  )
}
