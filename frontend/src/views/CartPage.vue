<template>
    <section id="layoutContainerWrapper">
        <article class="contentSection">
            <div id="content">
                <div class="sideBar">
                    <oderSummary/>
                </div>

                <section class="cart">
                    <div class="cartInner">
                        <h2>Cart</h2>
                        <div id="cartMain">
                            <div class="listContainer">
                                <item 
                                    v-for="product in $store.state.cartState.products"
                                    :key="product.id"
                                    :product="product"
                                    @emit-increaseQuantity="onEmitIncreaseQuantity"
                                    @emit-decreaseQuantity="onEmitDecreaseQuantity"
                                    @emit-removeItem="onEmitRemoveItem"/>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="cartPageRecommendation">
                    <div class="ProductCarousel">
                        <h3 class="ProductCarousel-title">
                            Here are some of our bestsellers
                        </h3>
                        <div class="carouselListWrapper">
                            <div class="carouselList">
                                <itemCarousel 
                                v-for="item in renderedCarouselItems" 
                                :key="item.id"
                                :product="item"/>  
                            </div>
                            <div class="carouselList-buttonContainer">
                                <div class="carouselList-button-left" @click="onPrevCarouselPage">
                                    <span :class="{carouselList_button_icon_left: true, carouselList_button_icon_left_passive : (carouselPage == 0)}"></span>
                                </div>
                                <div class="carouselList-button-right" @click="onNextCarouselPage">
                                    <span :class="{carouselList_button_icon_right: true, carouselList_button_icon_right_passive : (carouselPage == carouselMaxPage)}"></span>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </section>

            </div>
        </article>
    </section>
</template>

<script>
import oderSummary from '../components/Cart/orderSummary.vue';
import item from '../components/Cart/item.vue';
import itemCarousel from '../components/Cart/itemCarousel'

export default {
    components: {
       oderSummary,
       item,
       itemCarousel,
    },
    data() {
        return {
            products: [
                {
                    name: 'GIVVO Small Thai Watermelon',
                    id: '001',
                    quantity: 0,
                    size: '1 per pack',
                    imageUrl: 'https://s3-ap-southeast-1.amazonaws.com/media.redmart.com/newmedia/150x/i/m/8885003330147_0001_1490599214243.jpg',
                    price: 3.85,
                },
                {
                    name: 'Australian Broccoli',
                    id: '002',
                    quantity: 0,
                    size: '300 g',
                    imageUrl: 'https://s3-ap-southeast-1.amazonaws.com/media.redmart.com/newmedia/150x/i/m/8885003328014_0005_1520495600715.jpg',
                    price: 2.60,
                },{
                    name: 'GIVVO Old Ginger',
                    id: '003',
                    quantity: 0,
                    size: '200 g',
                    imageUrl: 'https://s3-ap-southeast-1.amazonaws.com/media.redmart.com/newmedia/150x/i/m/8888383323761_0225_1448861886869.jpg',
                    price: 0.95,
                },
                {
                    name: 'YUVVO Red Onions',
                    id: '004',
                    quantity: 0,
                    size: '1 kg',
                    imageUrl: 'https://s3-ap-southeast-1.amazonaws.com/media.redmart.com/newmedia/150x/i/m/8885003329325_0001_1518520109871.jpg',
                    price: 2.07,
                },
                {
                    name: 'Lemons',
                    id: '005',
                    size: '6 per pack',
                    quantity: 0,
                    imageUrl: 'https://s3-ap-southeast-1.amazonaws.com/media.redmart.com/newmedia/150x/i/m/IMG1569_1411027891580.JPG',
                    price: 4.05,
                },
                {
                    name: 'RedMart 10 Eggs',
                    id: '006',
                    quantity: 0,
                    size: '10 per pack',
                    imageUrl: 'https://s3-ap-southeast-1.amazonaws.com/media.redmart.com/newmedia/150x/i/m/8881304288064_0004_1503457708245.jpg',
                    price: 1.95,
                },
                {
                    name: 'YUVVO Holland Potato',
                    id: '007',
                    quantity: 0,
                    size: '800 g',
                    imageUrl: 'https://s3-ap-southeast-1.amazonaws.com/media.redmart.com/newmedia/150x/i/m/8885003329011_0008_1476354573739.jpg',
                    price: 1.25,
                },
                {
                    name: 'Premium Double Red Apples',
                    id: '008',
                    size: '4 per pack',
                    quantity: 0,
                    imageUrl: 'https://s3-ap-southeast-1.amazonaws.com/media.redmart.com/newmedia/150x/i/m/8885003331120_0001_1508819051917.jpg',
                    price: 3.45,
                },
                {
                    name: 'MARIGOLD 100% Fresh Milk - Plain',
                    id: '009',
                    quantity: 0,
                    size: '2L',
                    imageUrl: 'https://s3-ap-southeast-1.amazonaws.com/media.redmart.com/newmedia/150x/i/m/img_1526019802634.jpg',
                    price: 5.95,
                },
                {
                    name: 'Mandarins',
                    id: '010',
                    quantity: 0,
                    size: '1 kg',
                    imageUrl: 'https://s3-ap-southeast-1.amazonaws.com/media.redmart.com/newmedia/150x/i/m/8887273006579_4880_1492100271495.jpg',
                    price: 4.95,
                },
                {
                    name: 'MARIGOLD 100% Fresh Milk - Plain',
                    id: '011',
                    quantity: 0,
                    size: '2L',
                    imageUrl: 'https://s3-ap-southeast-1.amazonaws.com/media.redmart.com/newmedia/150x/i/m/img_1526019802634.jpg',
                    price: 5.95,
                },
                {
                    name: 'Mandarins',
                    id: '012',
                    quantity: 0,
                    size: '1 kg',
                    imageUrl: 'https://s3-ap-southeast-1.amazonaws.com/media.redmart.com/newmedia/150x/i/m/8887273006579_4880_1492100271495.jpg',
                    price: 4.95,
                }
            ],
            carouselPage: 0,
        }
    },
    computed: {
        renderedCarouselItems() {
            let index = this.carouselPage * 5;
            return this.products.slice(index, index + 5);
        },
        carouselMaxPage() {
            // calculate the max page of carousel
            if (this.products.length % 5 == 0)
                return ((this.products.length / 5) - 1);
            return Math.floor(this.products.length / 5)
        }
    },
    methods: {
        //The <item/> will emit the id of the product to the parent component
        //Then use this id to increase the quantity props of <itemCarousel/>
        onEmitIncreaseQuantity(id) {
            let index = this.products.map(each => each.id).indexOf(id);
            this.products[index].quantity++;
        },
        onEmitDecreaseQuantity(id) {
            let index = this.products.map(each => each.id).indexOf(id);
            this.products[index].quantity--;
        },
        onEmitRemoveItem(id){
            let index = this.products.map(each => each.id).indexOf(id);
            this.products[index].quantity = 0;
        },
        //Carousel Button
        onNextCarouselPage(){
            if (this.carouselPage != this.carouselMaxPage)
                this.carouselPage++;
        },
        onPrevCarouselPage(){
            if(this.carouselPage != 0)
                this.carouselPage--;
        }
    }
}
</script>

