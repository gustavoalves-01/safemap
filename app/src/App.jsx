import React, { useState, useEffect } from 'react'

import Routes from './Routes'

import Login from './views/Login'

import { useUser } from './providers/user'

import { GlobalStyle } from './styles/global'

function App() {
  const { username, setUsername } = useUser()

  const[user, setUser] = useState(null)


  const handleGoogleLoginData = async (userReceived) => {
    let newUser = {
      id: userReceived.uid,
      name: userReceived.displayName,  
    }

    setUser(newUser)
  }

  useEffect(() => {
    try{
    setUsername(user.name)
    } catch(e){
      console.log(e);
    }
  }, [user])

  

  if (user === null){
    return(
      <>
      <Login onReceiveGoogleData={handleGoogleLoginData}/>
      <GlobalStyle />
      </>
    )
  }


  return (
    <>
        <Routes />
        <GlobalStyle /> 
    </>
  );
}

export default App;
