import React from 'react';
import './GeneralInfo.css';

function GeneralInfo() {
  return (
    <div className="general-info">
      <h3>Informations Générales</h3>
      <table>
        <tbody>
          <tr>
            <th>Roll</th>
            <td>125</td>
          </tr>
          <tr>
            <th>Année Académique</th>
            <td>2020</td>
          </tr>
          <tr>
            <th>Genre</th>
            <td>Masculin</td>
          </tr>
          <tr>
            <th>Religion</th>
            <td>Groupe</td>
          </tr>
          <tr>
            <th>Sang</th>
            <td>B+</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default GeneralInfo;
