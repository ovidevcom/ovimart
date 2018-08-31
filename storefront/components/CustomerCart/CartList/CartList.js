import React, { Component } from 'react';
import "../../../styles/CustomerCart/CartList/CartList.scss"
import Loader from "../../Loader/Loader"
class CartList extends Component {
    state = {
        cart: [],
        couponCode: [],
        loading: true

    }
    componentDidMount() {
        var list = [{
            id: "00000",
            name: "Cakeunit",
            title: "unhealthy",
            detail: "Sweet's syndrome is a rare skin condition. Its main signs include fever and painful skin lesions that appear mostly on your arms, neck, head and trunk.",
            price: 99.9,
            unit: "piece",
            quantity: 2,
            discount: 0.1,
            discountPercent: 50,
            promote: "not at all",
            imageUrl: "https://img.taste.com.au/decVmkuu/taste/2017/03/chocolate-meringue-layer-cake-124699-1.jpg"
        },
        {
            id: "00001",
            name: "Cake",
            title: "sweet",
            detail: "unhealth",
            price: 99.9,
            unit: "piece",
            quantity: 1,
            discount: 0.1,
            discountPercent: 50,
            promote: "not at all",
            imageUrl: "https://timeincsecure-a.akamaihd.net/rtmp_uds/474428695/201711/3955/474428695_5661309737001_5661262459001-vs.jpg"
        },
        {
            id: "00002",
            name: "Coke",
            title: "sweet",
            detail: "over salt",
            price: 9.97,
            unit: "1.5L",
            quantity: 2,
            discount: 0,
            discountPercent: 0,
            promote: "toilet washer",
            imageUrl: "https://www.colbeck.co.uk/wp-content/uploads/2017/11/021120-Coca-Cola-1.5L.jpg"
        },
        {
            id: "00003",
            name: "rice",
            title: "japanese version",
            detail: "just like others one",
            price: 74.5,
            unit: "1Kg",
            quantity: 1,
            discount: 0,
            discountPercent: 0,
            promote: "",
            imageUrl: "https://i.ytimg.com/vi/Xx7sxWI9FNI/maxresdefault.jpg"
        },
        {
            id: "00004",
            name: "secret",
            title: "your secret",
            detail: "things we all know",
            price: 0.15,
            unit: "lot of thing you don't want everbody know",
            quantity: 2,
            discount: 0,
            discountPercent: 100,
            promote: "",
            imageUrl: "https://thoughtcatalog.files.wordpress.com/2013/09/secret.jpg"
        }
        ]
        var currentCart = this.state.cart;
        list.map(item => {
            currentCart.push(item)
        })
        this.setState({
            cart: currentCart,
            loading: false
        })
    }
    handleCartItemQuantityChange = (event, id) => {
        let itemList = [...this.state.cart];
        let itemIndex = itemList.findIndex(item => {
            return item.id === id
        })
        itemList[itemIndex].quantity = parseFloat(event.target.value);
        // if (itemList[itemIndex].quantity <= 0) {
        //     this.deleteCartItem(itemIndex);
        //     return
        // }
        this.setState({
            cart: itemList
        })
    }
    handleCartItemQuantity = (itemIndex, num) => {
        let itemList = [...this.state.cart];
        itemList[itemIndex].quantity += num;
        // if (itemList[itemIndex].quantity <= 0) {
        //     this.deleteCartItem(itemIndex);
        //     return
        // }
        this.setState({
            cart: itemList
        })
    }
    deleteCartItem = (itemIndex) => {
        let itemList = [...this.state.cart];
        itemList.splice(itemIndex, 1);
        this.setState({
            cart: itemList
        })
    }
    getSubTotalPrice = () => {
        var subTotal = 0;
        this.state.cart.map(item => {
            subTotal += (item.price - item.discount) * item.quantity
        })
        return subTotal
    }
    getDeliveryFee = () => {
        return 15.98
    }
    checkCouponCode = (couponCode) => {
        return couponCode.length > 0;
    }
    addCouponCode = () => {
        var couponCodeList = this.state.couponCode;
        var code = {
            code: document.getElementById("Coupon_input").value,
            discount: 9.9
        }

        if (this.checkCouponCode(code.code)) {
            couponCodeList.push(code);
            this.setState({
                couponCode: couponCodeList,
            })
        }
    }
    getCouponCodeDiscount = () => {
        var totalCouponDiscount = 0;
        this.state.couponCode.map(code => {
            totalCouponDiscount += code.discount;
        })
        return totalCouponDiscount
    }
    render() {
        var renderCartList = (
            <ul className="CartList">
                {this.state.cart.map((item, index) => {
                    var isItemDiscount = item.discount > 0;
                    var ItemPriceClassName = `ItemPrice ${isItemDiscount && "HotPrice"}`;
                    var oldPrice = null;
                    if (isItemDiscount) oldPrice = <span className="OldPrice">${item.price}</span>

                    return <div className="CartItem" key={item.id}>
                        <img className="CartItemImg" src={item.imageUrl} alt={item.name} />
                        <div className="CartItemDetail">
                            <div className="ItemName">{item.name}</div>
                            <div className="ItemTitle">{item.title}</div>
                            <div className="ItemUnit">{item.unit}</div>
                            <div className={ItemPriceClassName}>${(item.price - item.discount).toFixed(2)} {oldPrice}</div>
                        </div>
                        <div className="CartItemQuantity">
                            <div class="fas fa-angle-up Icon"
                                onClick={() => this.handleCartItemQuantity(index, 1)}
                            ></div>
                            <input type='number' inputMode='numeric' className="ItemQuantity" value={item.quantity}
                                onChange={(event) => this.handleCartItemQuantityChange(event, item.id)} />
                            <div class={`fas fa-angle-down Icon ${(item.quantity == 1) && "Icon_disable"}`}
                                onClick={item.quantity > 1 ? () => this.handleCartItemQuantity(index, -1) : null}
                            ></div>
                        </div>
                        <div className="CartItemTotalPrice">{((item.price - item.discount) * item.quantity).toFixed(2)}</div>
                        <div class="fas fa-times Icon" onClick={() => this.deleteCartItem(index)} />
                    </div>
                })}
            </ul>)
        var subTotalPrice = this.getSubTotalPrice();
        var deliveryFee = this.getDeliveryFee();
        var total = subTotalPrice + deliveryFee - this.getCouponCodeDiscount();
        var CheckOut = (
            <div className="CheckOutPanel">
                <div id="CheckOutButton" className="Button Button_primary">CHECK OUT</div>
                <div className="Summary">
                    <div id="SubTotal">
                        <div>Subtotal</div>
                        <div >${subTotalPrice.toFixed(2)}</div>
                    </div>
                    <div id="DeliveryFee">
                        <div>Delivery fee</div>
                        <div >${deliveryFee.toFixed(2)}</div>
                    </div>
                    <div className="Coupon_container">
                        <div className="Coupon_input_container">
                            <input id="Coupon_input" type="text" placeholder="Coupon code" />
                            <div id="Coupon_Button" onClick={this.addCouponCode} className="Button Button_primary">ENTER</div>
                        </div>
                        {this.state.couponCode.length > 0 &&
                            <ul className="CouponCodeList">
                                {this.state.couponCode.map(item => {
                                    return <div>
                                        <div className="CouponCode">{item.code}</div>
                                        <div className="CouponCodeDiscount">-${item.discount}</div>
                                    </div>
                                })}
                            </ul>}
                    </div>
                    <div id="Total">
                        <div>Total</div>
                        <div >${total.toFixed(2)}</div>
                    </div>
                </div>

            </div>
        )
        return (
            <section className="CartContainer">
                {this.state.loading && <Loader />}
                <div className="title main">Cart</div>
                <div className="CartList_container">
                    {renderCartList}
                    {CheckOut}
                </div>

            </section>
        );
    }
}

export default CartList;