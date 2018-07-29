import Header from './header'
import Footer from './footer'
const layoutStyle = {
  margin: 5,
  padding: 5,
}

const Layout = (props) => (
  <div style={layoutStyle}>
    <Header />
    {props.children}
    <Footer />
  </div>
)

export default Layout