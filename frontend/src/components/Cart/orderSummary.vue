<template>
    <div class="orderSummary_container">
        <div id="order-summary">
            <div class="showInCart">
                <div class="checkoutBtn">
                    <div class="primaryBtn">Check out</div>
                </div>
            </div>

            <div class="summaryArea">
                <div class="orderSummary">
                    <div id="subTotalArea">
                        <div class="text">Subtotal</div>
                        <div class="subTotal-price">$100.00</div>
                    </div>

                    <div id="deliveryArea">
                        <div class="deliveryOptions">
                            <div>
                                <span class="deliveryOptions-title">Delivery Options</span>
                                <div class="deliveryOptions-icon">i</div>
                            </div>
                        </div>

                        <div class="deliveryFee_container">
                            <div class="deliveryFee_selector">
                                <div>
                                    <div class="deliveryFee_selector-title">FREE Delivery with </div>
                                    <div class="deliveryFee_selector-subtext">
                                        Save $10 now and earn 5% credits on every order
                                    </div>
                                    <div class="deliveryFee_selector-find_out_more">
                                        <div class="findOutMoreBtn">Find out more</div>
                                    </div>
                                </div>
                            </div>

                            <div class="deliveryFee_selector">
                                <div>
                                    <div class="deliveryFee_selector-title">Standard Delivery</div>
                                </div>
                                <div style="deliveryFee_selector-price-free">
                                    <span class="deliveryFee_selector-price">$4.00</span> 
                                    <span class="deliveryFee_selector-free"> FREE</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="couponArea">
                        <div class="couponCode">
                            <div class="couponInputForm">
                                <div class="coupon-container">
                                    <input type="text" placeholder="Coupon code" value="">
                                    <div class="couponBtn-container">
                                        <div class="couponBtn">ENTER</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="couponTerms">

                        </div>
                    </div>

                    <div class="totalRow">

                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

.showInCart {
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

.summaryArea {
    margin-bottom: 16px;
}

.orderSummary {
    border: 1px solid #ebebeb;
    position: relative;
}

.orderSummary>div {
    clear: both;
    margin: 0 20px;
    padding: 10px 0 0;
}

.text {
     float: left;
}

.subTotal-price {
    text-align: right;
    font-weight: 700;
}

.deliveryOptions {
    position: relative;
    font-size: 13px;
    color: #999;
}

.deliveryOptions-title {
    font-weight: 600;
}

.deliveryOptions-icon {
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

.deliveryFee_selector-onclick {
    box-shadow: 0 0 8px 0 #5acad8;
    border: 1px solid #5acad8;
}

.deliveryFee_selector-title {
    font-size: 16px;
}

.deliveryFee_selector-subtext {
    margin-top: 2px;
    font-size: 13px;
}

.deliveryFee_selector-find_out_more {
    display: inline-block;
    font-size: 15px;
    margin-top: 8px;
}

.deliveryFee_selector-price {
    text-decoration: line-through;
    color: #999;
}

.deliveryFee_selector-free {
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

.coupon-container {
    display: flex;
    flex-direction: row;
}

.couponBtn-container {
    margin: 3px;
    height: auto;
    width: 60px;
    font-size: 10px;
    position: relative;
}

.couponBtn-container div{
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
</style>
