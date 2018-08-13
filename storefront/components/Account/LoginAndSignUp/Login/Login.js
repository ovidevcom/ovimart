import React, { Component } from 'react'
import "../../Account.scss"
export default class Login extends Component {
    state = {
        email: "",
        password: "",
        errors: {
            email: "",
            password: "",
        }
    }
    handleEmailChange = (event) => {
        this.setState({
            email: event.target.value,
            errors: {
                email: this.isEmailValid(event.target.value),
                password: this.state.errors.password,
                confirmPassword: this.state.errors.confirmPassword
            }
        })
    }
    handlePasswordChange = (event) => {
        this.setState({
            password: event.target.value,
            errors: {
                email: this.state.errors.email,
                password: this.isPasswordValid(event.target.value),
                confirmPassword: this.state.errors.confirmPassword,
            }
        })
    }

    isEmailValid = (str) => {
        if (str.length == 0) return "You can't leave this empty.";
        return (/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(str)) ? "" : "This email is invalid";
    }
    isPasswordValid = (str) => {
        if (str.length == 0) return "You can't leave this empty.";
        return /(?=.*\d)(?=.*[a-zA-Z]).{8,}/.test(str)?"":"This password is invalid";
    }

    checkSubmitErrorStatus = () => {
        return (this.isEmailValid(this.state.email)=="" &&
            this.isPasswordValid(this.state.password)==""
        )
    }
    render() {
        return (
            <div className="Tab-Content">
                <div>
                    <input type="email" placeholder="Email Address" value={this.state.email} onChange={this.handleEmailChange} />
                    <div className="validationErrorNote">
                        <span>
                            {this.state.errors.email}
                        </span>
                    </div>
                </div>
                <div>
                    <input type="password" placeholder="password" value={this.state.password} onChange={this.handlePasswordChange} />

                    <div className="validationErrorNote">
                        <span>
                            {this.state.errors.password}
                        </span>
                    </div>
                </div>
                <div>
                    <div className={"Button Button_primary" + `${this.checkSubmitErrorStatus() ? " Button_is_disabled" : ""}`}>LOGIN</div>
                </div>
                <div>
                    <div className="Button">FORGOT PASSWORD?</div>
                </div>
            </div>

        )
    }
}
