import React from 'react';
import '../styles/EachProduct.css';

export default function EachProduct({product}) {
  return (
    <div className='product-container'>
        <div className='product-details'>
        <div className='product-name'>
            <h1>{product.name}</h1>
        </div>
        <div className='product-image'>
            <img src={product.image} alt={product.name}/>
        </div>
        <div className='product-desc'>
            <p>{product.description}</p>
        </div>
        </div>
    </div>
  )
}
