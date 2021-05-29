import React, {useState, useContext} from 'react';

import { AuthContext } from '../../../../providers/authContext'

import { Container } from './styles';

function LoginModal({onOpenForgotPasswordModal}) {

  const [mail, setMail] = useState('')
  const [password, setPassword] = useState('')

  const { signIn } = useContext(AuthContext)

  async function handleSubmit(event) {
    event.preventDefault()
    
    const data = {
      mail,
      password
    }

    await signIn(data)
  }

  return (
      <Container>
          <div className="modal-content">
            <span className="loginSpan">log<b>in</b></span>
            <form onSubmit={handleSubmit} actionName="submit">
            <input type="text" placeholder="usuário" onChange={e => setMail(e.target.value)} required />
            <input type="password" placeholder="senha" onChange={e => setPassword(e.target.value)} required />
            <button className="signin" type="submit">Entrar</button>
            <button className="forgot-password" onClick={onOpenForgotPasswordModal}>Esqueci minha senha</button>
            </form>
            <span className="or">ou</span>
            <button className="signup">Cadastrar</button>
         </div>
      </Container>  
  );
}

export default LoginModal;