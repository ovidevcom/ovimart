import React, { Component } from 'react'
import "./CreditCard.scss"
import "../Account.scss"

export default class CreditCard extends Component {
    state = {
        displayAddCreditCard: false
    }
    openAddCreditCard = () => {
        this.setState({
            displayAddCreditCard: true,
        })
    }
    closeAddCreditCard = () => {
        this.setState({
            displayAddCreditCard: false,
        })
    }
    render() {
        var AddCreditCard = null;
        if (this.state.displayAddCreditCard) 
        {
            AddCreditCard =
                <div className="AddCreditCard_form_container">
                    <h4>Add New Card</h4>
                    <div className="AddCreditCard_secure_text">Secure 128-BIT SSL Encrypted Payment</div>
                    <div className="AddCreditCard_input_container">
                        <label htmlFor="holderName">NAME</label>
                        <div>
                            <input id="holderName" type="text" className="Input_input" name="holderName" value="" placeholder="As shown on card" />
                            <div className="validationErrorNote"></div>
                        </div>
                    </div>
                    <div className="AddCreditCard_input_container">
                        <label htmlFor="accountNumber">CARD NUMBER</label>
                        <input id="accountNumber" type="tel" className="Input_input" name="accountNumber" value="" placeholder="Minimum 15 digits"
                            pattern="[0-9]*" />
                        <div className="validationErrorNote"></div>
                    </div>  
                    <div className="AddCreditCard_cvv_exp_container Full_container">
                        <div className="AddCreditCard_input_container Half_container">
                            <label htmlFor="cvv">CVV</label>
                            <input id="cvv" type="tel" className="Input_input" name="cvv" value="" placeholder="CVV" pattern="[0-9]*" />
                            <div className="validationErrorNote"></div>
                        </div>
                        <div className="AddCreditCard_input_container Half_container">
                            <label htmlFor="expiry">EXPIRY</label>
                            <input id="expiry" type="tel" className="Input_input" name="expiry" value="" placeholder="MM / YY"
                                pattern="[0-9/]*" />
                            <div className="validationErrorNote"></div>
                        </div>
                    </div>
                    <div className="AddCreditCard_buttons_container">
                        <div className="Button Button_secondary" onClick={this.closeAddCreditCard}>CANCEL</div>
                        <div className="Button Button_primary" >SAVE</div>
                    </div>
                </div>
        }
        else {
            AddCreditCard =
                <div className="Button AddCreditCard_container" onClick={this.openAddCreditCard}>
                    <h4>ADD NEW CARD</h4>
                </div>
        }
        return (
            <section>
                <div className="titles">
                    <h4>Manage Credit Cards</h4>
                    <div className="Account_empty_card_message">There are no credit cards saved in your account. You can add new credit cards now or during checkout.</div>
                </div>
                <div className="rightPanel">
                    {AddCreditCard}
                </div>
            </section>
        )
    }
}
