import React, {Component} from 'react';
import Link from 'next/link';
import {
  Alignment,
  AnchorButton,
  Classes,
  Navbar,
  NavbarGroup,
  NavbarHeading,
  NavbarDivider
} from "@blueprintjs/core";



class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }
  }
  
  renderColumnContent = (columnTitles) => {
    return (
      columnTitles.map((title, i) => {
        return(
          <Link href={`/`} key={i}>
            <a className="linkStyle">{title}</a>
          </Link>
        )
      })
    )
  }

  onSubmit(event) {
    event.preventDefault();
    alert(this.state.input);
  }

  render() {
    const data = [
      ['eShop Grocery Pickup', 'MoneyCenter', 'eShopCredit Card', 'eShop Pay', 'Weekly Ad','OtherServices'],
      ['Our Company', 'Digital Museum', 'Our Suppliers', 'Sell on eShop', 'AdvertiseWith Us', 'Careers'],
      ['eShop Labs', 'Our Ads', 'Term of Use', 'Privacy & Security', 'Calif Privacy Rights'],
      ['Help Center', 'Return', 'Product Recalls', 'Feedback', 'Contact Us', 'Store Pickup', 'Tax Exempt Program'],
      ['Electronics', 'Toys', 'Video Games', 'Home Products', 'Clothing', 'Back to School'],
    ]
    return (
      <div className="container">
        <div className="footerWrap">

            <Link href="/">
              <a className="linkStyle">Home</a>
            </Link>
            <Link href="/about">
              <a className="linkStyle">About</a>
            </Link>
          </div>

          <form 
            className="input-container"
            onSubmit={this.onSubmit.bind(this)}>
            <input
              className="email-input"
              type="text" 
              placeholder="Enter email for weekly newspaper"
              value={this.state.input}
              onChange={e => this.setState({input: e.target.value})}/>
            <button className="signUpBtn">Sign Up</button>
          </form>

          <div className="footerLinksContainer">
            <div className="footerColumn">
              <span className="footerTitle">ESHOP SERVICES</span>
              {this.renderColumnContent(data[0])}
            </div>
            <div className="footerColumn">
              <span className="footerTitle">GET TO KNOW US</span>
              {this.renderColumnContent(data[1])}
            </div>
            <div className="footerColumn">
              <span className="footerTitle">E-SHOPDIRECT</span>
              {this.renderColumnContent(data[2])}
            </div>
            <div className="footerColumn">
              <span className="footerTitle">CUSTOMER SERVICE</span>
              {this.renderColumnContent(data[3])}
            </div>
            <div className="footerColumn">
              <span className="footerTitle">IN THE SPOTLIGHT</span>
              {this.renderColumnContent(data[4])}
            </div>
          </div>
      </div>
    )
  }
}

export default Footer