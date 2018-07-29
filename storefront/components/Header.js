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
        <div className="container">      
          <div className="topMenu">
            <ul className="topSecondaryMenu">
              <li>Good Morning</li>
              <li><Link href="#"><a>Sell</a></Link></li>
              <li><Link href="#"><a>My Account</a></Link></li>
              <li><Link href="#"><a>Track Order</a></Link></li>
              <li><Link href="#"><a>Log In</a></Link></li>
            </ul>
        </div>
        <div>
          <img src="/static/images/logo-eshop.png" className="logo" alt="e-ShopDirect logo" />
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