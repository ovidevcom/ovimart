<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-container">
                <!-- <div class="modal-body">
                    1
                </div> -->
                <div>1</div>
                <hr>
                <div class="footer">
                    <div class="">
                        <div class="footer-title">
                            50% of LiveUp members save $20 every month
                        </div>
                        <div class="button-container">
                            <div class="skipBtn" @click="$emit('close')">SKIP</div>
                            <div class="primaryBtn">START FREE TRIAL</div>
                        </div>
                    </div>
                    
                    <div class="term">By starting your trial, you agree to LiveUp terms and conditions and to have your credit card charged by RedMart at the end of the trial.</div>
                </div>
            </div>
    </div>
  </transition>
</template>

<script>
export default {

}
</script>

<style scoped>
.modal-mask {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center; 

    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    transition: opacity .2s ease;
}

.modal-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    
    width: 90%;
    padding:  0 20px 20px 20px;
    align-self: center;
    overflow: hidden;
    background: #fff;
    margin: 40px 0;
    border-radius: 4px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .2s ease;
    font-family: 'Source Sans Pro',sans-serif;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.modal-body {
  margin: 20px 0;
}

.footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    flex-wrap: wrap;
}


.footer-title {
    display: flex;
    flex: 6;
    color: #777;
    float: left;
    font-size: 24px;
}

.button-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0;
    font-size: 15px;
    font-weight: 600;
    float: right;
}

.primaryBtn {
    background-color: #ee4054;
    color: #fff;
    padding: 10px 18px;
    cursor: pointer;
    text-transform: uppercase;
    text-align: center;
    border-radius: 4px;
    cursor: pointer;
}

.primaryBtn:hover {
    background-color: #de142b;
}

.skipBtn {
    background-color: transparent;
    color: #999;
    padding: 10px 18px;
    cursor: pointer;
    text-transform: uppercase;
    text-align: center;
    border-radius: 4px;
    margin-right: 20px;
    cursor: pointer;
}

.skipBtn:hover {
    color:  #666;
}

.term {
    width: 500px;
    font-size: 12px;
    color: #666;
    clear: both;
}

</style>
