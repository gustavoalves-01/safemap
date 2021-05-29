import React, { useState } from 'react';


import Slogan from './components/Slogan'
import LoginModal from './components/LoginModal'

import Modal from 'react-modal'

import { Container } from './styles'

import bgImg from '../../assets/login-bg.png'

function Login() {
  const [ isForgotPasswordModalOpen, setIsForgotPasswordModalOpen ] = useState(false)

  function handleOpenForgotPasswordModal() {
    setIsForgotPasswordModalOpen(true)
  }

  function handleCloseForgotPasswordModal() {
    setIsForgotPasswordModalOpen(false)

  }
  

  return (
      <Container>
          <Slogan />
          <LoginModal onOpenForgotPasswordModal={handleOpenForgotPasswordModal} />
          <img src={bgImg} alt="" id="bg"/>

          <Modal 
            isOpen={isForgotPasswordModalOpen}
            onRequestClose={handleCloseForgotPasswordModal}
          >
            <h1>esqueci minha senha</h1>  
          </Modal> 
          
      </Container>
  );
}

export default Login;