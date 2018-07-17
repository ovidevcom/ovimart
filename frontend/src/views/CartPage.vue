<template>
    <section id="layoutContainerWrapper">
        <section id="contentWrapper">
            <article class="contentSection">
                <div id="content">
                    <div class="sideBar">
                        <oderSummary/>
                    </div>

                    <section class="cart">
                        <div class="cartInner">
                            <h2>Cart</h2>
                            <div id="cartMain">
                                Item here
                            </div>
                        </div>
                    </section>

                    <section class="cartPageRecommendation">
                        <div class="ProductCarousel">
                            <h3 class="ProductCarousel-title">
                                Here are some of our bestsellers
                            </h3>
                        </div>
                    </section>

                </div>
            </article>
        </section>
    </section>
</template>

<script>
import oderSummary from '../components/Cart/orderSummary.vue';

export default {
    components: {
       oderSummary 
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
    width: 985px;
    min-width: 985px;
    min-height: 500px;
}

#contentWrapper{
     min-height: 500px;
}

.contentSection {
    min-height: 500px;
    background: #fff;
    transition: transform .5s ease-out;
    box-shadow: 0 1px 2px #bbb;
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




</style>
