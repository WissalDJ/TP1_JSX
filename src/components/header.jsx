import React from 'react';
import './header.css';
import image from  './logo.jpg';
function Header() {
  return (
    <header className="header">
      <img src={image} alt="Logo" className="logo" />
      <h1>wis</h1>
    </header>
  );
}

export default Header;
