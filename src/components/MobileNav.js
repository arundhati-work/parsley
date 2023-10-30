import React, {useState} from 'react';
import '../styles/MobileNav.css';
import NavLinks from '../components/NavLinks';
import close from '../assets/close.png';
import hamburger from '../assets/hamburger.png';

export default function MobileNav() {
  const [open,setOpen] = useState(false);
  return (
    <div className='mobile-nav'>
      <button onClick={()=>setOpen(!open)}><img src={open? close : hamburger} alt='menu icon'/></button>
      <NavLinks isMobile={true} open={open} setClose={()=>setOpen(!open)}/>
    </div>
  )
}
