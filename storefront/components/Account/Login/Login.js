import React, { Component } from 'react'
import Modal from "./Modal"
import "./Login.scss"
export default class Login extends Component {
    state = {
        displayModal: false,
    }
    showModal = () => {
        this.setState({
            displayModal: true
        })
    }
    hideModal = () => {
        this.setState({
            displayModal: false
        })
        
    }
    funcHandle = e =>{
        alert("click prevented")
    }
    render() {
        return (
            <div>
                <button onClick={this.showModal}> login</button>
                {(this.state.displayModal) &&
                    <Modal OnClickHandle={this.hideModal} CallBackHandle={this.funcHandle}>
                            
                    </Modal>
                }
            </div>
        )
    }
}
