import React, { useEffect } from 'react'
import { BrowserRouter, Roue, Switch, useHistory } from 'react-router-dom'

function App() {
  useEffect( _ => {
    let history = useHistory();
    
  }, [])

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/signin">

          </Route>
          <Route path="/notes">

          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
