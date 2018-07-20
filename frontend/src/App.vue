<template>
  <div id="app">
    <header>
      <nav>
        <ul>
          <li class="nav-item brand-logo">
            <a href="#">redmart</a>
          </li>
          <li class="search-feild">
              <input type="text" placeholder="Search for a product brand" class="search-input">
              <a href="#"><font-awesome-icon icon="search" /></a>
          </li>
          <li v-show="isLogin" class="nav-item"><a href="#">LIVE UP</a></li>
          <li class="nav-item"><a href="#">Help</a></li>
          <li class="nav-item">
            <a href="#"><font-awesome-icon icon="shopping-cart"/>
            Cart
            </a> 
          </li>
          <li v-show="!isLogin" class="nav-item"><a href="#">Sign up</a></li>
          <li v-show="!isLogin" class="nav-item"><a href="#">Log in</a></li>
          <li v-show="isLogin" class="nav-item"><a href="#">Hi! {{user.name}}</a></li>
        </ul>
      </nav>
    </header>
    <div class="content">
      <router-view/>
    </div>
    <footer>
      <div class="footer-container-info">
        <div class="footer-about">
          <h4>About us</h4>
          <ul>
            <li><a href="#">Team</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Promotion</a></li>
            <li><a href="#">Lazada SG</a></li>
          </ul>
        </div>
        <div class="footer-contact">
          <h4>Contact us</h4>
          <ul>
            <li><a href="#">Customer Support</a></li>
            <li><a href="#">+84 xxxxxx</a></li>
          </ul>
        </div>
        <div class="footer-help">
          <h4>HElp</h4>
          <ul>
            <li><a href="#">Suggest a Product</a></li>
            <li><a href="#">Price Guarantee</a></li>
            <li><a href="#">Freshness Promise</a></li>
            <li><a href="#">Fine Print for Coupons</a></li>
            <li><a href="#">Security & Privacy Policy</a></li>
            <li><a href="#">Terms of Use</a></li>
          </ul>
        </div>
        <div class="footer-bussiness">
          <h4>bussiness</h4>
          <ul>
            <li><a href="#">Sell on RedMart</a></li>
            <li><a href="#">Marketing Enquiries</a></li>
            <li><a href="#"> Press & Media</a></li>
            <li><a href="#">Partner Portal</a></li>
          </ul>
        </div>
        <div class="footer-app">
          <h4>get the app</h4>
          <ul>
            <li><a href="#">Android</a></li>
            <li><a href="#">IOS</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-container-payment">
        <div class="delivery">
          <img src="./assets/img/Delivery-512.png">
          <p>At RedMart we have our very own fleet of delivery vans. Your order will be packed with care at our warehouse and delivered right to your door by our friendly RedMart team.</p>
        </div>
        <div class="payment">
          <img src="./assets/img/Visa_Logo.png">
          <img src="./assets/img/Mastercard-logo.png">
          <img src="./assets/img/Paypal_logo.png">
          <img src="./assets/img/AMR_EX.png">
        </div>
      </div>
      <div class="footer-copyright">
        <div class="social">
          <a href="#"><img src="./assets/img/fb.png"></a>
          <a href="#"><img src="./assets/img/twitter.png"></a>
        </div>
        <div class="copyright">
          <p>Copyright © REDMART LIMITED. All Rights Reserved</p>
        </div>
      </div>
    </footer>
    
  </div>
</template>

<script>
  export default {
    name: 'app',
    data: function(){  
      return {
         isLogin: false,
         user: {
           name: 'Thanh Binh'
         }
      }
    }
  }
</script>>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background-color: #d8dedf;
}
nav {
  position: fixed;
  background-color: #eb2c4c;
  width: 100%;
  height: 45px;
  font-size: 15px;
  line-height: 45px;
  top: 0;
  left: 0;
}
nav ul {
  width: 75%;
  margin: 0 auto;
  list-style: none;
  display: flex;
  background-color: #eb2c4c;
  justify-content: space-between;
  text-align: center;
  align-items: center;
}
nav a {
  text-decoration: none;
  color: white;
}
.brand-logo {
  text-transform: uppercase;
  font-size: 2em;
}
.nav-item {
  flex-grow: 1;
  width: fit-content;
  border-right: 1px solid #e10026;
  flex-shrink: 1;
}
.nav-item:hover {
  background-color: #e10026;
}
.search-input {
  width: 90%;
  height: 30px;
  border: none;
  border-radius: 30px;
  padding: 1px 2%;
  outline: none;
}
.search-feild {
  flex-grow: 6;
  flex-basis: 770px;
  position: relative;
  flex-shrink: 0;
}
.search-feild .svg-inline--fa {
  position: absolute;
  right: 7%;
  top: 30%;
  color: #adadad;
}
.search-feild .svg-inline--fa:hover {
  color: #eb2c4c;
}
@media only screen and (max-width: 1520px) {
  nav ul,.footer-container-info,.footer-container-payment,.footer-container-copyright {
    width: 100%;
  }
  
  .search-feild {
  flex-shrink: 1;
  }
}
@media only screen and (max-width: 1200px) {
  nav ul,.footer-container-info {
    flex-wrap: wrap;
  }

  .footer-container-payment,.delivery {
    flex-direction: column;
  }
  .footer-container-info ul {
    flex-basis: 100%;
  }
  .search-feild {
    flex-shrink: 1;
    flex-basis: 100%;
  }
}
.content {
  width: 75%;
  min-height: 800px;
  background-color: white;
  margin: 45px auto 30px auto;
}
.footer-container-info {
  width: 50%;
  margin: 0 auto;
  display: flex;
  padding: 40px 0;
  flex-grow: 1;
  justify-content: space-around;
  color: #333;
  border-top: 1px solid #adadad;
  border-bottom: 1px solid #dadada;
}
.footer-container-info h4{
  text-transform: uppercase;
  font-weight: 600;
  font-size: 14px;
  line-height: 30px;
}
.footer-container-info ul{
  font-size: 14px;
  line-height: 30px;
  font-family: 'Source Sans Pro',sans-serif;
  list-style: none;
}
.footer-container-info ul li a{
  text-decoration: none;
  color: #333;
}
.footer-container-payment {
  width: 50%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.delivery, .payment {
  flex-basis: 50%;
  flex-grow: 1;
  flex-shrink: 1;
  display: flex;
  padding: 0 20px;
}
.footer-copyright {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
}
.payment {
    justify-content: space-around;
}
.delivery img {
  max-width: 85px;
  max-height: 85px;
  border-radius: 50%;
  background-color: white;
}
.delivery p {
  text-justify: newspaper;
  color: #333;
  margin-left: 20px;
}
.payment img {
  max-width: 80px;
  max-height: 30px;
}
.social {
  margin-bottom: 20px;
}
.social img {
  max-width: 40px;
  max-height: 40px;
  border-radius: 50%;
}
</style>
