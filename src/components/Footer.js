import React from 'react';
import '../styles/Footer.css';

export default function Footer() {
  return (
    <div className='footer-container'>
        <div className='inner-container'>
            <div className='address-section'>
                <h1>Parsley Design & Furnishings</h1>
                <p>4, Privet Drive, Little Whinging, Surrey - 781673</p>
            </div>
            <div className='contact-section'>
                <h1>Contact Us</h1>
                <p><a href='mailto:arundhatib.work@gmail.com'>Email Us</a></p>
                <p>+91-919-191-9191</p>
            </div>
            <div className='socials-section'>
                <h1>Socials</h1>
                <p><a href='#'>LinkedIn</a></p>
                <p><a href='#'>Facebook</a></p>
                <p><a href='#'>Instagram</a></p>
            </div>
        </div>
    </div>
  )
}
