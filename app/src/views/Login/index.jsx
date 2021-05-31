import React from 'react';

import Slogan from './components/Slogan'
import LoginModal from './components/LoginModal'

import { Container } from './styles'

import bgImg from '../../assets/login-bg.png'

function Login() {

  return (
      <Container>
          <Slogan />
          <LoginModal />
          <img src={bgImg} alt="" id="bg"/>          
      </Container>
  );
}

export default Login;