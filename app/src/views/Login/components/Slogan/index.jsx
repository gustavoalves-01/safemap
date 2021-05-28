import React from 'react';

import { Container } from './styles';

import logoImg from '../../../../assets/logo.svg'
import mapImg from '../../../../assets/map-login.png'


function Slogan() {
  return (
      <Container>
             <div className="text">
             <span id="first-line">Evite aglomerações</span>
             <span id="second-line">Use <span>Safe<b>Map </b></span> 
             <img src={logoImg} alt="" />
             </span>
             </div>
             <img src={mapImg} alt="" id="map"/>
      </Container>
  )
}

export default Slogan;