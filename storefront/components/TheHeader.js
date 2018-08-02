import Link from 'next/link'
import {
  Alignment,
  AnchorButton,
  Classes,
  Navbar,
  NavbarGroup,
  NavbarHeading,
  NavbarDivider
} from "@blueprintjs/core";

const linkStyle = {
  marginRight: 15
}

const Header = () => (
    <div className="headerWrap">
          <div className="topMenu">
            <div className="container">  
                <span className="topBarText">CHOOSE A PRODUCT WORTH OVER $200 AND SAVE 20%.</span>
                <ul className="topSecondaryMenu">
                  <li><Link href="#"><a>Sell</a></Link></li>
                  <li><Link href="#"><a>My Account</a></Link></li>
                  <li><Link href="#"><a>Track Order</a></Link></li>
                  <li><Link href="#"><a>Log In</a></Link></li>
                </ul>
            </div>
            <div className="clearfix"/>
          </div>
          <div className="container">
            <div className="headerMain">
              <div className="row">
                <div className="col-md-2">
                    <div className="logoWrap">
                          <img src="/static/images/logo-eshop.png" className="logo" alt="e-ShopDirect logo" />
                        </div>
                </div>
                <div className="col-md-5">
                    <div className="searchBar">
                        <div className="bp3-input-group .modifier">
                          <span className="bp3-icon bp3-icon-search"></span>
                          <input className="bp3-input" type="search" placeholder="Search input" dir="auto" />
                        </div>
                    </div>
          
                </div>
                <div className="col-md-5">
                  <div className="bp3-navbar-group bp3-align-right">
                    <button className="bp3-button bp3-minimal bp3-icon-home">Home</button>
                    <button className="bp3-button bp3-minimal bp3-icon-document">Files</button>
                    <span className="bp3-navbar-divider"></span>
                    <button className="bp3-button bp3-minimal bp3-icon-user"></button>
                    <button className="bp3-button bp3-minimal bp3-icon-notifications"></button>
                    <button className="bp3-button bp3-minimal bp3-icon-cog"></button>
                  </div>
                </div>
              </div>
            </div>
        </div>
      <div className="container">
       <Navbar className={Classes.DARK}>
        <NavbarGroup align={Alignment.LEFT}>
          <NavbarHeading>ImexMart</NavbarHeading>
          <NavbarDivider />
          <AnchorButton
            href="http://blueprintjs.com/docs/v2/"
            text="Docs"
            target="_blank"
            minimal
            rightIcon="share"
          />
          <AnchorButton
            href="/about"
            text="Github"
            target="_blank"
            minimal
            rightIcon="code"
          />
        </NavbarGroup>
      </Navbar>
      </div>
        {/* <Link href="/">
          <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/about">
          <a style={linkStyle}>About</a>
        </Link> */}
    </div>
)

export default Header