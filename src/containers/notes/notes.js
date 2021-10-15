import React, { useState, useContext, useEffect } from 'react'
import { FolderContext } from '../../context/folder.context'
import { FileContext } from '../../context/file.context'
import { UserContext } from '../../context/user.context'
import { Wrap } from './notes.styled'
import { dummyFolders, dummyFiles } from '../../data'

export default function Notes() {
    const { currentUser } = useContext(UserContext)
    const [user, setUser] = currentUser 
    const [folders, setFolders] = useContext(FolderContext)
    const [files, setFiles] = useContext(FileContext)

    useEffect( _ => {
        getFolders()
        getFiles()
    }, [])

    const getFolders = _ => {
        if (dummyFolders.length > 0) {
            let foldersList = []
            for (let i = 0; i < dummyFolders.length; i++) {
                if (dummyFolders[i].user_id === user.id) {
                    foldersList.push(dummyFolders[i])
                    setFolders(foldersList)
                }
            }
        }
    }

    const getFiles = _ => {
        if (dummyFiles.length > 0) {
            let fileList = []
            for (let i = 0; i < dummyFiles.length; i++) {
                if (dummyFiles[i].user_id === user.id && dummyFiles[i].folder_id === undefined) {
                    fileList.push(dummyFiles[i])
                    setFiles(fileList)
                } 
            }
        }
    }

    return (
        <Wrap>

        </Wrap>
    )
}