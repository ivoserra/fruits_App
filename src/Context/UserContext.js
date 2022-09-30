import React, { useState } from 'react'


export const UserContext = React.createContext(null);

export default function UserContextProvider(props){

    const [ edit, setEdit ] = useState(false) 
    const [isSuccessful, setIsSuccessFul] = useState(false)

    const contextUser = { edit, setEdit , isSuccessful, setIsSuccessFul}

    return(
        <UserContext.Provider value={contextUser}>
            {props.children}
        </UserContext.Provider>
    )
}