<style scoped>

h2 {
    position: relative;
    margin: .1em 0 0;
    font-size: 42px;
    color: #ee4054;
    text-transform: capitalize;
    font-weight: 300;
}

h3 {
    clear: both;
    text-align: left;
    position: relative;
}

#layoutContainerWrapper {
    display: flex;
    flex-direction: column;
    width: 985px;
    min-width: 985px;
    min-height: 500px;
}

.contentSection {
    min-height: 500px;
    background: #fff;
    transition: transform .5s ease-out;
    box-shadow: 0px 1px 3px #bbb;
    border-radius: 4px;
}

#content {
    min-height: 500px;
    padding: 24px;
    position: relative;
    zoom: 1;
}

#content::before {
    content: "";
    display: table;
}

.sideBar {
    float: right;
    min-width: 300px;
    width: 300px;
    margin-left: 20px;
}

/* .cart {

} */

.cartInner {
    width: 615px;
    float: left;
}

.cartInner h2 {
    text-align: left;
}

.cartPageRecommendation {
    clear: both;
}

.ProductCarousel {
    overflow: hidden;
}

.ProductCarousel-title {
    padding: 10px 0 20px;
    margin: 0;
    text-transform: uppercase;
    font-size: 13px;
    font-weight: 600;
    color: #999;
}

.listContainer {
    margin: .6em 0;
    font-size: 1em;
}

.carouselListWrapper {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0 10px 0;
}

.carouselList-buttonContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-left: 50px;
}

.carouselList-button-left {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90px;
    width: 60px;
    border: 1px solid #e3e3e3;
    border-radius: 4px 4px 0 0;
}

.carouselList-button-right {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90px;
    width: 60px;
    border: 1px solid #e3e3e3;
    border-radius: 0 0 4px 4px;
}

.carouselList-button-left:hover, .carouselList-button-right:hover {
    border: 1px solid #d1d1d1;
}

.carouselList_button_icon_left {
    border: 3px solid #444;
    display: inline-block;
    padding: 3.5px;
    transform: rotate(45deg);
    border-width: 0px 0px 3px 3px;
    position: relative;
}

.carouselList_button_icon_right {
    border: 3px solid #444;
    display: inline-block;
    padding: 3.5px;
    transform: rotate(45deg);
    border-width: 3px 3px 0px 0px;
    position: relative;
}

.carouselList_button_icon_left_passive {
    border: 3px solid #e3e3e3;
    display: inline-block;
    padding: 3.5px;
    transform: rotate(45deg);
    border-width: 0px 0px 3px 3px;
    position: relative;
}

.carouselList_button_icon_right_passive {
    border: 3px solid #e3e3e3;
    display: inline-block;
    padding: 3.5px;
    transform: rotate(45deg);
    border-width: 3px 3px 0px 0px;
    position: relative;
}

.carouselList {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    overflow: hidden;
    min-width: 800px;
    min-height: 385px;
    /* overflow-x: scroll;
    -webkit-overflow-scrolling: touch; */
}

/* Hide the scrollbar
.carouselList::-webkit-scrollbar {
  display: none;
} */



</style>
