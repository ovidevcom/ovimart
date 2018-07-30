import Header from './TheHeader'
import Footer from './TheFooter'
const Layout = (props) => (
  <div>
    <Header />
    {props.children}
    <Footer />
  </div>
)

export default Layout