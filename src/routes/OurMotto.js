import React from 'react';
import HeaderElement from '../components/HeaderElement';
import MottoCard from '../components/MottoCard';
import Quality from '../assets/motto/quality.png';
import Style from '../assets/motto/style.png';
import Comfort from '../assets/motto/comfort.png';
import '../styles/Motto.css';
import Footer from '../components/Footer';
import Motto from '../components/Motto';


export default function OurMotto() {
  return (
    <div>
      <HeaderElement/>
      <Motto/>
      <Footer/>
    </div>
  )
}
