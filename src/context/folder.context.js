import React, { useState, createContext } from 'react'

export const FolderContext = createContext()

export const FolderContextProvider = props => {
    const [folders, setFolders] = useState()

    return (
        <FolderContext.Provider
            value={[ folders, setFolders ]}>
            { props.children }
        </FolderContext.Provider>
    )
}