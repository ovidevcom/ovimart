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
const footerWrap = {
  borderTopStyle: 'solid',
  borderRadius: 0,
  borderWidth: 1,
  borderColor: '#ccc',
  paddingTop: 20,
  paddingLeft: 10,
  paddingBottom: 20,
}
const Footer = () => (
  <div className="container">
    <div style={footerWrap}>

        <Link href="/">
          <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/about">
          <a style={linkStyle}>About</a>
        </Link>
      </div>
  </div>
)

export default Footer