<template>
    <transition name="fade">
        <li class="productPreview">
            <div class="productInfo">
                <div class="productImageWrapper">
                    <img :src="product.imageUrl">
                    <router-link to=""/>
                </div>
                <div class="productDescription">
                    <div class="description">
                        <h4 :title="product.name">
                            <router-link to="">{{product.name}}</router-link>
                        </h4>
                        <div>
                            <span class="size">{{product.size}}</span>   
                        </div>
                    </div>
                    <div class="itemPrice">
                        <span>{{ product.price | filterPrice}}</span>
                    </div>
                </div>
                <div class="controls">
                    <div class="quantityControl">
                        <span class="quantityButtonWrapperUp" @click="increaseQuantity">
                            <span class="up"/>
                        </span>
                        <span class="counter">
                            <span>{{product.quantity}}</span>    
                        </span>
                        <span class="quantityButtonWrapperDown" @click="decreaseQuantity">
                            <span class="down"/>
                        </span>
                    </div>
                    <div class="subTotalPrice_Remove">
                        <div class="subTotalPrice">{{totalPrice | filterPrice}}</div>
                        <button class="removeBtn" @click="onRemoveButtonClick"/>
                    </div>
                </div>
            </div>
        </li>
    </transition>
</template>

<script>
export default {
    props: {
        product: {
            type: Object,
            default: function () {
                return {
                    name: {
                        type: String,
                        required: true
                    },
                    id: {
                        type: String,
                        required: true
                    },
                    quantity: {
                        type: Number,
                        default: 1
                    },
                    size: {
                        type: [String, Number]
                    },
                    price: {
                        type: Number,
                        required: true
                    },
                    imageUrl: {
                        type: String
                    }
                }
            }
        }
    },
    filters: {
        filterPrice(price) {
            return ('$' + Number(price).toFixed(2));
        }
    },
    computed: {
        totalPrice() {
            return (this.product.price * this.product.quantity)
        }
    },
    methods: {
        increaseQuantity() {
            // this.product.quantity++;  //#### This will also change the value in store, but only update on the screen after dispatch the line below ???
            this.$store.dispatch('INCREASE_ITEM_QUANTITY', this.product.id);
            this.$emit('emit-increaseQuantity', this.product.id);
        },
        decreaseQuantity() {
           if (this.product.quantity == 1) {
                this.$store.dispatch('REMOVE_ITEM_FROM_CART', this.product.id);
                this.$emit('emit-removeItem', this.product.id);
            } else {
                this.$store.dispatch('DECREASE_ITEM_QUANTITY', this.product.id);
                this.$emit('emit-decreaseQuantity', this.product.id);
            }
        },
        onRemoveButtonClick() {
            this.$store.dispatch('REMOVE_ITEM_FROM_CART', this.product.id);
            this.$emit('emit-removeItem', this.product.id);
        }
    }
}
</script>

<style scoped>
a {
    text-decoration: none;
    color: #000;
}

h4 {
    font-weight: lighter;
    font-size: 1em;
    margin: 0;
    padding: 0;
}

img {
    width: 100%;
    min-height: 100%;
}

.fade-enter-active, .fade-leave-active {
    transition: opacity .3s;
}

.fade-enter, .fade-leave-to {
    transition: .3s;
    opacity: 0;
}

.productPreview {
    display: flex;
    flex-direction: row;
    align-items: center;
    border-bottom: 1px solid #ebebeb;
    border-radius: 0;
    margin: 0;
    padding: 0 10px;
    height: 120px;
}

.productPreview:hover {
    box-shadow: 0px 1px 2px #ebebeb;
    border: 1px solid #eaeaea;
    border-radius: 4px;
}

.productInfo {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    overflow: hidden;
}

.productImageWrapper {
    overflow: hidden;
    min-width: 65px;
    width: 65px;
    height: 65px;
    left: 5px;
}

.productDescription {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: space-between;
    padding: 0 10px;
    margin-left: 10px;
}

.description {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-left: 0;
    line-height: 1.2em;
}

.size {
    font-weight: 300;
    font-size: .8em;
    color: #888;
    position: relative;
    top: 1px;
    margin-right: 2px;
}

.itemPrice {
    padding: 2px 0;
    font-weight: 700;
}

.controls {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 150px;
    justify-content: space-between;
}

.subTotalPrice_Remove {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    text-align: left;
}

.subTotalPrice {
    font-size: 21.6px;
    font-weight: 700;
    width: 60px;
    min-width: 60px;
    margin-right: 15px;
    direction: rtl;
    text-align: right;
}

.removeBtn {
    border-radius: 2px;
    padding: 10px!important;
    border: 1px solid #e5e5e5;
    vertical-align: middle;
    position: relative;
    cursor: pointer;
    background: none;
}

.removeBtn:hover {
    border: 1px solid #ee4054;
    cursor: pointer;
}

.removeBtn::after {
    position: absolute;
    content: "";
    width: 15px;
    margin: -1px -7px;
    border-top: 2px solid #aaa;
    transform: rotate(45deg);
}

.removeBtn::before {
    position: absolute;
    content: "";
    width: 15px;
    margin: -1px -7px;
    border-top: 2px solid #aaa;
    transform: rotate(-45deg);
}

.removeBtn:hover::after {
    border-top: 2px solid #ee4054;

}

.removeBtn:hover::before {
    border-top: 2px solid #ee4054;

}

.quantityControl {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.counter {
    display: inline-block;
    overflow: hidden;
    margin-top: 5px;
    margin-bottom: 5px;
}

.up {
    border: 2px solid #999;
    display: inline-block;
    padding: 3.2px;
    transform: rotate(45deg);
    border-width: 2px 0 0 2px;
    position: relative;
}

.down {
    border: 2px solid #999;
    display: inline-block;
    padding: 3.2px;
    transform: rotate(-45deg);
    border-width: 0 0 2px 2px;
    position: relative;
}

.quantityButtonWrapperUp {
    cursor: pointer;
}

.quantityButtonWrapperDown {
    cursor: pointer;
}

.quantityButtonWrapperUp:active>.up {
    top: 1px;
}

.quantityButtonWrapperDown:active>.down {
    bottom: 1px;
}

</style>
