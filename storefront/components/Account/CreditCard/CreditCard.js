import React, { Component } from 'react'
import "../../../styles/Account/CreditCard/CreditCard.scss"
import "../../../styles/Account/Account.scss"
import Validation from "../Validation"
export default class CreditCard extends Component {
    state = {
        name: "",
        cardNumber: "",
        cvv: "",
        expiry: "",
        displayAddCreditCard: false,
        errors: {
            name: "",
            cardNumber: "",
            cvv: "",
            expiry: "",
        }
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
    handleNameChange = (event) => {
        var errors = this.state.errors;
        errors.name = Validation.isNameValid(event.target.value);
        this.setState({
            name: event.target.value,
            errors: errors
        })
    }
    handleCardNumberChange = (event) => {
        var errors = this.state.errors;
        errors.cardNumber = Validation.isCardNumberValid(event.target.value);
        this.setState({
            cardNumber: event.target.value,
            errors: errors
        })
    }
    handleCvvChange = (event) => {
        var errors = this.state.errors;
        errors.cvv = Validation.isCvvValid(event.target.value);
        this.setState({
            cvv: event.target.value,
            errors: errors
        })
    }
    handleExpiryChange = (event) => {
        var errors = this.state.errors;
        errors.expiry = Validation.isDateValid(event.target.value)
        this.setState({
            expiry: event.target.value,
            errors: errors
        })
    }
    checkSubmitErrorStatus = () => {
        return (Validation.isNameValid(this.state.name)==="" && Validation.isCvvValid(this.state.cvv)==="" &&
            Validation.isDateValid(this.state.expiry)==="" && Validation.isCardNumberValid(this.state.cardNumber)==="")
    }
    render() {
        const isSaveEnable = this.checkSubmitErrorStatus();
        var SaveCreditCardClassName = "Button Button_primary";
        SaveCreditCardClassName += isSaveEnable ? "" : " Button_is_disabled";
        var AddCreditCardContainer = null;
        if (this.state.displayAddCreditCard) {
            AddCreditCardContainer =
                <div className="AddCreditCard_form_container">
                    <h4>Add New Card</h4>
                    <div className="AddCreditCard_secure_text">Secure 128-BIT SSL Encrypted Payment</div>
                    <div className="AddCreditCard_input_container">
                        <label htmlFor="holderName">NAME</label>
                        <div>
                            <input id="holderName" type="text" className="Input_input" name="holderName" onChange={this.handleNameChange} value={this.state.name} placeholder="As shown on card" />
                            <div className="validationErrorNote">
                            {this.state.errors.name}
                            </div>
                        </div>
                    </div>
                    <div className="AddCreditCard_input_container">
                        <label htmlFor="accountNumber">CARD NUMBER</label>
                        <input id="accountNumber" type="tel" className="Input_input" name="accountNumber" onChange={this.handleCardNumberChange} value={this.state.cardNumber} placeholder="Minimum 15 digits"
                            pattern="[0-9]*" />
                        <div className="validationErrorNote">
                            {this.state.errors.cardNumber}
                        </div>
                    </div>
                    <div className="AddCreditCard_cvv_exp_container Full_container">
                        <div className="AddCreditCard_input_container Half_container">
                            <label htmlFor="cvv">CVV</label>
                            <input id="cvv" type="tel" className="Input_input" name="cvv" onChange={this.handleCvvChange} value={this.state.cvv} placeholder="CVV" pattern="[0-9]*" />
                            <div className="validationErrorNote">
                            {this.state.errors.cvv}
                            </div>
                        </div>
                        <div className="AddCreditCard_input_container Half_container">
                            <label htmlFor="expiry">EXPIRY</label>
                            <input id="expiry" type="tel" className="Input_input" name="expiry" onChange={this.handleExpiryChange} value={this.state.expiry} placeholder="MM / YY"
                                pattern="[0-9/]*" />
                            <div className="validationErrorNote">
                            {this.state.errors.expiry}
                            </div>
                        </div>
                    </div>
                    <div className="AddCreditCard_buttons_container">
                        <div className="Button Button_secondary" onClick={this.closeAddCreditCard}>CANCEL</div>
                        <div id="Save_Credit_Card" className={SaveCreditCardClassName} onClick={isSaveEnable ? this.closeAddCreditCard : null}>SAVE</div>
                    </div>
                </div>
        }
        else {
            AddCreditCardContainer =
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
                    {AddCreditCardContainer}
                </div>
            </section>
        )
    }
}
