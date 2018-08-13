import '../../styles/Card/product.scss'

const Product = (props) =>(
    <div className="product-box">
        <div className="product-element">
            <div className="product-image">
                <img src={props.url_img}/>
            </div>
            <div className=""></div>
        </div>
    </div>
)

export default Product;