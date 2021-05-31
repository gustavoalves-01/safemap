import React, {useEffect, useState} from 'react'

import api from '../../../../services/api'

import googleLogo from '../../../../assets/google-logo.png'

import { Container } from './styles';

function LoginModal(props) {
  const actionLoginGoogle = async() => {
    let result = await api.googleLogar()

    if(result){
      props.onReceiveGoogleData(result.user)
    } else 
    { 
      alert('Error') 
    }

  }

  return (
      <Container>
            <span className="loginSpan">start<b>Now</b></span>
            <button onClick={actionLoginGoogle} className="auth-button">
              <img src={googleLogo}/>
              Entrar com Google
            </button>
      </Container>  
  );
}

export default LoginModal;