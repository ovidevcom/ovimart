<template>
    <div class="orderSummary_container">
        <div id="order_summary">
            <div id="showInCart">
                <div class="checkoutBtn">
                    <div class="primaryBtn">Check out</div>
                </div>
            </div>

            <div id="summaryArea">
                <div class="orderSummary">
                    <div id="subTotalArea">
                        <div class="text">Subtotal</div>
                        <div class="subTotal_price">{{ subTotalPrice | filterPrice }}</div>
                    </div>

                    <div id="deliveryArea">
                        <div class="deliveryOptions">
                            <div>
                                <span class="deliveryOptions_title">Delivery Options</span>
                                <div class="deliveryOptions_icon">i</div>
                            </div>
                        </div>

                        <div class="deliveryFee_container">
                            <div 
                                class="deliveryFee_selector"
                                @mouseover="onMouseOver"
                                @mouseout="onMouseOut">
                                <div>
                                    <div class="deliveryFee_selector_title">FREE Delivery with </div>
                                    <div class="deliveryFee_selector_subtext">
                                        Save $10 now and earn 5% credits on every order
                                    </div>
                                    <div class="deliveryFee_selector_find_out_more" v-show="findOutMore">
                                        <div class="findOutMoreBtn" @click="showModal = true">Find out more</div>
                                    </div>
                                </div>
                            </div>

                            <deliveryModal v-if="showModal" @close="showModal = false"/>

                            <div class="deliveryFee_selector">
                                <div>
                                    <div class="deliveryFee_selector_title">Standard Delivery</div>
                                </div>
                                <div style="deliveryFee_selector-price_free">
                                    <span class="deliveryFee_selector_price">$4.00</span> 
                                    <span class="deliveryFee_selector_free"> FREE</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="couponArea">
                        <div class="couponCode">
                            <div class="couponInputForm">
                                <div class="coupon_container">
                                    <input type="text" placeholder="Coupon code" value="">
                                    <div class="couponBtn_container">
                                        <div class="couponBtn">ENTER</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="couponTerms">
                            <div class="termText">
                                <strong>Terms &amp; Conditions</strong>
                                <br>
                                1. Limited to use of 1 coupon per checkout<br>
                                2. Discount is not applicable to baby formula & milk products
                            </div>
                        </div>
                    </div>

                    <div class="totalRow">
                        <div>Total</div>
                        <div class="totalPrice">$100.00</div>
                    </div>
                </div>
            </div>

            <div id="adsArea">
                <div class="ad">
                    <a href="">
                        <img class="ad-imamge" src="https://rm-goldenmedia.imgix.net/e18bb09eb46898665946a1dedbb979c0.jpg?auto=format">
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import deliveryModal from './deliveryModal.vue';

export default {
    components: {
       deliveryModal 
    },
    data() {
        return {
            findOutMore: false,
            showModal: false,
        }
    },
    filters: {
        filterPrice(price) {
            return ('$' + Number(price).toFixed(2));
        }
    },
    computed: {
        //Price without delivery fee
        subTotalPrice() {
            return this.$store.getters.getTotalPrice;
        }
    },
    methods: {
        onMouseOver() {
            this.findOutMore = true;
        },
        onMouseOut() {
            this.findOutMore = false;
        },
        showModal() {
            this.showModal = true;
        }
      }
}
</script>

<style scoped>
strong {
    font-weight: 700;
}

::placeholder { 
    color: #999;
    opacity: 1;
}

#showInCart {
    margin-top: 7px;
    margin-bottom: 11px;
}

.checkoutBtn {
    font-size: 24px;
}

.primaryBtn {
    background-color: #ee4054;
    color: #fff;
    padding: 11px 20px;
    cursor: pointer;
    text-transform: uppercase;
    text-align: center;
    font-weight: 600;
    border-radius: 4px;
}

.primaryBtn:hover {
    background-color: #de142b;
}

#summaryArea {
    margin-bottom: 16px;
}

