import React from "react"

const LoginButton = (props) => {
    /**
     * log in button component
     * @params 
     * @returns
     */
    return (
        <button onClick={props.onClick}>
            LogIn
        </button>
    )
}

const LogoutButton = (props) => {

    return (
        <button onClick={props.onClick}>
            LogOut
        </button>
    )
}

export { LoginButton, LogoutButton }