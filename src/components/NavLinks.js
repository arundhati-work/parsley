import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/NavLinks.css';

export default function NavLinks(props) {

    const closeMenu = () => {
        if (props.isMobile)
            props.setClose();
    }

    if (props.isMobile){
        if (!props.open){
            return null;
        }
    }
  return (
    <div className='nav-links'>
        <ul>
            <li onClick={closeMenu}>
                <NavLink to='/' className='link'>Home</NavLink>
            </li>
            <li onClick={closeMenu}>
                <NavLink to='/our-products' className='link'>Products</NavLink>
            </li>
            <li onClick={closeMenu}>
                <NavLink to='/motto' className='link'>Our Motto</NavLink>
            </li>
            <li onClick={closeMenu}>
                <NavLink to='mailto:arundhatib.work@gmail.com' className='link green'>Contact Us</NavLink>
            </li>
        </ul>
    </div>
  )
}
