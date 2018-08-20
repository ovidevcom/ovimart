import React, { Component } from 'react'
import "../../../styles/Account/Modal/Modal.scss"

export default class Modal extends Component {
  render() {
    return (
      <div className="Modal-container" >
        <i class="far fa-times-circle" id="CloseButton" onClick={this.props.OnClickHandle}></i>
        <div className="Faded-Background" onClick={this.props.OnClickHandle}/>
        <div className="Modal-Content">
            {this.props.children}
          </div>
      </div>
    )
  }
}
