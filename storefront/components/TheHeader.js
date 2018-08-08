import Link from 'next/link'
import './../styles/Header/header.scss'
const Header = () => (
    <div className="header">
      <div className="header-top">
          <div className="header-top-left">
              <div className="header-brand">
                <img src="/static/images/logo-eshop.png" width="100%"/>
              </div>
              <div className="search">
                <div className="search-flex">
                  <input placeholder="Search to Card,Product,etc..." className="input-search"/>
                  <div className="search-item">
                    <div className="search-icon">
                      <span className="bp3-icon bp3-icon-search"></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="header-account">
                  <div className="header-account-row">
                    <div className="header-account-row-center">
                      <div className="account-img">
                      <i class="far fa-user-circle" width="100%"></i>
                      </div>
                      <div className="account-text-col">
                        <div className="account-text">
                          My Account
                        </div>
                      </div>
                    </div>
                  </div>
              </div>

              <div className="header-account">
                  <div className="header-account-row">
                    <div className="header-account-row-center">
                      <div className="account-img">
                      <i class="far fa-heart"></i>
                      </div>
                      <div className="account-text-col">
                        <div className="account-text">
                          My Favorites
                        </div>
                      </div>
                    </div>
                  </div>
              </div>

              <div className="header-account">
                  <div className="header-account-row">
                    <div className="header-account-row-center">
                      <div className="account-img">
                      <i class="far fa-question-circle"></i>
                      </div>
                      <div className="account-text-col">
                        <div className="account-text">
                          Help Center
                        </div>  
                      </div>
                    </div>
                  </div>
              </div>

                <div className="header-account">
                  <div className="header-account-row">
                    <div className="header-account-row-center">
                      <div className="account-img">
                      <div className="top-card">
                        <i class="fas fa-shopping-cart"></i>
                        {/* <i class="fal fa-shopping-cart"></i> */}
                        <div className="number-card">
                          <div className="number-ab">0</div>
                        </div>
                       </div>
                      </div>
                    </div>
                  </div>
              </div>
          </div>
      </div>
      <div className="header-bottom">

      </div>
    </div>
)

export default Header