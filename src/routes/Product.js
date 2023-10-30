import React from 'react';
import HeaderElement from '../components/HeaderElement';
import EachProduct from '../components/EachProduct';
import productsList from '../data/productsList';
import { useParams } from 'react-router-dom';

export default function Product() {
  const {id} = useParams();
  const product = productsList.find(product => product.id === parseInt(id));
  return (
    <div>
      <HeaderElement/>
      <EachProduct product={product}/>
    </div>
  )
}
