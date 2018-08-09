import React, { Component } from 'react'
import "./CreditCard.scss"
import "../Account.scss"

export default class CreditCard extends Component {
    state = {
        name: "",
        cardNumber: "",
        cvv: "",
        expiry: "",
        displayAddCreditCard: false,
        errors: {
            name: false,
            cardNumber: false,
            cvv: false,
            expiry: false,
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
        this.setState({
            name: event.target.value,
            errors: {
                name: !this.isNameValid(event.target.value),
                cardNumber: this.state.errors.cardNumber,
                cvv: this.state.errors.cvv,
                expiry: this.state.errors.expiry,
            }
        })
    }
    handleCardNumberChange = (event) => {
        this.setState({
            cardNumber: event.target.value,
            errors: {
                name: this.state.errors.name,
                cardNumber: !this.isCardNumberValid(event.target.value),
                cvv: this.state.errors.cvv,
                expiry: this.state.errors.expiry,
            }
        })
    }
    handleCvvChange = (event) => {
        this.setState({
            cvv: event.target.value,
            errors: {
                name: this.state.errors.name,
                cardNumber: this.state.errors.cardNumber,
                cvv: !this.isCvvValid(event.target.value),
                expiry: this.state.errors.expiry,
            }
        })
    }
    handleExpiryChange = (event) => {
        this.setState({
            expiry: event.target.value,
            errors: {
                name: this.state.errors.name,
                cardNumber: this.state.errors.cardNumber,
                cvv: this.state.errors.cvv,
                expiry: !this.isDateValid(event.target.value),
            }
        })
    }
    isDateValid = (dateString) => {
        // First check for the pattern
        if (!(/^\d{1,2}\/\d{2}$/.test(dateString)))
            return false;
        // Parse the date parts to integers
        var parts = dateString.split("/");
        var month = parseInt(parts[0], 10);
        var year = parseInt(parts[1], 10);
        // Check the ranges of month and year
        if (year < 0 || month == 0 || month > 12)
            return false;
        return true;
    }
    isNameValid = (str) => {
        return (/^[A-Za-z]*$/.test(str))
    }
    isCardNumberValid = (str) => {
        return (/^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/.test(str))
    }
    isCvvValid = (srt) => {
        return (/^[0-9]{3,4}$/.test(srt))
    }
    checkSubmitErrorStatus = () => {
        return (this.isNameValid(this.state.name) && this.isCvvValid(this.state.cvv) &&
            this.isDateValid(this.state.expiry) && this.isCardNumberValid(this.state.cardNumber))
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
                            {this.state.errors.name&&<span>Name is not valid</span>}
                            </div>
                        </div>
                    </div>
                    <div className="AddCreditCard_input_container">
                        <label htmlFor="accountNumber">CARD NUMBER</label>
                        <input id="accountNumber" type="tel" className="Input_input" name="accountNumber" onChange={this.handleCardNumberChange} value={this.state.cardNumber} placeholder="Minimum 15 digits"
                            pattern="[0-9]*" />
                        <div className="validationErrorNote">
                            {this.state.errors.cardNumber&&<span>Card number is not valid</span>}
                        </div>
                    </div>
                    <div className="AddCreditCard_cvv_exp_container Full_container">
                        <div className="AddCreditCard_input_container Half_container">
                            <label htmlFor="cvv">CVV</label>
                            <input id="cvv" type="tel" className="Input_input" name="cvv" onChange={this.handleCvvChange} value={this.state.cvv} placeholder="CVV" pattern="[0-9]*" />
                            <div className="validationErrorNote">
                            {this.state.errors.cvv&&<span>CVV is not valid</span>}
                            </div>
                        </div>
                        <div className="AddCreditCard_input_container Half_container">
                            <label htmlFor="expiry">EXPIRY</label>
                            <input id="expiry" type="tel" className="Input_input" name="expiry" onChange={this.handleExpiryChange} value={this.state.expiry} placeholder="MM / YY"
                                pattern="[0-9/]*" />
                            <div className="validationErrorNote">
                            {this.state.errors.expiry&&<span>Expiry is not valid</span>}
                            </div>
                        </div>
                    </div>
                    <div className="AddCreditCard_buttons_container">
                        <div className="Button Button_secondary" onClick={this.closeAddCreditCard}>CANCEL</div>
                        <div id="Save_Credit_Card" className={SaveCreditCardClassName} onClick={isSaveEnable ? closeAddCreditCard : null}>SAVE</div>
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
