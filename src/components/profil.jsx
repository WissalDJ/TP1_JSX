import React from 'react';
import './profil.css';
import ProfileHeader from './ProfileHeader';
import GeneralInfo from './GeneralInfo';
import OtherInfo from './OtherInfo';

function Profil() {
  return (
    <div>
        
    
    <div className="profile-title">
        <h2>Student Profile Page Design Example</h2>
        <p>A responsive student profile page design</p>
      </div>
      <section className="profile">
        <ProfileHeader />
        <GeneralInfo />
        <OtherInfo />
      
    </section>
    </div>
  );
}

export default Profil;
