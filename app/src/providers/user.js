import React,{useState} from 'react';

export const UserContext = React.createContext({})

export const UserProvider = (props) => {
    let [username, setUsername] = useState('default')
    let nome1
    return (
        <UserContext.Provider value={{nome1, username, setUsername}}>
            {props.children}
        </UserContext.Provider>
    )
}

export const useUser = () => React.useContext(UserContext)