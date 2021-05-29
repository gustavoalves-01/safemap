import React, { createContext, useState, useContext } from 'react';

import {api} from '../services/api'

export const AuthContext= createContext({});

export function AuthProvider({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    async function signIn({ mail, password }) {
        const reponse = await api.post('auth/authenticate',{
            mail,
            password
        })
        
    }

    return (
        <AuthContext.Provider 
        value={{ signIn }}>
        {children}
        </AuthContext.Provider>
    )
}

