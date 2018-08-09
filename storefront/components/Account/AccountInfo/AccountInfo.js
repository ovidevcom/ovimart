import React, { Component } from 'react'
import "./AccountInfo.scss"
import "../Account.scss"
import { log } from 'util';


export default class AccountInfo extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    onEdit: null,
    errors: {
      firstName: false,
      lastName: false,
      email: false,
      contactNumber: false,
    }
  }

  componentDidMount() {
    var ob = {
      firstName: "",
      lastName: "",
      email: "",
      contactNumber: ""
    }
    if (ob.firstName == "" &&
      ob.lastName == "" &&
      ob.email == "" &&
      ob.contactNumber == ""
    ) this.setState({ onEdit: true })
    else this.setState({ onEdit: false })
    this.setState(ob)
  }
  switchToEdit = (flag) => {
    this.setState({ onEdit: flag })
  }
  editFirstName = (event) => {
    this.setState({
      firstName: event.target.value
    })
  }
  editLastName = (event) => {
    this.setState({
      lastName: event.target.value
    }
    )
  }
  editEmail = (event) => {
    this.setState({
      email: event.target.value
    })
  }
  editcontactNumber = (event) => {
    this.setState({
      contactNumber: event.target.value
    })
  }

  nameCheck = function(str){
    return !(/[A-Za-z]/.test(str));
  }
  emailCheck = (str) => {
    return !(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(str));
  }
  contactNumberCheck = (str) => {
    return !(/(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]‌​)\s*)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)([2-9]1[02-9]‌​|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/.test(str));
  }
  validatePost = () => {
    var err = {
      firstName: this.nameCheck(this.state.firstName),
      lastName: this.nameCheck(this.state.lastName),
      email: this.emailCheck(this.state.email),
      contactNumber: this.contactNumberCheck(this.state.contactNumber)
    }
    console.log(err)
    this.setState({
      errors : err
    })
    if (err.firstName == true ||
      err.lastName == true ||
      err.email == true ||
      err.contactNumber == true
    ) {
      return false
    }
  }
  updateAccountInfo = () => {
    var x = this.validatePost()
  }


  render() {
    if (this.state.onEdit == false)
      return (
        <section>
          <div className="titles">
            <h4>Account Information</h4>
          </div>
          <div id="changeInformation" className="rightPanel form" action="">
            <div>
              <div className="Full_container">
                <div className="Half_container">
                  <label htmlFor="first_name">First Name</label>
                  <div>{this.state.firstName}</div>
                  <div className="validationErrorNote"></div>
                </div>
                <div className="Half_container">
                  <label htmlFor="last_name">Last Name</label>
                  <div>{this.state.lastName}</div>
                  <div className="validationErrorNote"></div>
                </div>
              </div>
              <div>
                <label htmlFor="email">Email address</label>
                <div>{this.state.email}</div>
                <div className="validationErrorNote"></div>
              </div>
              <div>
                <label htmlFor="contact_number">Contact Number</label>
                <div>{this.state.contactNumber}</div>
                <div className="validationErrorNote"></div>
              </div>
            </div>
            <div className="saveButton">
              <div className="Button Button_primary" onClick={this.switchToEdit.bind(this, true)}>Edit</div>
            </div>
          </div>
        </section>
      )
    else
      return (
        <section>
          <div className="titles">
            <h4>Account Information</h4>
          </div>
          <form onSubmit={this.updateAccountInfo} id="changeInformation" className="rightPanel form" action="">
            <div>
              <div className="Full_container">
                <div className="Half_container">
                  <label htmlFor="first_name">First Name</label>
                  <input type="text" name="firstName" id="first_name" onChange={this.editFirstName} value={this.state.firstName} maxLength="25" />
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
                  <input type="text" name="lastName" id="last_name" onChange={this.editLastName} value={this.state.lastName} maxLength="25" />
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
                <input type="email" name="email" id="email" onChange={this.editEmail} value={this.state.email} />
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
                <input type="text" name="contactNumber" id="contact_number" onChange={this.editcontactNumber} value={this.state.contactNumber} />
                <div className="validationErrorNote">
                  {this.state.errors.contactNumber &&
                    <span>
                      Contact Number is not valid
                  </span>
                  }
                </div>
              </div>
            </div>
            <div className="saveButton">
              <div onClick={this.updateAccountInfo} className="Button Button_primary">Save</div>
            </div>
          </form>
        </section>
      )
  }
}
