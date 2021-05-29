import React, { createContext, useState, useContext } from 'react';

const Context= createContext();

function AuthProvider({ children }) {
    const [authenticated, setAuthenticated] = useState(false)

    return (
        <Context.Provider 
        value={{ 
            authenticated: false
        }}>
        {children}
        </Context.Provider>
    )
}

export const useAuth = () => useContext(AuthProvider)