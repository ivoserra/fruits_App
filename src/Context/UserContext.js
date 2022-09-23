import React, { useState } from 'react'
import data from '../data/data'

export const UserContext = React.createContext(null);

export default function UserContextProvider(props){

    const [ edit, setEdit ] = useState(false) 

    const contextUser = { edit, setEdit }

    return(
        <UserContext.Provider value={contextUser}>
            {props.children}
        </UserContext.Provider>
    )
}

