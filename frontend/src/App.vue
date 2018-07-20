<template>
  <div id="app">
    <header>
      <nav>
        <ul>
          <li class="nav-item brand-logo">
            redmart
          </li>
          <li class="search-feild">
              <input type="text" placeholder="Search for a product brand" class="search-input">
              <font-awesome-icon icon="search" />
          </li>
          <li v-show="isLogin" class="nav-item">LIVE UP</li>
          <li class="nav-item">Help</li>
          <li class="nav-item">
            <font-awesome-icon icon="shopping-cart" style=""/>
            Cart
          </li>
          <li v-show="!isLogin" class="nav-item">Sign up</li>
          <li v-show="!isLogin" class="nav-item">Log in</li>
          <li v-show="isLogin" class="nav-item">Hi! {{user.name}}</li>
        </ul>
      </nav>
    </header>
    <div>
      <router-view/>
    </div>
    <div>
      Footer Here
    </div>
    
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
nav {
  position: fixed;
  background-color: #eb2c4c;
  width: 100%;
  height: 45px;
  color: white;
  font-size: 15px;
  line-height: 45px;
}
ul {
  width: 75%;
  margin: 0 auto;
  list-style: none;
  display: flex;
  background-color: #eb2c4c;
  justify-content: space-between;
  text-align: center;
  align-items: center;
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
  ul {
    width: 100%;
  }
  .search-feild {
  flex-shrink: 1;
  }
}
@media only screen and (max-width: 1200px) {
  ul {
    flex-wrap: wrap;
  }
  .search-feild {
    flex-shrink: 1;
    flex-basis: 100%;
  }
}
</style>
