import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>Palatial Heritage Hotel</h1>
      <nav>
        <ul className='header-ul'>
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
