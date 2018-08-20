import Layout from "../components/TheLayout"
import "../styles/Account/Account.scss"
import AccountInfo from "../components/Account/AccountInfo/AccountInfo"
import CreditCard from "../components/Account/CreditCard/CreditCard"
import ChangePassword from "../components/Account/ChangePassword/ChangePassword"
import LoginAndSignUp from "../components/Account/LoginAndSignUp/LoginAndSignUp";

import React, { Component } from 'react'

export default class accountPage extends Component {
  signOut = () => {
    alert("Sign out success.")
  }
  render() {
    return (
      <Layout>
        <section id="layoutContainerWrapper">
        <LoginAndSignUp><div className="Button">Sign in</div></LoginAndSignUp>
          <section className="accountView">  
            <section className="first">
              <h2>My Account</h2>
              <nav>
                <a href="/orders">My Orders</a>
                <a href="/" className="signoutBtn" onClick={this.signOut}>Log Out</a>
              </nav>
            </section>
            <AccountInfo />
            <CreditCard />
            <ChangePassword />
          </section>
        </section>
      </Layout>
    )
  }
}
