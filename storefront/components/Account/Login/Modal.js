import React, { Component } from 'react'
import "./Modal.scss"
export default class Modal extends Component {
  render() {
    this.
    return (
      <section className="Modal-container" >
        <div>{this.props.children}</div> 
        <button id="CloseButton" onClick={this.props.OnClickHandle} className> close </button>
      </section>
    )
  }
}
