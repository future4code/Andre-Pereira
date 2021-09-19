import React from 'react'
import './Header.css'
import { useHistory } from 'react-router'

export default function Header() {
    const history = useHistory()

    const irInicio = () => {
        history.push("/login")
    }
    return (
        <div className="header">
            <h1>LabeX</h1>
            <button onClick={irInicio}>Login</button>
        </div>
    )
}
