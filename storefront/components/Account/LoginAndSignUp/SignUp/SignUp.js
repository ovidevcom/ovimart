import React, { Component } from 'react'
import "../../Account.scss"
export default class SignUp extends Component {
    state = {
        email: "",
        newPassword: "",
        confirmPassword: "",
        errors: {
            email: "",
            newPassword: "",
            confirmPassword: "",
        }
    }
    handleEmailChange = (event) => {
        this.setState({
            email: event.target.value,
            errors: {
                email: this.isEmailValid(event.target.value),
                newPassword: this.state.errors.newPassword,
                confirmPassword: this.state.errors.confirmPassword
            }
        })
    }
    handleNewPasswordChange = (event) => {
        this.setState({
            newPassword: event.target.value,
            errors: {
                email: this.errors.state.email,
                newPassword: this.isPasswordValid(event.target.value),
                confirmPassword: this.state.errors.confirmPassword,
            }
        })
    }
    handleConfirmPasswordChange = (event) => {
        this.setState({
            confirmPassword: event.target.value,
            errors: {
                email: this.errors.state.email,
                newPassword: this.state.errors.newPassword,
                confirmPassword: this.isConfirmPasswordValid(event.target.value),
            }
        })
    }
    isEmailValid = (str) => {
        if (str.length == 0) return "You can't leave this empty.";
        return (/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(str)) ? "" : "This email is invalid.";
    }
    isPasswordValid = (str) => {
        if (str.length == 0) return "You can't leave this empty.";
        return /(?=.*\d)(?=.*[a-zA-Z]).{8,}/.test(str) ? "" : "This password is invalid.";
    }
    isConfirmPasswordValid = (str) => {
        if (str.length == 0) return "You can't leave this empty.";
        if (this.state.newPassword.length == 0) return false;
        return (this.state.newPassword == str) ? "" : "The two password do not match."
    }
    checkSubmitErrorStatus = () => {
        return (this.isEmailValid(this.state.email) == "" &&
            this.isPasswordValid(this.state.newPassword) == "" &&
            this.state.currentPassword != this.state.confirmPassword == "" &&
            this.isConfirmPasswordValid(this.state.confirmPassword) == ""
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
                    <input type="password" placeholder="Password" value={this.state.newPassword} onChange={this.handleNewPasswordChange} />
                    <div className="validationErrorNote">
                        <span>
                            {this.state.errors.newPassword}
                        </span>
                    </div>
                </div>
                <div>
                    <input type="password" placeholder="Confirm password" value={this.state.confirmPassword} onChange={this.handleConfirmPasswordChange} />
                    <div className="validationErrorNote">
                        <span>
                            {this.state.errors.confirmPassword}
                        </span>
                    </div>
                </div>
                <div>
                    <div className={"Button Button_primary" + `${this.checkSubmitErrorStatus() ? " Button_is_disabled" : ""}`}>SIGN UP</div>
                </div>
                <div>
                    By submitting this form, I confirm that I have read and agree to RedMart’s
                  <a href="#">Terms of Use</a> and <a href="#">Privacy Policy.</a>
                </div>
            </div>
        )
    }
}
