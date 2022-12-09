import React from "react";

export default class LogInForm extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: ''
        }
        
        this.handleChangeNamePass = this.handleChangeNamePass.bind(this)
        this.handleChangeUsername = this.handleChangeUsername.bind(this)
        this.handleChangePassword = this.handleChangePassword.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChangeNamePass(e) {
        const target = e.target
        const name = target.name
        const value = target.value
        this.setState({
            [ name ]: value

        })
    }

    

    handleChangeUsername(e) {
        console.log(e)
        this.setState({
            username: e.target.value
        })
    }

    handleChangePassword(e) {
        this.setState({
            password: e.target.value
        })
    }

    handleSubmit(e) {
        alert(`username: ${this.state.username}, password: ${this.state.password}`)
        e.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Username:
                    <input name="username" type="text" value={this.state.username} onChange={this.handleChangeNamePass}/>
                </label>
                <label>
                    Password:
                    <input name="password" type="text" value={this.state.password} onChange={this.handleChangeNamePass}/>
                </label>
                {/* <input type="time"/> */}
                <input type="submit"/>
            </form>
        )
    }
}