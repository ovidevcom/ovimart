import React, { Component } from 'react';
import './ProductList.scss';

import ProductRow from './ProductRow/ProductRow'
import ProductItem from '../ProductItem/ProductItem';

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [
                {
                    id: '1',
                    imgUrl: 'https://rm-goldenmedia.imgix.net/4a91f9e2a9a6680e4101a05dca62412a.jpg?auto=format',
                    title: 'Product 1',
                },
                {
                    id: '2',
                    imgUrl: 'https://rm-goldenmedia.imgix.net/669c0e577797c2471cf8d5b5730ef66e.jpg?auto=format',
                    title: 'Product 2',
                },
                {
                    id: '3',
                    imgUrl: 'https://rm-goldenmedia.imgix.net/e5e75c99fdea1633b7b8c3ae242485e4.jpg?auto=format',
                    title: 'Product 3',
                },
                {
                    id: '4',
                    imgUrl: 'https://rm-goldenmedia.imgix.net/9c4e15939d1191aa260326461d0f49c8.jpg?auto=format',
                    title: 'Product 4',
                },
                {
                    id: '5',
                    imgUrl: 'https://rm-goldenmedia.imgix.net/fe28537d3f3b809387dad2728e90ab2a.jpg?auto=format',
                    title: 'Product 5',
                },
                {
                    id: '6',
                    imgUrl: 'https://rm-goldenmedia.imgix.net/f88500b63f72d3a61fda6e7607d8bbc8.jpg?auto=format',
                    title: 'Product 6',
                },
            ]
        }
    }
    
    renderItem = () => {
        let items = [...this.state.products];
        let result = [];
        for (let i = 0; i < items.length; i += 2) {
            result.push(
                <ProductRow>
                    <ProductItem data={items[i]}/>
                    <div style={{width: 10}}/>
                    <ProductItem data={items[i + 1]}/>
                </ProductRow>
            )
        }
        return result;
    }


    render() {
        return (
            <div className="productList-container">
                <ul className="productList-wapper">
                    {this.renderItem()}
                </ul>
            </div>
        );  
    }
}

export default ProductList;
