import React from 'react';

import { Container } from './styles';

import Routes from '../../../../Routes'

function LoginModal() {
  return (
      <Container>
          <div className="modal-content">
            <span className="loginSpan">log<b>in</b></span>
            <form actionName="submit">
            <input type="text" placeholder="usuário" required />
            <input type="password" placeholder="senha" required />
            <button onClick={() =>{ window.location.href = "//localhost:3000/Main"}}>Entrar</button>
            <a href="#">Esqueci minha senha</a>
            </form>
            <span className="or">ou</span>
            <button className="signup">Cadastrar</button>
         </div>
      </Container>  
  );
}

export default LoginModal;