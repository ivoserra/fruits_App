import React, { useState } from 'react'
import data from '../data/data'

export const UserContext = React.createContext(null);

export default function UserContextProvider(props){

    const [ api, setApi ] = useState(data.fruits) 

    const contextUser = { api, setApi }

    return(
        <UserContext.Provider value={contextUser}>
            {props.children}
        </UserContext.Provider>
    )
}