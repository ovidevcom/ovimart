import React, { Component } from 'react'
import Link from 'next/link'
import Modal from "./Modal"
import "./LoginAndSignUp.scss"
import Login from "./Login/Login"
import Signup from "./SignUp/SignUp"
import "../Account.scss"
export default class LoginAndSignUp extends Component {
    state = {
        displayModal: false,
        TabSelected: "Login",
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
    isUserLogin = () => {
        return true
    }
    getUserName = () => {
        return "CocaCola"
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
        var outer = null;
        if (this.isUserLogin())
            outer =
                <Link href="/account">
                    <a>
                        <div className="Button Button_primary">
                            {`Hi! ${this.getUserName()}`}
                        </div>
                    </a>
                </Link>
        else
            outer = <div onClick={this.showModal}>{this.props.children}</div>
        return (
            <div className="Login-Container">
                {outer}
                {this.state.displayModal &&
                    <Modal OnClickHandle={this.hideModal} CallBackHandle={this.funcHandle}>
                        {LoginContent}
                    </Modal>
                }
            </div>
        )
    }
}
