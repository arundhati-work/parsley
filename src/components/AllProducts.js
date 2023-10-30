import React from 'react';
import '../styles/AllProducts.css';
import productsList from '../data/productsList';
import EachProductSmall from './EachProductSmall';

export default function AllProducts() {
  return (
    <div className='products-container'>
        <ul>
            {productsList.map((product)=> {
                return (
                    <li>
                        <EachProductSmall image={product.image} name={product.name} key={product.id} id={product.id}/>
                    </li>
                )
            })}
        </ul>
    </div>
  )
}
