import React, {useEffect, useState} from 'react'

import { useUser } from '../../../../providers/user'

import { GoogleLogin } from 'react-google-login'

import googleLogo from '../../../../assets/google-logo.png'

import { Container } from './styles';

function LoginModal() {
  const { setUsername, username, nome1 } = useUser()
  let [ nome, setNome ] = useState()
 
  const responseGoogleSuccess = (response) => {
      nome1 = response.profileObj.givenName
      window.location.href = "/Main"
  }

  return (
      <Container>
            <span className="loginSpan">start<b>Now</b></span>
            <GoogleLogin 
              clientId="828243259104-df68ofd7dsta34k53s47njqvj3k7ri6g.apps.googleusercontent.com"
              render={renderProps => (
                <button onClick={renderProps.onClick} className="auth-button" disabled={renderProps.disabled}>
                  <img src={googleLogo}/>
                    Entrar com Google
                </button>
              )}
              onSuccess={responseGoogleSuccess}
              cookiePolicy={"single_host_origin"}
            />
      </Container>  
  );
}

export default LoginModal;