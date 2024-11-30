import React from 'react';
import './navigation.css';

function Navigation() {
  return (
    <nav className="navigation">
      <a href="#accueil">Accueil</a>
      <a href="profil.jsx" >Profil</a>
      <a href="contact.jsx">Contact</a>
    </nav>
  );
}

export default Navigation;
