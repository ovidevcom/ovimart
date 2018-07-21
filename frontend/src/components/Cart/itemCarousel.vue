<template>
    <li class="productPreview">
        <div class="productImageWarapper">
            <div class="productImage">
                <router-link to="">
                    <img :src="product.imageUrl">
                </router-link>
                <div class="saleOffTag">Sale Off 100%</div>
            </div>
        </div>
        <div class="productDescriptionAndPrice">
            <div class="productDescription">
                <h4 class="name" :title="product.name">
                    {{product.name}}
                    <router-link to=""/>
                </h4>
                <div>
                    <span class="size">{{product.size}}</span>
                </div>
                <div class="rating">
                    * * * * *
                </div>
            </div>
            <div class="productPrice">
                <span class="price">{{product.price | filterPrice}}</span>
            </div>
        </div>
        <div class="controls">
            <div 
                class="addToCartBtn defaultAddToCartBtn" 
                v-show="showAddToCartBtn"
                @click="onDefaultClick">
                <span class="defaultAddToCartText">ADD TO CART</span>
            </div>
            <div class="addToCartBtn" v-show="!showAddToCartBtn">
                <span class="down" @click="decreaseQuantity">
                    <svg width="12" height="4" viewBox="0 0 12 2"><path d="M0 0h14v2H0z" fill="#FFF" fill-rule="evenodd"></path></svg>
                </span>
                <span class="quantity">{{this.product.quantity}}</span>
                <span class="up" @click="increaseQuantity">
                    <svg width="12" height="16" viewBox="0 0 12 12"><path d="M5 12V7H0V5h5V0h2v5h5v2H7v5z" fill="#FFF" fill-rule="evenodd"></path></svg>
                </span>
            </div>
        </div>
    </li>
</template>

<script>
import deliveryModal from './itemModal.vue';

export default {
    components: {
        deliveryModal,
    },
    props: {
        product: {
            type: Object,
            // default: function() {
            //     return {
            //         // name: {
            //         //     type: String,
            //         //     required: true
            //         // },
            //         // id: {
            //         //     type: String,
            //         //     required: true
            //         // },
            //         // quantity: 0,
            //         // size: {
            //         //     type: [String, Number]
            //         // },
            //         // price: {
            //         //     type: Number,
            //         //     required: true
            //         // },
            //         // imageUrl: {
            //         //     type: String
            //         // }
            //         quantity: 0
            //     }
            // }
        },
    },
    data() {
        return {
           
        }
    },
    filters: {
        filterPrice(price) {
            return ('$' + Number(price).toFixed(2));
        }
    },
    computed: {
        //Show the default AddToCart layout base on the quantity
        showAddToCartBtn() {
            return (this.product.quantity == 0);
        }
    },
    methods: {
        onDefaultClick() {
           
            this.product.quantity = 1;
            let item = {
                ...this.product,
                quantity: 1
            }
            this.$store.dispatch('ADD_ITEM_TO_CART', item);
        },
        increaseQuantity() {
            this.product.quantity++;
            this.$store.dispatch('INCREASE_ITEM_QUANTITY', this.product.id);
        },
        decreaseQuantity() {    

            if (this.product.quantity == 1) {
                this.product.quantity = 0;
                this.$store.dispatch('REMOVE_ITEM_FROM_CART', this.product.id);
            } else {
                this.product.quantity--;
                this.$store.dispatch('DECREASE_ITEM_QUANTITY', this.product.id);
            }

        }
    }
}
</script>

<style scoped>
li {
    list-style-type: none;
}

a {
    text-decoration: none;
    color: #000;
}

h4 {
    font-weight: normal;
    font-size: 18px;
    margin: 0;
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
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 0 0 10px 0;
    margin: 0 0 8px 8px;
    width: 150px;
    height: 365px;
    max-height: 365px;
    border: 1px solid transparent;
    border-radius: 4px;
}

.productPreview:hover {
    box-shadow: 0px 1px 4px #cdcdcd;
    border: 1px solid #eaeaea;
    border-radius: 4px;
}

.productImageWarapper {
    overflow: hidden;
    position: relative;
}

.productImage {
    width: 150px;
    height: 150px;
    position: relative;
}

.saleOffTag {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #5ACAD8;
    position:absolute;
    bottom: 3px;
    padding: 5px;
    margin-left: 5px; 
    border-radius: 4px;
    font-size: 13px;
    font-weight: 700;
    color: #fff; 
}

.productDescriptionAndPrice {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    align-content: flex-start;
    flex-grow: 1;
    padding: 0 10px;
}

.productDescription {
    line-height: 1.2em;
    margin: 0;
}

.name {
    cursor: pointer;
}

.size {
    font-weight: 300;
    font-size: .8em;
    color: #888;
    position: relative;
    margin-right: 2px;
}

.productPrice {
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.price {
    font-size: 17px;
    color: #333;
    font-weight: 700;
}

.controls {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 45px;
}

.addToCartBtn {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background: #ee4054;
    color: #fff;
    font-weight: 600;
    width: 100%;
    height: 100%;
    margin: 0 10px 0;
    border-radius: 4px;
    cursor: pointer;
}

.defaultAddToCartBtn:hover{
    background: #de142b;
}

.defaultAddToCartText {
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 14px;
}

.down {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    background: #ee4054;
    border-radius: 4px 0 0 4px;
}

.up {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    background: #ee4054;
    border-radius: 0 4px 4px 0;
}

.up:hover, .down:hover {
    background: #de142b;    
}

.quantity {
    margin: 0 10px 0;
}
    
</style>
