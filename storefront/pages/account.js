import Layout from "../components/TheLayout"
import "../components/Account/Account.scss"
import AccountInfo from "../components/Account/AccountInfo/AccountInfo"
import CreditCard from "../components/Account/CreditCard/CreditCard"
import ChangePassword from "../components/Account/ChangePassword/ChangePassword"

export default () => (
  <Layout>
    <section id="layoutContainerWrapper">
      <section className="accountView">
        <nav>
          <a href="/orders">My Orders</a>
          <a className="signoutBtn">Log Out</a>
        </nav>
        <h2>My Account</h2>
        <AccountInfo />
        <CreditCard />
        <ChangePassword />
      </section>
    </section>
  </Layout>
)
