import React from "react"

function UserGreeting(props) {
    return <h1>Welcome back {props.name || 'dave'}</h1>
}

const GuestGreeting = (props) => {
    return <h1>Please sign up</h1>
}

export default (props) => {
    const isLoggedIn = props.isLoggedIn
    if (isLoggedIn) {
        return <UserGreeting name={props.name}/>
    } else {
        return <GuestGreeting/>
    }

}

// export default Greeting
