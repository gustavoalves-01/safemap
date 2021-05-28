import React from 'react';

import { Container, SearchContainer } from './styles'

import bgImg from '../../assets/login-bg.png'
import mapImg from '../../assets/map-login.svg'

function Login() {
  return (
      <Container>
          <img src={bgImg} alt="" />
          <img src={mapImg} alt="" id="map" />
      </Container>
  );
}

export default Login;