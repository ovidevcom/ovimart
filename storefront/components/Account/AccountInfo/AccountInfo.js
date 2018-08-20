import React, { Component } from 'react'
import "../../../styles/Account/AccountInfo/AccountInfo.scss"
import "../../../styles/Account/Account.scss"
import Validation from "../Validation"
export default class AccountInfo extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    errors: {
      firstName: "",
      lastName: "",
      email: "",
      contactNumber: "",
    },
    onEdit: null
  }

  componentDidMount() {
    var dataFetched = {
      firstName: "",
      lastName: "",
      email: "",
      contactNumber: "",

    }
    var object = {
      firstName: dataFetched.firstName,
      lastName: dataFetched.lastName,
      email: dataFetched.email,
      contactNumber: dataFetched.contactNumber,
      onEdit: (dataFetched.firstName == "" && dataFetched.lastName == "" &&
        dataFetched.email == "" && dataFetched.contactNumber == "")
    }
    this.setState(object)
  }
  
  openEditMode = () => {
    this.setState({
      onEdit: true
    })
  }
  handleFirstNameChange = (event) => {
    var errors = this.state.errors;
    errors.firstName = Validation.isNameValid(event.target.value)
    this.setState({
      firstName: event.target.value,
      errors: errors  
    })
  }
  handleLastNameChange = (event) => {
    var errors = this.state.errors;
    errors.lastName = Validation.isNameValid(event.target.value)
    this.setState({
      lastName: event.target.value,
      errors: errors
    })
  }
  handleEmailChange = (event) => {
    var errors = this.state.errors;
    errors.email = Validation.isEmailValid(event.target.value)
    this.setState({
      email: event.target.value,
      errors: errors
    })
  }
  handleContactNumberChange = (event) => {
    var errors = this.state.errors;
    errors.contactNumber = Validation.isContactNumberValid(event.target.value)
    this.setState({
      contactNumber: event.target.value,
      errors: errors
    })
  }

// return TRUE if there are at lest one error
  checkSubmitErrorStatus = () => {
    return (
      Validation.isNameValid(this.state.firstName) == "" &&
      Validation.isNameValid(this.state.lastName) == "" &&
      Validation.isEmailValid(this.state.email) == "" &&
      Validation.isContactNumberValid(this.state.contactNumber) == ""
    )
  }
  updateAccountInfo = () => {
    this.setState({
      onEdit: false
    })
  }
  render() {
    //Instance Variables for validation form
    const isSaveEnabled = this.checkSubmitErrorStatus();
    var saveButtonClassName = "Button Button_primary";
    //Save button is disable when form invalid
    saveButtonClassName += isSaveEnabled ? "" : " Button_is_disabled";
    return (
      <section>
        <div className="titles">
          <h4>Account Information</h4>
        </div>
        <form id="changeInformation" className="rightPanel form" action="">
          <div>
            <div className="Full_container">
              <div className="Half_container">
                <label htmlFor="first_name">First Name</label>
                <input type="text" name="firstName" id="first_name" onChange={this.handleFirstNameChange} value={this.state.firstName} maxLength="25" disabled={!this.state.onEdit} />
                <div className="validationErrorNote">
                  {this.state.errors.firstName}
                </div>
              </div>
              <div className="Half_container">
                <label htmlFor="last_name">Last Name</label>
                <input type="text" name="lastName" id="last_name" onChange={this.handleLastNameChange} value={this.state.lastName} maxLength="25" disabled={!this.state.onEdit} />
                <div className="validationErrorNote">
                  {this.state.errors.lastName}
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="email">Email address</label>
              <input type="email" name="email" id="email" onChange={this.handleEmailChange} value={this.state.email} disabled={!this.state.onEdit} />
              <div className="validationErrorNote">
                {this.state.errors.email}
              </div>
            </div>
            <div>
              <label htmlFor="contact_number">Contact Number</label>
              <input type="text" name="contactNumber" id="contact_number" onChange={this.handleContactNumberChange} value={this.state.contactNumber} disabled={!this.state.onEdit} />
              <div className="validationErrorNote">
                {this.state.errors.contactNumber}
              </div>
            </div>
          </div>
          {this.state.onEdit ?
            <div className="saveButton">
              <div onClick={isSaveEnabled ? this.updateAccountInfo : null} className={saveButtonClassName}>SAVE</div>
            </div>
            :
            <div className="saveButton">
              <div onClick={this.openEditMode} className="Button Button_primary">EDIT</div>
            </div>}
        </form>
      </section>
    )
  }
}
