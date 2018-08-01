import React, { Component } from 'react';
import Link from 'next/link'
import './ProductItem.scss';

class ProductItem extends Component {
    onButtonClick= () => {
        alert('Click');
    }
    
    render() {
        return (
            <div className="product-container">
               <div className="product-image-wrapper">
                    <Link href={`/products?id=${this.props.data.id}`}>
                        <a>
                            <img className="product-image" src={this.props.data.imgUrl} alt={this.props.data.title}></img>
                        </a>
                    </Link>
               </div>
               <div className="title-wrapper">
                    <div className="product-title">
                        {this.props.data.title}
                    </div>
                    <div>
                        <button className="deal-button" onClick={this.onButtonClick}>320+ DEALS</button>
                    </div>
                 </div>
            </div>
        );
    }
}

export default ProductItem;
