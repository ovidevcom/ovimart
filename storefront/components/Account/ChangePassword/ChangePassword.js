import React, { Component } from 'react'
import "../../../styles/Account/Account.scss"
import "../../../styles/Account/ChangePassword/ChangePassword.scss"
import Validation from "../Validation"
export default class ChangePassword extends Component {
    state = {
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
        errors: {
            currentPassword: "",
            newPassword: "",
            confirmPassword: "",
        }
    }
    handleCurrentPasswordChange = (event) => {
        var errors = this.state.errors;
        errors.currentPassword = Validation.isPasswordValid(event.target.value);
        this.setState({
            currentPassword: event.target.value,
            errors: errors
        })
    }
    handleNewPasswordChange = (event) => {
        var errors = this.state.errors;
        errors.newPassword = Validation.isPasswordValid(event.target.value),
        this.setState({
            newPassword: event.target.value,
            errors: errors
        })
    }
    handleConfirmPasswordChange = (event) => {
        var errors = this.state.errors;
        errors.confirmPassword = Validation.isConfirmPasswordValid(this.state.newPassword,event.target.value)
        this.setState({
            confirmPassword: event.target.value,
            errors: errors
        })
    }
  
    checkSubmitErrorStatus = () => {
        return (this.state.currentPassword.length != 0 &&
            Validation.isPasswordValid(this.state.newPassword)=="" &&
            this.state.currentPassword != this.state.confirmPassword &&
            Validation.isConfirmPasswordValid(this.state.newPassword,this.state.confirmPassword)==""
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
                                <div className="validationErrorNote">
                                    {this.state.errors.currentPassword}
                                </div>
                            </div>
                        </div>
                        <div className=" Full_container">
                            <div className=" Half_container">
                                <label htmlFor="new_password">New Password</label>

                                <input type="password" className="Input_input" name="newPassword" onChange={this.handleNewPasswordChange} value={this.state.newPassword} placeholder="Minimum 8 characters" />
                                <div className="validationErrorNote">
                                    {this.state.errors.newPassword}
                                </div>
                            </div>
                            <div className="Half_container">
                                <label htmlFor="confirm_password">Confirm Password</label>
                                <input type="password" className="Input_input" name="confirmPassword" onChange={this.handleConfirmPasswordChange} value={this.state.confirmPassword} placeholder="Minimum 8 characters" />
                                <div className="validationErrorNote">
                                    {this.state.errors.confirmPassword}
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
