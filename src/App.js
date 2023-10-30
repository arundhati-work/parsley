import './App.css';
import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from './routes/Home';
import OurProducts from './routes/OurProducts';
import Motto from './routes/Motto';
import ContactUs from './routes/ContactUs';
import Product from './routes/Product';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/our-products" element={<OurProducts/>}/>
        <Route path="/motto" element={<Motto/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
        <Route path="/product/:id" element={<Product/>}/>
      </Routes>
    </>
  );
}

export default App;
