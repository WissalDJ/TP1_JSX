import React from 'react';
import './ProfileHeader.css';
import image from './download.jpg';

function ProfileHeader() {
  return (
    <div className="profile-header">
      <img src={image} alt="Photo de profil" className="profile-img" />
      <h2>Ishmam Ahasan Samin</h2>
      <p>ID Étudiant : 321000001</p>
      <p>Classe : 4, Section : A</p>
    </div>
  );
}

export default ProfileHeader;
