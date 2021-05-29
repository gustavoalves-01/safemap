import React from 'react'

import { AuthProvider } from './providers/authContext'

import Modal from 'react-modal'

import Routes from './Routes'

import { GlobalStyle } from './styles/global'

Modal.setAppElement('#root')

function App() {

  return (
    <>
    <AuthProvider>
        <Routes />
        <GlobalStyle />
    </AuthProvider>
    </>
  );
}

export default App;
