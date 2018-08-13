import React, { Component } from 'react'
import Modal from "./Modal"
import "./LoginAndSignUp.scss"
import "../Account.scss"
import Login from "./Login/Login"
import Signup from "./SignUp/SignUp"
export default class LoginAndSignUp extends Component {
    state = {
        displayModal: false,
        TabSelected: "Login"
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
    handleTabSelect = (event) => {
        this.setState({
            TabSelected: event.target.id
        })
    }
    funcHandle = e => {
        alert("click prevented")
    }
    render() {
        var loginTabContent = null;
        if (this.state.TabSelected == "Login") {
            loginTabContent = <Login />
        }
        else
            if (this.state.TabSelected == "Signup") {
                loginTabContent = <Signup />
            }
        const LoginContent =
            <div className="Login-Content">
                <div className="Tab-Bar">
                    <div id="Login" onClick={this.handleTabSelect} className={this.state.TabSelected == "Login" ? "selected" : ""}>Login</div>
                    <div id="Signup" onClick={this.handleTabSelect} className={this.state.TabSelected == "Signup" ? "selected" : ""}>Sign up</div>
                </div>
                {loginTabContent}
            </div>
        return (
            <div className="Login-Container">
                <div onClick={this.showModal}>{this.props.children}</div>
                {this.state.displayModal &&
                    <Modal OnClickHandle={this.hideModal} CallBackHandle={this.funcHandle}>
                        {LoginContent}
                    </Modal>
                }
            </div>
        )
    }
}
