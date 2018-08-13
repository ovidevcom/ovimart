import React, { Component } from 'react'
import "../../Account.scss"
import Validation from "../../Validation"
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
                email: Validation.isEmailValid(event.target.value),
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
                password: Validation.isPasswordValid(event.target.value),
                confirmPassword: this.state.errors.confirmPassword,
            }
        })
    }

    

    checkSubmitErrorStatus = () => {
        return (Validation.isEmailValid(this.state.email) == "" &&
            Validation.isPasswordValid(this.state.password) == ""
        )
    }
    render() {
        return (
            <div className="Tab-Content">
                <div>
                    <input type="email" placeholder="Email Address" value={this.state.email} onChange={this.handleEmailChange} />
                    <div className="validationErrorNote">
                        {this.state.errors.email}
                    </div>
                </div>
                <div>
                    <input type="password" placeholder="password" value={this.state.password} onChange={this.handlePasswordChange} />

                    <div className="validationErrorNote">
                        {this.state.errors.password}
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
