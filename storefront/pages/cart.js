import React, { Component } from 'react';
import Layout from "../components/TheLayout"
import "../styles/CustomerCart/CustomerCart.scss"
import CartList from "../components/CustomerCart/CartList/CartList"
class CustomerCart extends Component {
    render() {
        return (
            <Layout>
                <section id="layoutContainerWrapper">
                    <section className="CustomerCartView">
                        <CartList/>
                    </section>
                </section>
            </Layout>
        );
    }
}

export default CustomerCart;
