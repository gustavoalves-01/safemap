import React,{useState} from 'react';

export const UserContext = React.createContext({})

export const UserProvider = (props) => {
    const [username, setUsername] = useState('default')
    
    return (
        <UserContext.Provider value={{username, setUsername}}>
            {props.children}
        </UserContext.Provider>
    )
}

export const useUser = () => React.useContext(UserContext)