import React, { useState, createContext } from 'react'

export const FileContext = createContext()

export const FileContextProvider = props => {
    const [files, setFiles] = useState()

    return (
        <FileContext.Provider
            value={[ files, setFiles ]}>
            { props.children }
        </FileContext.Provider>
    )
}