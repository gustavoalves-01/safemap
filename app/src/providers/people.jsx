import React, {useState} from 'react'

import { usePlace } from './place'

export const PeopleContext = React.createContext({})

export const PeopleProvider = (props) => {
    const { place } = usePlace()

    const [ peopleAtPlace, setPeopleAtPlace ] = useState[{
        id: place.id,
        quantity: 0
    }]

    return (
        <PeopleContext.Provider
            value={{
                peopleAtPlace,
                setPeopleAtPlace
            }}
        >
            {props.children}
        </PeopleContext.Provider>
    )
}

export const usePeople = () => React.useContext(PeopleContext)