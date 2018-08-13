import React, { Component } from 'react'

export default class Login extends Component {
    state = {
        email: "",
        password: "",
        errors: {
            email: false,
            password: false,
        }
    }
    handleEmailChange = (event) => {
        this.setState({
            email: event.target.value,
            errors: {
                email: !this.isEmailValid(event.target.value),
                password: this.state.errors.password,
                confirmPassword: this.state.errors.confirmPassword
            }
        })
    }
    handlepasswordChange = (event) => {
        this.setState({
            password: event.target.value,
            errors: {
                email: this.errors.state.email,
                password: !this.isPasswordValid(event.target.value),
                confirmPassword: this.state.errors.confirmPassword,
            }
        })
    }
   
    isEmailValid = (str) => {
        return (/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(str));
    }
    isPasswordValid = (str) => {
        return /(?=.*\d)(?=.*[a-zA-Z]).{8,}/.test(str);
    }
   
    checkSubmitErrorStatus = () => {
        return (this.isEmailValid(this.state.email) &&
            this.isPasswordValid(this.state.password)
        )
    }
    render() {
        return (
            <div className="Tab-Content">
                <div>
                    <input type="email" placeholder="Email Address" value={this.state.email} onChange={this.handleEmailChange}/>
                </div>
                <div>
                    <input type="password" placeholder="password" value={this.state.password} onChange={this.handlepasswordChange}/>
                </div>
                <div>
                    <div className={"Button Button_primary"+`${this.checkSubmitErrorStatus()?" Button_is_disabled":""}`}>LOG IN</div>
                </div>
                <div>
                    <div className="Button">FORGOT PASSWORD?</div>
                </div>
            </div>

        )
    }
}
