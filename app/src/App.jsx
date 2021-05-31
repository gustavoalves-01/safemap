import React from 'react'

import Modal from 'react-modal'

import Routes from './Routes'

import { GlobalStyle } from './styles/global'

Modal.setAppElement('#root')

function App() {

  return (
    <>
        <Routes />
        <GlobalStyle /> 
    </>
  );
}

export default App;
