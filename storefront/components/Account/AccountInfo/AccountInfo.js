import React, { Component } from 'react'
import "./AccountInfo.scss"
import "../Account.scss"
export default class AccountInfo extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    errors: {
      firstName: false,
      lastName: false,
      email: false,
      contactNumber: false,
    },
    onEdit: null
  }

  componentDidMount() {
    var dataFetched = {
      firstName: "a",
      lastName: "a",
      email: "levanthanh.ptit@gmail.com",
      contactNumber: "84663777135",

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
    this.setState({
      firstName: event.target.value,
      errors: {
        firstName: !this.isNameValid(event.target.value),
        lastName: this.state.errors.lastName,
        email: this.state.errors.email,
        contactNumber: this.state.errors.contactNumber,
      }
    })
  }
  handleLastNameChange = (event) => {
    this.setState({
      lastName: event.target.value,
      errors: {
        firstName: this.state.errors.firstName,
        lastName: !this.isNameValid(event.target.value),
        email: this.state.errors.email,
        contactNumber: this.state.errors.contactNumber,
      }
    })
  }
  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value,
      errors: {
        firstName: this.state.errors.firstName,
        lastName: this.state.errors.lastName,
        email: !this.isEmailValid(event.target.value),
        contactNumber: this.state.errors.contactNumber,

      }
    })
  }
  handleContactNumberChange = (event) => {
    this.setState({
      contactNumber: event.target.value,
      errors: {
        firstName: this.state.errors.firstName,
        lastName: this.state.errors.lastName,
        email: this.state.errors.email,
        contactNumber: !this.isContactNumberValid(event.target.value),
      }
    })
  }
  isNameValid = (str) => {
    return (/^[A-Za-z]*$/.test(str));
  }
  isEmailValid = (str) => {
    return (/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(str));
  }
  isContactNumberValid = (str) => {
    return (/(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]‌​)\s*)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)([2-9]1[02-9]‌​|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/.test(str));
  }

// return TRUE if there are at lest one error
  checkSubmitErrorStatus = (errors) => {
    return (
      errors.firstName == false &&
      errors.lastName == false &&
      errors.email == false &&
      errors.contactNumber == false
    )
  }
  updateAccountInfo = () => {
    this.setState({
      onEdit: false
    })
  }
  render() {
    //Instance Variables for validation form
    const isSaveEnabled = this.checkSubmitErrorStatus(this.state.errors);
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
                  {this.state.errors.firstName &&
                    <span>
                      First Name is not valid
                    </span>
                  }
                </div>
              </div>
              <div className="Half_container">
                <label htmlFor="last_name">Last Name</label>
                <input type="text" name="lastName" id="last_name" onChange={this.handleLastNameChange} value={this.state.lastName} maxLength="25" disabled={!this.state.onEdit} />
                <div className="validationErrorNote">
                  {this.state.errors.lastName &&
                    <span>
                      Last Name is not valid
                    </span>
                  }
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="email">Email address</label>
              <input type="email" name="email" id="email" onChange={this.editEmailChange} value={this.state.email} disabled={!this.state.onEdit} />
              <div className="validationErrorNote">
                {this.state.errors.email &&
                  <span>
                    Email address is not valid
                  </span>
                }
              </div>
            </div>
            <div>
              <label htmlFor="contact_number">Contact Number</label>
              <input type="text" name="contactNumber" id="contact_number" onChange={this.handleContactNumberChange} value={this.state.contactNumber} disabled={!this.state.onEdit} />
              <div className="validationErrorNote">
                {this.state.errors.contactNumber &&
                  <span>
                    Contact Number is not valid
                  </span>
                }
              </div>
            </div>
          </div>
          {this.state.onEdit ?
            <div className="saveButton">
              <div onClick={isSaveEnabled?this.updateAccountInfo:null} className={saveButtonClassName}>SAVE</div>
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
