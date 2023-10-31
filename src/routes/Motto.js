import React from 'react';
import HeaderElement from '../components/HeaderElement';
import MottoCard from '../components/MottoCard';
import Quality from '../assets/motto/quality.png';
import Style from '../assets/motto/style.png';
import Comfort from '../assets/motto/comfort.png';
import '../styles/Motto.css';
import Footer from '../components/Footer';

const mottos = [
  {
    id: 1,
    name: 'Quality',
    image: Quality,
    description: 'Exemplifying superior craftsmanship.'
  },
  {
    id: 2,
    name: 'Style',
    image: Style,
    description: 'Infusing your space with design and personality.'
  },
  {
    id: 3,
    name: 'Comfort',
    image: Comfort,
    description: 'Ensuring your relaxation and well-being.'
  },
]

export default function Motto() {
  return (
    <div>
      <HeaderElement/>
      <div className='motto-container'>
        <div className='inner-container'>
          <div className='header'>
            <h1>Quality. Style. Comfort.</h1>
          </div>
          <div className='description'>
            <p>Exquisite furniture, blending craftsmanship and design, for spaces that radiate comfort, elegance, and a timeless sense of style.</p>
          </div>
          <div className='card-container'>
            {
              mottos.map((motto) => {
                return (<MottoCard key={motto.id} name={motto.name} description={motto.description} image={motto.image}/>)
              })
            }
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