.orderSummary {
    border: 1px solid #ebebeb;
    position: relative;
    padding: 10px;
}

.orderSummary>div {
    clear: both;
    margin: 0 10px;
}

.text {
     float: left;
}

.subTotal_price {
    text-align: right;
    font-weight: 700;
}

.deliveryOptions {
    position: relative;
    font-size: 13px;
    color: #999;
}

.deliveryOptions_title {
    font-weight: 600;
}

.deliveryOptions_icon {
    display: inline-block;
    font-size: 11px;
    padding: 0 5px 0 5px;
    background-color: #999;
    border-radius: 15px;
    margin-left: 5px;
    font-weight: 600;
    color: #eee;
    cursor: pointer;
}

.deliveryFee_container {
    display: flex;
    flex-direction: column;
    margin-top: 11px;
    margin-bottom: 13px;
    
}

.deliveryFee_selector {
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    padding: 16px 10px;
    border-radius: 4px;
    border: 1px solid #c5c5c5;
    box-shadow: none;
    background-color: #fff;
    box-sizing: border-box;
    margin-bottom: 11px;
    transition: box-shadow .1s,border .1s,height .1s;
}

.deliveryFee_selector:hover {
    box-shadow: 0 0 8px 0 #5acad8;
    border: 1px solid #5acad8;
}

.deliveryFee_selector_title {
    font-size: 16px;
}

.deliveryFee_selector_subtext {
    margin-top: 2px;
    font-size: 13px;
}

.deliveryFee_selector_find_out_more {
    display: inline-block;
    font-size: 15px;
    margin-top: 8px;
}

.deliveryFee_selector_price {
    text-decoration: line-through;
    color: #999;
}

.deliveryFee_selector_free {
    color: #80ab06;
    font-weight: 700;
}

.findOutMoreBtn {
    color: #ee4054;
    text-transform: none;
    padding: 0;
    white-space: nowrap;
    font-weight: 600;
}

.findOutMoreBtn::after {
    content: "";
    border: 2px solid #ee4054;
    display: inline-block;
    padding: 3px;
    transform: rotate(45deg);
    border-width: 2px 2px 0 0;
    margin-left: 3px;
    position: relative;
    top: 0px;
}

.couponArea {
    display: flex;
    flex-direction: column;
}

.couponInputForm {
    margin: .2em 0 .5em;
    border: 1px solid #e5e5e5;
    border-radius: 2px;
    height: 35px;
    position: relative;
    background: #fff;
    padding: 0px 0px 0px 10px;
}

.couponInputForm input {
    border: 0;
    outline: 0;
    background: transparent;
    display: block;
    height: 35px;
    padding: 0;
    width: 100%;
    margin-bottom: 0;
    font-size: 75%;
    box-shadow: none;
    line-height: normal;
    border-radius: 4px;
}

.coupon_container {
    display: flex;
    flex-direction: row;
}

.couponBtn_container {
    margin: 3px;
    height: auto;
    width: 60px;
    font-size: 10px;
    position: relative;
}

.couponBtn_container div{
    height: 100%;
    width: 100%;
}

.couponBtn {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ee4054;
    color: #fff;
    cursor: pointer;
    text-transform: uppercase;
    font-weight: 600;
    border-radius: 4px;
}

.couponBtn:hover {
    background-color: #de142b;
}

.couponTerms {
    margin-top: 12px;
    margin-bottom: 22px;
}

.termText {
    float: none;
    color: #999;
    font-weight: 400;
    font-size: .7em;
}

.totalRow {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 16px;
    margin-bottom: 16px;
    margin-top: 10px;
    font-size: 20px;
    border-top: 1px solid #ebebeb;
}

.totalPrice {
    font-weight: 700;
}

.ad {
    height: 250px;
    width: 300px;
    box-sizing: border-box;
}

.ad_image {
    will-change: opacity;
    opacity: 1!important;
    filter: none;
    transition: all .35s ease-out;
    vertical-align: bottom;
}


</style>
