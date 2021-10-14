import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { UserContextProvider } from './context/user.context'
import { BrowserRouter } from 'react-router-dom'
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <UserContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UserContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)