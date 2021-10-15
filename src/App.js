import React, { useContext } from 'react'
import { Route, useHistory } from 'react-router-dom'
import { UserContext } from './context/user.context'
import { FolderContextProvider } from './context/folder.context'
import { FileContextProvider } from './context/file.context'
import SignIn from './containers/signin/signin'
import Notes from './containers/notes/notes'
import Header from './components/header/header'

export default function App() {
  const { status } = useContext(UserContext)
  const [signInStatus, setSigninStatus] = status
  
  let history = useHistory()

  if (signInStatus) history.push('/notes')
  else history.push('/signin')

  return (
    <>
      { signInStatus ? (
        <Header />
      ) : null }
      <Route path="/signin">
        <SignIn />
      </Route>
      <Route path="/notes">
        <FolderContextProvider>
        <FileContextProvider>
          <Notes />
        </FileContextProvider>
        </FolderContextProvider>
      </Route>
    </>
  )
}
