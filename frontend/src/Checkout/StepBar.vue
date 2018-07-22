<template>
        <div class="process-bar">
          <span class="actived" id="address">
            <div class="box-arrow">
              <h4>select address</h4>
              <div class="arrow-down"></div>
            </div>
            <span class="icon"><font-awesome-icon icon="map-marker-alt" />
            </span>
            <span class="bar"></span>
          </span>
          <span class = "active" id="deliver">
            <div class="box-arrow">
              <h4>select DELIVER</h4>
              <div class="arrow-down"></div>
            </div>
            <span class="active icon"><font-awesome-icon icon="truck" />
            </span>
            <span class="bar"></span>
          </span>
          <span id="payment">
            <div class="box-arrow">
              <h4>select payment</h4>
              <div class="arrow-down"></div>
            </div>
            <span class="icon"><font-awesome-icon icon="credit-card" />
            </span>
            <span class="bar"></span>
          </span>
          <span id="confirm">
            <div class="box-arrow">
              <h4>confirm</h4>
              <div class="arrow-down"></div>
            </div>
            <span class="icon"><font-awesome-icon icon="clipboard-check" />
            </span>
          </span>
        </div>
</template>
<script>
export default {
  name: 'StepBar',
  data () {
    return {
      isActive: [true,true]
    }
  },
}
</script>

<style scoped>
h4 {
    position: relative;
    margin: -25px;
    top: -28px;
    border-radius: 2px;
    padding: 8px;
    text-transform: uppercase;
    background-color: transparent;
    color: #bbb;
    font-size: .7em;
    font-weight: 700;
    text-align: center;
    text-decoration: none;
}
#deliver {
  top: -40px;
}
.process-bar {
  display: flex;
  margin: 0 auto;
  padding: 80px 20px 20px;
  position: relative;
  justify-content: center;
  flex-shrink: 1;
  flex-grow: 1;
}
.process-bar .icon {
  position: relative;
  float: left;
  width: 64px;
  height: 64px;
  background-color: #ebebeb;
  border-radius: 32px;
  text-align: center;
  line-height: 64px;
  text-align: center;
}
.process-bar .svg-inline--fa {
  font-size: 1.8em;
  color: #ffffff;
}
.process-bar .bar {
  float: left;
  position: relative;
  display: block;
  margin: 22px -1px 22px -1px;
  width: 213px;
  height: 8px;
  padding: 6px 2px 6px 4px;
  background-color: #ebebeb;
}
.process-bar .active .svg-inline--fa, .process-bar .actived .svg-inline--fa {
  color: #80ab06;
}
.process-bar .active h4, .process-bar .actived h4 {
  border: 1px solid #80ab06;
  background-color: #80ab06;
  width: 120px;
  color: white;
}
.box-arrow {
  display: flex;
  flex-direction: column;
  position: relative;
}
.process-bar .active .arrow-down,.process-bar .actived .arrow-down {
    width: 0; 
    height: 0; 
    border-left: 10px solid transparent; 
    border-bottom: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid #80ab06;
    position:absolute;
    left:20px;
    top: -24px;
  
} 
.process-bar .actived .bar {
   background-color: #80ab06;
} 

</style>