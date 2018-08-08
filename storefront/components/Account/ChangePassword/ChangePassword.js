import React, { Component } from 'react'
import "../Account.scss"
import "./ChangePassword.scss"
export default class ChangePassword extends Component {
    render() {
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
                                <input type="password" className="Input_input" name="oldPassword" value="" placeholder="Minimum 8 characters" />
                                <div className="validationErrorNote"></div>
                            </div>
                        </div>
                        <div className=" Full_container">
                            <div className=" Half_container">
                                <label htmlFor="new_password">New Password</label>

                                <input type="password" className="Input_input" name="newPassword" value="" placeholder="Minimum 8 characters" />
                                <div className="validationErrorNote"></div>
                            </div>
                            <div className="Half_container">
                                <label htmlFor="confirm_password">Confirm Password</label>
                                <input type="password" className="Input_input" name="confirmPassword" value="" placeholder="Minimum 8 characters" />
                                <div className="validationErrorNote">
                                    <div >
                                        The two passwords do not match.
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div></div>
                        <div className="Full_container">
                            <div className="Half_container" id="CHANGE_PASSWORD_BUTTON">
                                <div className="Button Button_primary" >Change Password</div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        )
    }
}
