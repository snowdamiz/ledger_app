import React, { useContext } from 'react'
import { Route, useHistory } from 'react-router-dom'
import { UserContext } from './context/user.context'

function App() {
  const [status] = useContext(UserContext)
  let history = useHistory()

  if (status) history.push('/notes')
  else history.push('/signin')

  return (
    <>
      <Route path="/signin">
        <h1>Sign In</h1>
      </Route>
      <Route path="/notes">
        <h1>Notes</h1>
      </Route>
    </>
  );
}

export default App;
