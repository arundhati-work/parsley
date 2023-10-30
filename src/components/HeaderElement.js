import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/Logo.png'
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import '../styles/HeaderElement.css';

export default function HeaderElement() {
  return (
    <div className='header-container'>
        <div className='header-wrapper'>
            <div className='image-wrapper'>
                <NavLink to="/">{<img className='logo-img' src={Logo} alt='Parsley logo'/>}</NavLink>
            </div>
        </div>
        <DesktopNav/>
        <MobileNav/>
    </div>
  )
}
