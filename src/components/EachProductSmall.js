import React from 'react';
import '../styles/EachProductSmall.css';
import Product from '../routes/Product';
import {Route} from 'react-router-dom';
import { NavLink } from 'react-router-dom';


export default function EachProductSmall(props) {
    
    const link = '/product/'+props.id;

    const showHeader = () => {
        const contentDiv = document.getElementById(props.id);
        contentDiv.style.height = '6rem';
        contentDiv.style.opacity = 1;
    }

    const hideHeader = () => {
        const contentDiv = document.getElementById(props.id);
        contentDiv.style.height = 0;
        contentDiv.style.opacity = 0;
    }

  return (
    <NavLink key={props.id} to={link} className='link'>
    <div className='each-product-small-container' onMouseEnter={showHeader} onMouseLeave={hideHeader}>
        <div className='img-div'>
            <img src={props.image} alt={props.name}/>
        </div>
        <div id={props.id} className='content-div transition'>
            <p>{props.name}</p>
            <p>&gt;&gt;</p>
        </div>
    </div></NavLink>
  );
}
