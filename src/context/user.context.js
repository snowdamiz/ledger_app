import React, { useState, createContext } from 'react'

export const UserContext = createContext()

export const UserContextProvider = props => {
    const [signInStatus, setSigninStatus] = useState(false)
    return (
        <UserContext.Provider value={[ signInStatus, setSigninStatus ]}>
            { props.children }
        </UserContext.Provider>
    )
}