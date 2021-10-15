import React, { useState, useContext } from 'react'
import { Wrap } from './header.styled'
import { UserContext } from '../../context/user.context'

export default function Header() {
    const { currentUser, status } = useContext(UserContext)
    const [user, setUser] = currentUser
    const [signInStatus, setSigninStatus] = status

    const [menuToggle, setMenuToggle] = useState(false)

    const handleSignout = _ => {
        setUser({})
        setSigninStatus(false)
    }

    return (
        <Wrap menu={menuToggle}>
            <h1>Ledger</h1>
            <div className="menu" onClick={ _ => setMenuToggle(!menuToggle)}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            { menuToggle ? (
                <div className="overlayMenu">
                    <button onClick={handleSignout}>Sign Out</button>
                </div>
            ): null }
        </Wrap>
    )
}