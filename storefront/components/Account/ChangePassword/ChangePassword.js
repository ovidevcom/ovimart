import React, { Component } from 'react'
import "../Account.scss"
import "./ChangePassword.scss"
export default class ChangePassword extends Component {
    state = {
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
        errors: {
            newPassword: false,
            confirmPassword: false,
        }
    }
    handleCurrentPasswordChange = (event) => {
        this.setState({
            currentPassword: event.target.value,
        })
    }
    handleNewPasswordChange = (event) => {
        this.setState({
            newPassword: event.target.value,
            errors: {
                newPassword: !this.isPasswordValid(event.target.value),
                confirmPassword: this.state.errors.confirmPassword,
            }
        })
    }
    handleConfirmPasswordChange = (event) => {
        this.setState({
            confirmPassword: event.target.value,
            errors: {
                newPassword: this.state.errors.newPassword,
                confirmPassword: !this.isConfirmPasswordValid(event.target.value),
            }
        })
    }
    isPasswordValid = (str) => {
        return /(?=.*\d)(?=.*[a-zA-Z]).{8,}/.test(str);
    }
    isConfirmPasswordValid = (str) => {
        if (this.state.newPassword.length == 0) return false;
        return (this.state.newPassword == str)
    }
    checkSubmitErrorStatus = () => {
        return (this.state.currentPassword.length != 0 &&
            this.isPasswordValid(this.state.newPassword) &&
            this.state.currentPassword != this.state.confirmPassword &&
            this.isConfirmPasswordValid(this.state.confirmPassword)
        )
    }
    render() {
        const isChangePasswordButtonEnable = this.checkSubmitErrorStatus();
        var ChangePasswordButtonClassName = "Button Button_primary";
        ChangePasswordButtonClassName += isChangePasswordButtonEnable ? "" : " Button_is_disabled";
        return (
            <section>
                <div className="titles">
                    <h4>Change password</h4>
                </div>
                <div className="rightPanel">
                    <form id="changePassword" className="ChangePassword_form_container">
                        <div className="Full_container">
                            <div className="Half_container">
                                <label htmlFor="old_password">Current Password</label>
                                <input type="password" className="Input_input" name="oldPassword" onChange={this.handleCurrentPasswordChange} value={this.state.currentPassword} placeholder="Minimum 8 characters" />
                                <div className="validationErrorNote"></div>
                            </div>
                        </div>
                        <div className=" Full_container">
                            <div className=" Half_container">
                                <label htmlFor="new_password">New Password</label>

                                <input type="password" className="Input_input" name="newPassword" onChange={this.handleNewPasswordChange} value={this.state.newPassword} placeholder="Minimum 8 characters" />
                                <div className="validationErrorNote">
                                    {this.state.errors.newPassword &&
                                        <span>password invalid</span>}
                                </div>
                            </div>
                            <div className="Half_container">
                                <label htmlFor="confirm_password">Confirm Password</label>
                                <input type="password" className="Input_input" name="confirmPassword" onChange={this.handleConfirmPasswordChange} value={this.state.confirmPassword} placeholder="Minimum 8 characters" />
                                <div className="validationErrorNote">
                                    {this.state.errors.confirmPassword &&
                                        <span>The two passwords do not match</span>
                                    }
                                </div>
                            </div>
                        </div>

                        <div></div>
                        <div className="Full_container">
                            <div className="Half_container" id="Change_Password_Button">
                                <div className={ChangePasswordButtonClassName} >Change Password</div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        )
    }
}
