import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { Wrap } from './signin.styled'
import { UserContext } from '../../context/user.context'

export default function SignIn() {
    const { currentUser, status } = useContext(UserContext)
    const [user, setUser] = currentUser
    const [signInStatus, setSigninStatus] = status

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    let history = useHistory()
    
    const handleSubmit = _ => {
        setSigninStatus(true)
        setUser({ email: email, password: password })
        history.push('/notes')
    }

    return (
        <Wrap>
            <div className="loginBox">
                <h1>Ledger</h1>
                <div className="buttonsBox">
                    <input
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={ e => setEmail(e.target.value)} />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={ e => setPassword(e.target.value)} />
                    <button onClick={handleSubmit}>Sign In or Register</button>
                </div>
            </div>
        </Wrap>
    )
}